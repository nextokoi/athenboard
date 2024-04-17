'use client'

import { Button } from "keep-react"
import { useState } from "react"
import { FaSliders } from "react-icons/fa6"
import { Drawer } from "./drawer"

export const SearchFilters = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const handleOpenDrawer = () => {
        setIsDrawerOpen(true)
    }

    const handleCloseDrawer = () => {
        setIsDrawerOpen(false)
    }

    return (
        <>
            <Button shape='circle' className='bg-transparent hover:bg-slate-200 text-[#171D1E] w-12 border' onClick={handleOpenDrawer}>
                <FaSliders className='text-xl' />
            </Button>
            <Drawer isOpen={isDrawerOpen} onClose={handleCloseDrawer}>
                <p>Drawer Content Goes Here</p>
                <ul className="mt-4">
                    <li>Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                </ul>
            </Drawer>
        </>
    )
}