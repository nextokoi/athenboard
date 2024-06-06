"use client"

import { Button } from "keep-react"
import { createClient } from "@/app/utils/supabase/client"
import { useRouter } from "next/navigation"

export const LogoutButton = () => {
    const router = useRouter()
    const supabase = createClient()

    async function signOut() {
        await supabase.auth.signOut()
        router.refresh()
    }

    return (
        <div className="flex items-center justify-between gap-3 my-10">
            <Button className="w-full bg-red-500 text-white hover:bg-red-600" onClick={signOut}>Log out</Button>
        </div>
    )
}