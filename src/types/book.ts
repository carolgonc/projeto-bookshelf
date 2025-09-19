export type ReadStatus = "QUERO_LER" | "LENDO" | "LIDO" | "PAUSADO" | "ABANDONADO";

export interface Book {
    id: string;
    title: string;
    author: string;
    genre?: string;
    year?: number;
    pages?: number;
    rating?: number;
    synopsis?: string;
    cover?: string;
    status?: ReadStatus;
}