/* eslint-disable @next/next/no-img-element */
import { Divider, Typography } from "keep-react"

export const LocationSection = () => {
    return (
        <div className="pr-5">
            <div className="flex flex-col gap-3 py-5">
                <Typography variant="heading-6">Where will you go</Typography>
                <img src='http://unsplash.it/300/150?gravity=center' alt=''/>
                <Typography variant="body-2">
                    My workshop is around here; i&apos;ll see you there.
                </Typography>
            </div>
            <Divider />
        </div>
    )
}