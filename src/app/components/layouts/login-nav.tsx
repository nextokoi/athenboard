import ProfileDropdown from "../login-nav/profile-dropdown";
import LoginDropdown from "../login-nav/login-dropdown";
import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

export async function LoginNav() {
    const cookieStore = cookies()

    const supabase = createRouteHandlerClient({
        cookies: () => cookieStore,
    })

    const { data: { session } } = await supabase.auth.getSession()
    return (
        <>
            { session === null ? <LoginDropdown /> : <ProfileDropdown /> }
        </>
    )
}