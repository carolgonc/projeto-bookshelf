import { BookForm } from '@/components/BookForm'
import prisma from '@/lib/prisma'
import { notFound } from 'next/navigation'

export default async function EditBookPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const bookToEdit = await prisma.book.findUnique({
    where: {
      id: +id,
    },
  })

  if (!bookToEdit) {
    notFound()
  }

  return (
    <main>
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-3xl font-bold">Editar livro</h1>
        <BookForm initialData={bookToEdit} />
      </div>
    </main>
  )
}
