import { Link } from "react-router"

export function AppFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-6 py-8 text-center">
        <p className="text-sm text-muted-foreground">
          Développé avec ❤️ par Johan
        </p>

        <p className="mt-1 text-xs text-muted-foreground">
          Projet personnel d'apprentissage, indépendant et non affilié à un
          organisme de formation 🇫🇷
        </p>

        <p className="mt-3 text-xs text-muted-foreground">
          <Link
            to="/about"
            className="underline underline-offset-4 transition-colors hover:text-foreground"
          >
            À propos
          </Link>

          {" · "}

          <a
            href="mailto:ctcr@johan-chereau.com?subject=CTCR%20Trainer%20-%20Erreur%20ou%20suggestion"
            className="underline underline-offset-4 transition-colors hover:text-foreground"
          >
            Me contacter
          </a>
        </p>
      </div>
    </footer>
  )
}
