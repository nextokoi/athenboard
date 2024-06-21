'use client'

import { format } from 'date-fns'
import { Calendar } from 'phosphor-react'
/* import { Button, DatePicker, Popover } from 'keep-react' */
import { DatePicker } from 'antd'


interface DatePickerProps {
  onDateChange: (date: Date | undefined) => void
  date: Date | undefined
}

export const DatePickerComponent = ({ onDateChange, date }: DatePickerProps) => {
  return (
/*     <Popover showArrow={false} placement="bottom-start">
      <Popover.Action asChild>
        <Button
          className="w-full justify-start gap-2 rounded-xl border border-metal-50 px-4 text-left text-body-4 font-normal hover:bg-white active:focus:scale-100"
          variant="outline"
          color="secondary">
          <Calendar size={20} color="#AFBACA" />
          {date ? format(date ?? new Date(), 'PPP') : <span>Select Your Date</span>}
        </Button>
      </Popover.Action>
      <Popover.Content className="z-50 max-w-min">
        <DatePicker mode="single" selected={date} onSelect={onDateChange} showOutsideDays={true} />
      </Popover.Content>
    </Popover> */
    <DatePicker onChange={onDateChange} value={date} className="w-full py-3"/>
  )
}
