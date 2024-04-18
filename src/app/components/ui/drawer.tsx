'use client'

import { useEffect } from "react"

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
      <div className={`fixed bottom-0 left-0 right-0 w-full bg-[#fdfdfd] transform transition-transform ease-in-out duration-500 rounded-t-xl overflow-y-scroll ${isOpen ? 'translate-y-0' : 'translate-y-full'}`} style={{scrollbarWidth: 'none', height:'90vh'}}>
        {children}
      </div>
    </>
  )
}