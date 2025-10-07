"use client";
import { useBooks } from "@/context/BooksContext";
import BookCard from "./BookCard";

export default function BooksGrid({ genre }: { genre?: string }) {
  const { books } = useBooks();

  const filteredBooks = genre
    ? books.filter((b) => b.genre.toLowerCase() === genre.toLowerCase())
    : books;

  if (!filteredBooks.length) return <p>No books found.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {filteredBooks.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
