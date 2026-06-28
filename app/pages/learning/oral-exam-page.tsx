import { Link, Navigate, useParams } from "react-router"

import { BookOpen, Shuffle } from "lucide-react"

import { BackButton } from "~/components/navigation/BackButton"
import { Button } from "~/components/ui/button"
import { Card, CardContent } from "~/components/ui/card"

import { AppLayout } from "~/layouts/AppLayout"

import { oralExamCards } from "~/domains/learning/data/oral-exam"
import { OralExamCardViewer } from "~/domains/learning/oral-exam/components/OralExamCardViewer"

function getRandomCard() {
  const randomIndex = Math.floor(Math.random() * oralExamCards.length)

  return oralExamCards[randomIndex]
}

function getCardByLessonId(lessonId: string | undefined) {
  if (!lessonId) {
    return null
  }

  return oralExamCards.find((card) => card.lessonId === lessonId) ?? null
}

export default function OralExamPage() {
  const { categoryId, lessonId } = useParams()

  if (!categoryId) {
    return (
      <AppLayout>
        <p>Catégorie introuvable.</p>
      </AppLayout>
    )
  }

  if (!lessonId) {
    const randomCard = getRandomCard()

    return (
      <Navigate
        to={`/learning/${categoryId}/oral-card/${randomCard.lessonId}`}
        replace
      />
    )
  }

  const card = getCardByLessonId(lessonId)

  if (!card) {
    return (
      <AppLayout>
        <div className="space-y-6">
          <BackButton to={`/learning/${categoryId}`} />

          <p>Fiche orale introuvable.</p>
        </div>
      </AppLayout>
    )
  }

  return (
    <AppLayout>
      <div className="space-y-10">
        <BackButton to={`/learning/${categoryId}/${lessonId}`} />

        <OralExamCardViewer card={card} />

        <Card>
          <CardContent className="flex flex-col gap-4 p-6 sm:flex-row">
            <Button variant="outline" asChild>
              <Link to={`/learning/${categoryId}/${card.lessonId}/learn`}>
                <BookOpen />
                Consulter la fiche
              </Link>
            </Button>

            <Button asChild>
              <Link
                to={`/learning/${categoryId}/oral-card/${getRandomCard().lessonId}`}
              >
                <Shuffle />
                Tirer une autre fiche
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  )
}
