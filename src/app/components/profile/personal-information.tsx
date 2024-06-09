"use client"

import { Button, Divider } from "keep-react"
import { useState } from "react"
import { Drawer } from "../ui/drawer"
import { FaChevronRight, FaChevronLeft, FaRegCircleUser } from "react-icons/fa6"
import { EditableField } from "./editable-field"
import { createClient } from "@/app/utils/supabase/client"
import { useRouter } from "next/navigation"

interface UserMetadata {
    user_name?: string
    email?: string
    address?: string
    phone?: string
    emergency_contact?: string
}

interface PersonalInformationProps {
    data: UserMetadata | undefined
}

export default function PersonalInformation({ data } : PersonalInformationProps) {

    const supabase = createClient()
    const router = useRouter()
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const { user_name, email, address, phone, emergency_contact } = data || {}

    const handleOpenDrawer = () => {
        setIsDrawerOpen(true)
    }

    const handleCloseDrawer = () => {
        setIsDrawerOpen(false)
    }

    const handleFieldChange = async (field: keyof UserMetadata, value: string) => {

        setIsLoading(true)
        setError(null)

        const { error } = await supabase.auth.updateUser({
            data: {
                [field]: value
            }
        })

        router.refresh()

        if (error) {
            console.error("Error updating user data:", error.message)
        } 

        setIsLoading(false)
    }

    const fields = [
        { label: "Username", value: user_name, key: "user_name"},
        { label: "Email", value: email, key: "email"},
        { label: "Address", value: address, key: "address"},
        { label: "Phone number", value: phone, key: "phone"},
        { label: "Emergency contact", value: emergency_contact, key: "emergency_contact"},
    ]

    return (
        <>
            <div className="flex items-center justify-between gap-3 mt-5">
                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-3">
                        <FaRegCircleUser className="text-2xl" />
                        <p className="text-body-2 font-semibold">Personal information</p>
                    </div>
                </div>
                <Button className="bg-transparent hover:bg-transparent text-[#333] p-0" onClick={handleOpenDrawer}><FaChevronRight className="text-xl" /></Button>
                <Drawer isOpen={isDrawerOpen} onClose={handleCloseDrawer}>
                    <div>
                        <div className="sticky top-0 bg-white">
                            <div className="flex items-center gap-10 p-5">
                                <Button className="bg-transparent hover:bg-transparent text-[#333] p-0 " onClick={handleCloseDrawer}>
                                    <FaChevronLeft className="text-2xl"  />
                                </Button>
                                <h5 className="text-heading-5">Personal information</h5>
                            </div>
                            <Divider className="mb-5"/>
                        </div>
                        <div className="p-5">
                            {isLoading && <p>Updating...</p>}
                            {error && <p className="text-red-500">{error}</p>}
                            {fields.map((field) => (
                                <EditableField
                                    key={field.key}
                                    label={field.label}
                                    value={field.value || "Not provided"}
                                    onChange={(value) => handleFieldChange(field.key as keyof UserMetadata, value)}
                                />
                            ))}
                        </div>
                    </div>
                </Drawer>
            </div>
            <Divider className="border border-slate-300 my-5" />
        </>
    )
}
