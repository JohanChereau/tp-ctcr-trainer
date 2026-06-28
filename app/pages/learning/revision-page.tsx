import { Link, useParams } from "react-router"

import { ArrowRight, CheckCircle2, FileText } from "lucide-react"

import { getCategoryById } from "~/domains/learning/data"

import { ProgressBadge } from "~/domains/learning/stats/components/ProgressBadge"
import { useLessonProgress } from "~/domains/learning/stats/hooks/useLessonProgress"

import { AppLayout } from "~/layouts/AppLayout"

import { BackButton } from "~/components/navigation/BackButton"

export default function RevisionPage() {
  const { categoryId } = useParams()

  const category = getCategoryById(categoryId ?? "")

  if (!category) {
    return (
      <AppLayout>
        <p>Catégorie introuvable.</p>
      </AppLayout>
    )
  }

  return (
    <AppLayout>
      <div className="space-y-10">
        <BackButton to={`/learning/${categoryId}`} />

        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium">
            <FileText className="size-4 text-primary" />
            Révision
          </div>

          <h1 className="text-4xl font-black tracking-tight md:text-5xl">
            Révision fiche par fiche
          </h1>

          <p className="max-w-2xl text-muted-foreground">
            Sélectionnez une fiche pour consulter son contenu, revoir ses
            réponses et suivre votre progression.
          </p>
        </div>

        <div className="grid auto-rows-fr gap-4 md:grid-cols-2 xl:grid-cols-3">
          {category.lessons.map((lesson) => (
            <RevisionLessonCard
              key={lesson.id}
              categoryId={category.id}
              lesson={lesson}
            />
          ))}
        </div>
      </div>
    </AppLayout>
  )
}

type RevisionLessonCardProps = {
  categoryId: string
  lesson: NonNullable<ReturnType<typeof getCategoryById>>["lessons"][number]
}

function RevisionLessonCard({ categoryId, lesson }: RevisionLessonCardProps) {
  const progress = useLessonProgress(lesson)

  return (
    <Link
      to={`/learning/${categoryId}/${lesson.id}`}
      className="group block h-full"
    >
      <article className="relative flex h-full min-h-56 flex-col overflow-hidden rounded-3xl border bg-background/80 p-6 shadow-sm transition-all hover:-translate-y-1 hover:bg-background hover:shadow-md">
        <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-muted/50 to-transparent opacity-70" />

        <div className="relative flex items-start justify-between gap-4">
          <div className="flex size-12 items-center justify-center rounded-2xl border bg-muted/40 text-muted-foreground">
            <FileText className="size-5" />
          </div>

          <div className="rounded-full border bg-background/80 p-2 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-foreground">
            <ArrowRight className="size-4" />
          </div>
        </div>

        <div className="relative mt-6 space-y-3">
          <p className="text-sm font-medium text-muted-foreground">Fiche</p>

          <h2 className="line-clamp-3 text-xl font-black tracking-tight">
            {lesson.title}
          </h2>
        </div>

        <div className="relative mt-auto pt-6">
          <div className="mb-4 flex flex-wrap gap-2">
            <LessonMetaItem icon={CheckCircle2}>
              {progress.answeredQuestionsCount} / {lesson.questions.length}{" "}
              questions
            </LessonMetaItem>
          </div>

          <ProgressBadge
            status={progress.status}
            successRate={progress.successRate}
            answeredCount={progress.answeredQuestionsCount}
            labelType="lesson"
          />
        </div>
      </article>
    </Link>
  )
}

type LessonMetaItemProps = {
  icon: typeof CheckCircle2
  children: React.ReactNode
}

function LessonMetaItem({ icon: Icon, children }: LessonMetaItemProps) {
  return (
    <div className="inline-flex items-center gap-1.5 rounded-full border bg-muted/30 px-3 py-1 text-xs font-medium text-muted-foreground">
      <Icon className="size-3.5" />
      {children}
    </div>
  )
}
