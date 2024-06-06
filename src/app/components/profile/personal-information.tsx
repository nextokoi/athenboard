"use client"

import { Button, Divider } from "keep-react"
import { useState } from "react"
import { Drawer } from "../ui/drawer"
import { FaChevronRight, FaChevronLeft, FaRegCircleUser } from "react-icons/fa6"
import { EditableField } from "./editable-field"

interface PersonalInformationProps {
    user: {
        username: string
        phone: string | undefined
        email: string | undefined
    }
}

export default function PersonalInformation({ user }: PersonalInformationProps) {

    const { username, phone, email } = user
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const handleOpenDrawer = () => {
        setIsDrawerOpen(true)
    }

    const handleCloseDrawer = () => {
        setIsDrawerOpen(false)
    }

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
                            <EditableField label="Name" value={username}/>
                            <EditableField label="Email" value={email === undefined ? "Not provided" : email}/>
                            <EditableField label="Phone number" value={(phone === undefined || phone === '') ? "Add a number so they can contact you" : phone}/>
                            <EditableField label="Address" value="Not provided"/>
                            <EditableField label="Emergency contact" value="Not provided"/>
                        </div>
                    </div>
                </Drawer>
            </div>
            <Divider className="border border-slate-300 my-5" />
        </>
    )
}
