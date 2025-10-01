'use client'

import { useState, useMemo } from 'react'
import { Book } from '@/types/book'
import { Input } from './ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { BookCard } from './BookCard'
import { Button } from './ui/button'
import Link from 'next/link'

interface BookListProps {
  initialBooks: Book[]
}

export function BookList({ initialBooks }: BookListProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('todos')

  const genres = useMemo(
    () =>
      ['todos', ...new Set(initialBooks.map((book) => book.genre))] as string[],
    [initialBooks]
  )

  const filteredBooks = useMemo(() => {
    return initialBooks
      .filter((book) => {
        return selectedGenre === 'todos' || book.genre === selectedGenre
      })
      .filter((book) => {
        const searchLower = searchTerm.toLowerCase()
        return (
          book.title.toLocaleLowerCase().includes(searchLower) ||
          book.author.toLowerCase().includes(searchLower)
        )
      })
  }, [initialBooks, searchTerm, selectedGenre])

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="flex flex-col md:flex-row w-full lg:w-1/2 gap-4 ">
        <Button type="submit">
          <Link href="/library/add">Adicionar um novo livro</Link>
        </Button>
        <Input
          placeholder="Buscar por título ou autor..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="md:flex-1 border-amber-900 shadow-md"
        />
        <Select value={selectedGenre} onValueChange={setSelectedGenre}>
          <SelectTrigger className="w-full md:w-[200px]  border-amber-900 shadow-md">
            <SelectValue placeholder="Filtrar por gênero" />
          </SelectTrigger>
          <SelectContent className="text-amber-900">
            {genres.map((genre) => (
              <SelectItem key={genre} value={genre}>
                {genre === 'todos' ? 'Todos' : genre}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      {filteredBooks.length === 0 && (
        <div className="text-center col-span-full">
          <p className="text-lg font-medium">Nenhum livro encontrado!</p>
        </div>
      )}
    </div>
  )
}
