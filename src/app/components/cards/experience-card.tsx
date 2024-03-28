/* eslint-disable @next/next/no-img-element */
"use client";

import { FunctionComponent } from 'react';
import Link from 'next/link';

import { FaStar } from "react-icons/fa6";
import { FavoriteButton } from '../ui/favorite-button';

type Props = {
    sourceImg: string
    score: string
    title: string
    description: string
    size: number
}

export const ExperienceCard: FunctionComponent<Props> = ({ score, title, description, sourceImg, size }) => {
    return (
        <div className={`rounded-lg text-[#171D1E] w-${size}`}>
            <Link href={'/details'}>
                <img src={sourceImg} alt="" className="rounded-lg w-60" />
            </Link>
            <div className='flex justify-between mt-3'>
                <span className='flex items-center gap-2'><FaStar className='text-xl text-yellow-500' /> {score}</span>
                <FavoriteButton />
            </div>
            <div>
                <h6 className='mb-2 text-xl font-semibold text-pretty'>{title}</h6>
                <p className='text-lg text-pretty'>
                    {description}
                </p>
            </div>
        </div>
    )
}