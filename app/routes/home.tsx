import { CategoriesGrid } from "~/domains/learning/categories/components/CategoriesGrid"
import { HeroSection } from "~/components/home/HeroSection"

import { learningCategories } from "~/domains/learning/data"

import { AppLayout } from "~/layouts/AppLayout"

export default function Home() {
  return (
    <AppLayout>
      <div className="space-y-20">
        <HeroSection />

        <CategoriesGrid />
      </div>
    </AppLayout>
  )
}
