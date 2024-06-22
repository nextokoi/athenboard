'use client'

import { DatePicker } from 'antd'

interface DatePickerProps {
  onDateChange: (date: Date | undefined) => void
  date: Date | undefined
}

export const DatePickerComponent = ({ onDateChange, date }: DatePickerProps) => {
  return (
    <DatePicker onChange={onDateChange} value={date} className="w-full py-3"/>
  )
}
