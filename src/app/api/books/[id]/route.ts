import { NextResponse } from "next/server";
import { initialBooks } from "@/data/initialBooks";

let books = [...initialBooks];

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const book = books.find((b) => b.id === params.id);
  if (!book) return NextResponse.json({ error: "Livro não encontrado" }, { status: 404 });
  return NextResponse.json(book);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const updated = await req.json();
  books = books.map((b) => (b.id === params.id ? { ...b, ...updated } : b));
  return NextResponse.json(updated);
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  books = books.filter((b) => b.id !== params.id);
  return NextResponse.json({ message: "Livro removido com sucesso" });
}
