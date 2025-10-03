"use client";
import { Book } from "@/types";
import Image from "next/image";

interface Props {
  book: Book;
}

export default function BookCard({ book }: Props) {
  return (
    <div className="border rounded-md p-4 shadow-md dark:bg-gray-800 dark:text-white flex flex-col items-center">
      <Image
        src={book.image}
        alt={book.title}
        width={150}
        height={220}
        className="mb-4 rounded"
      />
      <h2 className="font-bold text-lg">{book.title}</h2>
      <p>Autor: {book.author}</p>
      <p>Gênero: {book.genre}</p>
      <p>Ano: {book.year}</p>
    </div>
  );
}
