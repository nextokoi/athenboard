'use client'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import { IconButton } from '@mui/material';
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
            <img src={sourceImg} alt="" className="w-20 rounded-lg"/>
            <div className='flex flex-col justify-center w-full px-3 gap-2 text-lg'>
                <div className='flex justify-between'>
                    <span className='flex gap-2'>
                        <StarIcon /> {score} 
                    </span> 
                    <span>
                        {duration}
                    </span>
                    <IconButton>
                        <FavoriteBorderIcon />
                    </IconButton>
                </div>
                {title}
            </div>
        </div>
    )
}