"use client"

import { addHours, format, parseISO, subDays } from 'date-fns'
import { enUS } from 'date-fns/locale'
import { message, Button } from "antd";

type Props = {
    data: {
        date: string
        price: number
        availableLanguages: string
        duration: number
        hour: string
    }
    id: string
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    onSelect: (data: any) => void
    key?: string
    userAuthenticated?: boolean
}

export const calculateEndTime = (hour: string, duration: number) => {
    const [hours, minutes, seconds] = hour.split(':').map(Number)
    const startTime = new Date()
    startTime.setHours(hours, minutes, seconds)
    const endTime = addHours(startTime, duration)
    return format(endTime, 'HH:mm')
}

export const DateCard = ({ data, id, onSelect, userAuthenticated } : Props) => {
    const date = parseISO(data.date)
    const formattedDate = format(date, 'eee, dd MMMM', { locale: enUS })
    const startTime = data.hour.substring(0, 5)
    const endTime = calculateEndTime(data.hour, data.duration)
    const cancelDate = subDays(date, 1)
    const cancelDateTime = format(cancelDate, `dd MMM. ${startTime}`)
    
    const { availableLanguages, price } = data
    const [messageApi, contextHolder] = message.useMessage()

    const handleClick = () => {
        if (!userAuthenticated) {
            messageApi.info("You must be logged in to choose a date")
            return
        }
        onSelect(data)
    }
    
    return (
        <div id={id} className="mb-5">
            {contextHolder}
            <h6 className="text-xl font-medium mb-3">{formattedDate}</h6>
            <div className="border border-slate-300 rounded-lg p-5 xl:w-96">
                <div className="flex justify-between mb-5">
                    <div>
                        <p className='mb-2'>{startTime} - {endTime} (CEST)</p>
                        <p><span className="font-semibold">From {price}€</span> per person</p>
                    </div>
                    <Button size="middle" className="py-5 z-0" onClick={handleClick}>Choose</Button>
                </div>
                <p className="text-body-2 text-pretty mb-2">Available in {availableLanguages}</p>
                <p className="text-body-2 text-pretty">If you cancel before {cancelDateTime} (CEST), you will receive a full refund.</p>
            </div>
        </div>
    )
}   