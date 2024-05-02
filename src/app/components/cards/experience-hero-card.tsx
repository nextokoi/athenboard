'use client'

import { FavoriteButton } from '../ui/favorite-button';

import { FaStar } from "react-icons/fa6";
import { FunctionComponent } from 'react';
import Image from 'next/image';

type Props = {
    sourceImg: string
    score: string
    duration: string
    title: string
}

export const ExperienceHeroCard: FunctionComponent<Props> = ({ sourceImg, score, duration, title }) => {
    return (
        <article className='w-64 bg-white flex rounded-lg p-1'>
            <picture>
                <Image src={sourceImg} alt="" className="rounded-lg" width={640} height={960}/>
            </picture>
            <div className='flex flex-col w-full pl-2'>
                <div className='flex justify-between items-center gap-2'>
                    <span className='flex items-center gap-2'>
                        <FaStar className='text-xl text-yellow-500' />
                        <h3 className='heading-text-3'>
                            {score} 
                        </h3>
                    </span> 
                    <h3 className='heading-text-3'>
                        {duration}
                    </h3>
                    <FavoriteButton />
                </div>
                <p className='body-text-2 text-pretty font-semibold'>
                    {title}
                </p>
            </div>
        </article>
    )
}