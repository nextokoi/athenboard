"use client"

import { Button, Divider } from "keep-react";
import { useState } from "react";

interface EditableFieldProps {
    label: string
    value: string
    onChange?: (value: string) => void
}

export const EditableField = ({ label, value, onChange }: EditableFieldProps) => {
    const [isEditing, setIsEditing] = useState(false)
    const [inputValue, setInputValue] = useState(value)

    const handleEditClick = () => {
        setIsEditing(!isEditing)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setIsEditing(false)
            onChange?.(inputValue)
        }
    }

    const handleBlur = () => {
        setIsEditing(false)
        onChange?.(inputValue)
    }

    return (
        <>
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-body-2 font-semibold">{label}</p>
                    {
                        isEditing ? (
                            <input
                                type="text"
                                value={inputValue}
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                onKeyDown={handleKeyDown}
                                className="text-body-2 text-slate-500 border border-slate-500 rounded-md p-1 mt-1 w-96"
                            />
                        ) : (
                            <p className="text-body-2 text-slate-500">{inputValue}</p>
                        )
                    }
                </div>
                <Button className="text-body-2 font-semibold bg-transparent hover:bg-transparent p-0 text-[#333]" onClick={handleEditClick}>Edit</Button>
            </div>
            <Divider className="my-5"/>
        </>
    )

}