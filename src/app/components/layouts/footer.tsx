"use client"

import { Typography } from "keep-react";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

export const Footer = () => {
    return (
        <footer className='flex flex-col items-center gap-5 justify-center bg-[#006876] text-white h-44 px-6'>
            <div className='flex gap-5'>
                <FaInstagram className='text-4xl'/>
                <FaXTwitter className='text-4xl'/>
                <FaGithub className='text-4xl'/>
            </div>
            <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:gap-5 gap-2 w-full">
                <Typography variant="body-4">ATHENBOARD @ 2024</Typography>
                <ul className='flex justify-center gap-5'>
                    <li>PRIVACY</li>
                    <li>TERMS</li>
                    <li>ABOUT</li>
                </ul>
            </div>
        </footer>
    )
}