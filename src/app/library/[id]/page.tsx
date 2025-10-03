"use client";
import { useBooks } from "@/context/BooksContext";
import { useParams, useRouter } from "next/navigation";

export default function BookDetailPage() {
  const { id } = useParams();
  const { books, deleteBook } = useBooks();
  const router = useRouter();

  const book = books.find((b) => b.id === id);

  if (!book) return <p>Livro não encontrado</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold">{book.title}</h1>
      <p>Autor: {book.author}</p>
      <p>{book.synopsis}</p>
      <button
        onClick={() => {
          deleteBook(id);
          router.push("/library");
        }}
        className="btn btn-danger"
      >
        Excluir
      </button>
    </div>
  );
}
