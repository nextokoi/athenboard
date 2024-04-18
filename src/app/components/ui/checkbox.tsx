
'use client'
import { Checkbox, Label } from 'keep-react'

type CheckboxProps = {
  data: string[]
}

export const CheckboxComponent = ({ data }: CheckboxProps) => {
  const renderData = () => {
    return data.map((label, index) => {
      const labelTreated = label.split(' ').join('-').toLowerCase()
      return (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <div key={index} className='flex items-center justify-between'>
          <Label htmlFor={labelTreated} className='text-lg text-pretty w-10/12'>{label}</Label>
          <Checkbox id={labelTreated} />
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
