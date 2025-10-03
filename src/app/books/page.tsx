import { getBooks } from "@/lib/books";
import BookCard from "@/components/BookCard";

export default function BooksPage() {
  const books = getBooks();

  if (!books || books.length === 0) {
    return <p className="p-4">No books found.</p>;
  }

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {books.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
