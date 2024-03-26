import { Divider, Typography } from "keep-react"

import { ButtonComponent } from "@/app/components/ui/button"

export const AvailableDatesSection = () => {
    return (
        <div className="pr-5">
            <Divider />
            <div className="flex flex-col gap-3 py-5 pr-5">
                <Typography variant="heading-6">Choose from the available dates</Typography>
                <ButtonComponent title="Show more dates" width="full" bgColor="#3B6939" />
            </div>
            <Divider />
        </div>
    )
}