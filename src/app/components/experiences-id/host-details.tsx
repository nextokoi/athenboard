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
            <div className="flex justify-between xl:justify-start xl:gap-36">
                <h5 className="text-balance font-medium text-2xl">Experience offered by {artistName}</h5>
                <AvatarComponent image={image} />
            </div>
            <div className="flex items-center xl:justify-start xl:gap-36">
                <p className="w-1/2 xl:w-fit text-lg">{duration} hours</p>
                <p className="text-lg text-pretty">Available in: {available_languages}</p>
            </div>
            <Divider />
        </div>
    )
}