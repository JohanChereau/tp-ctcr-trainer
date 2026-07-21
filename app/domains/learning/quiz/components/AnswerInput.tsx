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
    <div className="space-y-3">
      <Input
        ref={inputRef}
        value={value}
        placeholder="Saisissez votre réponse..."
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter" && value.trim()) {
            onSubmit()
          }
        }}
        className="h-14 rounded-xl border bg-background px-4 text-base shadow-xs"
      />

      <Button
        size="lg"
        disabled={!value.trim()}
        className="h-12 w-full rounded-xl"
        onClick={onSubmit}
      >
        <SendHorizontal className="size-4" />
        Valider ma réponse
      </Button>
    </div>
  )
}
