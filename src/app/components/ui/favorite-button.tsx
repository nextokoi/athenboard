'use client';
import { Button } from 'keep-react';
import { useState, useEffect } from 'react';
import { FaHeart, FaRegHeart } from "react-icons/fa6";

const favoriteCache = new Map();

export const FavoriteButton = ({ id } : { id?: string }) => {
    const [isFavorite, setIsFavorite] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!id) return;

        if (favoriteCache.has(id)) {
            setIsFavorite(favoriteCache.get(id));
            return;
        }

        const checkFavoriteStatus = async () => {
            try {
                const response = await fetch('/api/favorite/check', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ id })
                });
                const result = await response.json();
                setIsFavorite(result.isFavorite);
                favoriteCache.set(id, result.isFavorite);
            } catch (error) {
                console.error('Error checking favorite status:', error);
            }
        };

        checkFavoriteStatus();
    }, [id]);

    const handleClick = async () => {
        if (!id) return;

        setLoading(true);
        setIsFavorite(prev => !prev);

        try {
            const method = isFavorite ? 'DELETE' : 'POST';
            
            const response = await fetch('/api/favorite', {
                method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id })
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error updating favorite: ', errorData);
                setIsFavorite(prev => !prev);
            } else {
                favoriteCache.set(id, !isFavorite);
            }
        } catch (error) {
            console.error('Error updating favorite: ', error);
            setIsFavorite(prev => !prev);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Button shape='circle' className='bg-transparent hover:bg-slate-200 text-[#171D1E]' onClick={handleClick} disabled={loading}>
            {isFavorite ? <FaHeart className='text-xl text-red-500' /> : <FaRegHeart className='text-xl' /> }
        </Button>
    );
}
