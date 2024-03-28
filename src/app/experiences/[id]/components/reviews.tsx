'use client'

import { Typography } from "keep-react"
import { AvatarComponent } from "../../../components/ui/avatar"

export const ReviewComponent = () => {
    return (
        <div>
            <div className="flex items-center gap-6">
                <AvatarComponent />
                <div>
                    <Typography variant="heading-6" className="font-medium">Hye-Jin</Typography>
                    <Typography variant="body-4">december 2023</Typography>
                </div>
            </div>
            <div className="text-balance">
                The ceramics workshop with Ava was a really cool experience. Her laid-back yet instructive approach made creativity flow naturally. Ava has a unique way of teaching, and her infectious enthusiasm made each session a lot of fun.
            </div>
        </div>
    )
}