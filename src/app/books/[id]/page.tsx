import { useBooks } from "@/context/BooksContext";
import { useParams } from "next/navigation";

export default function BookDetailPage() {
  const { books } = useBooks();
  const { id } = useParams();

  const book = books.find((b) => b.id === Number(id));

  if (!book) {
    return <div>Livro não encontrado.</div>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <p>Autor: {book.author}</p>
      <p>{book.description}</p>
      <img src={book.image} alt={book.title} />
    </div>
  );
}
