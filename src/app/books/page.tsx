import Link from "next/link";
import { initialBooks } from "@/data/initialBooks";
import BookCard from "@/components/BookCard";

export default function BooksPage() {
  // Cria lista única de gêneros
  const genres = Array.from(new Set(initialBooks.map((book) => book.genre)));

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Todos os livros</h1>

      {/* Navegação por gênero */}
      <div className="flex flex-wrap gap-4 mb-8">
        {genres.map((genre) => (
          <Link
            key={genre}
            href={`/genre/${genre}`}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            {genre}
          </Link>
        ))}
      </div>

      {/* Lista de livros */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {initialBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
