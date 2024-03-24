'use client'
import { Breadcrumb } from 'keep-react'

export const BreadcrumbComponent = () => {
  return (
    <Breadcrumb dividerIconStyle="slash">
      <Breadcrumb.Item>Overview</Breadcrumb.Item>
      <Breadcrumb.Item>Pools</Breadcrumb.Item>
      <Breadcrumb.Item>Tokens</Breadcrumb.Item>
      <Breadcrumb.Item activeType="base">Color</Breadcrumb.Item>
    </Breadcrumb>
  )
}
