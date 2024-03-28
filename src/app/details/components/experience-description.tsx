import { Divider, Typography } from "keep-react"

export const ExperienceDescription = () => {
    return (
        <div className="pr-5">
            <div className="flex flex-col gap-3 py-5">
                <Typography variant="heading-6" className="font-medium">What you will do</Typography>
                <Typography variant="body-2" className="text-pretty">In my ceramics studio, I invite you to experience clay shaping. I offer hands-on classes where you&apos;ll learn to mold and glaze your...</Typography>
                <Typography variant="body-4" className="font-bold">More info</Typography>
            </div>
            <Divider />
        </div>
    )
}