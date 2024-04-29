
'use client'
import { Checkbox, Label } from 'keep-react'

interface CheckboxProps {
  data: string[]
  filterName: string
  selectedCheckbox?: { filterName: string, value: string }[]
  onCheckBoxChange?: (e: React.ChangeEvent<HTMLInputElement>, filterName: string) => void
}

export const CheckboxComponent = ({ data, filterName, onCheckBoxChange, selectedCheckbox }: CheckboxProps) => {
  const handleCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onCheckBoxChange?.(e, filterName)
  }

  const isChecked = (label: string) => {
    return selectedCheckbox?.some(item => item.filterName === filterName && item.value === label)
  }

  const renderData = () => {
    return data.map((label, index) => {
      const labelTreated = label.split(' ').join('-').toLowerCase()
      return (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <div key={index} className='flex items-center justify-between'>
          <Label htmlFor={labelTreated} className='text-lg text-pretty w-10/12'>{label}</Label>
          <Checkbox id={labelTreated} value={label} onChange={handleCheckBoxChange} checked={isChecked(label)} />
        </div>
      )
    })
  }
  return (
    <fieldset className="flex flex-col gap-4">
      {renderData()}
    </fieldset>
  )
}
