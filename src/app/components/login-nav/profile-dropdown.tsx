"use client"

import { Button, Dropdown } from "keep-react";
import { useRouter } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";

export default function ProfileDropdown() {
    const router = useRouter()

    const handleLogout = async () => {
        try {
            const response = await fetch('/auth/logout', {
                method: 'POST',
                credentials: 'same-origin'
            })

            if (response.ok){
                router.refresh()
            } else {
                console.error('Logout failed')
            }
        } catch (error) {
            console.error('An error ocurred during logout', error)
        }
    }


  return (
    <Dropdown action={
        <Button className='bg-transparent hover:bg-transparent text-white p-0'>
            <FaUserCircle className="text-2xl" />
        </Button>
    } actionClassName='border-none bg-transparent p-0' className='w-44'>
        <Dropdown.List>
            <Dropdown.Item href="/profile">
                <FaUserCircle className="text-xl" />
                Profile
            </Dropdown.Item>
            <Dropdown.Item onClick={handleLogout}>
                <RiLogoutBoxLine className="text-xl" />
                Log out
            </Dropdown.Item>
        </Dropdown.List>
    </Dropdown>
  )
}
