import { z } from "zod";

export const bookSchema = z.object({
  title: z.string().min(2, "Título obrigatório"),
  author: z.string().min(2, "Autor obrigatório"),
  cover: z.string().url("URL inválida").optional(),
  synopsis: z.string().optional(),
  rating: z.number().min(0).max(5).optional(),
});
