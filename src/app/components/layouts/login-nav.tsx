import ProfileDropdown from "../login-nav/profile-dropdown";
import LoginDropdown from "../login-nav/login-dropdown";
import { createClient } from "@/app/utils/supabase/server";

export async function LoginNav() {
    const supabase = createClient()

    const { data: { session }, error: sessionError } = await supabase.auth.getSession()

    if (sessionError) {
        console.error('Error getting session: ', sessionError)
        return <LoginDropdown />
    }

    if (!session) {
        return <LoginDropdown />
    }

    const { data: { user }, error: userError } = await supabase.auth.getUser()

    if (userError) {
        console.error('Error getting user: ', userError)
        return <LoginDropdown />
    }

    const { data, error: roleError } = await supabase
    .from('users')
    .select(`
        *,
        user_roles(
            role
        )
    `)
    .eq('id', user?.id)
    .single()

    if (roleError) {
        console.error('Error getting user role: ', roleError)
        return <LoginDropdown />
    }

    const role = data?.user_roles.role || null

    return (
        <>
            { session ? <ProfileDropdown role={role}/> : <LoginDropdown /> }
        </>
    )
}