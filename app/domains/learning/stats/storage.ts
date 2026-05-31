import type { QuestionStats } from "./types"

const STORAGE_KEY = "ctcr-question-stats"

export function getAllQuestionStats(): QuestionStats[] {
  const raw = localStorage.getItem(STORAGE_KEY)

  if (!raw) {
    return []
  }

  try {
    return JSON.parse(raw) as QuestionStats[]
  } catch {
    return []
  }
}

export function saveAllQuestionStats(stats: QuestionStats[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stats))
}

export function saveQuestionResult(questionId: string, isCorrect: boolean) {
  const stats = getAllQuestionStats()

  const existing = stats.find((stat) => stat.questionId === questionId)

  if (existing) {
    if (isCorrect) {
      existing.correctCount += 1
    } else {
      existing.incorrectCount += 1
    }

    existing.lastAnsweredAt = new Date().toISOString()
  } else {
    stats.push({
      questionId,

      correctCount: isCorrect ? 1 : 0,

      incorrectCount: isCorrect ? 0 : 1,

      lastAnsweredAt: new Date().toISOString(),
    })
  }

  saveAllQuestionStats(stats)
}

export function getQuestionStats(questionId: string) {
  return getAllQuestionStats().find((stat) => stat.questionId === questionId)
}
