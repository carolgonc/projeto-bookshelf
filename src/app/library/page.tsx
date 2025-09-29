import { books } from '@/data/initialBooks'
import { BookCard } from '@/components/BookCard'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function LibraryPage() {
  const booksCopy = books

  console.log(booksCopy)

  return (
    <main className="container p-4 md:p-6">
      <h1 className="text-3xl font-bold p-8">Minha Biblioteca</h1>
      <div className="p-6">
        <Button type="submit">
          <Link href="/library/add">Adicionar um novo livro</Link>
        </Button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {booksCopy.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </main>
  )
}
