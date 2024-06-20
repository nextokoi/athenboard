'use client'

/* import { Icon, Input } from "keep-react" */
import { Input } from "antd"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { FaMagnifyingGlass } from "react-icons/fa6"
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
                <Input placeholder="Art" className='py-2' value={search} onChange={handleChange} prefix={<FaMagnifyingGlass className='text-md text-[#8a8a8a] mr-2' />}/>
            </fieldset>
            <SearchFilters />
        </div>
    )
}