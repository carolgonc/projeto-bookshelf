import { Book } from "@/types/book";

export const initialBooks: Book[] = [
  {
    id: "1",
    title: "A Garota no Trem",
    author: "Paula Hawkins",
    year: 2015,
    genre: "Thriller",
    cover: "https://m.media-amazon.com/images/I/81UwzDUFktL._SL1500_.jpg",
    pages: 378,
    rating: 5,
    status: "LIDO",
    synopsis:
      "Rachel observa o casal perfeito todos os dias do trem, até presenciar algo que muda sua vida completamente.",
  },
  {
    id: "2",
    title: "A Verdade Sobre o Caso Harry Quebert",
    author: "Joël Dicker",
    year: 2014,
    genre: "Ficção",
    cover: "https://m.media-amazon.com/images/I/81Sz6SV3xIL._SL1500_.jpg",
    pages: 608,
    rating: 5,
    status: "LENDO",
    synopsis:
      "Um jovem escritor investiga o assassinato de uma adolescente e os segredos de seu mentor literário.",
  },
  {
    id: "3",
    title: "O Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    genre: "Fantasia",
    cover: "https://m.media-amazon.com/images/I/91b0C2YNSrL._SL1500_.jpg",
    pages: 310,
    rating: 5,
    status: "LIDO",
    synopsis:
      "Bilbo Bolseiro embarca em uma jornada épica repleta de perigos e descobertas ao lado de anões e magos.",
  },
  {
    id: "4",
    title: "Orgulho e Preconceito",
    author: "Jane Austen",
    year: 1813,
    genre: "Romance",
    cover: "https://m.media-amazon.com/images/I/81a4kCNuH+L._SL1500_.jpg",
    pages: 432,
    rating: 4,
    status: "LENDO",
    synopsis:
      "Elizabeth Bennet enfrenta o preconceito social e o orgulho de Mr. Darcy em uma história clássica de amor.",
  },
];
