"use client"

import { Button, Dropdown, Input } from "keep-react";
import { FaUserCircle } from "react-icons/fa";
import { login, signup } from "@/app/login/action";

export default function LoginDropdown() {
    return (
        <Dropdown action={
            <Button className='bg-transparent hover:bg-transparent text-white p-0 mr-5'>
                <FaUserCircle className="text-2xl mr-2" />
                Sign in
            </Button>
        } actionClassName='border-none bg-transparent p-0' className='z-50'>
            <form>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-3">
                        <Input type="email" name="email" placeholder='Email' className='w-full' required/>
                        <Input type="password" name="password" placeholder='Password' className='w-full' required/>
                    </div>
                    <div className="flex flex-col gap-3 ">
                        <Button className='w-full bg-[#006876] hover:bg-[#007a8a]' formAction={login}>Log In</Button>
                        <Button className='w-full bg-transparent hover:bg-transparent text-[#006876] border border-[#006876]' formAction={signup}>Sign Up</Button>
                    </div>
                </div>
            </form>
        </Dropdown>
    )
}