import { Typography } from "keep-react"
import { FunctionComponent } from "react"
import { IconType } from "react-icons"

type Props = {
    title: string
    Icon: IconType
}

export const IncludesCard: FunctionComponent<Props> =  ({ title, Icon }) => {
    return (
        <div className="flex items-center gap-5 border border-slate-500 pl-5 rounded-lg w-52 h-28">
            <Icon className="text-4xl"/>
            <Typography variant="body-3" className="text-balance">{title}</Typography>
        </div>
    )
}