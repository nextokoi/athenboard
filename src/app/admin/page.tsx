import { redirect } from "next/navigation"
import { createClient } from "../utils/supabase/server"

export default async function Page() {

    const supabase = createClient()

    const { data: session } = await supabase.auth.getSession()

    if (!session) {
        redirect('/')
    }

    const { data: user } = await supabase.from('users').select("*").single()

    if (user?.role !== 'admin') {
        redirect('/')
    }

    return (
        <>
            <div>Admin role access only</div>
            <div>{JSON.stringify(user, null, 2)}</div>
        </>
    )
}