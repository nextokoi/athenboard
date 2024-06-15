import { fetchFavorites } from '@/app/utils/supabase/favorites'
import { FavoriteButtonClient } from './favorite-button-client'

interface FavoriteButtonServerProps {
    id: string
}

export const FavoriteButtonServer = async ({ id }: FavoriteButtonServerProps) => {
    const initialFavorites = await fetchFavorites()

    return (
        <FavoriteButtonClient
            id={id}
            initialFavorites={initialFavorites}
        />
    )
}
