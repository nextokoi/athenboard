'use client'

import Chip from '@mui/material/Chip';
import { FunctionComponent } from 'react';

type Props = {
    label: string
}

export const ClickableChip: FunctionComponent<Props> = ({label}) => {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  }

  return (
    <Chip className='bg-[#775A0B] hover:bg-[#775A0B] text-white text-base' label={label} onClick={handleClick}/>
  )
}
