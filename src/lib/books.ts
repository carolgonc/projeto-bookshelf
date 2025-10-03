import { books } from "@/library/books";
import { Book } from "@/types";

let bookList = [...books];

export const getBooks = (): Book[] => {
  return bookList;
};

export const getBookById = (id: string): Book | undefined => {
  return bookList.find(b => b.id === id);
};

export const addBook = (book: Book): void => {
  bookList.push(book);
};

export const updateBook = (id: string, updatedBook: Partial<Book>): Book | undefined => {
  const index = bookList.findIndex(b => b.id === id);
  if (index !== -1) {
    bookList[index] = { ...bookList[index], ...updatedBook };
    return bookList[index];
  }
  return undefined;
};

export const deleteBook = (id: string): boolean => {
  const initialLength = bookList.length;
  bookList = bookList.filter(b => b.id !== id);
  return bookList.length < initialLength;
};
