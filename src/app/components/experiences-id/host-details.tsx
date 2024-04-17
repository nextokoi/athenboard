import { Divider, Typography } from "keep-react"
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
                <Typography variant="heading-6" className="text-balance w-1/2 font-medium">Experience offered by {name}</Typography>
                <AvatarComponent image={imageUrl} />
            </div>
            <div className="flex items-center">
                <Typography variant="body-2" className="w-1/2">{duration} hours</Typography>
                <Typography variant="body-2">Available in: Spanish and English</Typography>
            </div>
            <Divider />
        </div>
    )
}