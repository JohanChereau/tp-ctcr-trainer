import { useEffect, useState } from "react"

import { APP_VERSION } from "~/config/version"

import { releases } from "../data/releases"
import { getLastSeenVersion } from "../storage/storage"

export function useChangelog() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setMounted(true)

    const lastSeen = getLastSeenVersion()

    if (lastSeen !== APP_VERSION) {
      setIsOpen(true)
    }
  }, [])

  const currentRelease =
    releases.find((release) => release.version === APP_VERSION) ??
    releases.at(-1)

  return {
    mounted,
    isOpen,
    setIsOpen,
    currentRelease,
  }
}
