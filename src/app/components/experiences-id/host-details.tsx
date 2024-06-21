import { Divider } from "antd"
import { AvatarComponent } from "@/app/components/ui/avatar"

type Props = {
    artistName: string
    image: string
    duration: number
    available_languages: string
}

export const HostDetails = ({ artistName, image, available_languages, duration } : Props) => {
    return (
        <div className="flex flex-col gap-3 py-5 pr-5">
            <div className="flex justify-between">
                <h6 className="text-balance font-medium text-heading-6 w-2/3">Experience offered by {artistName}</h6>
                <AvatarComponent image={image} />
            </div>
            <div className="flex items-center">
                <p className="text-body-2 w-1/2">{duration} hours</p>
                <p className="text-body-2">Available in: {available_languages}</p>
            </div>
            <Divider />
        </div>
    )
}