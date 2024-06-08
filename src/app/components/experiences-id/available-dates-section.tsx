"use client"

import { Button, Divider } from "keep-react"

import { useState } from "react"
import { Drawer } from "../ui/drawer"
import { FaChevronLeft } from "react-icons/fa6"
import { DateCard } from "../cards/date-card"

interface Props {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    experience: any
    image: string
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    schedules: any
    available_languages: string
}


export const AvailableDatesSection = ({ experience, image, available_languages, schedules }: Props) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const handleOpenDrawer = () => {
        setIsDrawerOpen(true)
    }

    const handleCloseDrawer = () => {
        setIsDrawerOpen(false)
    }

    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const handleDateSelect = async (data: any) => {
        const res = await fetch('/api/checkout', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        })

        if (!res.ok) {
            console.log(res)
            return
        }

        const session = await res.json()

        window.location.href = session.url
    }

    const renderDateCard = () => {

        const sortedSchedule = schedules.sort((a: { date: string | Date }, b: { date: string | Date }) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime();
        })

        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        return sortedSchedule.map((schedule: any, index: any) => {
            const data = {
                date: schedule.date,
                hour: schedule.hour,
                image,
                availableLanguages: available_languages,
                ...experience
            }
            return (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <DateCard data={data} key={index} id={schedule.id} onSelect={handleDateSelect} />
            )
        })
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
                    <div className="px-6 pb-8">
                        <header className="flex flex-col gap-5 mb-5 sticky top-0 bg-white pt-8 pb-8">
                            <Button className="p-2 w-fit bg-transparent hover:bg-slate-100 text-[#171D1E]" onClick={handleCloseDrawer}>
                                <FaChevronLeft className="text-2xl" />
                            </Button>
                            <h5 className="text-heading-5 text-balance">Choose from the available dates</h5>
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