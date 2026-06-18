import { Card, CardContent } from "~/components/ui/card"

import type { OralExamCard } from "../types"

import { OralExamSectionAccordion } from "./OralExamSectionAccordion"

type OralExamCardViewerProps = {
  card: OralExamCard
}

export function OralExamCardViewer({ card }: OralExamCardViewerProps) {
  return (
    <div className="space-y-8">
      <Card>
        <CardContent className="space-y-4 p-8 md:p-10">
          <p className="text-sm font-medium tracking-[0.2em] text-muted-foreground uppercase">
            Fiche {card.number.toString().padStart(2, "0")}
          </p>

          <h1 className="text-3xl leading-tight font-bold md:text-4xl">
            {card.title}
          </h1>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {card.sections.map((section) => (
          <OralExamSectionAccordion key={section.title} section={section} />
        ))}
      </div>
    </div>
  )
}
