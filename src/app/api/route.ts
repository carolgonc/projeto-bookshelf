import { NextResponse } from "next/server";

let books = []; // Inicialmente vazio, substitua por data real ou use JSON

export async function GET() {
  return NextResponse.json(books);
}

export async function POST(req: Request) {
  const book = await req.json();
  book.id = Date.now().toString();
  books.push(book);
  return NextResponse.json(book, { status: 201 });
}
