import { HorizontalScroll } from "@/app/components/horizontal-scroll"
import { IncludesCard } from "@/app/components/cards/includes-card"
import { BsPaintBucket } from "react-icons/bs";
import { BsTools } from "react-icons/bs";

export const IncludesSection = () => {
    return (
        <div className="py-5">
            <h6 className="text-heading-6 font-medium">What does it include</h6>
            <div>
                <HorizontalScroll>
                    <IncludesCard Icon={BsPaintBucket} title="Materials"/>
                    <IncludesCard Icon={BsTools} title="Use of equipment and tools"/>
                </HorizontalScroll>
            </div>
        </div>
    )
}