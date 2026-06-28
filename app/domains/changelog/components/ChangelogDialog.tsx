import { Sparkles } from "lucide-react"

import { Button } from "~/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog"

import type { Release } from "../types/changelog"

type ChangelogDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  onConfirm: () => void
  release: Release
}

export function ChangelogDialog({
  open,
  onOpenChange,
  onConfirm,
  release,
}: ChangelogDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-lg"
        onEscapeKeyDown={(event) => event.preventDefault()}
        onPointerDownOutside={(event) => event.preventDefault()}
      >
        <DialogHeader>
          <div className="mb-2 flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Sparkles className="size-5" />
          </div>

          <DialogTitle className="text-2xl font-black tracking-tight">
            Quoi de neuf ?
          </DialogTitle>

          <DialogDescription>
            Version {release.version} · {formatReleaseDate(release.date)}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5">
          <div>
            <h3 className="text-lg font-bold">{release.title}</h3>
          </div>

          <div className="max-h-[55vh] space-y-4 overflow-y-auto pr-1">
            {release.sections.map((section) => (
              <section
                key={section.title}
                className="rounded-2xl border bg-muted/30 p-4"
              >
                <h4 className="text-sm font-semibold">{section.title}</h4>

                <ul className="mt-3 space-y-2">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <Button className="w-full" onClick={onConfirm}>
            Compris
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function formatReleaseDate(date: string) {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date))
}
