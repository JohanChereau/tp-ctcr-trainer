import { APP_VERSION } from "~/config/version"

import { useChangelog } from "~/domains/changelog/hooks/useChangelog"
import { setLastSeenVersion } from "~/domains/changelog/storage/storage"

import { ChangelogDialog } from "~/domains/changelog/components/ChangelogDialog"

export function ChangelogProvider() {
  const { mounted, isOpen, setIsOpen, currentRelease } = useChangelog()

  if (!mounted || !currentRelease) {
    return null
  }

  function handleConfirm() {
    setLastSeenVersion(APP_VERSION)
    setIsOpen(false)
  }

  return (
    <ChangelogDialog
      open={isOpen}
      onOpenChange={setIsOpen}
      onConfirm={handleConfirm}
      release={currentRelease}
    />
  )
}
