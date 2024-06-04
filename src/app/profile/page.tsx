import Image from "next/image"
import PersonalInformation from "../components/profile/personal-information"
import Transactions from "../components/profile/transactions"
import Favorites from "../components/profile/favorites"
import Assistance from "../components/profile/assistance"
import { fetchUserProfile } from "../utils/supabase/dataService"
import { cookies } from "next/headers"
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"


export default async function Page() {

    const cookieStore = cookies()
    const supabase = createRouteHandlerClient({
        cookies: () => cookieStore,
    })

    const { data: { session }} = await supabase.auth.getSession()

    
    if (!session || !session.user) {
        throw new Error('Session not found')
    }

    const { id: userId, email } = session.user

    if (userId === undefined) {
        throw new Error('User ID not found')
    }
    const user = await fetchUserProfile(userId)

    return (
        <div className="px-5">
            <h4 className="text-heading-4 my-8">Profile</h4>
            <div className="flex items-center justify-between gap-3 mt-5">
                <div className="flex items-center gap-5">
                    <Image src={user.avatar_url} alt="avatar" width={75} height={75} className="rounded-full" />
                    <div>
                        <span className="text-body-1 font-semibold">{user.username}</span>
                        <p className="text-body-2 text-slate-500">Welcome back!</p>
                    </div>
                </div>
            </div>
            <PersonalInformation />
            <Transactions />
            <Favorites />
            <Assistance />
        </div>
    )
}