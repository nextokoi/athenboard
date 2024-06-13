"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { createClient } from '@/app/utils/supabase/client'

interface FavoriteContextType {
    favorites: string[]
    addFavorite: (id: string) => Promise<void>
    removeFavorite: (id: string) => Promise<void>
    loading: boolean
}

const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined)

export const useFavorites = (): FavoriteContextType => {
    const context = useContext(FavoriteContext)
    if (!context) {
        throw new Error('useFavorites must be used within a FavoriteProvider')
    }
    return context
}

interface FavoriteProviderProps {
    children: ReactNode
}

export const FavoriteProvider = ({ children }: FavoriteProviderProps) => {
    const [favorites, setFavorites] = useState<string[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const supabase = createClient()
                const { data, error } = await supabase.from('favorites').select('experience_id')
                if (error) throw error
                setFavorites(data.map((item: { experience_id: string }) => item.experience_id))
            } catch (error) {
                console.error('Error fetching favorites:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchFavorites()
    }, [])

    const addFavorite = async (id: string) => {
        try {
            const supabase = createClient()

            const { data: userData, error: userError } = await supabase.auth.getUser()

            if (userError) throw userError

            const userId = userData.user?.id

            if (!userId) throw new Error('User ID not found')

            const { error } = await supabase.from('favorites').insert([{ user_id: userId, experience_id: id }])
            if (error) throw error
            setFavorites(prev => [...prev, id])
        } catch (error) {
            console.error('Error adding favorite:', error)
        }
    }

    const removeFavorite = async (id: string) => {
        try {
            const supabase = createClient()
            const { error } = await supabase.from('favorites').delete().eq('experience_id', id)
            if (error) throw error
            setFavorites(prev => prev.filter(favoriteId => favoriteId !== id))
        } catch (error) {
            console.error('Error removing favorite:', error)
        }
    }

    return (
        <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite, loading }}>
            {children}
        </FavoriteContext.Provider>
    )
}
