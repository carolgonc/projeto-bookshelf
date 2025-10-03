'use client'

import { deleteBook } from '@/app/actions'
import { Button } from './ui/button'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Trash } from 'lucide-react'

interface DeleteBooksProps {
  bookId: number
  bookTitle: string
}

export function DeleteBooks({ bookId, bookTitle }: DeleteBooksProps) {
  const handleDeleteBook = () => {
    deleteBook(bookId)
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild className="cursor-pointer hover:bg-red-700">
        <Button variant="destructive">
          <Trash />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Você deseja excluir esse livro?</AlertDialogTitle>
          <AlertDialogDescription>
            Essa ação não pode ser desfeita. Isso irá deletar permanentemente o
            livro "{bookTitle}" da sua biblioteca.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="cursor-pointer">
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDeleteBook}
            className="cursor-pointer"
          >
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
