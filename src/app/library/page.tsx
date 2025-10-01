import { books } from '@/data/initialBooks'
import { BookList } from '@/components/BookList'

export default function LibraryPage() {
  const allBooks = books

  return (
    <main>
      <div className="flex flex-col gap-6 p-8">
        <h1 className="text-3xl font-bold">Minha Biblioteca</h1>
        <BookList initialBooks={allBooks} />
      </div>
    </main>
  )
}
