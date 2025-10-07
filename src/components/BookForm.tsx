<<<<<<< HEAD
"use client";

import { useState } from "react";

interface BookFormProps {
  onSubmit: (data: { title: string; author: string; genre: string }) => void;
}

export default function BookForm({ onSubmit }: BookFormProps) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, author, genre });
    setTitle("");
    setAuthor("");
    setGenre("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-2 border rounded dark:bg-gray-700 dark:text-gray-100"
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="p-2 border rounded dark:bg-gray-700 dark:text-gray-100"
      />
      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        className="p-2 border rounded dark:bg-gray-700 dark:text-gray-100"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Add Book
      </button>
    </form>
  );
=======
'use client'

import { useActionState, useEffect, useRef, useState } from 'react'
import { useFormStatus } from 'react-dom'
import { addBook, updateBook, FormState } from '@/app/actions'
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
import { Book } from 'db/generated/prisma'

interface BookFormProps {
  initialData?: Book
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Salvando...' : 'Salvar Livro'}
    </Button>
  )
}

export function BookForm({ initialData }: BookFormProps) {
  const isEditMode = Boolean(initialData)
  const actionToUse = isEditMode ? updateBook : addBook
  const initialState: FormState = { message: '', success: false }
  const [state, formAction] = useActionState(actionToUse, initialState)

  const formRef = useRef<HTMLFormElement>(null)
  const [coverPreview, setCoverPreview] = useState<string>(
    initialData?.cover || ''
  )

  useEffect(() => {
    if (state) {
      if (state.success) {
        if (!isEditMode) {
          formRef.current?.reset()
          setCoverPreview('')
        }
      }
    }
  }, [state, isEditMode])

  const currentYear = new Date().getFullYear()

  return (
    <form ref={formRef} action={formAction} className="space-y-6">
      {isEditMode && <input type="hidden" name="id" value={initialData?.id} />}
      <div>
        <Label htmlFor="title">Título *</Label>
        <Input
          id="title"
          name="title"
          required
          defaultValue={initialData?.title}
        />
        {state && state.errors?.title && (
          <p className="text-sm text-red-500 mt-1">{state.errors.title[0]}</p>
        )}
      </div>
      <div>
        <Label htmlFor="author">Autor *</Label>
        <Input
          id="author"
          name="author"
          required
          defaultValue={initialData?.author}
        />
        {state && state.errors?.author && (
          <p className="text-sm text-red-500 mt-1">{state.errors.author[0]}</p>
        )}
      </div>
      <div>
        <Label htmlFor="cover">URL da Capa</Label>
        <Input
          id="cover"
          name="cover"
          defaultValue={initialData?.cover || ''}
          onChange={(e) => setCoverPreview(e.target.value)}
        />
        {state && state.errors?.cover && (
          <p className="text-sm text-red-500">{state.errors.cover[0]}</p>
        )}
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
            placeholder="Ex: Ficção Científica, Romance, Fantasia"
            defaultValue={initialData?.genre || ''}
          />
        </div>

        <div>
          <Label htmlFor="status">Status da Leitura</Label>
          <Select name="status" defaultValue={initialData?.status || ''}>
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
          <Input
            id="pages"
            name="pages"
            type="number"
            defaultValue={initialData?.pages || 0}
          />
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
            defaultValue={initialData?.rating || 0}
          />
        </div>
        <div>
          <Label htmlFor="rating">Ano de publicação</Label>
          <Input
            id="year"
            name="year"
            type="number"
            min="0"
            max={currentYear}
            step="1"
            defaultValue={initialData?.year || 0}
          />
        </div>
        <div>
          <Label htmlFor="synopsis">Sinopse / Notas</Label>
          <Textarea
            id="synopsis"
            name="synopsis"
            placeholder="Suas anotações ou a sinopse do livro..."
            defaultValue={initialData?.synopsis || ''}
          />
        </div>
        <SubmitButton />

        {state && state.message && (
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
>>>>>>> origin/main
}
