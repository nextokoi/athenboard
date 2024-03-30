/* eslint-disable @next/next/no-img-element */
import { Typography } from "keep-react"
import { Divider } from "keep-react"

import { CarouselComponent } from "../../components/ui/carousel"
import { BreadcrumbComponent } from "../../components/ui/breadcrumbs"
import { ExperienceHeader } from "./components/experience-header"
import { HostDetails } from "./components/host-details"
import { ExperienceDescription } from "./components/experience-description"
import { IncludesSection } from "./components/includes-section"
import { AccesibilitySection } from "./components/accesibility-section"
import { HostBio } from "./components/host-bio"
import { LocationSection } from "./components/location-section"
import { ReviewsSection } from "./components/reviews-section"
import { AvailableDatesSection } from "./components/available-dates-section"
import { CancellationPolicy } from "./components/cancellation-policy"

import { FaFlag } from "react-icons/fa6";
import { fetchOneExperience } from "@/app/services/dataService"

interface Props{
    params: { id: string}
}

export default async function Details({ params }: Props) {
    const { id } = params
    const data = await fetchOneExperience(id)
    const { name } = data
    return (
        <>
        <BreadcrumbComponent title={ name }/>
        <CarouselComponent />
        <main className="pl-5 pb-10">
            <ExperienceHeader title={ name }/>
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