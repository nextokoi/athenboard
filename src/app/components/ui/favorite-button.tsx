'use client'

import { useState } from 'react';

import { Button } from 'keep-react';
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";

export const FavoriteButton = () => {
    const [favorite, setFavorite] = useState(false)
    const handleClick = () => {
        setFavorite(!favorite)
    }
    return (
        <Button shape='circle' className='bg-transparent hover:bg-slate-200 text-[#171D1E]' onClick={handleClick}>
            {favorite ? <FaHeart className='text-xl' /> : <FaRegHeart className='text-xl' /> }
        </Button>
    )
}