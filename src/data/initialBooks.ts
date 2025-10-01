import { Book, ReadStatus } from '@/types/book'

export let books: Book[] = [
  {
    id: '1',
    title: 'Verity',
    author: 'Colleen Hoover',
    year: 2018,
    genre: 'Thriller',
    cover:
      'https://m.media-amazon.com/images/I/9171o6AmnCL._UF1000,1000_QL80_.jpg',
    pages: 320,
    rating: 4,
    status: ReadStatus.LIDO,
    synopsis:
      'Verity é um thriller psicológico onde a escritora Lowen Ashleigh, em dificuldades financeiras, é contratada para terminar a série de livros da famosa autora Verity Crawford, que está em coma devido a um acidente. Enquanto vasculha os manuscritos, Lowen descobre um diário secreto de Verity, revelando segredos perturbadores e verdades chocantes sobre o casal e a família, o que a leva a questionar a realidade e sua própria segurança.',
  },
  {
    id: '2',
    title: 'Três',
    author: 'Valérie Perrin',
    year: 2023,
    genre: 'Ficção',
    cover:
      'https://m.media-amazon.com/images/I/6103XjAz8iL._UF1000,1000_QL80_.jpg',
    pages: 528,
    status: ReadStatus.LENDO,
    synopsis:
      'Trinta anos depois de se conhecerem, Adrien, Étienne e Nina se tornaram estranhos uns para os outros. A amizade que eles juraram que seria eterna não existe mais. Porém, um acontecimento inesperado pode trazer à tona segredos enterrados há muito tempo.',
  },
  {
    id: '3',
    title: 'A empregada',
    author: 'Freida McFadden',
    year: 2023,
    genre: 'Thriller',
    cover: 'https://m.media-amazon.com/images/I/81BdpMhm3iL._SL1500_.jpg',
    pages: 304,
    status: ReadStatus.LENDO,
    synopsis:
      'A Empregada é um suspense psicológico de Freida McFadden sobre Millie, uma empregada doméstica que trabalha para o rico casal Nina e Andrew Winchester. Enquanto Nina suja a casa intencionalmente e tortura o marido com manipulações, Millie, uma ex-presidiária com um passado sombrio, tenta manter a cabeça no lugar, mas acaba imaginando a vida da patroa e se envolve em segredos mais perigosos que os seus. O livro explora a dinâmica da família, com Millie, Nina, Andrew e a filha Cecelia, revelando que ninguém é quem parece ser.',
  },
  {
    id: '4',
    title: 'Katábasis',
    author: 'R.F. Kuang',
    year: 2025,
    genre: 'Fantasia',
    cover: 'https://m.media-amazon.com/images/I/916c3LpFtkL.jpg',
    pages: 480,
    status: ReadStatus.QUERO_LER,
    synopsis:
      'Katábasis, de R.F. Kuang, conta a história de duas estudantes de pós-graduação rivais que descem ao Inferno para resgatar a alma do seu falecido orientador, Professor Grimes, precisando das suas cartas de recomendação para o futuro na academia. Para isso, usam referências da mitologia grega (Orfeu) e italiana (Dante), e precisam ultrapassar os limites do Inferno e da própria sanidade, numa jornada que explora temas como o custo do conhecimento, a misoginia académica e as complexidades das relações humanas.',
  },
  {
    id: '5',
    title: 'Tudo que deixamos inacabado',
    author: 'Rebecca Yarros',
    year: 2024,
    genre: 'Romance',
    cover: 'https://m.media-amazon.com/images/I/8148ztBU3BL.jpg',
    pages: 432,
    status: ReadStatus.LIDO,
    synopsis:
      'Tudo Que Deixamos Inacabado de Rebecca Yarros é um romance que entrelaça duas histórias de amor paralelas, uma no presente e outra no passado, focando em Georgia, que após um divórcio traumático precisa concluir o último manuscrito de sua bisavó, a escritora Scarlett. Georgia é forçada a trabalhar com o autor best-seller Noah Harrison, que deve finalizar a obra de Scarlett, e juntos eles descobrem os segredos de um amor intenso que aconteceu durante a Segunda Guerra Mundial, abordando temas como perdas, segundas chances e a complexidade dos finais.',
  },
]
