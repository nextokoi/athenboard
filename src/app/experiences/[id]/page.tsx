import { ConfigProvider, Divider } from "antd"

import { BreadcrumbComponent } from "../../components/ui/breadcrumbs"
import { ExperienceHeader } from "../../components/experiences-id/experience-header"
import { HostDetails } from "../../components/experiences-id/host-details"
import { ExperienceDescription } from "../../components/experiences-id/experience-description"
import { IncludesSection } from "../../components/experiences-id/includes-section"
import { AccesibilitySection } from "../../components/experiences-id/accesibility-section"
import { HostBio } from "../../components/experiences-id/host-bio"
import { LocationSection } from "../../components/experiences-id/location-section"
import { ReviewsSection } from "../../components/experiences-id/reviews-section"
import { AvailableDatesSection } from "../../components/experiences-id/available-dates-section"
import { CancellationPolicy } from "../../components/experiences-id/cancellation-policy"
import { FaFlag } from "react-icons/fa6"

import { DynamicCarouselComponent } from "@/app/components/ui/dynamic-carousel"
import { fetchImageUrl, fetchOneExperience, fetchOneArtist, fetchReviews, fetchScheduleDates } from "@/app/supabaseClientData"
import { createClient } from "@/app/utils/supabase/server"
import { redirect } from "next/navigation"

interface DetailsProps {
    params: { id: string }
}

export const revalidate = 60

const formatLanguages = (languages: string[]): string => {
    const formattedLanguages = languages.reduce((acc, language, index) => {
        if (index === 0) {
            return language;
            // biome-ignore lint/style/noUselessElse: <explanation>
        } else if (index === languages.length - 1) {
            return `${acc} and ${language}`;
            // biome-ignore lint/style/noUselessElse: <explanation>
        } else {
            return `${acc}, ${language}`;
        }
    }, '')

    return formattedLanguages;
}

export const fetchExperienceData = async (id: string) => {
    try {
        const experience = await fetchOneExperience(id)

        if (!experience) {
            throw new Error('Experience not found')
        }

        const [imageUrl, reviews, artist, schedule_dates] = await Promise.all([
            fetchImageUrl(id),
            fetchReviews(id),
            fetchOneArtist(experience.artist_id),
            fetchScheduleDates(id)
        ])

        if (!experience || !imageUrl || !reviews || !artist || !schedule_dates) {
            throw new Error('Incomplete data fetched')
        }

        return {
            experience,
            reviews,
            imageUrl,
            artist,
            schedule_dates
        }
    } catch (error) {
        console.error('Error fetching experience data: ', error.message)
        throw new Error('Failed to fetch experience data')
    }
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const renderExperienceMainContent = (experience: any,reviews: any, imageUrl: any, artist: any, schedule_dates: any, userAuthenticated: boolean, user: any ) => {
    const {
        id,
        title,
        description,
        address,
        duration,
        available_languages,
        mobility_features,
        communication_features,
        sensory_needs,
        personal_assistants_features
    } = experience

    const {
        name,
        biography
    } = artist

    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const schedules = schedule_dates.map((schedule: any) => {
        return {
            id: schedule.id,
            date: schedule.date,
            hour: schedule.hour
        }
    })

    const availableLanguages = formatLanguages(available_languages)

    return (
        <ConfigProvider
            theme={{
                components: {
                    Button: {
                        defaultBg: "#006876",
                        defaultBorderColor: "#006876",
                        defaultColor: "#fff",
                        defaultHoverColor: "#fff",
                        defaultHoverBg: "#007a91",
                        defaultHoverBorderColor: "#007a91",
                    }
                }
            }}
        >
            <BreadcrumbComponent title={title} />
            <DynamicCarouselComponent images={imageUrl} />
            <main className="pl-5 pb-10 md:mx-24 xl:mx-48">
                <ExperienceHeader id={id} title={title} address={address} />
                <HostDetails artistName={name} image={imageUrl} available_languages={availableLanguages} duration={duration} />
                <ExperienceDescription description={description} />
                <IncludesSection />
                <AccesibilitySection mobility_features={mobility_features} communication_features={communication_features} sensory_needs={sensory_needs} personal_assistants_features={personal_assistants_features} />
                <HostBio name={name} biography={biography} image={imageUrl} />
                <LocationSection />
                <ReviewsSection reviews={reviews} user={user} experienceId={experience.id}/>
                <AvailableDatesSection experience={experience} image={imageUrl[0]} available_languages={availableLanguages} schedules={schedules} userAuthenticated={userAuthenticated} />
                <CancellationPolicy />
                <Divider />
                <p className="text-body-2 flex items-center gap-3 font-bold pt-5">
                    <FaFlag className="text-xl" />Report this experience
                </p>
            </main>
        </ConfigProvider>
    )
}

export default async function Details({ params }: DetailsProps) {
    const { id } = params
    const supabase = createClient()

    const { data: { user } } = await supabase.auth.getUser()

    const userMetadata = user?.user_metadata

    const userAuthenticated = userMetadata !== null

    if (!userAuthenticated) redirect('/')

    try {
        const { experience, reviews, imageUrl, artist, schedule_dates } = await fetchExperienceData(id)

        if (!experience || !reviews || !imageUrl || !artist || !schedule_dates || !userAuthenticated ) { 
            throw new Error('Missing data for the experience')
        }

        return renderExperienceMainContent(experience, reviews, imageUrl, artist, schedule_dates, userAuthenticated, userMetadata )
    } catch (error) {
        return (
            <div>
                <h2>Error loading experience details</h2>
                <p>Please try again later.</p>
            </div>
        )
    }
}
