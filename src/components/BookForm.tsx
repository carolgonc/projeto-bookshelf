'use client'

import { useActionState, useEffect, useRef, useState } from 'react'
import { useFormStatus } from 'react-dom'
import { addBook, FormState } from '@/app/actions'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from './ui/textarea'
import Image from 'next/image'
import { ReadStatus, ReadStatusLabel } from '@/types/book'
import { toast } from 'sonner'

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Salvando...' : 'Salvar Livro'}
    </Button>
  )
}

export function BookForm() {
  const initialState: FormState = { message: '', success: false }
  const [state, formAction] = useActionState(addBook, initialState)
  const formRef = useRef<HTMLFormElement>(null)
  const [coverPreview, setCoverPreview] = useState<string>('')

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset()
      setCoverPreview('')
    }
  }, [state])

  useEffect(() => {
    if (state.success) {
      toast.success(state.message)
    } else {
      toast.error(state.message)
    }
  }, [state])

  return (
    <form ref={formRef} action={formAction} className="space-y-6">
      <div>
        <Label htmlFor="title">Título *</Label>
        <Input id="title" name="title" required />
        {state.errors?.title && (
          <p className="text-sm text-red-500 mt-1">{state.errors.title[0]}</p>
        )}
      </div>
      <div>
        <Label htmlFor="author">Autor *</Label>
        <Input id="author" name="author" required />
        {state.errors?.author && (
          <p className="text-sm text-red-500 mt-1">{state.errors.author[0]}</p>
        )}
      </div>
      <div>
        <Label htmlFor="cover">URL da Capa</Label>
        <Input
          id="cover"
          name="cover"
          onChange={(e) => setCoverPreview(e.target.value)}
        >
          {state.errors?.cover && (
            <p className="text-sm text-red-500">{state.errors.cover[0]}</p>
          )}
        </Input>
      </div>
      {coverPreview && (
        <div>
          <Label htmlFor="cover">Preview da Capa</Label>
          <Image
            id="cover"
            src={coverPreview}
            alt="Preview da capa"
            width={100}
            height={150}
            className="rounded object-cover"
          />
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="genre">Gênero</Label>
          <Input
            id="genre"
            name="genre"
            placeholder="Ex: Romance, Fantasia, etc"
          ></Input>
        </div>
        <div>
          <Label htmlFor="status">Status da Leitura</Label>
          <Select name="status">
            <SelectTrigger id="status">
              <SelectValue placeholder="Selecione um status" />
            </SelectTrigger>
            <SelectContent>
              {Object.values(ReadStatus).map((s) => (
                <SelectItem key={s} value={s}>
                  {ReadStatusLabel[s]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="pages">Total de páginas</Label>
          <Input id="pages" name="pages" type="number" />
        </div>
        <div>
          <Label htmlFor="rating">Avaliação</Label>
          <Input
            id="rating"
            name="rating"
            type="number"
            min="0"
            max="5"
            step="1"
          />
        </div>
        <div>
          <Label htmlFor="synopsis">Sinopse / Notas</Label>
          <Textarea
            id="synopsis"
            name="synopsis"
            placeholder="Suas anotações ou a sinopse do livro..."
          />
        </div>

        <SubmitButton />

        {state.message && (
          <p
            className={`text-md ${
              state.success ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {state.message}
          </p>
        )}
      </div>
    </form>
  )
}
