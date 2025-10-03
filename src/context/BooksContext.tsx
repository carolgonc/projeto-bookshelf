"use client"; // obrigatoriamente para usar React Context

import { createContext, useContext, useState, ReactNode } from "react";
import { Book } from "@/types/book";
import { initialBooks } from "@/data/initialBooks";

interface BooksContextType {
  books: Book[];
  addBook: (book: Book) => void;
  getBookById: (id: string) => Book | undefined;
}

const BooksContext = createContext<BooksContextType | null>(null);

export const useBooks = () => {
  const context = useContext(BooksContext);
  if (!context) throw new Error("useBooks must be used within a BooksProvider");
  return context;
};

export const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [books, setBooks] = useState<Book[]>(initialBooks);

  const addBook = (book: Book) => setBooks((prev) => [...prev, book]);

  const getBookById = (id: string) => books.find((b) => b.id === id);

  return (
    <BooksContext.Provider value={{ books, addBook, getBookById }}>
      {children}
    </BooksContext.Provider>
  );
};
