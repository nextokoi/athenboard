import Image from "next/image"
import PersonalInformation from "../components/profile/personal-information"
import Transactions from "../components/profile/transactions"
import Favorites from "../components/profile/favorites"
import Assistance from "../components/profile/assistance"


export default function Page() {
    

    return (
        <div className="px-5">
            <h4 className="text-heading-4 my-8">Profile</h4>
            <div className="flex items-center justify-between gap-3 mt-5">
                <div className="flex items-center gap-5">
                    <Image src={'https://i.imgur.com/EHyR2nP.png'} alt="avatar" width={75} height={75} className="rounded-full" />
                    <div>
                        <span className="text-body-1 font-semibold">Name</span>
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