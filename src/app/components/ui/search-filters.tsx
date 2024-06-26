'use client'

/* import { Button, Divider } from "keep-react" */
import { Divider, Button } from "antd";
import { useState } from "react"
import { FaSliders } from "react-icons/fa6"
import { HiXMark } from "react-icons/hi2";
import { Drawer } from "./drawer"
import { DatePickerComponent } from "./date-picker";
import { CheckboxComponent } from "./checkbox";
import { SliderComponent } from "./slider";
import { useRouter } from "next/navigation";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { Typography } from 'antd';

export const SearchFilters = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
    const [selectedCheckbox, setSelectedCheckbox] = useState<{ filterName: string, value: string }[]>([])
    const [rangeValues, setRangeValues] = useState<number[]>([25, 100])
    const [sliderKey, setSliderKey] = useState<number>(0)
    const router = useRouter()

    const { Title } = Typography

    const handleOpenDrawer = () => {
        setIsDrawerOpen(true)
    }

    const handleCloseDrawer = () => {
        setIsDrawerOpen(false)
    }

    const handleCheckBoxChange = (e: CheckboxChangeEvent, filterName: string) => {
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
            // biome-ignore lint/suspicious/noExplicitAny: <explanation>
            const newDate = new Date(selectedDate as any)
            newDate.setDate(newDate.getDate() + 1)
            const formattedDate = newDate.toISOString().split('T')[0]
            queryParams.push(`date=${formattedDate}`)
        }

        if (selectedCheckbox) {
            const checkboxParams = selectedCheckbox.map(item => `${item.filterName}=${item.value}`)
            queryParams = queryParams.concat(checkboxParams)
        }

        if (rangeValues[0] !== 25 || rangeValues[1] !== 100) {
            queryParams.push(`price_min=${rangeValues[0]}`)
            queryParams.push(`price_max=${rangeValues[1]}`)
        }

        const queryString = queryParams.length > 0 ? `?${queryParams.join('&')}` : ''

        const url = `/experiences${queryString}`

        router.push(url)
    }

    const handleRemoveFilters = () => {
        router.push('/experiences')
        setSelectedDate(undefined)
        setSelectedCheckbox([])
        setRangeValues([25, 100])
        setSliderKey(prevKey => prevKey + 1)
        setIsDrawerOpen(false)
    }

    const activityType = ['Art and culture', 'Leisure', 'Food and drink', 'Sports']
    const availableLanguages = ['Spanish', 'English', 'French', 'German', 'Japanese']
    const mobility = ['No stairs or steps', 'Accessible bathroom', 'Parking for people with functional diversity', 'Flat or level ground']
    const communication = ['Detailed audible or verbal information', 'Sign language', 'Accessibility for individuals with auditory functional diversity']
    const sensoryNeeds = ['No extreme sensory', 'Quiet space for resting']
    const personalAssistants = ['Free entry for individuals assisting participants with functional diversity']

    return (
        <>

                <Button shape='circle' size='large' icon={<FaSliders className='text-xl' />} onClick={handleOpenDrawer} />
                <Drawer isOpen={isDrawerOpen} onClose={handleCloseDrawer}>
                    <div className="sticky top-0 bg-[#fdfdfd] z-10 rounded-t-xl">
                        <header className="flex justify-between items-center w-full pt-5 px-4">
                            <Button shape='circle' size="large" icon={<HiXMark className='text-3xl' />} onClick={handleCloseDrawer} />
                            <Title level={2} className="flex-grow text-center">Filters</Title>
                        </header>
                        <Divider />
                    </div>
                    <main>
                        <div className="flex flex-col gap-8 px-5">
                            <Title level={3}>Choose a date</Title>
                            <div className="w-2/3 mx-auto">
                                <DatePickerComponent onDateChange={setSelectedDate} date={selectedDate} />
                            </div>
                            <Divider />
                        </div>
                        <div className="flex flex-col gap-8 px-5">
                            <Title level={3}>Activity type</Title>
                            <CheckboxComponent data={activityType} onCheckBoxChange={handleCheckBoxChange} selectedCheckbox={selectedCheckbox} filterName="category" />
                            <Divider />
                        </div>
                        <div className="flex flex-col gap-8 px-5">
                            <Title level={3}>Price range</Title>
                            <SliderComponent key={sliderKey} rangeValues={rangeValues} onRangeValuesChange={setRangeValues} />
                            <Divider />
                        </div>
                        <div className="flex flex-col gap-8 px-5">
                            <Title level={3}>Available languages</Title>
                            <CheckboxComponent data={availableLanguages} filterName="available_languages" onCheckBoxChange={handleCheckBoxChange} selectedCheckbox={selectedCheckbox} />
                            <Divider />
                        </div>
                        <div className="flex flex-col gap-8 px-5">
                            <Title level={3}>Accesibility features</Title>
                            <article>
                                <Title level={5}>Mobility</Title>
                                <CheckboxComponent data={mobility} filterName="mobility_features" onCheckBoxChange={handleCheckBoxChange} selectedCheckbox={selectedCheckbox} />
                            </article>
                            <article>
                                <Title level={5}>Communication</Title>
                                <CheckboxComponent data={communication} filterName="communication_features" onCheckBoxChange={handleCheckBoxChange} selectedCheckbox={selectedCheckbox} />
                            </article>
                            <article>
                                <Title level={5}>Sensory needs</Title>
                                <CheckboxComponent data={sensoryNeeds} filterName="sensory_needs" onCheckBoxChange={handleCheckBoxChange} selectedCheckbox={selectedCheckbox} />
                            </article>
                            <article>
                                <Title level={5}>Personal assistants</Title>
                                <CheckboxComponent data={personalAssistants} filterName="personal_assistants_features" onCheckBoxChange={handleCheckBoxChange} selectedCheckbox={selectedCheckbox} />
                                <p className="text-pretty text-slate-400 mt-2 mb-10 w-10/12">Interpreters, caregivers, or other personal assistants can accompany the participants they assist without having to pay any additional fees</p>
                            </article>
                        </div>
                    </main>
                    <div className="flex justify-between items-center w-full border-y-2 p-5 sticky bottom-0 bg-[#fdfdfd] z-10">
                        <Button className="font-medium" onClick={handleRemoveFilters}>Remove filters</Button>
                        <Button type="primary" onClick={handleShowResults}>Show results</Button>
                    </div>
                </Drawer>
        </>
    )
}