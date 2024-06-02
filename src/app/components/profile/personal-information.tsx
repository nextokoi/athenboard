"use client"

import { Button, Divider } from "keep-react"
import { useState } from "react"
import { Drawer } from "../ui/drawer"
import { FaChevronRight, FaRegCircleUser } from "react-icons/fa6"
export default function PersonalInformation() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const handleOpenDrawer = () => {
        setIsDrawerOpen(true)
    }

    const handleCloseDrawer = () => {
        setIsDrawerOpen(false)
    }

    return (
        <>
            <div className="flex items-center justify-between gap-3 mt-5">
                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-3">
                        <FaRegCircleUser className="text-2xl" />
                        <p className="text-body-2 font-semibold">Personal information</p>
                    </div>
                </div>
                <Button className="bg-transparent hover:bg-transparent text-[#333] p-0" onClick={handleOpenDrawer}><FaChevronRight className="text-xl" /></Button>
                <Drawer isOpen={isDrawerOpen} onClose={handleCloseDrawer}>
                    <div>
                        <div>
                            <h6 className="text-heading-6">Personal information</h6>
                        </div>
                    </div>
                </Drawer>
            </div>
            <Divider className="border border-slate-300 my-5" />
        </>
    )
}
