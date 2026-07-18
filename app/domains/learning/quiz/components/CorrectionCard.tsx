import {
  ArrowRight,
  CheckCircle2,
  CircleHelp,
  Flag,
  Lightbulb,
  XCircle,
} from "lucide-react"

import { Button } from "~/components/ui/button"

import { cn } from "~/lib/utils"

type CorrectionCardProps = {
  isCorrect: boolean

  isLastQuestion: boolean

  canonicalAnswer: string

  explanation?: string

  onNext: () => void
}

export function CorrectionCard({
  isCorrect,
  isLastQuestion,
  canonicalAnswer,
  explanation,
  onNext,
}: CorrectionCardProps) {
  return (
    <article
      className={cn(
        "relative overflow-hidden rounded-3xl border bg-background/80 shadow-sm",
        isCorrect ? "border-green-600/20" : "border-destructive/20"
      )}
    >
      <div
        className={cn(
          "absolute inset-x-0 top-0 h-40 bg-linear-to-b to-transparent opacity-70",
          isCorrect ? "from-green-500/10" : "from-destructive/10"
        )}
      />

      <div className="relative space-y-8 p-6 sm:p-8 md:p-10">
        <div className="flex items-start gap-4">
          <div
            className={cn(
              "flex size-14 shrink-0 items-center justify-center rounded-2xl border",
              isCorrect
                ? "border-green-600/20 bg-green-500/10 text-green-600"
                : "border-destructive/20 bg-destructive/10 text-destructive"
            )}
          >
            {isCorrect ? (
              <CheckCircle2 className="size-7" />
            ) : (
              <XCircle className="size-7" />
            )}
          </div>

          <div className="space-y-1">
            <p
              className={cn(
                "text-sm font-semibold",
                isCorrect ? "text-green-600" : "text-destructive"
              )}
            >
              Correction
            </p>

            <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
              {isCorrect ? "Bonne réponse !" : "Ce n’est pas la bonne réponse"}
            </h2>

            <p className="text-sm leading-relaxed text-muted-foreground">
              {isCorrect
                ? "Bien joué, vous avez correctement répondu à cette question."
                : "Pas de panique, consultez la correction avant de continuer."}
            </p>
          </div>
        </div>

        {canonicalAnswer && (
          <CorrectionSection icon={CircleHelp} title="Réponse attendue">
            <p className="text-base leading-relaxed font-semibold sm:text-lg">
              {canonicalAnswer}
            </p>
          </CorrectionSection>
        )}

        {explanation && (
          <CorrectionSection icon={Lightbulb} title="Explication">
            <p className="leading-relaxed text-muted-foreground">
              {explanation}
            </p>
          </CorrectionSection>
        )}

        <Button size="lg" className="h-12 w-full rounded-xl" onClick={onNext}>
          {isLastQuestion ? "Terminer le quiz" : "Question suivante"}

          {isLastQuestion ? (
            <Flag className="size-4" />
          ) : (
            <ArrowRight className="size-4" />
          )}
        </Button>

        <p className="text-center text-xs text-muted-foreground">
          {isLastQuestion
            ? "Consultez vos résultats avec la flèche droite du clavier."
            : "Passez à la question suivante avec la flèche droite du clavier."}
        </p>
      </div>
    </article>
  )
}

type CorrectionSectionProps = {
  icon: typeof CircleHelp

  title: string

  children: React.ReactNode
}

function CorrectionSection({
  icon: Icon,
  title,
  children,
}: CorrectionSectionProps) {
  return (
    <section className="rounded-2xl border bg-background/70 p-5 shadow-xs">
      <div className="mb-3 flex items-center gap-2">
        <Icon className="size-4 text-muted-foreground" />

        <h3 className="text-sm font-semibold">{title}</h3>
      </div>

      {children}
    </section>
  )
}
