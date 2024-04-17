'use client'
import { Breadcrumb } from 'keep-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { House } from 'phosphor-react'

interface Props {
  data?: {
    title: string
  }
}

export const BreadcrumbComponent = ({ data } : Props) => {
  const currentRoute = usePathname()
  const namePage = currentRoute.substring(1).charAt(0).toUpperCase() + currentRoute.slice(2)
  const breadPieces = namePage.split('/')

  const title = data?.title
  const itemTitle = data ? title : ''
  
  const breadItems = () => {
    const lastIndex = breadPieces.length - 1
    return breadPieces.map((item, index) => {
      const isUUID = /\b[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\b/i.test(item)
      return(
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <Breadcrumb.Item key={index} activeType={index === lastIndex ? 'base' : undefined} href={index !== lastIndex ? `/${item.toLowerCase()}` : null as unknown as string}>
          {isUUID ? itemTitle : item}
        </Breadcrumb.Item>
      )
    })
  }

  return (
    <Breadcrumb dividerIconStyle="slash" icon={<Link href='/'><House size={20} /></Link>}>
      {breadItems()}
    </Breadcrumb>
  )
}
