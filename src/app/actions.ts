'use server'

import { z } from 'zod'
import { books } from '@/data/initialBooks'
import { Book, ReadStatus } from '@/types/book'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export interface FormState {
  message: string
  errors?: {
    [key: string]: string[] | undefined
  }
  success: boolean
}

const BookSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, 'Título é obrigatório'),
  author: z.string().min(1, 'Autor é obrigatório'),
  cover: z.string().url('Deve ser uma URL válida').optional().or(z.literal('')),
  genre: z.string().optional(),
  status: z.enum(ReadStatus).optional(),
  pages: z.coerce.number().optional(),
  rating: z.coerce.number().min(0).max(5).optional(),
  synopsis: z.string().optional(),
})

export async function addBook(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = BookSchema.safeParse(
    Object.fromEntries(formData.entries())
  )

  if (!validatedFields.success) {
    return {
      message: 'Falha na validação. Verifique os campos.',
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    }
  }

  const newBook: Book = {
    id: Date.now().toString(),
    ...validatedFields.data,
  }

  books.push(newBook)

  revalidatePath('/library')
  revalidatePath('/')

  return {
    message: `Livro "${newBook.title}" adicionado com sucesso!`,
    success: true,
  }
}

export async function deleteBook(bookId: string) {
  const bookIndex = books.findIndex((book) => book.id === bookId)

  if (bookIndex !== -1) {
    books.splice(bookIndex, 1)
  }

  revalidatePath('/library')

  redirect('/library')
}

export async function updateBook(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = BookSchema.safeParse(
    Object.fromEntries(formData.entries())
  )

  if (!validatedFields.success) {
    return {
      message: `Falha na validação. Verifique os campos. ${validatedFields.error}`,
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    }
  }

  const { id, ...bookData } = validatedFields.data

  if (!id) {
    return {
      message: 'ID do livro não foi encontrado para atualização.',
      success: false,
    }
  }

  const bookIndex = books.findIndex((book) => book.id === id)

  if (bookIndex === -1) {
    return { message: 'Livro não encontrado para atualizar.', success: false }
  }

  const oldBookData = books[bookIndex]
  const newBook = { ...oldBookData, bookData }
  books.splice(bookIndex, 1, newBook)

  revalidatePath(`/library/${id}/edit`)
  revalidatePath(`/library/${id}`)
  revalidatePath('/library')
  revalidatePath('/')

  redirect(`/library/${id}`)

  // return
  //   message: 'Sucesso ao atualizar o livro' + books.toString(),
  //   success: true,
  // }
}
export async function updateBookStatusById(
  bookId: string,
  newStatus: ReadStatus
) {
  const bookIndex = books.findIndex((b) => b.id === bookId)

  if (bookIndex < 0) {
    console.error('Livro não encontrado')
  }

  books[bookIndex].status = newStatus

  redirect(`/library/${bookId}`)
}
