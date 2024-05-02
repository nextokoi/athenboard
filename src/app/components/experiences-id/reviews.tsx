'use client'

import { AvatarComponent } from "../ui/avatar"

export const ReviewComponent = () => {
    return (
        <div>
            <div className="flex items-center gap-6">
                <AvatarComponent />
                <div>
                    <h6 className="text-heading-6 font-medium">Hye-Jin</h6>
                    <p className="text-body-4">december 2023</p>
                </div>
            </div>
            <div className="text-balance">
                The ceramics workshop with Ava was a really cool experience. Her laid-back yet instructive approach made creativity flow naturally. Ava has a unique way of teaching, and her infectious enthusiasm made each session a lot of fun.
            </div>
        </div>
    )
}