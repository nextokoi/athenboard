'use client'
import Image from "next/image"
import imgAvatar from '../../../../public/pottery.webp'

export const AvatarComponent = () => {
  return (
      <div className="relative rounded-full h-20 w-20 overflow-hidden">
        <Image src={imgAvatar} alt=""/>
      </div>
  )
}
