
"use client"
import { useState } from "react"
import { DatePicker } from "keep-react"

export const DatePickerComponent = () => {
  const [date, setDate] = useState<Date | null>(null)
  
  return (
    <DatePicker singleDate={setDate} placeholder="Date / Month / Year">
      <DatePicker.SingleDate />
    </DatePicker>
  );
}
