"use client"

import { useState } from "react"
import { Button, Divider } from "antd"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6"
import { BsBook } from "react-icons/bs"
import { Drawer } from "../ui/drawer"

const articles = [
    { id: '1', title: 'How to create an account', content: 'To create an account, click on the Sign In button on the top right and fill in your details.' },
    { id: '2', title: 'How to reset your password', content: 'To reset your password, go to Personal Information in your profile and follow the instructions.' },
    { id: '3', title: 'How to book an experience', content: 'To book an experience, go to the experience you want to join and in the "Available Dates" section at the bottom, click on "Show more dates" and choose a date that suits you. You will automatically be taken through the payment gateway. Upon paying for the experience, the invoice is stored in your profile in the invoices section.' },
    { id: '4', title: 'How to access your invoices', content: 'Invoices for paid experiences are stored in your profile under the "Transactions" section. There you will find all the information about the payment, including the time, date, location, and more details about the experience.' }
]

export default function HelpCenter() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [selectedArticle, setSelectedArticle] = useState<null | { id: string, title: string, content: string }>(null)

    const handleOpenDrawer = () => {
        setIsDrawerOpen(true)
    }

    const handleCloseDrawer = () => {
        setIsDrawerOpen(false)
        setSelectedArticle(null)
    }

    const handleSelectArticle = (article: { id: string, title: string, content: string }) => {
        setSelectedArticle(article)
    }

    return (
        <div className="flex items-center justify-between gap-3 mt-5">
            <div className="flex items-center gap-5">
                <div className="flex items-center gap-3">
                    <div className="flex items-center">
                        <BsBook className="text-2xl" />
                    </div>
                    <p className="text-body-2 font-semibold">Help Center</p>
                </div>
            </div>
            <Button type="text" className="text-[#333] p-0" onClick={handleOpenDrawer}>
                <FaChevronRight className="text-xl" />
            </Button>
            <Drawer isOpen={isDrawerOpen} onClose={handleCloseDrawer}>
                <header className="sticky top-0 bg-white z-50">
                    <div className="flex items-center gap-10 px-5 pt-5">
                        <Button type="text" className="text-[#333] p-0" onClick={handleCloseDrawer}>
                            <FaChevronLeft className="text-2xl" />
                        </Button>
                        <h5 className="text-2xl">Help Center</h5>
                    </div>
                    <Divider />
                </header>
                <main className="p-5">
                    {!selectedArticle ? (
                        <div>
                            <h2 className="text-2xl font-semibold mb-5">Help Articles</h2>
                            <ul>
                                {articles.map(article => (
                                    <li key={article.id} className="my-2">
                                        <Button type="link" onClick={() => handleSelectArticle(article)}>
                                            {article.title}
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <div>
                            <Button type="link" onClick={() => setSelectedArticle(null)}>
                                &lt; Back to articles list
                            </Button>
                            <h2 className="text-lg font-semibold mt-5">{selectedArticle.title}</h2>
                            <p>{selectedArticle.content}</p>
                        </div>
                    )}
                </main>
            </Drawer>
        </div>
    )
}
