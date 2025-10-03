import BooksGrid from "@/components/BooksGrid";

interface GenrePageProps {
  params: { genre: string };
}

export default function GenrePage({ params }: GenrePageProps) {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{params.genre}</h1>
      <BooksGrid genre={params.genre} />
    </div>
  );
}
