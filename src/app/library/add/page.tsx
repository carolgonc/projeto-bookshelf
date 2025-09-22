import { BookForm } from "@/components/BookForm";

export default function AddBookPage() {
  return (
    <main className="container mx-auto p-4 md:p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Adicionar Novo Livro
      </h1>
      <BookForm />
    </main>
  );
}
