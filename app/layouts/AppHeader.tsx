import { GraduationCap } from "lucide-react"

import { ModeToggle } from "~/components/ui/mode-toggle"

import AppLogo from "./AppLogo"

export function AppHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <GraduationCap className="h-5 w-5" />

          <AppLogo />
        </div>

        <ModeToggle />
      </div>
    </header>
  )
}
