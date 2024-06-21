"use client"

import { Avatar, Button, Divider } from "antd"
import { useState } from "react"
import { Drawer } from "../ui/drawer"
import { FaChevronLeft, FaChevronRight, FaHeart, FaStar, FaRegTrashCan } from "react-icons/fa6"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { createClient } from "@/app/utils/supabase/client"


// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export default function Favorites({ data, user }: { data: any, user: any }) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const supabase = createClient()
    const router = useRouter()

    const handleOpenDrawer = () => {
        setIsDrawerOpen(true)
    }

    const handleCloseDrawer = () => {
        setIsDrawerOpen(false)
    }

    const handleRemove = async (id: string) => {
        try {
            const { error } = await supabase
                .from('favorites')
                .delete()
                .eq('experience_id', id)
                .eq('user_id', user)
            if (error) throw error
            router.refresh()
        } catch (error){
            console.error('Error removing favorite: ', error)
        }
    }

    const renderFavorites = () => {
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        return data.map((item: any) => {
            const { title, duration, images } = item.experiences
            return (
                <div key={item.id} className="flex items-center gap-5 border w-72 rounded-md">
                    <Link href={`/experiences/${item.experience_id}`}>
                        <Avatar
                            src={images}
                            shape="square"
                            size={100}
                        />
                    </Link>
                    <div className="flex flex-col w-52">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <FaStar className="text-lg text-yellow-600" />
                                <span>5(100)</span>
                            </div>
                            <span>{duration}hr</span>
                            <Button type="text" onClick={() => handleRemove(item.experience_id)}>
                                <FaRegTrashCan className="text-lg"/>
                            </Button>
                        </div>
                        <Link href={`/experiences/${item.experience_id}`}>
                            <p className="text-body-3 mt-2 font-medium">{title}</p>
                        </Link>
                    </div>
                </div>
            )
        })
    }

    return (
        <>
            <div>
                <h6 className="text-heading-6">Favorites</h6>
                <div className="flex items-center justify-between gap-3 mt-5">
                    <div className="flex items-center gap-5">
                        <div className="flex items-center gap-3">
                            <FaHeart className="text-xl" />
                            <p className="text-body-2 font-semibold">Favorites experiences</p>
                        </div>
                    </div>
                    <Button type="text" className="text-[#333] p-0" onClick={handleOpenDrawer}><FaChevronRight className="text-xl" /></Button>
                    <Drawer isOpen={isDrawerOpen} onClose={handleCloseDrawer}>
                        <header className="sticky top-0 bg-white z-50">
                            <div className="flex items-center gap-10 px-5 pt-5">
                                <Button type="text" className="text-[#333] p-0" onClick={handleCloseDrawer}>
                                    <FaChevronLeft className="text-2xl" />
                                </Button>
                                <h5 className="text-heading-5">Favorites</h5>
                            </div>
                            <Divider />
                        </header>
                        <main className="flex flex-col gap-5 px-10 pb-5">
                            {data.length > 0 ? renderFavorites() : <p className="text-body-2">No favorites yet.</p>}
                        </main>
                    </Drawer>
                </div>
            </div>
            <Divider />
        </>
    )
}
