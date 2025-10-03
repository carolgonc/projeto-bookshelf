import { NextResponse } from "next/server";
import { getBookById, updateBook, deleteBook } from "@/lib/books";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const book = getBookById(params.id);
  if (!book) return NextResponse.json({ message: "Book not found" }, { status: 404 });
  return NextResponse.json(book);
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const data = await request.json();
  const updated = updateBook(params.id, data);
  if (!updated) return NextResponse.json({ message: "Book not found" }, { status: 404 });
  return NextResponse.json(updated);
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const deleted = deleteBook(params.id);
  if (!deleted) return NextResponse.json({ message: "Book not found" }, { status: 404 });
  return NextResponse.json({ message: "Book deleted" });
}
