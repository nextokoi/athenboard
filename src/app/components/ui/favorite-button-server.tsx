import { fetchFavorites } from '@/app/utils/supabase/favorites'
import { FavoriteButtonClient } from './favorite-button-client'
import { createClient } from '@/app/utils/supabase/server'

interface FavoriteButtonServerProps {
    id: string
}

export const FavoriteButtonServer = async ({ id }: FavoriteButtonServerProps) => {
    try {
        const supabase = createClient()
        const { data: { user }, error: userError } = await supabase.auth.getUser()
        if (userError) {
            return (
                <FavoriteButtonClient
                    id={id}
                    initialFavorites={[]}
                    user={null}
                />
            )
        }
        const userId = user?.id

        if (!userId) throw new Error('User ID not found')

        const initialFavorites = await fetchFavorites(userId)
        return (
            <FavoriteButtonClient
                id={id}
                initialFavorites={initialFavorites}
                user={user}
            />
        )
    } catch (error){
        console.error('Error fetching favorites:', error)
    }
}
