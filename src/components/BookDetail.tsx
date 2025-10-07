"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useBooks } from "@/context/BooksContext";

export default function BookDetail() {
  const { id } = useParams();
  const { books } = useBooks();

  // Busca o livro com base no ID da rota
  const book = books.find((b) => b.id === id);

  if (!book) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
          Livro não encontrado 😢
        </h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
      {/* Capa */}
      <div className="relative w-64 h-96 lg:w-80 lg:h-[500px] mb-8 lg:mb-0 lg:mr-10 shadow-2xl rounded-xl overflow-hidden">
        <Image
          src={book.cover}
          alt={book.title}
          fill
          className="object-cover rounded-xl"
        />
      </div>

      {/* Detalhes */}
      <div className="max-w-2xl bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">
          {book.title}
        </h1>
        <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
          Autor: <span className="font-normal">{book.author}</span>
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
          Ano: {book.year}
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
          Gênero:{" "}
          <span className="capitalize text-blue-500 dark:text-blue-300">
            {book.genre}
          </span>
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
          Páginas: {book.pages}
        </p>
        <p className="text-lg mb-4">
          Status:{" "}
          <span
            className={`font-semibold ${
              book.status === "LIDO"
                ? "text-green-600"
                : book.status === "LENDO"
                ? "text-yellow-600"
                : "text-blue-600"
            }`}
          >
            {book.status === "LIDO"
              ? "Lido"
              : book.status === "LENDO"
              ? "Lendo"
              : "Quero Ler"}
          </span>
        </p>

        <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
          {book.synopsis}
        </p>
      </div>
    </div>
  );
}
