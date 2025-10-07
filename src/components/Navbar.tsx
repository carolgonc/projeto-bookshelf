"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Início" },
    { href: "/books", label: "Livros" },
    { href: "/categories", label: "Categorias" },
  ];

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50 transition-colors duration-300">
      {/* Logo / Título */}
      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 hover:opacity-90 transition">
        <Link href="/">BookShelf</Link>
      </div>

      {/* Links de navegação */}
      <div className="flex items-center gap-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400 ${
              pathname === link.href
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-700 dark:text-gray-200"
            }`}
          >
            {link.label}
          </Link>
        ))}

        {/* Alternância de tema */}
        <ThemeToggle />
      </div>
    </nav>
  );
}
