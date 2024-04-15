"use client";

import { FunctionComponent } from 'react';
import Link from 'next/link';

import { FaStar } from "react-icons/fa6";
import { FavoriteButton } from '../ui/favorite-button';
import Image from 'next/image';
import { Typography } from 'keep-react';

type Props = {
    sourceImg: string
    score: string
    title: string
    description: string
    size: string
    id?: string
}

export const ExperienceCard: FunctionComponent<Props> = ({ score, title, description, sourceImg, size, id }) => {
    return (
        <article className={`rounded-lg text-[#171D1E] w-${size}`}>
            <Link href={`/experiences/${id}`}>
                <picture>
                    <Image src={sourceImg} alt="" className="rounded-lg" width={640} height={960}/>
                </picture>
            </Link>
            <div className='flex justify-between mt-3'>
                <div className='flex items-center gap-2'>
                    <FaStar className='text-xl text-yellow-500' /> 
                    <Typography variant='body-4'>{score}</Typography>
                </div>
                <FavoriteButton />
            </div>
            <div>
                <Link href={`/experiences/${id}`}>
                    <h6 className='mb-2 text-xl font-semibold text-pretty'>{title}</h6>
                </Link>
                <Typography variant='body-4' className='text-pretty'>
                    {description}
                </Typography>
            </div>
        </article>
    )
}