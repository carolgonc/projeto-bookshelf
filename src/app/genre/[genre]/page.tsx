import { notFound } from "next/navigation";
import { initialBooks } from "@/data/initialBooks";
import BookCard from "@/components/BookCard";

interface GenrePageProps {
  params: {
    genre: string;
  };
}

export default function GenrePage({ params }: GenrePageProps) {
  const { genre } = params;

  // Filtra livros pelo gênero (case-insensitive)
  const booksByGenre = initialBooks.filter(
    (book) => book.genre.toLowerCase() === genre.toLowerCase()
  );

  if (booksByGenre.length === 0) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">{genre}</h1>
        <p className="text-gray-600 dark:text-gray-300">Nenhum livro encontrado.</p>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">{genre}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {booksByGenre.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
