import { NextResponse } from "next/server";
import { library } from "@/library/data";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const book = library.find((b) => b.id === params.id);
  return NextResponse.json(book || {});
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const data = await req.json();
  const index = library.findIndex((b) => b.id === params.id);
  if (index !== -1) library[index] = { ...library[index], ...data };
  return NextResponse.json(library[index]);
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const index = library.findIndex((b) => b.id === params.id);
  if (index !== -1) library.splice(index, 1);
  return NextResponse.json({ deleted: true });
}
