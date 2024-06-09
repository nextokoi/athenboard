import Image from "next/image"
import PersonalInformation from "../components/profile/personal-information"
import Transactions from "../components/profile/transactions"
import Favorites from "../components/profile/favorites"
import Assistance from "../components/profile/assistance"
import { createClient } from "../utils/supabase/server"
import { redirect } from "next/navigation"
import { LogoutButton } from "../components/profile/logout-button"

export default async function Page() {

    const supabase = createClient()

    const { data, error } = await supabase.auth.getUser()

    console.log(data)

    const userData = {
        id: data?.user?.id,
        email: data?.user?.email,
        user_data: data?.user?.user_metadata
    }
    
    const { user_name, avatar_url} = userData.user_data || {}

    if (error || !data?.user){
        redirect('/')
    }

    return (
        <div className="px-5">
            <h4 className="text-heading-4 my-8">Profile</h4>
            <div className="flex items-center justify-between gap-3 mt-5">
                <div className="flex items-center gap-5">
                    <Image src={avatar_url} alt="avatar" width={75} height={75} className="rounded-full" />
                    <div>
                        <span className="text-body-1 font-semibold">{user_name}</span>
                        <p className="text-body-2 text-slate-500">Welcome back!</p>
                    </div>
                </div>
            </div>
            <PersonalInformation data={userData}/>
            <Transactions />
            <Favorites />
            <Assistance />
            <LogoutButton />
        </div>
    )
}