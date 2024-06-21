
'use client'
/* import { Checkbox, Label } from 'keep-react' */
import { Checkbox } from 'antd'
import type { CheckboxProps } from 'antd'
import { CheckboxChangeEvent } from 'antd/es/checkbox'

interface CheckboxKeepProps {
  data: string[]
  filterName: string
  selectedCheckbox?: { filterName: string, value: string }[]
  onCheckBoxChange?: (e: CheckboxChangeEvent, filterName: string) => void
}

export const CheckboxComponent = ({ data, filterName, onCheckBoxChange, selectedCheckbox }: CheckboxKeepProps) => {
  
  const onChange: CheckboxProps['onChange'] = (e: CheckboxChangeEvent) => {
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
          <label htmlFor={labelTreated} className='text-pretty w-10/12'>{label}</label>
          <Checkbox id={labelTreated} value={label} onChange={onChange} checked={isChecked(label)} />
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
