import { FunctionComponent } from "react";
import { addHours, format, parseISO, subDays } from 'date-fns'
import { enUS } from 'date-fns/locale'
import { Button } from "keep-react";

type Props = {
    data: {
        date: string
        price: number
        available_languages: string[]
        duration: number
        hour: string
    }
    id: string
    key?: string
}

const calculateEndTime = (hour: string, duration: number) => {
    const [hours, minutes, seconds] = hour.split(':').map(Number)
    const startTime = new Date()
    startTime.setHours(hours, minutes, seconds)
    const endTime = addHours(startTime, duration)
    return format(endTime, 'HH:mm')
}

const formatLanguages = (languages: string[]): string => {
    const formattedLanguages = languages.reduce((acc, language, index) => {
        if (index === 0) {
            return language;
            // biome-ignore lint/style/noUselessElse: <explanation>
        } else if (index === languages.length - 1) {
            return `${acc} and ${language}`;
            // biome-ignore lint/style/noUselessElse: <explanation>
        } else {
            return `${acc}, ${language}`;
        }
    }, '')

    return formattedLanguages;
}

export const DateCard: FunctionComponent<Props> = ({ data, id }) => {
    const date = parseISO(data.date)
    const formattedDate = format(date, 'eee, dd MMMM', { locale: enUS })
    const startTime = data.hour.substring(0, 5)
    const endTime = calculateEndTime(data.hour, data.duration)
    const availableLanguages = formatLanguages(data.available_languages)
    const cancelDate = subDays(date, 1)
    const cancelDateTime = format(cancelDate, `dd MMM. ${startTime}`)

    return (
        <div id={id} className="mb-5">
            <h6 className="text-heading-6 mb-3">{formattedDate}</h6>
            <div className="border border-slate-300 rounded-lg p-5">
                <div className="flex justify-between mb-5">
                    <div>
                        <p className="text-body-2">{startTime} - {endTime} (CEST)</p>
                        <p className="text-body-2"><span className="font-semibold">From {data.price}€</span> per person</p>
                    </div>
                    <Button>Choose</Button>
                </div>
                <p className="text-body-2 text-pretty">Available in {availableLanguages}</p>
                <p className="text-body-2 text-pretty">If you cancel before {cancelDateTime} (CEST), you will receive a full refund.</p>
            </div>
        </div>
    )
}   