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
      <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity ease-in-out duration-500 z-20 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={onClose}/>
      <div className={`fixed bottom-0 left-0 right-0 w-full transform transition-transform ease-in-out duration-500 z-30 ${isOpen ? 'translate-y-0' : 'translate-y-full'} xl:inset-0 xl:flex xl:items-center xl:justify-center`}>
        <div className="bg-[#fdfdfd] h-full rounded-t-xl overflow-y-scroll xl:rounded-lg xl:shadow-lg xl:overflow-y-auto xl:h-auto w-full xl:w-3/4 xl:max-w-3xl" style={{ scrollbarWidth: 'none', height: '90vh' }}>
          {children}
        </div>
      </div>
    </>
  )
}
