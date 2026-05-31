import { useState } from "react"

import { Lightbulb } from "lucide-react"

import { Button } from "~/components/ui/button"
import { Card, CardContent } from "~/components/ui/card"

type HintCardProps = {
  hint: string
}

export function HintCard({ hint }: HintCardProps) {
  const [isVisible, setIsVisible] = useState(false)

  if (!isVisible) {
    return (
      <Button
        variant="outline"
        className="h-12 w-full justify-start"
        onClick={() => setIsVisible(true)}
      >
        <Lightbulb className="text-amber-500" />
        Afficher un indice
      </Button>
    )
  }

  return (
    <Card className="bg-amber-50/50">
      <CardContent className="p-5">
        <div className="flex gap-3">
          <Lightbulb className="mt-0.5 shrink-0 text-amber-500" />

          <div>
            <p className="font-medium">Indice</p>

            <p className="text-muted-foreground">{hint}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
