import { Book } from "@/types/book";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StarRating } from "@/components/StarRating";

export function BookCard({ book }: { book: Book }) {
  return (
    <Card className="flex flex-col overflow-hidden h-full bg-white/20 backdrop-blur-lg border lg:p-6 border-white/30 shadow-lg">
      <CardHeader className="w-full">
        <Link href={`/library/${book.id}`}>
          <div className="relative h-64 w-full">
            <Image
              src={book.cover || "/fallback.png"}
              alt="{`Capa de ${book.title}`}"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        </Link>
      </CardHeader>
      <CardContent className="p-4 flex-grow flex flex-col">
        <CardTitle className="text-base font-bold leading-tight">
          {book.title}
        </CardTitle>
        <p className="text-sm text-muted-foreground">{book.author}</p>
        <p className="text-sm text-muted-foreground">{book.year}</p>
        <StarRating rating={book.rating} className="mt-3" />
        <div className="py-4">
          {book.genre && <Badge variant="outline">{book.genre}</Badge>}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link href={`/library/${book.id}`}>See more</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
