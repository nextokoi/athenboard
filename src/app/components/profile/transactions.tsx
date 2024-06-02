"use client"

import { Button, Divider } from "keep-react"
import { useState } from "react"
import { Drawer } from "../ui/drawer"
import { FaChevronRight } from "react-icons/fa6"
import { TbInvoice } from "react-icons/tb"
export default function Transactions() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const handleOpenDrawer = () => {
        setIsDrawerOpen(true)
    }

    const handleCloseDrawer = () => {
        setIsDrawerOpen(false)
    }

    return (
        <>
            <div>
                <h6 className="text-heading-6">Transactions</h6>
                <div className="flex items-center justify-between gap-3 mt-5">
                    <div className="flex items-center gap-5">
                        <div className="flex items-center gap-3">
                            <TbInvoice className="text-2xl" />
                            <p className="text-body-2 font-semibold">Invoices</p>
                        </div>
                    </div>
                    <Button className="bg-transparent hover:bg-transparent text-[#333] p-0"><FaChevronRight className="text-xl" /></Button>
                </div>
            </div>
            <Divider className="border border-slate-300 my-5" />
        </>
    )
}
