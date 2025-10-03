"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-900">
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/books">Books</Link>
      </div>
      <ThemeToggle />
    </nav>
  );
}
