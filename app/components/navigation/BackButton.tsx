import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router"

import { Button } from "~/components/ui/button"

type BackButtonProps = {
  to?: string

  onBeforeBack?: () => void
}

export function BackButton({ to, onBeforeBack }: BackButtonProps) {
  const navigate = useNavigate()

  function handleBack() {
    if (onBeforeBack) {
      onBeforeBack()

      return
    }

    if (to) {
      navigate(to)

      return
    }

    navigate(-1)
  }

  return (
    <Button variant="ghost" onClick={handleBack} className="mb-4">
      <ArrowLeft />
      Retour
    </Button>
  )
}
