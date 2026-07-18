import {
  Check,
  CheckCircle2,
  Lightbulb,
  MessageSquareText,
  X,
  XCircle,
} from "lucide-react"

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"

import { cn } from "~/lib/utils"

import { formatQuizAnswer } from "../../utils/formatQuizAnswer"
import { getQuestionExpectedAnswer } from "../../utils/getQuestionExpectedAnswer"

import type { AnswerResult } from "~/domains/learning/quiz/types/quiz"
import type { Question } from "~/domains/learning/types/learning"

type AnswerResultItemProps = {
  answer: AnswerResult

  questionNumber: number

  isLast: boolean
}

export function AnswerResultItem({
  answer,
  questionNumber,
  isLast,
}: AnswerResultItemProps) {
  const userAnswers = getFormattedAnswers(
    formatQuizAnswer(answer.userAnswer, answer.question),
    answer.question
  )

  const expectedAnswers = getFormattedAnswers(
    getQuestionExpectedAnswer(answer.question),
    answer.question
  )

  return (
    <AccordionItem
      value={answer.question.id}
      className={cn("border-border/70 px-3 sm:px-4", isLast && "border-b-0")}
    >
      <AccordionTrigger className="gap-3 py-4 hover:no-underline">
        <div className="flex min-w-0 flex-1 items-start gap-3">
          <div
            className={cn(
              "mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full",
              answer.isCorrect
                ? "bg-green-500/10 text-green-600"
                : "bg-destructive/10 text-destructive"
            )}
          >
            {answer.isCorrect ? (
              <Check className="size-4" />
            ) : (
              <X className="size-4" />
            )}
          </div>

          <div className="min-w-0 flex-1 space-y-1 text-left">
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  "text-[11px] font-semibold uppercase",
                  answer.isCorrect ? "text-green-600" : "text-destructive"
                )}
              >
                {answer.isCorrect ? "Bonne réponse" : "Réponse incorrecte"}
              </span>

              <span className="rounded-full bg-muted px-2 py-0.5 text-[11px] font-medium whitespace-nowrap">
                Q{questionNumber}
              </span>
            </div>

            <p className="line-clamp-2 text-sm leading-relaxed font-semibold sm:text-base">
              {answer.question.question}
            </p>
          </div>
        </div>
      </AccordionTrigger>

      <AccordionContent className="pb-4">
        <div className="ml-0 space-y-5 border-t pt-4 sm:ml-10">
          <AnswerSection
            title="Votre réponse"
            icon={MessageSquareText}
            answers={userAnswers}
            variant={answer.isCorrect ? "correct" : "incorrect"}
          />

          {!answer.isCorrect && (
            <AnswerSection
              title="Réponse attendue"
              icon={CheckCircle2}
              answers={expectedAnswers}
              variant="expected"
            />
          )}

          {answer.question.explanation && (
            <section className="space-y-2.5">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Lightbulb className="size-4 text-amber-500" />

                <h4 className="text-xs font-semibold tracking-wide uppercase">
                  Explication
                </h4>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {answer.question.explanation}
              </p>
            </section>
          )}
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}

type AnswerSectionProps = {
  title: string

  icon: typeof MessageSquareText

  answers: string[]

  variant: "correct" | "incorrect" | "expected"
}

function AnswerSection({
  title,
  icon: Icon,
  answers,
  variant,
}: AnswerSectionProps) {
  return (
    <section className="space-y-2.5">
      <div className="flex items-center gap-2 text-muted-foreground">
        <Icon className="size-4" />

        <h4 className="text-xs font-semibold tracking-wide uppercase">
          {title}
        </h4>
      </div>

      <div className="flex flex-wrap gap-2">
        {answers.map((answer, index) => (
          <span
            key={`${answer}-${index}`}
            className={cn(
              "inline-flex max-w-full items-start gap-2 rounded-lg border px-3 py-2 text-sm leading-relaxed font-medium",
              variant === "correct" &&
                "border-green-600/20 bg-green-500/5 text-foreground",
              variant === "incorrect" &&
                "border-destructive/20 bg-destructive/5 text-foreground",
              variant === "expected" &&
                "border-primary/20 bg-primary/5 text-foreground"
            )}
          >
            {variant === "incorrect" ? (
              <XCircle className="mt-0.5 size-4 shrink-0 text-destructive" />
            ) : (
              <CheckCircle2
                className={cn(
                  "mt-0.5 size-4 shrink-0",
                  variant === "correct" ? "text-green-600" : "text-primary"
                )}
              />
            )}

            <span className="min-w-0">{answer}</span>
          </span>
        ))}
      </div>
    </section>
  )
}

function getFormattedAnswers(
  formattedAnswer: string,
  question: Question
): string[] {
  if (question.type !== "multiple-choice") {
    return [formattedAnswer || "Aucune réponse"]
  }

  const answers = formattedAnswer
    .split(",")
    .map((answer) => answer.trim())
    .filter(Boolean)

  return answers.length > 0 ? answers : ["Aucune réponse"]
}
