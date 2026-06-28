import { BookOpen, BusFront, GraduationCap, Trophy } from "lucide-react"

import { HeroFeature } from "./HeroFeature"

export function HeroContent() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-6 md:space-y-8">
        <div className="inline-flex max-w-full items-center gap-2 rounded-full border bg-background/80 px-3 py-1.5 text-[11px] font-medium backdrop-blur md:px-4 md:py-2 md:text-sm">
          <BusFront className="size-3.5 shrink-0 text-primary md:size-4" />
          <span className="line-clamp-2">
            TP Conducteur de Transport en Commun sur Route
          </span>
        </div>

        <div className="space-y-5 md:space-y-4">
          <h1 className="max-w-2xl text-4xl leading-[0.95] font-black tracking-tight sm:text-5xl md:text-6xl">
            Réviser moins au hasard.
            <span className="block text-primary">Progresser pour de vrai.</span>
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            <span className="md:hidden">
              Toute votre préparation au TP CTCR dans une seule application.
            </span>

            <span className="hidden md:inline">
              Fiches, quiz, examens blancs, oraux, socles, thèmes et manœuvres
              réunis dans une seule application pour préparer le TP CTCR
              sereinement.
            </span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:gap-3 lg:mt-auto">
        <HeroFeature
          icon={BookOpen}
          title="Leçons"
          text="Tout au même endroit"
        />

        <HeroFeature
          icon={GraduationCap}
          title="Quiz"
          text="Pour s'entraîner"
        />

        <HeroFeature
          icon={Trophy}
          title="Progression"
          text="Suivi automatique"
        />
      </div>
    </div>
  )
}
