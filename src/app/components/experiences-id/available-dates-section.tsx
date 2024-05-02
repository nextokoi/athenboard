import { Divider } from "keep-react"

import { ButtonComponent } from "@/app/components/ui/button"

export const AvailableDatesSection = () => {
    return (
        <div className="pr-5">
            <Divider />
            <div className="flex flex-col gap-3 py-5">
                <h6 className="text-heading-6 font-medium">Choose from the available dates</h6>
                <ButtonComponent title="Show more dates" width="full" bgColor="#3B6939" />
            </div>
            <Divider />
        </div>
    )
}