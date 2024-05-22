import { FunctionComponent } from "react";
import { format, parseISO } from 'date-fns'
import { enUS } from 'date-fns/locale'

type Props = {
    data: {
        date: string
        price: number
        available_languages: string
        duration: number
        hour: string
    }
    id: string
    key?: string
}


export const DateCard: FunctionComponent<Props> = ({ data, id }) => {
    const date = parseISO(data.date)
    const formattedDate = format(date, 'eee, dd MMMM', { locale: enUS })
    return (
        <div id={id}>
            <h6 className="text-heading-6">{formattedDate}</h6>
            <div>
                <p className="text-body-2">{data.hour}</p>
                <p className="text-body-2">{data.price} USD</p>
                <p className="text-body-2">{data.available_languages}</p>
                <p className="text-body-2">{data.duration} hours</p>
            </div>
        </div>
    )
}   