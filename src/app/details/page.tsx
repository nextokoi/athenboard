/* eslint-disable @next/next/no-img-element */
import { Typography } from "keep-react"
import { Divider } from "keep-react"

import { CarouselComponent } from "../components/ui/carousel"
import { BreadcrumbComponent } from "../components/ui/breadcrumbs"
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

export default function details() {
    return(
        <main> 
            <BreadcrumbComponent />
            <CarouselComponent />
            <ExperienceHeader />
                <Divider />
            <HostDetails />
                <Divider />
            <ExperienceDescription />
                <Divider />
            <IncludesSection />
                <Divider />
            <AccesibilitySection />
                <Divider />
            <HostBio />
                <Divider />
            <LocationSection />
                <Divider />
            <ReviewsSection />
                <Divider />
            <AvailableDatesSection />
                <Divider />
            <CancellationPolicy />
                <Divider />
            <Typography variant="body-2" className="font-bold">Report this experience</Typography>
        </main>
    )
}