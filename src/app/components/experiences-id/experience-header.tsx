import { Divider } from "keep-react"
import { FaStar } from "react-icons/fa6"
import { FavoriteButtonServer } from "../ui/favorite-button-server"

interface Props {
    title: string,
    address: string
    id: string
}

export const ExperienceHeader = ({ id, title, address } : Props) => {
    return (
        <div className="py-5 flex flex-col gap-3 pr-5">
            <div className="flex items-center justify-between">
                <h5 className="text-heading-5 text-balance">{title}</h5>
                <FavoriteButtonServer id={id || ''}/>
            </div>
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