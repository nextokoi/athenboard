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

import { FaFlag } from "react-icons/fa6";
import { fetchImageUrl, fetchOneExperience, fetchOneArtist } from "@/app/utils/supabase/dataService"

interface Props{
    params: { id: string}
}

export const revalidate = 60

export default async function Details({ params }: Props) {
    const { id } = params
    try {
        const experience = await fetchOneExperience(id)
        const imageUrl = await fetchImageUrl(id)
        const artist = await fetchOneArtist(experience.artist_id)
        const artData = {
            ...experience,
            ...artist,
            imageUrl
        }
        return (
            <>
                <BreadcrumbComponent data={ experience }/>
                <CarouselComponent data={imageUrl}/>
                <main className="pl-5 pb-10">
                    <ExperienceHeader data={ experience }/>
                    <HostDetails data={ artData }/>
                    <ExperienceDescription data={ experience }/>
                    <IncludesSection />
                    <AccesibilitySection />
                    <HostBio data={artData} />
                    <LocationSection />
                    <ReviewsSection />
                    <AvailableDatesSection />
                    <CancellationPolicy />
                    <Divider />
                    <p className="text-body-2 flex items-center gap-3 font-bold pt-5"><FaFlag className="text-xl" />Report this experience</p>
                </main>
            </>
        )
    } catch (error) {
        console.log('Error getting experience details', error.message)
    }
}