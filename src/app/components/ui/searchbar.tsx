'use client'

import { Button, Icon, Input } from "keep-react"
import { FaMagnifyingGlass, FaSliders } from "react-icons/fa6"

export const SearchBarComponent = () => {
    
    return (
        <div className='flex items-center justify-between gap-5'>
            <fieldset className="relative w-full">
                <Input placeholder="Art" className="ps-12" />
                <Icon>
                    <FaMagnifyingGlass className='text-xl text-[#8a8a8a]' />
                </Icon>
            </fieldset>
            <Button shape='circle' className='bg-transparent hover:bg-slate-200 text-[#171D1E] w-12 border'>
                <FaSliders className='text-xl' />
            </Button>
        </div>
    )
}