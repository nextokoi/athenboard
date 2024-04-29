'use client'

import { Button, Divider, Typography } from "keep-react"
import { useState } from "react"
import { FaSliders } from "react-icons/fa6"
import { HiXMark } from "react-icons/hi2";
import { Drawer } from "./drawer"
import { DatePickerComponent } from "./date-picker";
import { CheckboxComponent } from "./checkbox";
import { SliderComponent } from "./slider";
import { useRouter } from "next/navigation";

export const SearchFilters = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)
    const [selectedCheckbox, setSelectedCheckbox] = useState<{ filterName: string, value: string }[]>([])
    const router = useRouter()

    const handleOpenDrawer = () => {
        setIsDrawerOpen(true)
    }

    const handleCloseDrawer = () => {
        setIsDrawerOpen(false)
    }

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date)
    }

    const handleCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>, filterName: string) => {
        const value = e.target.value
        const isChecked = e.target.checked
        setSelectedCheckbox(prev => {
            if (isChecked) {
                return [...prev, { filterName, value }]
                // biome-ignore lint/style/noUselessElse: <explanation>
            } else {
                return prev.filter(item => item.filterName !== filterName || item.value !== value)
            }
        })
    }

    const handleShowResults = () => {
        setIsDrawerOpen(false)
        let queryParams = []

        if (selectedDate) {
            const formattedDate = selectedDate.toISOString().split('T')[0]
            queryParams.push(`date=${formattedDate}`)
        }

        if (selectedCheckbox) {
            const checkboxParams = selectedCheckbox.map(item => `${item.filterName}=${item.value}`)
            queryParams = queryParams.concat(checkboxParams)
        }

        const queryString = queryParams.length > 0 ? `?${queryParams.join('&')}` : ''

        const url = '/experiences' + queryString

        router.push(url)
    }

    const handleRemoveFilters = () => {
        setIsDrawerOpen(false)
        setSelectedDate(null)
        setSelectedCheckbox([])
        router.push('/experiences')
    }

    const activityType = ['Art and culture', 'Leisure', 'Food and drink', 'Sports']
    const availableLanguages = ['Spanish', 'English', 'French', 'German', 'Japanese']
    const mobility = ['No stairs or steps', 'Accessible bathroom', 'Parking for people with functional diversity', 'Flat or level ground']
    const communication = ['Detailed audible or verbal information', 'Sign language', 'Accessibility for individuals with auditory functional diversity']
    const sensoryNeeds = ['No extreme sensory', 'Quiet space for resting']
    const personalAssistants = ['Free entry for individuals assisting participants with functional diversity']

    return (
        <>
            <Button shape='circle' className='bg-transparent hover:bg-slate-200 text-[#171D1E] border border-slate-300 w-12 sm:w-10' onClick={handleOpenDrawer}>
                <FaSliders className='text-xl text-slate-600' />
            </Button>
            <Drawer isOpen={isDrawerOpen} onClose={handleCloseDrawer}>
                <div className="sticky top-0 bg-[#fdfdfd] z-10 rounded-t-xl">
                    <header className="flex justify-between items-center w-full p-4">
                        <Button shape='circle' className='bg-transparent hover:bg-slate-200 text-[#171D1E]' onClick={handleCloseDrawer}>
                            <HiXMark className='text-4xl' />
                        </Button>
                        <Typography variant="heading-4" className="flex-grow text-center">Filters</Typography>
                    </header>
                    <Divider size="md" />
                </div>
                <main>
                    <div className="flex flex-col gap-8 pt-5 px-5">
                        <Typography variant="heading-5">Choose a date</Typography>
                        <div className="w-2/3 mx-auto">
                            <DatePickerComponent onDateChange={handleDateChange} />
                        </div>
                        <Divider size="md" />
                    </div>
                    <div className="flex flex-col gap-8 pt-5 px-5">
                        <Typography variant="heading-5">Activity type</Typography>
                        <CheckboxComponent data={activityType} onCheckBoxChange={handleCheckBoxChange} selectedCheckbox={selectedCheckbox} filterName="category"/>
                        <Divider size="md" />
                    </div>
                    <div className="flex flex-col gap-8 pt-5 px-5">
                        <Typography variant="heading-5">Price range</Typography>
                        <SliderComponent />
                        <Divider size="md" />
                    </div>
                    <div className="flex flex-col gap-8 pt-5 px-5">
                        <Typography variant="heading-5">Available languages</Typography>
                        <CheckboxComponent data={availableLanguages} filterName="available_languages" onCheckBoxChange={handleCheckBoxChange} selectedCheckbox={selectedCheckbox}/>
                        <Typography variant="body-4" className="font-bold">Show all</Typography>
                        <Divider size="md" />
                    </div>
                    <div className="flex flex-col gap-8 pt-5 px-5">
                        <Typography variant="heading-5">Accesibility features</Typography>
                        <article>
                            <Typography variant="body-3" className="font-semibold mb-5">Mobility</Typography>
                            <CheckboxComponent data={mobility} filterName="mobility_features"/>
                        </article>
                        <article>
                            <Typography variant="body-3" className="font-semibold mb-5">Communication</Typography>
                            <CheckboxComponent data={communication} filterName="communication_features"/>
                        </article>
                        <article>
                            <Typography variant="body-3" className="font-semibold mb-5">Sensory needs</Typography>
                            <CheckboxComponent data={sensoryNeeds} filterName="sensory_needs"/>
                        </article>
                        <article>
                            <Typography variant="body-3" className="font-semibold mb-5">Personal assistants</Typography>
                            <CheckboxComponent data={personalAssistants} filterName="personal_assistants_features"/>
                            <Typography variant="body-4" className="text-pretty text-slate-400 mt-2 mb-10 w-10/12">Interpreters, caregivers, or other personal assistants can accompany the participants they assist without having to pay any additional fees</Typography>
                        </article>
                    </div>
                </main>
                <div className="flex justify-between items-center w-full border-y-2 p-5 sticky bottom-0 bg-[#fdfdfd] z-10">
                    <Button variant="link" color="secondary" className="font-medium" onClick={handleRemoveFilters}>Remove filters</Button>
                    <Button color="success" onClick={handleShowResults}>Show results</Button>
                </div>
            </Drawer>
        </>
    )
}