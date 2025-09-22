"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";

const BookSchema = z.object({
    title: z.string().min(1, "Título é obrigatório"),
    author: z.string().min(1, "Autor é obrigatório"),
    cover: z.string().url("Deve ser uma URL válida").optional().or(z.literal('')),
    genre: z.string().optional(),
    status: z.string().optional(),
    pages: z.coerce.number().optional(),
    rating: z.coerce.number().min(0).max(5).optional(),
    synopsis: z.string().optional(),
  });

export interface FormState {
    message: string;
    errors?: {
        [key: string]: string[] | undefined;
    };
    success: boolean;
}

export async function addBook(prevState: FormState, formData: FormData): Promise<FormState> {
    const validateFields = BookSchema.safeParse(Object.fromEntries(formData.entries()));

    if (!validateFields.success) {
        return {
            message: "Falha na validação. Verifique os campos.",
            errors: validateFields.error.flatten().fieldErrors,
            success: false,
        };
    }

    console.log("Livro recebido no servidor:", validateFields.data);
    // futuramente salvar em banco de dados.

    revalidatePath("/library");
    return {message: `Livro "${validateFields.data.title}" adicionado!`, success: true};
}