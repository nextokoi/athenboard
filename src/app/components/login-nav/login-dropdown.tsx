"use client"

import { Button, Dropdown, Input } from "keep-react";
import { FaUserCircle } from "react-icons/fa";

export default function LoginDropdown() {
    return (
        <Dropdown action={
            <Button className='bg-transparent hover:bg-transparent text-white p-0'>
                <FaUserCircle className="text-2xl mr-2" />
                Sign in
            </Button>
        } actionClassName='border-none bg-transparent p-0' className='z-50'>
            <form action="/auth/login" method="post">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-3">
                        <Input type="email" name="email" placeholder='Email' className='w-full' />
                        <Input type="password" name="password" placeholder='Password' className='w-full' />
                    </div>
                    <div className="flex flex-col gap-3 ">
                        <Button className='w-full bg-[#006876] hover:bg-[#007a8a]'>Log In</Button>
                    </div>
                </div>
            </form>
        </Dropdown>
    )
}