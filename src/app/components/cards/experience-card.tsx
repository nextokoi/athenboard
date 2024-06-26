import Link from 'next/link';

import { FaStar } from "react-icons/fa6";
import Image from 'next/image';
import { FavoriteButtonServer } from '../ui/favorite-button-server';

type Props = {
    sourceImg: string
    score: string
    title: string
    description: string
    size: string
    id?: string
}

export const ExperienceCard = ({ score, title, description, sourceImg, size, id } : Props) => {
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
                    {score}
                </div>
                <FavoriteButtonServer id={id || ''} />
            </div>
            <div>
                <Link href={`/experiences/${id}`}>
                    <span className='text-xl font-semibold text-balance'>{title}</span>
                </Link>
                <p className='text-body-4 text-pretty mt-3'>
                    {description}
                </p>
            </div>
        </article>
    )
}