import { Typography } from "keep-react"

import { ButtonComponent } from "@/app/components/ui/button"

export const AvailableDatesSection = () => {
    return (
        <div>
            <Typography variant="heading-6">Choose from the available dates</Typography>
            <ButtonComponent title="Show more dates" width="full" bgColor="#3B6939" />
        </div>
    )
}