import { Divider } from "keep-react"
import { CarouselComponent } from "../../components/ui/carousel"
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
import { fetchImageUrl, fetchOneExperience, fetchOneArtist, fetchReviews, fetchScheduleDates } from "@/app/supabaseClientData"

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
const renderExperienceMainContent = (experience: any,reviews: any, imageUrl: any, artist: any, schedule_dates: any) => {
    const {
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
        <>
            <BreadcrumbComponent title={title} />
            <CarouselComponent images={imageUrl} />
            <main className="pl-5 pb-10">
                <ExperienceHeader title={title} address={address} />
                <HostDetails artistName={name} image={imageUrl} available_languages={availableLanguages} duration={duration} />
                <ExperienceDescription description={description} />
                <IncludesSection />
                <AccesibilitySection mobility_features={mobility_features} communication_features={communication_features} sensory_needs={sensory_needs} personal_assistants_features={personal_assistants_features} />
                <HostBio name={name} biography={biography} image={imageUrl} />
                <LocationSection />
                <ReviewsSection reviews={reviews} />
                <AvailableDatesSection experience={experience} image={imageUrl[0]} available_languages={availableLanguages} schedules={schedules} />
                <CancellationPolicy />
                <Divider />
                <p className="text-body-2 flex items-center gap-3 font-bold pt-5">
                    <FaFlag className="text-xl" />Report this experience
                </p>
            </main>
        </>
    )
}

export default async function Details({ params }: DetailsProps) {
    const { id } = params

    try {
        const { experience, reviews, imageUrl, artist, schedule_dates } = await fetchExperienceData(id)

        if (!experience || !reviews || !imageUrl || !artist || !schedule_dates) {
            throw new Error('Missing data for the experience')
        }

        return renderExperienceMainContent(experience, reviews, imageUrl, artist, schedule_dates)
    } catch (error) {
        return (
            <div>
                <h2>Error loading experience details</h2>
                <p>Please try again later.</p>
            </div>
        )
    }
}
