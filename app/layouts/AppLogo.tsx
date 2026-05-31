import { GraduationCap } from "lucide-react"

export default function AppLogo() {
  return (
    <div className="flex items-center gap-3">
      <GraduationCap className="h-5 w-5" />

      <div>
        <p className="font-semibold">CTCR Trainer</p>

        <p className="text-xs text-muted-foreground">
          Préparation TP Conducteur
        </p>
      </div>
    </div>
  )
}
