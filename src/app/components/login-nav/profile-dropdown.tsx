"use client"

import { createClient } from "@/app/utils/supabase/client";
import { useRouter } from "next/navigation";
import { Button, Dropdown } from "keep-react";
import { FaUserCircle } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";

export default function ProfileDropdown() {
    const router = useRouter()
    const supabase = createClient()

    async function signOut() {
        await supabase.auth.signOut()
        router.refresh()
    }

    const handleProfile = () => {
        router.push('/profile')
    }

  return (
    <Dropdown action={
        <Button className='bg-transparent hover:bg-transparent text-white p-0'>
            <FaUserCircle className="text-2xl" />
        </Button>
    } actionClassName='border-none bg-transparent p-0' className='w-44 z-50'>
        <Dropdown.List>
            <Dropdown.Item onClick={handleProfile}>
                <FaUserCircle className="text-xl" />
                Profile
            </Dropdown.Item>
            <Dropdown.Item onClick={signOut}>
                <RiLogoutBoxLine className="text-xl" />
                Log out
            </Dropdown.Item>
        </Dropdown.List>
    </Dropdown>
  )
}
