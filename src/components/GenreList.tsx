"use client";

import Link from "next/link";

export default function GenreList({ genre, books }) {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center capitalize">
        Livros de {genre}
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-200"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                {book.author}
              </p>
              <Link
                href={`/books/${book.id}`}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Ver detalhes →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
