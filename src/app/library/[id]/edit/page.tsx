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
}
