import { SendHorizontal } from "lucide-react"

import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"

type AnswerInputProps = {
  value: string

  onChange: (value: string) => void

  onSubmit: () => void
}

export function AnswerInput({ value, onChange, onSubmit }: AnswerInputProps) {
  return (
    <div className="space-y-4">
      <Input
        value={value}
        placeholder="Saisissez votre réponse..."
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            onSubmit()
          }
        }}
        className="h-12 text-base"
      />

      <Button size="lg" className="h-12 w-full" onClick={onSubmit}>
        <SendHorizontal />
        Valider
      </Button>
    </div>
  )
}
