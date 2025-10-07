"use client";
import { useBooks } from "@/context/BooksContext";
import BookCard from "./BookCard";

export default function BookList() {
  const { books } = useBooks();

  if (!books || books.length === 0) {
    return <p className="text-center text-muted-foreground">Nenhum livro encontrado.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
