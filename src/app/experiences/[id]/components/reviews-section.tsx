import { Divider, Typography } from "keep-react"

import { ButtonComponent } from "@/app/components/ui/button"
import { HorizontalScroll } from "@/app/components/horizontal-scroll"
import { ReviewComponent } from "./reviews"

export const ReviewsSection = () => {
    return (
        <div className="flex flex-col gap-3 py-5">
            <Typography variant="heading-6" className="font-medium">⭐5(100 reviews)</Typography>
            <HorizontalScroll>
                <ReviewComponent />
                <ReviewComponent />
            </HorizontalScroll>
            <div className="pr-5">
                <ButtonComponent title="Show more reviews" width="full" bgColor="#3B6939"/>
            </div>
        </div>
    )
}