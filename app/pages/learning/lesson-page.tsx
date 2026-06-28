import { Link, useParams } from "react-router"

import { ArrowRight, BookOpen, GraduationCap, ScrollText } from "lucide-react"

import { getCategoryById, getLessonById } from "~/domains/learning/data"

import { AppLayout } from "~/layouts/AppLayout"

import { BackButton } from "~/components/navigation/BackButton"

export default function LessonPage() {
  const { categoryId, lessonId } = useParams()

  const category = getCategoryById(categoryId ?? "")
  const lesson = getLessonById(categoryId ?? "", lessonId ?? "")

  if (!category || !lesson) {
    return (
      <AppLayout>
        <p>Fiche introuvable.</p>
      </AppLayout>
    )
  }

  const isOralCategory = category.type === "oral"

  return (
    <AppLayout>
      <div className="space-y-10">
        <BackButton to={`/learning/${categoryId}/revision`} />

        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium">
            <BookOpen className="size-4 text-primary" />
            Fiche
          </div>

          <h1 className="text-4xl font-black tracking-tight md:text-5xl">
            {lesson.title}
          </h1>

          <p className="text-muted-foreground">
            Choisissez votre mode de révision.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <LessonActionCard
            href={`/learning/${category.id}/${lesson.id}/learn`}
            icon={BookOpen}
            title="Consulter la fiche"
            description="Parcourez le contenu complet avant de commencer votre entraînement."
          />

          <LessonActionCard
            href={`/learning/${category.id}/${lesson.id}/quiz`}
            icon={GraduationCap}
            title="Faire le quiz"
            description="Testez vos connaissances uniquement sur cette fiche."
          />

          {isOralCategory && (
            <LessonActionCard
              href={`/learning/${category.id}/oral-card/${lesson.id}`}
              icon={ScrollText}
              title="Mode examen"
              description="Consultez la fiche orale dans son format d'examen."
            />
          )}
        </div>
      </div>
    </AppLayout>
  )
}

type LessonActionCardProps = {
  href: string
  icon: typeof BookOpen
  title: string
  description: string
}

function LessonActionCard({
  href,
  icon: Icon,
  title,
  description,
}: LessonActionCardProps) {
  return (
    <Link to={href} className="group block h-full">
      <article className="relative flex h-full min-h-56 flex-col overflow-hidden rounded-3xl border bg-background/80 p-6 shadow-sm transition-all hover:-translate-y-1 hover:bg-background hover:shadow-md">
        <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-muted/50 to-transparent opacity-70" />

        <div className="relative flex items-start justify-between gap-4">
          <div className="flex size-12 items-center justify-center rounded-2xl border bg-muted/40 text-muted-foreground">
            <Icon className="size-5" />
          </div>

          <div className="rounded-full border bg-background/80 p-2 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-foreground">
            <ArrowRight className="size-4" />
          </div>
        </div>

        <div className="relative mt-6 space-y-3">
          <h2 className="text-xl font-black tracking-tight">{title}</h2>

          <p className="text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
      </article>
    </Link>
  )
}
