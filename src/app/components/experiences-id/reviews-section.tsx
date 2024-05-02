import { ButtonComponent } from "@/app/components/ui/button"
import { HorizontalScroll } from "@/app/components/horizontal-scroll"
import { ReviewComponent } from "./reviews"

export const ReviewsSection = () => {
    return (
        <div className="flex flex-col gap-3 py-5">
            <h6 className="text-heading-6 font-medium">⭐5(100 reviews)</h6>
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