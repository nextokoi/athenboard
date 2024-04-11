import { Divider, Typography } from "keep-react"
import { AvatarComponent } from "@/app/components/ui/avatar"

export const HostDetails = () => {
    return (
        <div className="flex flex-col gap-3 py-5 pr-5">
            <div className="flex justify-between">
                <Typography variant="heading-6" className="text-balance w-1/2 font-medium">Experience offered by Ava</Typography>
                <AvatarComponent />
            </div>
            <div className="flex items-center">
                <Typography variant="body-2" className="w-1/2">3 hours</Typography>
                <Typography variant="body-2">Available in: Spanish and English</Typography>
            </div>
            <Divider />
        </div>
    )
}