import { Typography } from "keep-react"
import { AvatarComponent } from "@/app/components/ui/avatar"

export const HostDetails = () => {
    return (
        <div className="py-5 pr-5">
            <div className="flex gap-8">
                <Typography variant="heading-6">Experience offered by Ava</Typography>
                <AvatarComponent />
            </div>
            <div className="flex gap-8">
                <Typography variant="body-2">3 hours</Typography>
                <Typography variant="body-2">Available in: Spanish and English</Typography>
            </div>
        </div>
    )
}