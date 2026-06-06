export function HeroSection() {
  return (
    <section className="flex min-h-[32vh] flex-col justify-center">
      <div className="max-w-4xl space-y-8">
        <div className="space-y-4">
          <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
            TP Conducteur de Transport en Commun sur Route
          </p>

          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            CTCR Trainer
          </h1>

          <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
            Révisez efficacement votre titre professionnel avec des quiz clairs,
            un suivi de progression et des modules pensés pour l'examen.
          </p>
        </div>
      </div>
    </section>
  )
}
