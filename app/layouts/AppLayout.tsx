import type { ReactNode } from "react"

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

      <div className="relative flex min-h-screen flex-col">
        <AppHeader />

        <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-10">
          {children}
        </main>

        <AppFooter />
      </div>
    </>
  )
}
