import { NextResponse } from "next/server";

let categories: string[] = ["Ficção", "Aventura", "Drama"];

export async function GET() {
  return NextResponse.json(categories);
}

export async function POST(req: Request) {
  const { genre } = await req.json();
  if (!categories.includes(genre)) categories.push(genre);
  return NextResponse.json({ message: "Added" });
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const genre = searchParams.get("genre");
  if (genre) categories = categories.filter((g) => g !== genre);
  return NextResponse.json({ message: "Deleted" });
}
