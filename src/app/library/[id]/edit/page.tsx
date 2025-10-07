<<<<<<< HEAD
"use client";
import { useBooks } from "@/context/BooksContext";
import { useParams, useRouter } from "next/navigation";
import BookForm from "@/components/BookForm";

export default function EditBookPage() {
  const { id } = useParams();
  const { books, updateBook } = useBooks();
  const router = useRouter();

  const book = books.find((b) => b.id === id);

  if (!book) return <p>Livro não encontrado</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Editar Livro</h1>
      <BookForm
        defaultValues={book}
        onSubmit={(data) => {
          updateBook(id, data);
          router.push(`/library/${id}`);
        }}
      />
    </div>
  );
=======
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
>>>>>>> origin/main
}
