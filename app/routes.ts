import { index, route, type RouteConfig } from "@react-router/dev/routes"

export default [
  index("routes/home.tsx"),

  route("learning/:categoryId", "pages/learning/category-page.tsx"),

  route(
    "learning/:categoryId/:lessonId/learn",
    "pages/learning/learn-page.tsx"
  ),

  route(
    "learning/:categoryId/:lessonId/quiz",
    "pages/learning/lesson-quiz-page.tsx"
  ),

  route("learning/:categoryId/revision", "pages/learning/revision-page.tsx"),

  route("learning/:categoryId/:lessonId", "pages/learning/lesson-page.tsx"),
] satisfies RouteConfig
