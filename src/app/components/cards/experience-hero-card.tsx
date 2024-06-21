import { FaStar } from "react-icons/fa6";
import { FavoriteButtonServer } from '../ui/favorite-button-server';
import { Avatar } from 'antd';
import Link from "next/link";

type Props = {
    sourceImg: string
    score: string
    duration: string
    title: string
    id: string
}

export const ExperienceHeroCard = ({ sourceImg, score, duration, title, id } : Props) => {
    return (
        <div className='bg-white flex rounded-lg p-1'>
            <Link href={`/experiences/${id}`}>
                <Avatar 
                    src={sourceImg} 
                    size={120}
                    shape='square'
                />
            </Link>
            <div className='p-3'>
                <div className='flex items-center gap-2'>
                    <FaStar className='text-xl text-yellow-500' />
                    <h3 className='heading-text-3'>{score}</h3>
                    <h3 className='heading-text-3'>{duration}hr</h3>
                    <FavoriteButtonServer id={id} />
                </div> 
                <Link href={`/experiences/${id}`}>
                    <p className='body-text-2 text-pretty font-semibold'>
                        {title}
                    </p>
                </Link>
            </div>
        </div>
    )
}