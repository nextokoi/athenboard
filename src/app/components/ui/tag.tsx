"use client";
import { Tag } from "antd";

type Props = {
    label: string
}

export const TagComponent = ({label} : Props) => {
  return (
    <Tag color="#775A0B" className="rounded-xl px-4 py-1 cursor-pointer">
      <span className="text-sm">{label}</span>
    </Tag>
  )
}
