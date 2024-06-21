"use client"

import { Button, ConfigProvider } from "antd"
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
        <ConfigProvider
            theme={{
                components: {
                    Button: {
                        defaultBg: "#CF4224",
                        defaultColor: "#fff",
                        defaultBorderColor: "#CF4224",
                        defaultHoverBg: "#E34625",
                        defaultHoverColor: "#fff",
                        defaultHoverBorderColor: "#E34625",
                    }
                }
            }}
        >
            <div className="flex items-center justify-between gap-3 my-10">
                <Button size="large" className="w-full" onClick={signOut}>Log out</Button>
            </div>
        </ConfigProvider>
    )
}