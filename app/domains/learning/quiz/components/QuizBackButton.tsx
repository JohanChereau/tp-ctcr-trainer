import { useState } from "react"
import { useNavigate } from "react-router"

import { BackButton } from "~/components/navigation/BackButton"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "~/components/ui/alert-dialog"

export function QuizBackButton() {
  const navigate = useNavigate()

  const [open, setOpen] = useState(false)

  return (
    <>
      <BackButton onBeforeBack={() => setOpen(true)} />

      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Quitter le quiz ?</AlertDialogTitle>

            <AlertDialogDescription>
              Votre progression actuelle sera perdue.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Continuer le quiz</AlertDialogCancel>

            <AlertDialogAction onClick={() => navigate(-1)}>
              Quitter
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
