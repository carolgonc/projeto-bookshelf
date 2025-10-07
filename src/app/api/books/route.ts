import { NextResponse } from "next/server";
import { initialBooks } from "@/data/initialBooks";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const books = await prisma.book.findMany();
  return NextResponse.json(books);
}


let books = [...initialBooks];


export async function POST(req: Request) {
  const newBook = await req.json();
  newBook.id = String(Date.now());
  books.push(newBook);
  return NextResponse.json(newBook, { status: 201 });
}
