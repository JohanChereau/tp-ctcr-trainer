import { useState } from "react"

import { APP_VERSION } from "~/config/version"

import { ChangelogDialog } from "~/domains/changelog/components/ChangelogDialog"
import { releases } from "~/domains/changelog/data/releases"

export function ChangelogButton() {
  const [open, setOpen] = useState(false)

  const currentRelease =
    releases.find((release) => release.version === APP_VERSION) ??
    releases.at(-1)

  if (!currentRelease) {
    return null
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-full border bg-muted/30 px-3 py-1 text-xs font-medium text-muted-foreground transition hover:bg-muted/60 hover:text-foreground"
      >
        v{APP_VERSION}
      </button>

      <ChangelogDialog
        open={open}
        onOpenChange={setOpen}
        onConfirm={() => setOpen(false)}
        release={currentRelease}
      />
    </>
  )
}
