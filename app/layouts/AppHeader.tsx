import { Link } from "react-router"

import { ChangelogButton } from "~/domains/changelog/components/ChangelogButton"

import { ModeToggle } from "~/components/ui/mode-toggle"
import { FullscreenToggle } from "~/components/ui/fullscreen-toggle"

import AppLogo from "./AppLogo"

export function AppHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="transition-opacity hover:opacity-80">
          <AppLogo />
        </Link>

        <div className="flex items-center gap-2">
          <ChangelogButton />

          <FullscreenToggle />

          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
