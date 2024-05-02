import { Divider } from "keep-react"
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
            <h5 className="text-heading-5">{title}</h5>
            <div className="flex gap-4 font-medium">
                <div className="flex gap-2">
                    <FaStar className="text-xl text-yellow-500" />
                    <span className="text-body-5">5 (100)</span>
                </div>
                <p className="text-body-4">{address}</p>
            </div>
            <Divider />
        </div>
    )
}