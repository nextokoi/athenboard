'use client'

import { useFavorites } from '@/app/context/favorite-context';
import { Button } from 'keep-react';
import { useState, useEffect } from 'react';
import { FaHeart, FaRegHeart } from "react-icons/fa6";

export const FavoriteButtonClient = ({ id }: { id?: string }) => {
    const { favorites, addFavorite, removeFavorite, loading } = useFavorites()
    const [isFavorite, setIsFavorite] = useState(false)

    useEffect(() => {
        setIsFavorite(favorites.includes(id || ''))
    }, [favorites, id])

    const handleClick = () => {
        return (isFavorite) ? removeFavorite(id || '') : addFavorite(id || '')
    }

    return (
        <Button shape='circle' className='bg-transparent hover:bg-transparent text-[#171D1E]' onClick={handleClick} disabled={loading}>
            {isFavorite ? <FaHeart className='text-xl text-red-500' /> : <FaRegHeart className='text-xl' />}
        </Button>
    );
}
