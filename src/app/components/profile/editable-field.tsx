"use client"

import { Button, ConfigProvider, Divider, Input } from "antd";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

interface EditableFieldProps {
    label: string
    value: string
    type: string
    isEditing?: boolean
    onEdit: () => void
    onChange?: (value: string) => void
}

export const EditableField = ({ label, value, type, isEditing, onEdit, onChange }: EditableFieldProps) => {
    const [inputValue, setInputValue] = useState(value)
    const [showPassword, setShowPassword] = useState(false)

    useEffect(() => {
        if (!isEditing) {
            setInputValue(value)
        }
    }, [isEditing, value])
    const handleEditClick = () => {
        setShowPassword(false)
        if (isEditing) {
            onChange?.(inputValue)
        }
        onEdit()
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onChange?.(inputValue)
            onEdit()
        }
    }

    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <ConfigProvider
            theme={{
                components: {
                    Button: {
                        colorLinkHover: "#006876",
                    }
                }
            }}
        >
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                    <p className="text-lg font-semibold">{label}</p>
                    {
                        isEditing ? (
                            <div className="relative">
                                <Input
                                    type={showPassword ? "text" : type}
                                    placeholder={type === "password" ? "********" : ""}
                                    onChange={handleInputChange}
                                    onKeyDown={handleKeyDown}
                                    className="w-96"
                                />
                                {type === "password" && (
                                    <Button onClick={toggleShowPassword} className="bg-transparent hover:bg-transparent text-[#333] p-0 absolute top-1/2 -translate-y-1/2 right-3">
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </Button>
                                )}
                            </div>
                        ) : (
                            <p className="text-slate-500 mt-1">{type === "password" ? "********" : (inputValue ? inputValue : "Not provided")}</p>
                        )
                    }
                </div>
                <Button type="link" className="text-lg font-semibold p-0 text-[#333]" onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</Button>
            </div>
            <Divider/>
        </ConfigProvider>
    )

}