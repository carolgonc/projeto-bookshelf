"use client";
import Image from "next/image";
import Link from "next/link";
import { Book } from "@/types/book";

export default function BookCard({ book }: { book: Book }) {
  return (
    <div className="bg-card shadow-lg rounded-xl p-4 hover:shadow-xl transition">
      <Image
        src={book.cover}
        alt={book.title}
        width={200}
        height={300}
        className="rounded-md mx-auto"
      />
      <h2 className="text-xl font-semibold mt-2">{book.title}</h2>
      <p className="text-sm text-muted-foreground">{book.author}</p>
      <Link
        href={`/library/${book.id}`}
        className="text-blue-500 hover:underline mt-2 inline-block"
      >
        Ver detalhes
      </Link>
    </div>
  );
}
