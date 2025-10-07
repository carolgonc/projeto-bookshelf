import { NextResponse } from "next/server";
import { initialBooks } from "@/data/initialBooks";

let books = [...initialBooks];

export async function GET() {
  return NextResponse.json(books);
}

export async function POST(req: Request) {
  const newBook = await req.json();
  newBook.id = String(Date.now());
  books.push(newBook);
  return NextResponse.json(newBook, { status: 201 });
}
