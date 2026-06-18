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

  route("learning/:categoryId/exam", "pages/learning/exam-page.tsx"),

  route("learning/:categoryId/quiz", "pages/learning/quiz-page.tsx"),

  route("learning/:categoryId/revision", "pages/learning/revision-page.tsx"),

  route("learning/:categoryId/:lessonId", "pages/learning/lesson-page.tsx"),

  route(
    "learning/:categoryId/weak-questions",
    "pages/learning/weak-questions-page.tsx"
  ),

  route("learning/:categoryId/oral-card", "pages/learning/oral-exam-page.tsx"),
] satisfies RouteConfig
