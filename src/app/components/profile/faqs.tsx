"use client"

import { Button } from "keep-react"
import { useState } from "react"
import { Drawer } from "../ui/drawer"
import { FaChevronRight, FaRegCircleQuestion } from "react-icons/fa6"
export default function FAQs() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const handleOpenDrawer = () => {
        setIsDrawerOpen(true)
    }

    const handleCloseDrawer = () => {
        setIsDrawerOpen(false)
    }

    return (
        <div className="flex items-center justify-between gap-3 mt-5">
            <div className="flex items-center gap-5">
                <div className="flex items-center gap-3">
                    <div className="flex items-center">
                        <FaRegCircleQuestion className="text-2xl" />
                    </div>
                    <p className="text-body-2 font-semibold">FAQs</p>
                </div>
            </div>
            <Button className="bg-transparent hover:bg-transparent text-[#333] p-0"><FaChevronRight className="text-xl" /></Button>
        </div>
    )
}
