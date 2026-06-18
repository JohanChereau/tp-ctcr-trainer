import { useMemo, useState } from "react"
import { Link, useParams } from "react-router"

import { Shuffle } from "lucide-react"
import { BookOpen } from "lucide-react"

import { BackButton } from "~/components/navigation/BackButton"
import { Button } from "~/components/ui/button"

import { AppLayout } from "~/layouts/AppLayout"

import { oralExamCards } from "~/domains/learning/data/oral-exam"

import { OralExamCardViewer } from "~/domains/learning/oral-exam/components/OralExamCardViewer"
import { Card, CardContent } from "~/components/ui/card"

function getRandomCard() {
  const randomIndex = Math.floor(Math.random() * oralExamCards.length)

  return oralExamCards[randomIndex]
}

export default function OralExamPage() {
  const { categoryId } = useParams()

  const [card, setCard] = useState(getRandomCard)

  return (
    <AppLayout>
      <div className="space-y-10">
        <BackButton to={`/learning/${categoryId}`} />

        <OralExamCardViewer card={card} />

        <Card>
          <CardContent className="flex flex-col gap-4 p-6 sm:flex-row">
            <Button variant="outline" asChild>
              <Link to={`/learning/${categoryId}/${card.lessonId}/learn`}>
                <BookOpen />
                Consulter la fiche
              </Link>
            </Button>

            <Button onClick={() => setCard(getRandomCard())}>
              <Shuffle />
              Tirer une autre fiche
            </Button>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  )
}
