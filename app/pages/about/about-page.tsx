import { ExternalLink, Heart, Info, Mail, ShieldCheck } from "lucide-react"

import { BackButton } from "~/components/navigation/BackButton"

import { AppLayout } from "~/layouts/AppLayout"

export default function AboutPage() {
  return (
    <AppLayout>
      <div className="space-y-10">
        <BackButton to="/" />

        <header className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium">
            <Info className="size-4" />À propos
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl font-black tracking-tight md:text-5xl">
              CTCR Trainer
            </h1>

            <p className="max-w-2xl text-muted-foreground">
              Un support personnel de révision consacré au titre professionnel
              de Conducteur de Transport en Commun sur Route.
            </p>
          </div>
        </header>

        <section className="rounded-2xl border bg-card p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Heart className="size-5" />
            </div>

            <h2 className="text-xl font-semibold">Le projet</h2>
          </div>

          <div className="space-y-3 text-sm leading-7 text-muted-foreground sm:text-base">
            <p>
              CTCR Trainer est à l'origine un projet personnel développé comme
              support de révision pendant ma formation au titre professionnel de
              Conducteur de Transport en Commun sur Route (CTCR), suivie du 26
              mai au 2 septembre 2026.
            </p>

            <p>
              Initialement pensé pour répondre à mes propres besoins de
              révision, le projet a progressivement évolué au fil de la
              formation, de mes apprentissages et des sujets abordés.
            </p>

            <p>
              Le projet est aujourd'hui mis gratuitement à disposition afin que
              d'autres personnes puissent, si elles le souhaitent, l'utiliser
              comme support complémentaire d'apprentissage et de révision.
            </p>

            <p>
              CTCR Trainer n'est pas une formation et ne constitue ni un support
              officiel de préparation à l'examen, ni une source réglementaire de
              référence. Son utilisation ne remplace pas les enseignements d'un
              organisme de formation, les textes réglementaires en vigueur ou
              les consignes données par les professionnels chargés de la
              formation et de l'évaluation.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border bg-card p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <ShieldCheck className="size-5" />
            </div>

            <h2 className="text-xl font-semibold">Indépendance du projet</h2>
          </div>

          <div className="space-y-3 text-sm leading-7 text-muted-foreground sm:text-base">
            <p>
              CTCR Trainer est un projet personnel et indépendant. Il n'est
              affilié, approuvé, édité ou sponsorisé par aucun organisme de
              formation, ministère, administration, organisme certificateur ou
              entreprise de transport.
            </p>

            <p>
              La présence du nom d'un organisme, d'une entreprise, d'une
              plateforme ou d'une marque dans le contenu ne signifie pas qu'il
              existe un partenariat ou une affiliation avec CTCR Trainer.
            </p>

            <p>
              Les marques, noms, logos et autres éléments appartenant à des
              tiers demeurent la propriété de leurs titulaires respectifs.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border bg-card p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <ExternalLink className="size-5" />
            </div>

            <h2 className="text-xl font-semibold">
              Contenu, sources et ressources externes
            </h2>
          </div>

          <div className="space-y-3 text-sm leading-7 text-muted-foreground sm:text-base">
            <p>
              Les contenus pédagogiques de CTCR Trainer ont été rédigés et
              reformulés spécifiquement pour le projet à partir de connaissances
              acquises en formation, de documentation, de ressources publiques
              et de références réglementaires.
            </p>

            <p>
              Certaines pages peuvent également intégrer des ressources
              externes, notamment des vidéos provenant de YouTube ou Vimeo.
              Lorsqu'elles sont intégrées, ces ressources restent hébergées et
              diffusées par les plateformes concernées à l'aide de leurs
              lecteurs d'intégration. CTCR Trainer n'en revendique pas la
              propriété.
            </p>

            <p>
              Les illustrations créées spécifiquement pour CTCR Trainer
              appartiennent au projet, sauf indication contraire.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border bg-card p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Info className="size-5" />
            </div>

            <h2 className="text-xl font-semibold">
              Exactitude et mise à jour des informations
            </h2>
          </div>

          <div className="space-y-3 text-sm leading-7 text-muted-foreground sm:text-base">
            <p>
              Un soin particulier est apporté à l'exactitude des informations
              proposées. CTCR Trainer reste néanmoins un support personnel :
              malgré les vérifications effectuées, des erreurs, imprécisions ou
              coquilles peuvent subsister.
            </p>

            <p>
              Les réglementations, programmes de formation, modalités
              d'évaluation et pratiques professionnelles peuvent également
              évoluer après la rédaction d'un contenu. Certaines informations
              peuvent donc devenir incomplètes ou obsolètes sans que
              l'application soit immédiatement mise à jour.
            </p>

            <p>
              En cas de doute, les textes réglementaires en vigueur, les
              publications des autorités compétentes et les consignes de
              l'organisme de formation concerné doivent être privilégiés.
            </p>

            <p>
              Les résultats obtenus aux quiz et exercices sont fournis
              uniquement à des fins d'entraînement et ne préjugent en aucun cas
              d'un résultat à un examen ou à une évaluation officielle.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border bg-card p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Info className="size-5" />
            </div>

            <h2 className="text-xl font-semibold">
              Hébergement et services tiers
            </h2>
          </div>

          <div className="space-y-3 text-sm leading-7 text-muted-foreground sm:text-base">
            <p>
              CTCR Trainer est une application web pouvant être installée comme
              Progressive Web App (PWA). Le service est actuellement hébergé à
              l'aide de l'infrastructure de Vercel.
            </p>

            <p>
              Certaines fonctionnalités ou ressources peuvent dépendre de
              services tiers. Leur disponibilité, leur fonctionnement et leurs
              propres conditions d'utilisation relèvent des fournisseurs
              concernés.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border bg-card p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Mail className="size-5" />
            </div>

            <h2 className="text-xl font-semibold">
              Signaler une erreur ou contacter le projet
            </h2>
          </div>

          <div className="space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
            <p>
              Vous avez repéré une information incorrecte, une ressource qui ne
              devrait plus être présente, un problème technique ou simplement
              une amélioration possible ? Vous pouvez me le signaler.
            </p>

            <a
              href="mailto:ctcr@johan-chereau.com?subject=CTCR%20Trainer%20-%20Erreur%20ou%20suggestion"
              className="inline-flex items-center gap-2 font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
            >
              ctcr@johan-chereau.com
            </a>
          </div>
        </section>
      </div>
    </AppLayout>
  )
}
