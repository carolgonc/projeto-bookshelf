"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BookCreate() {
  const [title, setTitle] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await fetch("/api/books", {
      method: "POST",
      body: JSON.stringify({ id: Date.now().toString(), title }),
      headers: { "Content-Type": "application/json" },
    });
    router.push("/books");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título" />
      <button type="submit">Criar</button>
    </form>
  );
}
