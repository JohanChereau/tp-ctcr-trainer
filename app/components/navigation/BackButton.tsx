import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router"

import { Button } from "~/components/ui/button"

type BackButtonProps = {
  onBeforeBack?: () => void
}

export function BackButton({ onBeforeBack }: BackButtonProps) {
  const navigate = useNavigate()

  function handleBack() {
    if (onBeforeBack) {
      onBeforeBack()

      return
    }

    navigate(-1)
  }

  return (
    <Button variant="ghost" onClick={handleBack}>
      <ArrowLeft />
      Retour
    </Button>
  )
}
