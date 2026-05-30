type HintCardProps = {
  hint: string
}

export function HintCard({ hint }: HintCardProps) {
  return (
    <div>
      Hint placeholder
      {hint}
    </div>
  )
}
