'use client'

import { FormState, updateBookStatusById } from '@/app/actions'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { books } from '@/data/initialBooks'
import { ReadStatus, ReadStatusLabel } from '@/types/book'
import { useState } from 'react'

interface SelectBookStatusProps {
  initialStatus?: ReadStatus
  bookId: number
}

export function SelectBookStatus({
  initialStatus,
  bookId,
}: SelectBookStatusProps) {
  const [status, setStatus] = useState<ReadStatus | undefined>(initialStatus)
  const initialState: FormState = { message: '', success: false }

  const handleOnValueChange = (newStatus: string) => {
    setStatus(newStatus as ReadStatus)
    updateBookStatusById(bookId, newStatus as ReadStatus)
  }

  return (
    <Select value={status} onValueChange={handleOnValueChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Adicionar à biblioteca" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {Object.values(ReadStatus).map((s) => (
            <SelectItem key={s} value={s}>
              {ReadStatusLabel[s]}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
