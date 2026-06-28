import { Link } from "react-router"

import { ArrowRight, BookOpen, CheckCircle2 } from "lucide-react"

import type { LearningCategory } from "~/domains/learning/types/learning"

import { SuccessRateBadge } from "../../stats/components/SuccessRateBadge"
import { useCategoryMastery } from "../../stats/hooks/useCategoryMastery"

type CategoryCardProps = {
  category: LearningCategory
}

function getQuestionCount(category: LearningCategory) {
  return category.lessons.reduce(
    (total, lesson) => total + lesson.questions.length,
    0
  )
}

export function CategoryCard({ category }: CategoryCardProps) {
  const masteryRate = useCategoryMastery(category)

  const questionCount = getQuestionCount(category)
  const lessonCount = category.lessons.length

  return (
    <Link to={`/learning/${category.id}`} className="group block h-full">
      <article className="relative flex h-full min-h-56 flex-col overflow-hidden rounded-3xl border bg-background/80 p-6 shadow-sm transition-all hover:-translate-y-1 hover:bg-background hover:shadow-md">
        <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-muted/50 to-transparent opacity-70" />

        <div className="relative flex items-start justify-between gap-4">
          <div className="flex size-12 items-center justify-center rounded-2xl border bg-muted/40 text-2xl">
            {category.icon}
          </div>

          <div className="rounded-full border bg-background/80 p-2 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-foreground">
            <ArrowRight className="size-4" />
          </div>
        </div>

        <div className="relative mt-6 space-y-3">
          <h3 className="line-clamp-2 text-xl font-black tracking-tight">
            {category.title}
          </h3>

          <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {category.description}
          </p>
        </div>

        <div className="relative mt-auto pt-6">
          <div className="mb-4 flex flex-wrap gap-2">
            <CategoryMetaItem icon={BookOpen}>
              {lessonCount} fiche{lessonCount > 1 ? "s" : ""}
            </CategoryMetaItem>

            {questionCount > 0 && (
              <CategoryMetaItem icon={CheckCircle2}>
                {questionCount} questions
              </CategoryMetaItem>
            )}
          </div>

          <SuccessRateBadge successRate={masteryRate} />
        </div>
      </article>
    </Link>
  )
}

type CategoryMetaItemProps = {
  icon: typeof BookOpen
  children: React.ReactNode
}

function CategoryMetaItem({ icon: Icon, children }: CategoryMetaItemProps) {
  return (
    <div className="inline-flex items-center gap-1.5 rounded-full border bg-muted/30 px-3 py-1 text-xs font-medium text-muted-foreground">
      <Icon className="size-3.5" />
      {children}
    </div>
  )
}
