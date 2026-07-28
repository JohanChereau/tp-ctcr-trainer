import type { ReactNode } from "react"

import { ChangelogProvider } from "~/services/providers/changelog-provider"

import { AppBackground } from "./AppBackground"
import { AppFooter } from "./AppFooter"
import { AppHeader } from "./AppHeader"

type AppLayoutProps = {
  children: ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <AppBackground />

      <div className="relative flex min-h-screen max-w-full min-w-0 flex-col overflow-x-clip">
        <AppHeader />

        <main className="mx-auto w-full max-w-7xl min-w-0 flex-1 px-4 py-10 sm:px-6">
          {children}
        </main>

        <ChangelogProvider />

        <AppFooter />
      </div>
    </>
  )
}
