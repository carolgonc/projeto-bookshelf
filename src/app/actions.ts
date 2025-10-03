'use server'

import { z } from 'zod'
import { ReadStatus } from '@/types/book'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { Book, Prisma } from 'db/generated/prisma'
import prisma from '@/lib/prisma'

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
  year: z.coerce.number().optional(),
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

  const newBook: Prisma.BookCreateInput = {
    ...validatedFields.data,
  }

  await prisma.book.create({ data: newBook })

  revalidatePath('/library')
  revalidatePath('/')

  redirect('/library')
}

export async function deleteBook(bookId: number) {
  await prisma.book.delete({
    where: {
      id: bookId,
    },
  })

  revalidatePath('/library')
  revalidatePath('/')

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

  await prisma.book.update({
    where: {
      id: +id,
    },
    data: bookData,
  })

  revalidatePath(`/library/${id}/edit`)
  revalidatePath(`/library/${id}`)
  revalidatePath('/library')
  revalidatePath('/')

  redirect(`/library/${id}`)
}

export async function updateBookStatusById(
  bookId: number,
  newStatus: ReadStatus
) {
  await prisma.book.update({
    where: {
      id: bookId,
    },
    data: {
      status: newStatus,
    },
  })

  revalidatePath(`/library/${bookId}`)
  revalidatePath('/')
}
