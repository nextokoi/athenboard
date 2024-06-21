"use client"

import { Button, Divider } from "antd"
import { useState } from "react"
import { Drawer } from "../ui/drawer"
import { FaChevronRight, FaChevronLeft, FaRegCircleUser } from "react-icons/fa6"
import { EditableField } from "./editable-field"
import { createClient } from "@/app/utils/supabase/client"
import { useRouter } from "next/navigation"

interface UserMetadata {
    user_name?: string
    address?: string
    phone?: string
    emergency_contact?: string
}

interface UserData {
    user_data: UserMetadata | undefined
    id: string | undefined
    email: string | undefined
}

interface PersonalInformationProps {
    data: UserData
}

export default function PersonalInformation({ data }: PersonalInformationProps) {

    const supabase = createClient()
    const router = useRouter()
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [isLoading, setIsLoading] = useState<{ [key: string]: boolean }>({})
    const [error, setError] = useState<{ [key: string]: string | null }>({})
    const [editingField, setEditingField] = useState<string | null>(null)

    const { user_name, address, phone, emergency_contact } = data.user_data || {}
    const { email, id } = data 

    const handleOpenDrawer = () => setIsDrawerOpen(true)
    const handleCloseDrawer = () => setIsDrawerOpen(false)

    const handleFieldChange = async (field: keyof UserMetadata | "email" | "password", value: string) => {
        setIsLoading(prev => ({ ...prev, [field]: true }))
        setError(prev => ({ ...prev, [field]: null }))

        let currentValue = ""
        if (field === "email") {
            currentValue = email || ""
        } else if (field !== "password") {
            currentValue = data.user_data?.[field] || ""
        }

        if (currentValue === value || value === "Not provided") {
            setIsLoading(prev => ({ ...prev, [field]: false }))
            return 
        }
    
        try {
            if (field === "email") {
                const { error } = await supabase.rpc('update_user_email', { user_id: id, new_email: value })
                if (error) throw error
            } else if (field === "password") {
                const { error } = await supabase.auth.updateUser({ password: value })
                if (error) throw error
            } else {
                const { error } = await supabase.auth.updateUser({ data: { [field]: value } })
                if (error) throw error
            }
            router.refresh()
        } catch (error) {
            setError(prev => ({ ...prev, [field]: error.message }))
        } finally {
            setIsLoading(prev => ({ ...prev, [field]: false }))
        }
    }

    const fields = [
        { label: "Username", value: user_name, key: "user_name", type: "text" },
        { label: "Email", value: email, key: "email", type: "email" },
        { label: "New password", value: "", key: "password", type: "password" },
        { label: "Address", value: address, key: "address", type: "text" },
        { label: "Phone number", value: phone, key: "phone", type: "text" },
        { label: "Emergency contact", value: emergency_contact, key: "emergency_contact", type: "text" },
    ]

    return (
        <>
            <div className="flex items-center justify-between gap-3 mt-5">
                <div className="flex items-center gap-5">
                    <FaRegCircleUser className="text-2xl" />
                    <p className="text-body-2 font-semibold">Personal information</p>
                </div>
                <Button type="text" className="text-[#333] p-0" onClick={handleOpenDrawer}>
                    <FaChevronRight className="text-xl" />
                </Button>
                <Drawer isOpen={isDrawerOpen} onClose={handleCloseDrawer}>
                    <div className="sticky top-0 bg-white">
                        <div className="flex items-center gap-10 p-5">
                            <Button type="text" className="text-[#333] p-0" onClick={handleCloseDrawer}>
                                <FaChevronLeft className="text-2xl" />
                            </Button>
                            <h5 className="text-heading-5">Personal information</h5>
                        </div>
                        <Divider className="mb-5"/>
                    </div>
                    <div className="p-5">
                        {fields.map(field => (
                            <div key={field.key} className="mb-4">
                                {isLoading[field.key] && <p className="text-green-500 mb-1">Updating...</p>}
                                {error[field.key] && <p className="text-red-500 mb-1">{error[field.key]}</p>}
                                <EditableField
                                    label={field.label}
                                    type={field.type}
                                    value={field.key === "password" ? "" : (field.value || "")}
                                    isEditing={editingField === field.key}
                                    onEdit={() => setEditingField(editingField === field.key ? null : field.key)}
                                    onChange={(value) => handleFieldChange(field.key as keyof UserMetadata | "email" | "password", value)}
                                />
                            </div>
                        ))}
                    </div>
                </Drawer>
            </div>
            <Divider />
        </>
    )
}
