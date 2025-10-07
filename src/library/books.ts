export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  category: string;
  image: string;
}

export const books: Book[] = [
  // Thriller
  {
    id: 1,
    title: "A Garota no Trem",
    author: "Paula Hawkins",
    description: "Suspense psicológico sobre segredos e observações da vida alheia.",
    category: "Thriller",
    image: "/library/images/a-garota-no-trem.jpg",
  },
  {
    id: 2,
    title: "Antes de Dormir",
    author: "S.J. Watson",
    description: "Uma mulher acorda todos os dias sem memória recente, tentando descobrir a verdade sobre si mesma.",
    category: "Thriller",
    image: "/library/images/antes-de-dormir.jpg",
  },

  // Ficção
  {
    id: 3,
    title: "A Verdade Sobre o Caso Harry Quebert",
    author: "Joël Dicker",
    description: "Mistério literário sobre um escritor investigando um crime antigo.",
    category: "Ficção",
    image: "/library/images/harry-quebert.jpg",
  },
  {
    id: 4,
    title: "O Sol é Para Todos",
    author: "Harper Lee",
    description: "Uma história sensível sobre justiça, racismo e crescimento no sul dos EUA.",
    category: "Ficção",
    image: "/library/images/o-sol-e-para-todos.jpg",
  },
  {
    id: 5,
    title: "Cem Anos de Solidão",
    author: "Gabriel García Márquez",
    description: "Uma saga familiar repleta de histórias únicas e personagens memoráveis.",
    category: "Ficção",
    image: "/library/images/cem-anos-de-solidao.jpg",
  },

  // Fantasia
  {
    id: 6,
    title: "O Hobbit",
    author: "J.R.R. Tolkien",
    description: "Aventuras de Bilbo Bolseiro em um mundo fantástico cheio de criaturas e jornadas épicas.",
    category: "Fantasia",
    image: "/library/images/o-hobbit.jpg",
  },
  {
    id: 7,
    title: "A Seleção",
    author: "Kiera Cass",
    description: "Uma distopia romântica onde garotas competem por atenção em um reino governado por castas.",
    category: "Fantasia",
    image: "/library/images/a-selecao.jpg",
  },

  // Romance
  {
    id: 8,
    title: "Orgulho e Preconceito",
    author: "Jane Austen",
    description: "Uma história clássica de amor, orgulho e mal-entendidos sociais na Inglaterra do século XIX.",
    category: "Romance",
    image: "/library/images/orgulho-e-preconceito.jpg",
  },
  {
    id: 9,
    title: "Como Eu Era Antes de Você",
    author: "Jojo Moyes",
    description: "Romance emocionante sobre amor e escolhas difíceis entre duas vidas muito diferentes.",
    category: "Romance",
    image: "/library/images/como-eu-era-antes-de-voce.jpg",
  },
  {
    id: 10,
    title: "O Amor nos Tempos do Cólera",
    author: "Gabriel García Márquez",
    description: "Uma história de amor duradouro e paixão, atravessando décadas de vidas e encontros.",
    category: "Romance",
    image: "/library/images/o-amor-nos-tempos-do-colera.jpg",
  },
];
