'use client'

import { Icon, Input } from "keep-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { FaMagnifyingGlass, FaSliders } from "react-icons/fa6"
import { useDebounce } from "use-debounce"
import { SearchFilters } from "./search-filters"


export const SearchBarComponent = () => {
    const router = useRouter()
    const [search, setSearch] = useState('')
    const [query] = useDebounce(search, 500)
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value
        setSearch(term)
    }

    useEffect(() => {
        if (!query) {
            router.push('/experiences')
        } else {
            router.push(`?search=${query}`)
        }
    }, [query, router])

    return (
        <div className='flex items-center justify-between gap-5'>
            <fieldset className="relative w-full">
                <Input placeholder="Art" className="ps-12" value={search} onChange={handleChange} />
                <Icon>
                    <FaMagnifyingGlass className='text-xl text-[#8a8a8a]' />
                </Icon>
            </fieldset>
            <SearchFilters />
        </div>
    )
}