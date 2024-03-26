import { Typography } from "keep-react"

import { ButtonComponent } from "@/app/components/ui/button"
import { HorizontalScroll } from "@/app/components/horizontal-scroll"
import { ReviewComponent } from "../reviews"

export const ReviewsSection = () => {
    return (
        <div>
            <Typography variant="heading-6">⭐5(100 reviews)</Typography>
            <HorizontalScroll>
                <ReviewComponent />
                <ReviewComponent />
            </HorizontalScroll>
            <ButtonComponent title="Show more reviews" width="full" bgColor="#3B6939"/>
        </div>
    )
}