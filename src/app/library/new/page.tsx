"use client";
import { useBooks } from "@/context/BooksContext";
import BookForm from "@/components/BookForm";
import { useRouter } from "next/navigation";

export default function NewBookPage() {
  const { addBook } = useBooks();
  const router = useRouter();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Adicionar Livro</h1>
      <BookForm
        onSubmit={(data) => {
          addBook(data);
          router.push("/library");
        }}
      />
    </div>
  );
}
