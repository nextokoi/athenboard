import { Divider, Typography } from "keep-react"

type Props = {
    data: {
        description: string
    }
}

export const ExperienceDescription = ({ data } : Props) => {
    const { description } = data
    return (
        <div className="pr-5">
            <div className="flex flex-col gap-3 py-5">
                <Typography variant="heading-6" className="font-medium">What you will do</Typography>
                <Typography variant="body-2" className="text-pretty">{description}</Typography>
                <Typography variant="body-4" className="font-bold">More info</Typography>
            </div>
            <Divider />
        </div>
    )
}