import { Divider, Typography } from "keep-react"
import { FaStar } from "react-icons/fa6"

interface Props {
    data:{
        title: string,
        address: string
    } 
}

export const ExperienceHeader = ({ data } : Props) => {
    const { title, address } = data
    return (
        <div className="py-5 flex flex-col gap-3 pr-5">
            <Typography variant="heading-5">{title}</Typography>
            <div className="flex gap-4 font-medium">
                <div className="flex gap-2">
                    <FaStar className="text-xl text-yellow-500" />
                    <Typography variant="body-4">5 (100)</Typography>
                </div>
                <Typography variant="body-4">{address}</Typography>
            </div>
            <Divider />
        </div>
    )
}