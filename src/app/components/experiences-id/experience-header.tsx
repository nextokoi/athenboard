import { Divider } from "antd"
import { FaStar } from "react-icons/fa6"
import { FavoriteButtonServer } from "../ui/favorite-button-server"

interface Props {
    title: string,
    address: string
    id: string
}

export const ExperienceHeader = ({ id, title, address } : Props) => {
    return (
        <div className="pt-5 flex flex-col gap-3 pr-5">
            <div className="flex items-center justify-between">
                <h4 className="text-3xl text-balance">{title}</h4>
                <FavoriteButtonServer id={id || ''}/>
            </div>
            <div className="flex items-center gap-4 font-medium">
                <div className="flex items-center gap-2">
                    <FaStar className="text-xl text-yellow-500" />
                    <span>5 (100)</span>
                </div>
                <p>{address}</p>
            </div>
            <Divider />
        </div>
    )
}