import { NextResponse } from "next/server";
import { getBooks, addBook } from "@/lib/books";

export async function GET() {
  const books = getBooks();
  return NextResponse.json(books);
}

export async function POST(request: Request) {
  const data = await request.json();
  addBook(data);
  return NextResponse.json({ message: "Book added!" });
}
