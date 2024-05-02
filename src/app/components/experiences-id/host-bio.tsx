import { Divider } from "keep-react"

import { ButtonComponent } from "@/app/components/ui/button"
import { AvatarComponent } from "@/app/components/ui/avatar"

import { FaStar } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";

type Props = {
    data:{
        name: string
        biography: string
        imageUrl: string
    }
}

export const HostBio = ({data} : Props) => {
    const { name, biography, imageUrl } = data
    return (
        <div className="pr-5">
            <div className="flex flex-col gap-3 py-5">
                <div className="flex gap-8 items-center justify-between">
                    <h6 className="text-heading-6 font-medium">
                        Meet {name}, your artist
                    </h6>
                    <AvatarComponent image={imageUrl}/>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <span><FaStar className="text-2xl text-yellow-500" /></span>
                        <p className="text-body-2">100 reviews</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span><MdVerified className="text-2xl text-green-700"/></span>
                        <p className="text-body-2">Verified</p>
                    </div>
                    <p className="text-body-2 text-pretty">
                        {biography}
                    </p>
                    <ButtonComponent title="Contact with the artist" width="full" bgColor="#3B6939"/>
                </div>
            </div>
            <Divider />
        </div>
    )
}