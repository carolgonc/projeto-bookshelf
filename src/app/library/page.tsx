import { books } from '@/data/initialBooks'
import { Button } from '@/components/ui/button'
import { BookList } from '@/components/BookList'
import Link from 'next/link'

export default function LibraryPage() {
  const booksCopy = books
  const allBooks = books

  console.log(booksCopy)

  return (
    <main>
      <div className="flex flex-col gap-6 p-8">
        <h1 className="text-3xl font-bold">Minha Biblioteca</h1>
        <BookList initialBooks={allBooks} />
      </div>
    </main>
  )
}
