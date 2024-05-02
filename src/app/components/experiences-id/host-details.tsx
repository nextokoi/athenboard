import { Divider } from "keep-react"
import { AvatarComponent } from "@/app/components/ui/avatar"

type Props = {
    data: {
        name: string
        imageUrl: string
        duration: number
    }
}

export const HostDetails = ({ data } : Props) => {
    const { name, imageUrl, duration } = data
    return (
        <div className="flex flex-col gap-3 py-5 pr-5">
            <div className="flex justify-between">
                <h6 className="text-balance font-medium text-heading-6 w-2/3">Experience offered by {name}</h6>
                <AvatarComponent image={imageUrl} />
            </div>
            <div className="flex items-center">
                <p className="text-body-2 w-1/2">{duration} hours</p>
                <p className="text-body-2">Available in: Spanish and English</p>
            </div>
            <Divider />
        </div>
    )
}