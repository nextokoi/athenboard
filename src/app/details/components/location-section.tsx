/* eslint-disable @next/next/no-img-element */
import { Typography } from "keep-react"

export const LocationSection = () => {
    return (
        <div>
            <Typography variant="heading-6">Where will you go</Typography>
            <img src='http://unsplash.it/300/150?gravity=center' alt=''/>
            <Typography variant="body-2">
                My workshop is around here; i&apos;ll see you there.
            </Typography>
        </div>
    )
}