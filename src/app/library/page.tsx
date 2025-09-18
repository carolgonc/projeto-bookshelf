import { initialBooks } from "@/data/initialBooks";
import { BookCard } from "@/components/ui/BookCard";

export default function LibraryPage() {
  return (
    <main className="container p-4 md:p-6">
      <h1 className="text-3xl font-bold p-8">Minha Biblioteca</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {initialBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </main>
  );
}
