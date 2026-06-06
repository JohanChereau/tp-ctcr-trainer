import { useEffect, useRef } from "react"

import { SendHorizontal } from "lucide-react"

import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"

type AnswerInputProps = {
  value: string

  onChange: (value: string) => void

  onSubmit: () => void
}

export function AnswerInput({ value, onChange, onSubmit }: AnswerInputProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches

    if (isTouchDevice) {
      return
    }

    inputRef.current?.focus()
  }, [])

  return (
    <div className="space-y-4">
      <Input
        ref={inputRef}
        value={value}
        placeholder="Saisissez votre réponse..."
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            onSubmit()
          }
        }}
        className="h-12 border-neutral-300 text-base shadow-sm focus-visible:border-neutral-500 dark:border-input"
      />

      <Button size="lg" className="h-12 w-full" onClick={onSubmit}>
        <SendHorizontal />
        Valider
      </Button>
    </div>
  )
}
