import { NextResponse } from "next/server";

let categories = ["Thriller", "Ficção", "Fantasia", "Romance"];

export async function GET() {
  return NextResponse.json(categories);
}

export async function POST(req: Request) {
  const { genre } = await req.json();
  if (!genre) return NextResponse.json({ error: "Gênero obrigatório" }, { status: 400 });
  if (!categories.includes(genre)) categories.push(genre);
  return NextResponse.json({ message: "Gênero adicionado", genre });
}

export async function DELETE(req: Request) {
  const { genre } = await req.json();
  categories = categories.filter((c) => c !== genre);
  return NextResponse.json({ message: "Gênero removido", genre });
}
