'use client'

import { DatePicker } from "keep-react"
import { useEffect, useState } from "react";

interface DatePickerProps {
  onDateChange: (date: Date | null) => void
}

export const DatePickerComponent = ({ onDateChange } : DatePickerProps) => {
  const [date, setDate] = useState<Date | null>(null)

  useEffect(() => {
    onDateChange(date)
  }, [date, onDateChange])
  
  return (
    <DatePicker singleDate={setDate} placeholder="Date / Month / Year">
      <DatePicker.SingleDate />
    </DatePicker>
  );
}