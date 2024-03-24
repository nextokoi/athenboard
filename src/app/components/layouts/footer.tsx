"use client"

import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

export const Footer = () => {
    return (
        <footer className='flex flex-col items-center gap-8 justify-center bg-[#006876] text-white h-44 px-6'>
            <div className='flex gap-6'>
                <FaInstagram className='text-4xl'/>
                <FaXTwitter className='text-4xl'/>
                <FaGithub className='text-4xl'/>
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