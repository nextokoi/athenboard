"use client"

import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Footer = () => {
    return (
        <footer className='flex flex-col items-center gap-8 justify-center bg-[#006876] text-white h-44 px-6'>
            <div className='flex gap-6'>
                <InstagramIcon fontSize='large'/>
                <XIcon fontSize='large'/>
                <GitHubIcon fontSize='large'/>
            </div>
            <ul className='flex w-full justify-around'>
                <li>ATHENBOARD @ 2024</li>
                <li>PRIVACY</li>
                <li>TERMS</li>
                <li>ABOUT</li>
            </ul>
        </footer>
    )
}