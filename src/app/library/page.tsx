import { BookList } from '@/components/BookList'
import prisma from '@/lib/prisma'

export default async function LibraryPage() {
  const books = await prisma.book.findMany()

  return (
    <main>
      <div className="flex flex-col gap-6 p-8">
        <h1 className="text-3xl font-bold">Minha Biblioteca</h1>
        <BookList initialBooks={books} />
      </div>
    </main>
  )
}
