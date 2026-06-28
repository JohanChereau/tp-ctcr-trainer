import { HeroSection } from "~/components/home/HeroSection"

import { CategoriesGrid } from "~/domains/learning/categories/components/CategoriesGrid"

import { AppLayout } from "~/layouts/AppLayout"

export default function Home() {
  return (
    <AppLayout>
      <div className="space-y-10">
        <HeroSection />

        <CategoriesGrid />
      </div>
    </AppLayout>
  )
}
