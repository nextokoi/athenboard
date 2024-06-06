import ProfileDropdown from "../login-nav/profile-dropdown";
import LoginDropdown from "../login-nav/login-dropdown";
import { createClient } from "@/app/utils/supabase/server";

export async function LoginNav() {
    const supabase = createClient()

    const { data } = await supabase.auth.getSession()

    const session = data.session

    return (
        <>
            { session ? <ProfileDropdown /> : <LoginDropdown /> }
        </>
    )
}