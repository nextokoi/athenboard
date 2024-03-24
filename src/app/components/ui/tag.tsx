"use client";
import { Tag } from "keep-react";
import { FunctionComponent } from 'react';

type Props = {
    label: string
}

export const TagComponent: FunctionComponent<Props> = ({label}) => {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  }

  return (
    <Tag className='bg-[#775A0B] hover:bg-[#775A0B] text-white text-base rounded-full' onClick={handleClick}>
      {label}
    </Tag>
  )
}
