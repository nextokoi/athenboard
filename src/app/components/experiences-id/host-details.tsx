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
        <div className="flex flex-col gap-3 pt-5 pr-5">
            <div className="flex justify-between">
                <h5 className="text-balance font-medium text-2xl">Experience offered by {artistName}</h5>
                <AvatarComponent image={image} />
            </div>
            <div className="flex items-center">
                <p className="w-1/2">{duration} hours</p>
                <p>Available in: {available_languages}</p>
            </div>
            <Divider />
        </div>
    )
}