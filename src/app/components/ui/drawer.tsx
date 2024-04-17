'use client'

import { Button } from "keep-react"
import { useEffect, useState } from "react"
import { FaRegCircleXmark } from "react-icons/fa6";

type DrawerProps = {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export const Drawer = ({ isOpen, onClose, children }: DrawerProps) => {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "visible"
    }

    return () => {
      document.body.style.overflow = "visible"
    }
  }, [isOpen])

  return (
    <>
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div className={`fixed bottom-0 left-0 right-0 h-screen bg-gray-800 bg-opacity-75 transform transition-transform ease-in-out duration-500 ${isOpen ? 'translate-y-0' : 'translate-y-full'}`} onClick={onClose}/>
      <div className={`fixed bottom-0 left-0 right-0 h-screen w-full pt-5 pl-2 bg-gray-200 transform transition-transform ease-in-out duration-500 rounded-xl ${isOpen ? 'translate-y-10' : 'translate-y-full'}`}>
        <Button shape='circle' className='bg-transparent hover:bg-slate-200 text-[#171D1E] w-12 border' onClick={onClose}>
          <FaRegCircleXmark className='text-xl' />
        </Button>
        <div className="p-4">
          {children}
        </div>
      </div>
    </>
  )
}