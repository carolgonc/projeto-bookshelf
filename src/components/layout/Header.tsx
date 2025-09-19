"use client";

import Link from "next/link";
import { BookMarked, Menu, House, BookHeart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="flex justify-between shadow-lg px-12 bg-background">
      <div className="flex w-full h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-lg text-orange-950"
        >
          <BookMarked className="h-6 w-6" />
          BookShelf
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-orange-950 transition-colors hover:text-primary"
          >
            <House className="h-6 w-6" />
            Página Inicial
          </Link>
          <Link
            href="/library"
            className="flex items-center gap-2 text-sm font-medium text-orange-950 transition-colors hover:text-primary"
          >
            <BookHeart className="w-6 h-6" />
            Biblioteca
          </Link>
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-1/2 rounded">
              <SheetHeader className="text-left border">
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Navegue pelas seções do site.
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col items-center justify-center h-full gap-12">
                <SheetClose asChild>
                  <Link
                    href="/"
                    className="flex items-center gap-4 text-muted-foreground hover:text-foreground"
                  >
                    {" "}
                    <House className="h-6 w-6" />
                    Página Inicial
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/library"
                    className="flex items-center gap-4 text-muted-foreground hover:text-foreground"
                  >
                    {" "}
                    <BookHeart className="w-6 h-6" />
                    Minha Biblioteca
                  </Link>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
