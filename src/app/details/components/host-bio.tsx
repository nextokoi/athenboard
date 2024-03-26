import { Typography } from "keep-react"

import { ButtonComponent } from "@/app/components/ui/button"
import { AvatarComponent } from "@/app/components/ui/avatar"

export const HostBio = () => {
    return (
        <div>
            <div className="flex gap-8 items-center">
                <Typography variant="heading-6">
                    Meet Ava, your artist
                </Typography>
                <AvatarComponent />
            </div>
            <div>
                <div>
                    <span>⭐</span>
                    <span>100 reviews</span>
                </div>
                <div>
                    <span>✅</span>
                    <span>Verified</span>
                </div>
                <Typography variant="body-2">
                    Hi, I&apos;m Ava, the creator behind the ceramic workshop. Since my childhood, I found solace and expression in the art of clay. Each piece I mold carries with it my personal journey. In my studio, I share that special connection between clay and creativity, guiding others to discover their own story in each piece. 
                    Welcome to my artistic corner!
                </Typography>
                <ButtonComponent title="Contact with the artist" width="full" bgColor="#3B6939"/>
            </div>
        </div>
    )
}