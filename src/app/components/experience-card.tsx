"use client";

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import { IconButton } from '@mui/material';
import { FunctionComponent } from 'react';

type Props = {
    sourceImg: string
    score: string
    title: string
    description: string
}

export const ExperienceCard: FunctionComponent<Props> = ({ score, title, description, sourceImg}) => {
    return (
        <div className='rounded-lg text-[#171D1E] w-64'>
            <picture>
                <img src={sourceImg} alt="" className="w-full rounded-lg"/>
            </picture>
            <div className='flex items-center justify-between mt-3'>
               <span className='flex gap-2'><StarIcon /> {score}</span>
               <IconButton>
                    <FavoriteBorderIcon />
               </IconButton>
            </div>
            <div>
                <h6 className='mb-2 text-xl font-semibold text-balance'>{title}</h6>
                <p className='text-lg text-pretty'>
                    {description}
                </p>
            </div>
        </div>
    )
}