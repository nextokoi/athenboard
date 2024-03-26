'use client'
import { Breadcrumb } from 'keep-react'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { House } from 'phosphor-react'

export const BreadcrumbComponent = () => {
  const currentRoute = usePathname()
  const previousRoute = useParams()
  console.log(previousRoute)
  const namePage = currentRoute.substring(1).charAt(0).toUpperCase() + currentRoute.slice(2)

  return (
    <Breadcrumb dividerIconStyle="slash" icon={<Link href='./'><House size={20} /></Link>}>
      <Breadcrumb.Item activeType='base' href={currentRoute}>
        {namePage}
      </Breadcrumb.Item>
    </Breadcrumb>
  )
}
