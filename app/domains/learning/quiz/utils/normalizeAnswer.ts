export function normalizeAnswer(value: string) {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’']/g, "")
    .replace(/[–—−]/g, "-")
    .replace(/[!?;:]/g, "")
    .replace(/\s+/g, "")
    .replace(/,/g, ".")
}
