import { Book } from '@/types/book'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { StarRating } from '@/components/StarRating'
import { ArrowRight } from 'lucide-react'

export function BookCard({ book }: { book: Book }) {
  return (
    <Card className="flex flex-col overflow-hidden h-full bg-white/20 backdrop-blur-lg border lg:p-6 border-white/30 shadow-lg">
      <CardHeader className="w-full">
        <Link href={`/library/${book.id}`}>
          <div className="relative h-86 w-full">
            <Image
              src={book.cover || '/fallback.png'}
              alt="{`Capa de ${book.title}`}"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        </Link>
      </CardHeader>
      <CardContent className="flex flex-col">
        <CardTitle className="text-base font-bold leading-tight">
          {book.title}
        </CardTitle>
        <p className="text-sm text-muted-foreground">{book.author}</p>
        <p className="text-sm text-muted-foreground">{book.year}</p>
        <div className="flex flex-col py-4 gap-2">
          <StarRating rating={book.rating} />
          {book.genre && <Badge variant="default">{book.genre}</Badge>}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button asChild variant="default" className="rounded-4xl">
          <Link href={`/library/${book.id}`}>
            <ArrowRight />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
