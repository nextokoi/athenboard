"use client"

import { Button, Divider } from "keep-react"

import { useState } from "react"
import { Drawer } from "../ui/drawer"
import { FaChevronLeft } from "react-icons/fa6"

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const AvailableDatesSection = ({ data }: { data: any }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(true)

    const handleOpenDrawer = () => {
        setIsDrawerOpen(true)
    }

    const handleCloseDrawer = () => {
        setIsDrawerOpen(false)
    }

    const renderDateCard = () => {
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        return data.map((date: any) => {
            return (
                <div key={date.id}>
                    <div className="flex flex-col gap-3">
                        <h6 className="text-heading-6 font-medium">{date.date}</h6>
                        <p className="text-body-4">{date.hour}</p>
                    </div>
                </div>
            );
        });
    };

    return (
        <div className="pr-5">
            <Divider />
            <div className="flex flex-col gap-3 py-5">
                <h6 className="text-heading-6 font-medium">Choose from the available dates</h6>
                <Button className="w-full" color="success" onClick={handleOpenDrawer}>
                    Show more dates
                </Button>
                <Drawer isOpen={isDrawerOpen} onClose={handleCloseDrawer}>
                    <div className="p-8">
                        <header className="flex flex-col gap-5">
                            <Button className="p-2 w-fit bg-transparent hover:bg-slate-100 text-[#171D1E]" onClick={handleCloseDrawer}>
                                <FaChevronLeft className="text-2xl" />
                            </Button>
                            <h5 className="text-heading-5">Choose from the available dates</h5>
                        </header>
                        <main>
                            {renderDateCard()}
                        </main>
                    </div>
                </Drawer>
            </div>
            <Divider />
        </div>
    )
}