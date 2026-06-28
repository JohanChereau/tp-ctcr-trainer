import { Link } from "react-router"

import { GraduationCap, Target } from "lucide-react"

import { Button } from "~/components/ui/button"

type DailyMissionCardProps = {
  categoryId: string
  weakQuestionsCount: number | null
}

const MIN_WEAK_QUESTIONS_FOR_MISSION = 5

export function DailyMissionCard({
  categoryId,
  weakQuestionsCount,
}: DailyMissionCardProps) {
  const shouldReviewWeakQuestions =
    weakQuestionsCount !== null &&
    weakQuestionsCount >= MIN_WEAK_QUESTIONS_FOR_MISSION

  const mission = shouldReviewWeakQuestions
    ? {
        icon: Target,
        title: "Mission du jour",
        description:
          "Travaille tes points faibles sur les fiches écrites pour consolider tes bases avant l'examen.",
        href: `/learning/${categoryId}/weak-questions`,
        buttonLabel: "Lancer la mission",
      }
    : {
        icon: GraduationCap,
        title: "Mission du jour",
        description:
          "Lance un quiz global sur les fiches écrites pour continuer à progresser.",
        href: `/learning/${categoryId}/quiz`,
        buttonLabel: "Faire un quiz",
      }

  const Icon = mission.icon

  return (
    <div className="rounded-2xl border bg-muted/30 p-4">
      <div className="mb-3 flex items-center gap-2">
        <Icon className="size-4 text-primary" />
        <p className="text-sm font-semibold">{mission.title}</p>
      </div>

      <p className="text-sm text-muted-foreground">{mission.description}</p>

      <Button className="mt-4 w-full" asChild>
        <Link to={mission.href}>{mission.buttonLabel}</Link>
      </Button>
    </div>
  )
}
