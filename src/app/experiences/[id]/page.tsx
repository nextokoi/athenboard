/* eslint-disable @next/next/no-img-element */
import { Typography } from "keep-react"
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
import { fetchOneExperience } from "@/app/utils/supabase/dataService"

interface Props{
    params: { id: string}
}

export const revalidate = 60

export default async function Details({ params }: Props) {
    const { id } = params
    const data = await fetchOneExperience(id)
    return (
        <>
        <BreadcrumbComponent data={ data }/>
        <CarouselComponent />
        <main className="pl-5 pb-10">
            <ExperienceHeader data={ data }/>
            <HostDetails />
            <ExperienceDescription />
            <IncludesSection />
            <AccesibilitySection />
            <HostBio />
            <LocationSection />
            <ReviewsSection />
            <AvailableDatesSection />
            <CancellationPolicy />
            <Divider />
            <Typography variant="body-2" className="flex items-center gap-3 font-bold pt-5"><FaFlag className="text-xl" />Report this experience</Typography>
        </main>
    </>
    )
}