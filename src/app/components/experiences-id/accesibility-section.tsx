"use client"

import { Button, Divider } from "antd"
import { Drawer } from "../ui/drawer"
import { useState } from "react"
import { FaChevronLeft } from "react-icons/fa6"

interface Props {
    mobility_features: string[]
    communication_features: string[]
    sensory_needs: string[]
    personal_assistants_features: string[]
}

export const AccesibilitySection = ({ mobility_features, communication_features, sensory_needs, personal_assistants_features }: Props) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const handleOpenDrawer = () => {
        setIsDrawerOpen(true)
    }
    const handleCloseDrawer = () => {
        setIsDrawerOpen(false)
    }

    const renderAccesibilityContent = () => {
        const accessibilityItems = [
            { key: "mobility_features", label: "Mobility", data: mobility_features },
            { key: "communication_features", label: "Communication", data: communication_features },
            { key: "sensory_needs", label: "Sensory needs", data: sensory_needs },
            { key: "personal_assistants_features", label: "Personal assistants", data: personal_assistants_features },
        ]

        return (
            <ul className="flex flex-col gap-2">
                {accessibilityItems.map(item => (
                    item.data && (
                        <li key={item.key}>
                            <h6 className="font-medium text-heading-6">{item.label}</h6>
                            {Array.isArray(item.data) ? (
                                <ul>
                                    {item.data.map((value, index) => (
                                        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                                        <li key={index} className="text-pretty text-body-3">{value}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-pretty text-body-4">
                                    {item.data}
                                </p>
                            )}
                        </li>
                    )
                ))}
            </ul>
        );
    };


    return (
        <div className="pr-5">
            <Divider />
            <div className="flex flex-col gap-5 py-5">
                <h5 className="text-2xl font-medium">Accesibility</h5>
                <p className="text-pretty text-body-3">
                    Free entry for individuals assisting participants with functional diversity.
                </p>
                <Button size="large" className="mt-3" onClick={handleOpenDrawer}>Show all benefits</Button>
                <Drawer isOpen={isDrawerOpen} onClose={handleCloseDrawer}>
                    <div className="flex flex-col gap-3 px-5">
                        <header className="py-5 sticky top-0 bg-white flex flex-col gap-5">
                            <Button type="text" className="self-start" onClick={handleCloseDrawer}>
                                <FaChevronLeft className="text-xl"/>
                            </Button>
                            <h4 className="text-3xl">Accesibility</h4>
                            <p className="text-pretty">This artist has highlighted suitable features for guests with accessibility requirements.</p>
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