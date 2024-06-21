"use client"

import { Button, Divider } from "antd"
import { AvatarComponent } from "@/app/components/ui/avatar"
import { FaStar } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { Drawer } from "../ui/drawer";

import { useState } from "react";
import { HiXMark } from "react-icons/hi2";

interface Props {
    name: string
    biography: string
    image: string
}

export const HostBio = ({ name, biography, image } : Props) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const handleOpenDrawer = () => {
        setIsDrawerOpen(true)
    }

    const handleCloseDrawer = () => {
        setIsDrawerOpen(false)
    }

    return (
        <div className="pr-5">
            <div className="flex flex-col gap-3 py-5">
                <div className="flex gap-8 items-center justify-between xl:justify-start xl:gap-24">
                    <h5 className="text-2xl font-medium">
                        Meet {name}, your artist
                    </h5>
                    <AvatarComponent image={image}/>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-2">
                        <span><FaStar className="text-2xl text-yellow-500" /></span>
                        <p className="text-lg">100 reviews</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span><MdVerified className="text-2xl text-green-700"/></span>
                        <p className="text-lg">Verified</p>
                    </div>
                    <p className="text-lg text-pretty xl:mr-96">
                        {biography}
                    </p>
                    <Button className="xl:w-48 mt-2" size="large" onClick={handleOpenDrawer}>Contact with the artist</Button>
                    <Drawer isOpen={isDrawerOpen} onClose={handleCloseDrawer}>
                        <div className="flex flex-col gap-10 p-5 xl:p-8">
                            <header className="flex flex-col gap-3">
                                <Button type="text" className="self-start p-1" onClick={handleCloseDrawer}>
                                    <HiXMark className='text-4xl' />
                                </Button>
                                <h4 className="text-3xl mt-10">Ask the artist</h4>
                                <h6 className="text-xl">Why do you want to get in touch with the artist?</h6>
                            </header>
                            <div className="mt-2 flex flex-col w-full gap-5 xl:items-center">
                                <Button className="xl:w-56" size="large">Request a specific date</Button>
                                <Button className="xl:w-56" size="large">Other question</Button>
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