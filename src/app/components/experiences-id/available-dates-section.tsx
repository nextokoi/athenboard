"use client"

import { Button, Divider } from "keep-react"

import { useState } from "react"
import { Drawer } from "../ui/drawer"
import { FaChevronLeft } from "react-icons/fa6"

export const AvailableDatesSection = ({data} : {data: any}) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(true)
    console.log(data)

    const handleOpenDrawer = () => {
        setIsDrawerOpen(true)
    }

    const handleCloseDrawer = () => {
        setIsDrawerOpen(false)
    }

    const renderDateCard = () => { 
        return(
            <>
                {Array.isArray(data.date) && data.date.map((date: string, index: number) => (
                    <div key={index} className="flex flex-col gap-3">
                        <h6 className="text-heading-6 font-medium">{date}</h6>
                        <p>{data.schedule}</p>
                    </div>
                ))}
            </>
        )
    }

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
                                <FaChevronLeft className="text-2xl"/>
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