// export type ReadStatus = "QUERO_LER" | "LENDO" | "LIDO" | "PAUSADO" | "ABANDONADO";

export enum ReadStatus {
  QUERO_LER = 'QUERO_LER',
  LENDO = 'LENDO',
  LIDO = 'LIDO',
  PAUSADO = 'PAUSADO',
  ABANDONADO = 'ABANDONADO',
}

export const ReadStatusLabel: Record<ReadStatus, string> = {
  ABANDONADO: 'Abandonado',
  LENDO: 'Lendo',
  LIDO: 'Lido',
  PAUSADO: 'Pausado',
  QUERO_LER: 'Quero ler',
}

export interface Book {
  id: string
  title: string
  author: string
  genre?: string
  year?: number
  pages?: number
  rating?: number
  synopsis?: string
  cover?: string
  status?: ReadStatus
}
