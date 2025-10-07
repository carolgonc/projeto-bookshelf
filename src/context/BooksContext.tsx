"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface Book {
  id: string;
  title: string;
  author: string;
  year: number;
  genre: string;
  cover: string;
  pages: number;
  rating?: number;
  status: string;
  synopsis: string;
}

interface BooksContextType {
  books: Book[];
}

const BooksContext = createContext<BooksContextType | undefined>(undefined);

export const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [books] = useState<Book[]>([
    {
      id: "1",
      title: "Verity",
      author: "Colleen Hoover",
      year: 2018,
      genre: "thriller",
      cover: "https://m.media-amazon.com/images/I/9171o6AmnCL._UF1000,1000_QL80_.jpg",
      pages: 320,
      rating: 4,
      status: "LIDO",
      synopsis:
        "Verity é um thriller psicológico onde Lowen Ashleigh é contratada para terminar a série da famosa autora Verity Crawford, que está em coma. Ao encontrar um manuscrito oculto, descobre segredos sombrios e precisa decidir o que é verdade.",
    },
    {
      id: "2",
      title: "Três",
      author: "Valérie Perrin",
      year: 2023,
      genre: "ficcao",
      cover: "https://m.media-amazon.com/images/I/6103XjAz8iL._UF1000,1000_QL80_.jpg",
      pages: 528,
      status: "LENDO",
      synopsis:
        "Três amigos inseparáveis prometem amizade eterna. Trinta anos depois, a promessa é quebrada e um acontecimento inesperado os força a encarar segredos do passado.",
    },
    {
      id: "3",
      title: "A Empregada",
      author: "Freida McFadden",
      year: 2023,
      genre: "thriller",
      cover: "https://m.media-amazon.com/images/I/81BdpMhm3iL._SL1500_.jpg",
      pages: 304,
      status: "LENDO",
      synopsis:
        "Millie é uma empregada doméstica com um passado sombrio. Trabalhando para um casal misterioso, ela descobre segredos perigosos que colocam sua vida em risco.",
    },
    {
      id: "4",
      title: "Katábasis",
      author: "R.F. Kuang",
      year: 2025,
      genre: "fantasia",
      cover: "https://m.media-amazon.com/images/I/91bJkD7W3AL._AC_UF1000,1000_QL80_.jpg",
      pages: 480,
      status: "QUERO_LER",
      synopsis:
        "Duas estudantes rivais descem ao Inferno para resgatar a alma do orientador morto. Uma jornada que mistura mitologia e crítica acadêmica em um cenário infernal.",
    },
    {
      id: "5",
      title: "Tudo Que Deixamos Inacabado",
      author: "Rebecca Yarros",
      year: 2024,
      genre: "romance",
      cover: "https://m.media-amazon.com/images/I/81GEOQomnsL._AC_UF1000,1000_QL80_.jpg",
      pages: 432,
      status: "LIDO",
      synopsis:
        "Georgia e Noah unem forças para terminar o último manuscrito de uma escritora lendária, e acabam descobrindo segredos e amores perdidos entre o passado e o presente.",
    },
    {
      id: "6",
      title: "O Príncipe Cruel",
      author: "Holly Black",
      year: 2018,
      genre: "fantasia",
      cover: "https://m.media-amazon.com/images/I/81AvcT6jhoL._AC_UF1000,1000_QL80_.jpg",
      pages: 384,
      status: "QUERO_LER",
      synopsis:
        "Jude Duarte, uma mortal criada no mundo das fadas, luta por poder e vingança em uma corte cheia de traições e segredos perigosos.",
    },
    {
      id: "7",
      title: "É Assim Que Acaba",
      author: "Colleen Hoover",
      year: 2016,
      genre: "romance",
      cover: "https://m.media-amazon.com/images/I/71iU1jxJkXL._AC_UF1000,1000_QL80_.jpg",
      pages: 368,
      status: "LIDO",
      synopsis:
        "Lily Bloom precisa tomar decisões difíceis quando o amor entra em conflito com o abuso. Um romance poderoso e comovente sobre coragem e autodescoberta.",
    },
  ]);

  return (
    <BooksContext.Provider value={{ books }}>{children}</BooksContext.Provider>
  );
};

export const useBooks = () => {
  const context = useContext(BooksContext);
  if (!context) throw new Error("useBooks deve ser usado dentro de BooksProvider");
  return context;
};
