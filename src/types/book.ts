// src/types/book.ts

export type ReadingStatus = 
  | 'QUERO_LER'
  | 'LENDO' 
  | 'LIDO'
  | 'PAUSADO'
  | 'ABANDONADO';

export type Genre = 
  | 'Literatura Brasileira'
  | 'Ficção Científica'
  | 'Realismo Mágico'
  | 'Ficção'
  | 'Fantasia'
  | 'Romance'
  | 'Biografia'
  | 'História'
  | 'Autoajuda'
  | 'Tecnologia'
  | 'Programação'
  | 'Negócios'
  | 'Psicologia'
  | 'Filosofia'
  | 'Poesia';

export interface Book {
  id: string;
  title: string; // obrigatório
  author: string; // obrigatório
  genre?: Genre;
  year?: number;
  pages?: number;
  currentPage?: number;
  rating?: number; // 1-5 estrelas
  synopsis?: string;
  cover?: string; // URL da capa
  status?: ReadingStatus;
  isbn?: string;
  personalNotes?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface LibraryStats {
  totalBooks: number;
  currentlyReading: number;
  finishedBooks: number;
  totalPagesRead: number;
}

export interface BookFormData {
  title: string;
  author: string;
  genre?: Genre;
  year?: number;
  pages?: number;
  currentPage?: number;
  rating?: number;
  synopsis?: string;
  cover?: string;
  status?: ReadingStatus;
  isbn?: string;
  personalNotes?: string;
}

// Constantes para usar nos selects dos formulários
export const READING_STATUS_OPTIONS = [
  { value: 'QUERO_LER', label: 'Quero Ler' },
  { value: 'LENDO', label: 'Lendo' },
  { value: 'LIDO', label: 'Lido' },
  { value: 'PAUSADO', label: 'Pausado' },
  { value: 'ABANDONADO', label: 'Abandonado' }
] as const;

export const GENRE_OPTIONS = [
  { value: 'Literatura Brasileira', label: 'Literatura Brasileira' },
  { value: 'Ficção Científica', label: 'Ficção Científica' },
  { value: 'Realismo Mágico', label: 'Realismo Mágico' },
  { value: 'Ficção', label: 'Ficção' },
  { value: 'Fantasia', label: 'Fantasia' },
  { value: 'Romance', label: 'Romance' },
  { value: 'Biografia', label: 'Biografia' },
  { value: 'História', label: 'História' },
  { value: 'Autoajuda', label: 'Autoajuda' },
  { value: 'Tecnologia', label: 'Tecnologia' },
  { value: 'Programação', label: 'Programação' },
  { value: 'Negócios', label: 'Negócios' },
  { value: 'Psicologia', label: 'Psicologia' },
  { value: 'Filosofia', label: 'Filosofia' },
  { value: 'Poesia', label: 'Poesia' }
] as const;