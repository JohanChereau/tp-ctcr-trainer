export type ProgressStatus =
  | "not-started"
  | "weak"
  | "in-progress"
  | "good"
  | "mastered"

type GetProgressStatusOptions = {
  successRate: number | null
  answeredCount?: number
  minAnswersForMastery?: number
}

export function getProgressStatus({
  successRate,
  answeredCount = 0,
  minAnswersForMastery = 3,
}: GetProgressStatusOptions): ProgressStatus {
  if (successRate === null || answeredCount === 0) {
    return "not-started"
  }

  if (successRate < 70) {
    return "weak"
  }

  if (successRate < 90) {
    return "in-progress"
  }

  if (answeredCount < minAnswersForMastery) {
    return "good"
  }

  return "mastered"
}
