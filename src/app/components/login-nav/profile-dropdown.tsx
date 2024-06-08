"use client"

import { createClient } from "@/app/utils/supabase/client";
import { useRouter } from "next/navigation";
import { Button, Dropdown } from "keep-react";
import { FaUserCircle } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaUserNinja } from "react-icons/fa6";
import Link from "next/link";

export default function ProfileDropdown({ role } : { role: string | null }) {
    const router = useRouter()
    const supabase = createClient()

    async function signOut() {
        await supabase.auth.signOut()
        router.refresh()
    }

    return (
        <Dropdown action={
            <Button className={`bg-transparent hover:bg-transparent text-white p-0 ${role === "admin" && "rounded-full border-2 border-white p-1"}`}>
                { role === "user" ? <FaUserCircle className="text-2xl" /> : <FaUserNinja className="text-md" />}
            </Button>
        } actionClassName='border-none bg-transparent p-0' className='w-44 z-50'>
            <Dropdown.List>
                { role === 'user' &&
                    <Link href="/profile">
                        <Dropdown.Item>
                            <FaUserCircle className="text-xl" />
                            Profile
                        </Dropdown.Item>
                    </Link>
                }
                
                {   
                    role === 'admin' &&
                    <Link href="/admin">
                        <Dropdown.Item>
                            <MdAdminPanelSettings className="text-xl" />
                            Admin panel
                        </Dropdown.Item>
                    </Link>
                }
                <Dropdown.Item onClick={signOut}>
                    <RiLogoutBoxLine className="text-xl" />
                    Log out
                </Dropdown.Item>
            </Dropdown.List>
        </Dropdown>
    )
}
