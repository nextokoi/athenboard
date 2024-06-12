"use client"

import { useState } from "react"
import { Drawer } from "../ui/drawer"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6"
import { TbInvoice } from "react-icons/tb"
import { FaEnvelope } from "react-icons/fa6";
import { Avatar, Tag, Divider, Button } from "antd"
import Link from "next/link"
import { calculateEndTime } from "../cards/date-card"
import { format, parseISO } from "date-fns"


interface Invoice {
    id: string
    customer: string
    user_id: string
    experience_id: string
    image: string
    available_languages: string
    date: string
    hour: string
    amount_total: number
    mode: string
    payment_method_types: string
    status: string
    created: string
    experiences: {
        title: string
        description: string
        address: string
        duration: number
        artist_email: string
    }
}

export default function Transactions({ data }: {data: Invoice[] | undefined}) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null)


    const handleOpenDrawer = () => {
        setIsDrawerOpen(true)
    }

    const handleCloseDrawer = () => {
        setIsDrawerOpen(false)
    }

    const handleInvoiceClick = (invoice: Invoice) => {
        setSelectedInvoice(invoice)
    }

    const handleBackClick = () => {
        setSelectedInvoice(null)
    }

    const invoiceListRender = () => {
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        return data?.map((invoice: any) => {
            const status = (invoice.status === 'complete') ? <Tag color="green">Paid</Tag> : <Tag color="orange">Pending</Tag>
            return (
                <div key={invoice.id} className="rounded-md p-5 bg-slate-200">
                    <div className="flex items-center justify-between w-full">
                        <Avatar src={invoice?.image} size={64} />
                        <div className="w-64">
                            <h6 className="text-heading-6 mb-2 text-balance text-slate-900">{invoice?.experiences.title}</h6>
                            <div className="flex gap-2 text-slate-600 text-body-4">
                                <span className="font-bold">INV</span>
                                <p>#{invoice.id.toUpperCase()}</p>
                                <p>{status}</p>
                            </div>
                        </div>
                        <Button type="text" className="text-[#333] p-0" onClick={() => handleInvoiceClick(invoice)}>
                            <FaChevronRight className="text-xl" />
                        </Button>
                    </div>
                </div>
            )
        })
    }

    const invoiceListRenderSelected = () => {
        if (!selectedInvoice) {
            return null
        }

        if (isDrawerOpen === false) {
            setSelectedInvoice(null)
        }

        const startTime = selectedInvoice.hour.substring(0, 5)
        const endTime = calculateEndTime(selectedInvoice.hour, selectedInvoice.experiences.duration)

        const createdFormatted = format(parseISO(selectedInvoice.created), 'dd MMM. HH:mm')

        const status = (selectedInvoice.status === 'complete') ? <Tag color="green">Paid</Tag> : <Tag color="orange">Pending</Tag>
        return (
            <div className="p-5 bg-slate-200 rounded-md">
                <Button type="text" className="text-[#333] mb-5" onClick={handleBackClick}>
                    <FaChevronLeft className="text-md" /> Back
                </Button>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col items-center gap-5">
                        <Avatar shape="square" src={selectedInvoice?.image} size={120} />
                        <h6 className="text-heading-6 mb-2 text-slate-900">{selectedInvoice?.experiences.title}</h6>
                        <p className="text-body-3 text-pretty">{selectedInvoice?.experiences.description}</p>
                        <div className="grid grid-cols-2 items-center font-medium my-3">
                            <span>🏙️{selectedInvoice?.experiences.address}</span>
                            <p>🌍{selectedInvoice?.available_languages}</p>
                            <p>🗓️{selectedInvoice?.date}</p>
                            <p>🕑{startTime} - {endTime} (CEST)</p>
                        </div>
                        <p className="font-medium">You don't need to bring any materials; I'll provide everything. See you soon!</p>
                        <Button icon={<FaEnvelope className="text-md text-[#333]" />} onClick={() => window.open(`mailto:${selectedInvoice?.experiences.artist_email}`)}> Any questions, here's my email</Button>
                        <Link href={`/experiences/${selectedInvoice?.experience_id}`}><Button type="primary">More details about the experience</Button></Link>
                    </div>
                    <Divider />
                    <p><strong>Invoice ID:</strong> {selectedInvoice?.id.toUpperCase()}</p>
                    <p><strong>Status:</strong> {status}</p>
                    <p><strong>Payment method:</strong> {selectedInvoice?.payment_method_types}</p>
                    <p><strong>Amount total:</strong> {selectedInvoice?.amount_total}€</p>
                    <p><strong>Created:</strong> {createdFormatted}</p>
                </div>
            </div>
        )
    }
    
    return (
        <>
            <div>
                <h6 className="text-heading-6">Transactions</h6>
                <div className="flex items-center justify-between gap-3 mt-5">
                    <div className="flex items-center gap-5">
                        <div className="flex items-center gap-3">
                            <TbInvoice className="text-2xl" />
                            <p className="text-body-2 font-semibold">Invoices</p>
                        </div>
                    </div>
                    <Button type="text" className="text-[#333] p-0" onClick={handleOpenDrawer}><FaChevronRight className="text-xl" /></Button>
                    <Drawer isOpen={isDrawerOpen} onClose={handleCloseDrawer}>
                        <header className="sticky top-0 bg-white z-50">
                            <div className="flex items-center gap-10 p-5">
                                <Button type="text" className="text-[#333] p-0" onClick={handleCloseDrawer}>
                                    <FaChevronLeft className="text-2xl" />
                                </Button>
                                <h5 className="text-heading-5">Invoices</h5>
                            </div>
                            <Divider />
                        </header>
                        <div className="flex flex-col gap-5 px-10 pb-5">
                            {selectedInvoice ? invoiceListRenderSelected() : invoiceListRender()}
                            {data?.length === 0 && <p className="text-body-2">No invoices yet</p>}
                        </div>
                    </Drawer>
                </div>
            </div>
            <Divider className="border border-slate-300 my-5" />
        </>
    )
}
