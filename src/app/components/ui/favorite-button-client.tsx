'use client'

import { useState, useEffect } from 'react'
import { Button } from 'keep-react'
import { FaHeart, FaRegHeart } from "react-icons/fa6"

interface FavoriteButtonClientProps {
    id: string
    initialFavorites: string[]
}

export const FavoriteButtonClient = ({ id, initialFavorites }: FavoriteButtonClientProps) => {
    const [favorites, setFavorites] = useState<string[]>(initialFavorites)
    const [loading, setLoading] = useState<boolean>(false)
    const [isFavorite, setIsFavorite] = useState<boolean>(initialFavorites.includes(id))

    useEffect(() => {
        setIsFavorite(favorites.includes(id))
    }, [favorites, id])

    const handleClick = async () => {
        setLoading(true)
        try {
            const response = await fetch('/api/favorite-action', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id, isFavorite })
            })

            if (!response.ok) {
                throw new Error('Network response was not ok')
            }

            const updatedFavorites = await response.json()
            setFavorites(updatedFavorites)
        } catch (error) {
            console.error('Error updating favorites:', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Button
            shape='circle'
            className='bg-transparent hover:bg-transparent text-[#171D1E]'
            onClick={handleClick}
            disabled={loading}
        >
            {isFavorite ? <FaHeart className='text-xl text-red-500' /> : <FaRegHeart className='text-xl' />}
        </Button>
    )
}
