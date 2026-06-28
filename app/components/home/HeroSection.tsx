import { HomeDashboard } from "./dashboard/HomeDashboard"
import { HeroContent } from "./HeroContent"

export function HeroSection() {
  return (
    <section className="pb-10">
      <div className="relative overflow-hidden rounded-3xl border bg-linear-to-br from-background via-background to-muted/40 p-6 md:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.12),transparent_42%)]" />

        <div className="relative grid gap-8 lg:grid-cols-[1.4fr_0.9fr] lg:items-stretch">
          <HeroContent />

          <HomeDashboard />
        </div>
      </div>
    </section>
  )
}
