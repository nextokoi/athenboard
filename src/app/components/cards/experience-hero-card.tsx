'use client'

import { FavoriteButton } from '../ui/favorite-button';

import { FaStar } from "react-icons/fa6";
import { FunctionComponent } from 'react';

type Props = {
    sourceImg: string
    score: string
    duration: string
    title: string
}

export const ExperienceHeroCard: FunctionComponent<Props> = ({ sourceImg, score, duration, title }) => {
    return (
        <div className='w-72 bg-white flex rounded-lg p-1'>
            <picture>
                <img src={sourceImg} alt="" className="w-20 rounded-lg"/>
            </picture>
            <div className='flex flex-col w-full px-3 gap-2 text-lg'>
                <div className='flex justify-between items-center'>
                    <span className='flex items-center gap-2'>
                        <FaStar className='text-xl' /> {score} 
                    </span> 
                    <span>
                        {duration}
                    </span>
                    <FavoriteButton />
                </div>
                <div className='text-pretty'>
                    {title}
                </div>
            </div>
        </div>
    )
}