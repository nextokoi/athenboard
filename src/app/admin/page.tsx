import { redirect } from "next/navigation"
import { createClient } from "../utils/supabase/server"
import { LogoutButton } from "../components/profile/logout-button"

export default async function Page() {
    const supabase = createClient()

    const { data: { session } } = await supabase.auth.getSession()
    if (!session) {
        redirect('/')
    }

    const { data: user, error: userError } = await supabase.auth.getUser()
    if (userError || !user) {
        console.error('Error getting user: ', userError)
        redirect('/')
    }

    const { data, error: roleError } = await supabase
        .from('users')
        .select('*, user_roles(role)')
        .eq('id', user.user?.id)
        .single()

    if (roleError) {
        console.error('Error getting user role: ', roleError)
        redirect('/')
    }

    const role = data?.user_roles?.role || null
    const user_data = user?.user.user_metadata

    if (role !== 'admin') {
        redirect('/')
    }

    return (
        <>
            <div>Admin role access only</div>
            <div>{JSON.stringify(user_data, null, 2)}</div>
            <LogoutButton />
        </>
    )
}