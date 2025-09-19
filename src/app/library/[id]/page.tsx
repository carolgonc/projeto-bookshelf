import { initialBooks } from "@/data/initialBooks";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export default function BookDetailPage({ params }: { params: { id: string } }) {
  const book = initialBooks.find((b) => b.id === params.id);

  if (!book) {
    return (
      <main className="container p-4 md:p-6 text-center">
        <h1 className="text-2xl font-bold">Livro não encontrado! :(</h1>
      </main>
    );
  }

  return (
    <main className="container p-4 md:p-6">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-1 flex flex-col gap-4">
          <div className="relative w-full" style={{ aspectRatio: "2 / 3" }}>
            <Image
              src={book.cover || "/fallback.png"}
              alt={`Capa de ${book.title}`}
              fill
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="flex gap-2 sm:flex-col">
            <Button asChild className="w-full">
              <Link href={`/library/${book.id}/edit`}>Editar</Link>
            </Button>
            <Button
              variant="destructive"
              className="w-full cursor-pointer hover:bg-red-700"
            >
              Excluir
            </Button>
          </div>
        </div>
        <div className="md:col-span-2">
          {book.genre && <Badge>{book.genre}</Badge>}
          <h1 className="text-4xl font-bold mt-2">{book.title}</h1>
          <h2 className="text-xl text-muted-foreground">{book.author}</h2>
          <div className="flex items-center gap-1 mt-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className={`h-5 w-5 ${
                  book.rating && index < book.rating
                    ? "text-yellow-500 fill-yellow-500"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <div className="mt-6 space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Sinopse</h3>
              <p className="text-justify text-muted-foreground">
                {book.synopsis}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Status da Leitura</h3>
              <p className="text-muted-foreground">{book.status}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Total de páginas</h3>
              <p className="text-muted-foreground">
                {book.pages || "Não informado"}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Ano de publicação</h3>
              <p className="text-muted-foreground">{book.year}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
