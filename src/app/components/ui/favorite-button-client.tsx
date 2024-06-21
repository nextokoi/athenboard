'use client'

import { useState, useEffect } from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa6"
import { Spin, message, Button } from 'antd'

interface FavoriteButtonClientProps {
    id: string
    initialFavorites: string[]
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    user: any
}

export const FavoriteButtonClient = ({ id, initialFavorites, user }: FavoriteButtonClientProps) => {
    const [favorites, setFavorites] = useState<string[]>(initialFavorites || [])
    const [loading, setLoading] = useState<boolean>(false)
    const [isFavorite, setIsFavorite] = useState<boolean>((initialFavorites || []).includes(id))
    const [messageApi, contextHolder] = message.useMessage()

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

    const info = () => {
        messageApi.info('Need to be logged in to add favorites')
    }

    return (
        <>
            {contextHolder}
            <Button
                type='text'
                shape='circle'
                onClick={user !== null ? handleClick : info}
                icon={loading ? <Spin /> : (isFavorite ? <FaHeart className='text-xl text-red-500' /> : <FaRegHeart className='text-xl' />)}
            />
        </>
    )
}
