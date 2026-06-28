import { CHANGELOG_STORAGE_KEY } from "../constants"

export function getLastSeenVersion() {
  if (typeof window === "undefined") {
    return null
  }

  return localStorage.getItem(CHANGELOG_STORAGE_KEY)
}

export function setLastSeenVersion(version: string) {
  if (typeof window === "undefined") {
    return
  }

  localStorage.setItem(CHANGELOG_STORAGE_KEY, version)
}
