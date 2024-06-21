import Image from "next/image"
import PersonalInformation from "../components/profile/personal-information"
import Transactions from "../components/profile/transactions"
import Favorites from "../components/profile/favorites"
import Assistance from "../components/profile/assistance"
import { createClient } from "../utils/supabase/server"
import { redirect } from "next/navigation"
import { LogoutButton } from "../components/profile/logout-button"


export const revalidate = 60

export default async function Page() {

    const supabase = createClient()

    const { data, error } = await supabase.auth.getUser()

    const userData = {
        id: data?.user?.id,
        email: data?.user?.email,
        user_data: data?.user?.user_metadata
    }

    const { user_name, avatar_url } = userData.user_data || {}

    if (error || !data?.user) {
        redirect('/')
    }

    const { data: invoicesData, error: invoicesError } = await supabase
        .from('invoices')
        .select(`
            *,
            experiences(
                title,
                description,
                address,
                duration,
                artist_id
            )
        `)
        .eq('user_id', userData.id)

    if (invoicesError) {
        console.error('Error fetching invoices: ', invoicesError)
    }

    const experienceArtistIDs = invoicesData?.map((invoice) => invoice.experiences.artist_id) || []
    const { data: artistsData, error: artistsError } = await supabase
        .from('artists')
        .select('id, email')
        .in('id', experienceArtistIDs)
    
    if (artistsError) {
        console.error('Error fetching artists: ', artistsError)
    }

    const invoicesWithArtistEmail = invoicesData?.map((invoice) => {
        const artist = artistsData?.find((artist) => artist.id === invoice.experiences.artist_id)
        return {
            ...invoice,
            experiences: {
                ...invoice.experiences,
                artist_email: artist?.email
            }
        }
    })

    const { data: favorites, error: favoritesError } = await supabase
        .from('favorites')
        .select(`*, 
            experiences(
                title,
                duration,
                images (
                    id,
                    url
                )
            ) 
        `)
        .eq('user_id', userData.id)
        
    const favoritesWithFirstImage = favorites?.map(favorite => ({
        ...favorite,
        experiences: {
            ...favorite.experiences,
            images: favorite.experiences.images.length > 0 ? favorite.experiences.images[0].url : ''
        }    
    }))

    return (
        <div className="px-5 xl:px-96 md:mt-36 xl:mt-20">
            <h4 className="text-3xl my-8">Profile</h4>
            <div className="flex items-center justify-between gap-3 mt-5">
                <div className="flex items-center gap-5">
                    <Image src={avatar_url} alt="avatar" width={75} height={75} className="rounded-full" />
                    <div>
                        <span className="text-xl font-semibold">{user_name}</span>
                        <p className="text-slate-500">Welcome back!</p>
                    </div>
                </div>
            </div>
            <PersonalInformation data={userData} />
            <Transactions data={invoicesWithArtistEmail} />
            <Favorites data={favoritesWithFirstImage} user={userData.id}/>
            <Assistance />
            <LogoutButton />
        </div>
    )
}