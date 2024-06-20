"use client"

import { createClient } from "@/app/utils/supabase/client";
import { useRouter } from "next/navigation";
import { Button, Dropdown, MenuProps } from "antd";
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

    const items: MenuProps['items'] = [
        ...(role === 'user' ? [{
            label: <Link href={"/profile"}>Profile</Link>,
            key: "profile",
            icon: <FaUserCircle className="text-2xl" />,
        }] : []),
        ...(role === 'admin' ? [{
            label: <Link href={"/admin"}>Admin panel</Link>,
            key: "admin",
            icon: <MdAdminPanelSettings className="text-2xl" />
        }] : []),
        {
            label: "Log out",
            key: "logout",
            icon: <RiLogoutBoxLine className="text-2xl" />,
            onClick: () => signOut()
        },
    ];

    return (
        <Dropdown menu={{ items }} trigger={["click"]} overlayClassName="w-40">
            <Button shape="circle" className={ role === 'admin' ? "border-2 border-white" : ""} type="text" icon={ role === "user" ? <FaUserCircle className="text-2xl text-white" /> : <FaUserNinja className="text-md text-white" />} />
        </Dropdown>
    )
}
