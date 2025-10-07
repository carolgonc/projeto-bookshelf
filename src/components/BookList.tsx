"use client";

import Image from "next/image";
import Link from "next/link";
import { useBooks } from "@/context/BooksContext";

export default function BookList({ genre }: { genre?: string }) {
  const { books } = useBooks();

  // Filtra por gênero, se for passado via props
  const filteredBooks = genre
    ? books.filter((book) => book.genre.toLowerCase() === genre.toLowerCase())
    : books;

  return (
    <div className="p-6">
      {genre ? (
        <h1 className="text-3xl font-bold text-center mb-8 capitalize text-blue-600">
          {genre}
        </h1>
      ) : (
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
          Todos os Livros
        </h1>
      )}

      {filteredBooks.length === 0 ? (
        <p className="text-center text-gray-500 mt-10 text-lg">
          Nenhum livro encontrado neste gênero.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBooks.map((book) => (
            <Link
              key={book.id}
              href={`/books/${book.id}`}
              className="block bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative w-full h-80">
                <Image
                  src={book.cover}
                  alt={book.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-1 text-gray-900 dark:text-gray-100">
                  {book.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {book.author}
                </p>
                <p className="mt-2 text-sm text-blue-600 dark:text-blue-400 font-medium">
                  {book.genre.charAt(0).toUpperCase() + book.genre.slice(1)}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  {book.status === "LIDO"
                    ? "📗 Lido"
                    : book.status === "LENDO"
                    ? "📘 Lendo"
                    : "📙 Quero Ler"}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
