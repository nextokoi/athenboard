"use client"

import { Button, Divider } from "keep-react"
import { AvatarComponent } from "@/app/components/ui/avatar"
import { FaStar } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { Drawer } from "../ui/drawer";

import { useState } from "react";
import { HiXMark } from "react-icons/hi2";

type Props = {
    data:{
        name: string
        biography: string
        imageUrl: string
    }
}

export const HostBio = ({data} : Props) => {
    const { name, biography, imageUrl } = data
    const [isDrawerOpen, setIsDrawerOpen] = useState(true)

    const handleOpenDrawer = () => {
        setIsDrawerOpen(true)
    }

    const handleCloseDrawer = () => {
        setIsDrawerOpen(false)
    }

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
                    <Button color="success" onClick={handleOpenDrawer}>Contact with the artist</Button>
                    <Drawer isOpen={isDrawerOpen} onClose={handleCloseDrawer}>
                        <div className="flex flex-col gap-3 p-5">
                            <header className="flex flex-col gap-3">
                                <Button className="bg-transparent hover:bg-slate-100 text-black w-fit p-2" onClick={handleCloseDrawer}>
                                    <HiXMark className='text-4xl' />
                                </Button>
                                <h4 className="text-heading-4">Ask the artist</h4>
                                <h6 className="text-heading-6">Why do you want to get in touch with the artist?</h6>
                            </header>
                            <div className="mt-2">
                                <Button className="w-full bg-transparent hover:bg-slate-100 text-black border border-black">Request a specific date</Button>
                                <Button className="w-full bg-transparent hover:bg-slate-100 text-black border border-black mt-5">Other question</Button>
                            </div>
                            <p className="text-pretty">If you have any questions about how experiences work, please <span className="font-bold">refer to our frequently asked questions</span>.</p>
                        </div>
                    </Drawer>
                </div>
            </div>
            <Divider />
        </div>
    )
}