import { fetchFavorites } from '@/app/utils/supabase/favorites'
import { FavoriteButtonClient } from './favorite-button-client'
import { createClient } from '@/app/utils/supabase/server'

interface FavoriteButtonServerProps {
    id: string
}

export const FavoriteButtonServer = async ({ id }: FavoriteButtonServerProps) => {
    const initialFavorites = await fetchFavorites()
    const supabase = createClient()

    const { data: { user } } = await supabase.auth.getUser()

    return (
        <FavoriteButtonClient
            id={id}
            initialFavorites={initialFavorites}
            user={user}
        />
    )
}
