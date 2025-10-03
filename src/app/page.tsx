import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Library, CheckCircle2, BookType } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { DynamicCalendar } from '@/components/DynamicCalendar'
import prisma from '@/lib/prisma'

export default async function HomePage() {
  const books = await prisma.book.findMany()

  const totalBooks = books.length
  const finishedBooks = books.filter((book) => book.status === 'LIDO').length

  const totalPagesRead = books.reduce((accumulator, book) => {
    if (book.status === 'LIDO' && book.pages) {
      return accumulator + book.pages
    }
    return accumulator
  }, 0)

  const currentlyReading = books.filter((book) => book.status === 'LENDO')

  const genres = [
    ...new Set(books.map((book) => book.genre).filter(Boolean)),
  ] as string[]

  return (
    <main className="p-6 md:p-6">
      <h1 className="text-orange-950 text-3xl font-bold py-6 px-12">
        Dashboard
      </h1>
      <div className="flex items-center justify-center gap-12 p-12">
        <div className="lg:col-span-2 space-y-6 w-full">
          <Card className="bg-white/20 backdrop-blur-lg border border-white/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-orange-950 font-semibold">
                Lendo atualmente
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-row gap-8">
              {currentlyReading.length > 0 ? (
                currentlyReading.map((book) => (
                  <Link
                    href={`/library/${book.id}`}
                    key={book.id}
                    className="flex items-center gap-4 p-2 rounded-lg hover:bg-muted"
                  >
                    <Image
                      src={book.cover || '/fallback.png'}
                      alt={`Capa de ${book.title}`}
                      width={120}
                      height={140}
                      className="rounded-md object-cover"
                    />
                  </Link>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">
                  Nenhum livro sendo lido no momento.
                </p>
              )}
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-3 ">
            <Card className="text-orange-950 bg-white/20 backdrop-blur-lg border border-white/20 shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-sm font-medium">
                  Livros finalizados
                </CardTitle>
                <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold ">{finishedBooks}</div>
              </CardContent>
            </Card>
            <Card className="text-orange-950 bg-white/20 backdrop-blur-lg border border-white/20 shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-sm font-medium">
                  Total de páginas lidas
                </CardTitle>
                <BookType className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {totalPagesRead.toLocaleString('pt-BR')}
                </div>
              </CardContent>
            </Card>
            <Card className="text-orange-950 bg-white/20 backdrop-blur-lg border border-white/20 shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-sm font-medium">
                  Total de Livros
                </CardTitle>
                <Library className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalBooks}</div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="lg:col-span-1 w-max ">
          <DynamicCalendar />
        </div>
      </div>
      <div className="px-12">
        <Card className="text-orange-950 bg-white/20 backdrop-blur-lg border border-white/20 shadow-lg">
          <CardHeader>
            <CardTitle>Navegar por gênero</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {genres.map((genre) => (
              <Link href={`/library?genero=${genre}`} key={genre}>
                <Badge
                  variant="default"
                  className="hover:bg-secondary hover:text-secondary-foreground"
                >
                  {genre}
                </Badge>
              </Link>
            ))}
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
