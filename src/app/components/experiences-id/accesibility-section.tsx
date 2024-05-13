"use client"

import { Button, Divider } from "keep-react"
import { Drawer } from "../ui/drawer"
import { useState } from "react"
import { FaChevronLeft } from "react-icons/fa6";


// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const AccesibilitySection = ({ data }: { data: any }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const handleOpenDrawer = () => {
        setIsDrawerOpen(true)
    }
    const handleCloseDrawer = () => {
        setIsDrawerOpen(false)
    }

    const renderAccesibilityContent = () => {
        const accessibilityItems = [
            { key: "mobility_features", label: "Mobility" },
            { key: "communication_features", label: "Communication" },
            { key: "sensory_needs", label: "Sensory needs" },
            { key: "personal_assistants_features", label: "Personal assistants" }
        ]
    
        return (
            <ul className="flex flex-col gap-2">
                <li>
                    <p className="text-pretty text-body-3">This artist has highlighted suitable features for guests with accessibility requirements.</p>
                </li>
                {accessibilityItems.map(item => (
                    data[item.key] && (
                        <li key={item.key}>
                            <h6 className="font-medium text-heading-6">{item.label}</h6>
                            <p className="text-pretty text-body-4">
                                {data[item.key]}
                            </p>
                        </li>
                    )
                ))}
            </ul>
        );
    };
    

    return (
        <div className="pr-5">
            <Divider />
            <div className="flex flex-col gap-3 py-5">
                <h6 className="font-medium text-heading-6">Accesibility</h6>
                <p className="text-pretty text-body-4">
                    Free entry for individuals assisting participants with functional diversity.
                </p>
                <Button onClick={handleOpenDrawer} color="success">Show all benefits</Button>
                <Drawer isOpen={isDrawerOpen} onClose={handleCloseDrawer}>
                    <div className="flex flex-col gap-3 px-5">
                        <header className="py-5 sticky top-0 bg-white">
                            <Button className="bg-transparent hover:bg-slate-200 text-[#171D1E] p-3" onClick={handleCloseDrawer}>
                                <FaChevronLeft />
                            </Button>
                            <h5 className="text-heading-5 pt-2">Accesibility</h5>
                        </header>
                        <main>
                            {renderAccesibilityContent()}
                        </main>
                    </div>
                </Drawer>
            </div>
            <Divider />
        </div>
    )
}