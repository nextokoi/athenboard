import { Divider, Typography } from "keep-react"
import { FaStar } from "react-icons/fa6"

export const ExperienceHeader = () => {
    return (
        <div className="py-5 flex flex-col gap-3 pr-5">
            <Typography variant="heading-5">Pottery With Ava</Typography>
            <div className="flex gap-4 font-medium">
                <div className="flex gap-2">
                    <FaStar className="text-xl text-yellow-500" />
                    <Typography variant="body-4">5 (100)</Typography>
                </div>
                <Typography variant="body-4">Teror, España</Typography>
            </div>
            <Divider />
        </div>
    )
}