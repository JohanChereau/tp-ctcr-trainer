<div align="center">
  <img src="./public/apple-touch-icon.png" alt="Logo CTCR Trainer" width="96" height="96" />

  <h1>CTCR Trainer</h1>

  <p><strong>Réviser moins au hasard. Progresser pour de vrai.</strong></p>

  <p>
    Une application web moderne de révision et d'entraînement dédiée au
    <strong>Titre Professionnel Conducteur de Transport en Commun sur Route (CTCR)</strong>.
  </p>

  <p>
    <img src="https://img.shields.io/badge/React-19-20232a?logo=react&logoColor=61DAFB" alt="React 19" />
    <img src="https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white" alt="React Router 7" />
    <img src="https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white" alt="TypeScript 6" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4" />
    <img src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white" alt="Vite 8" />
    <img src="https://img.shields.io/badge/Vercel-deployed-000000?logo=vercel&logoColor=white" alt="Vercel" />
  </p>

  <p>
    <img src="https://img.shields.io/badge/modules-11-18181B" alt="11 modules" />
    <img src="https://img.shields.io/badge/questions-800%2B-18181B" alt="800+ questions" />
    <img src="https://img.shields.io/badge/interface-responsive-18181B" alt="Responsive" />
    <img src="https://img.shields.io/badge/langue-français-18181B" alt="Français" />
  </p>
</div>

---

## À propos

**CTCR Trainer** est à l'origine un projet personnel développé comme support de révision pendant ma formation au titre professionnel de Conducteur de Transport en Commun sur Route, suivie du **26 mai au 2 septembre 2026**.

Le projet est progressivement passé d'un simple ensemble de fiches et de questions à une véritable plateforme d'apprentissage : leçons enrichies, quiz configurables, examens blancs, suivi de progression, révision ciblée des points faibles, cartes d'examen oral, calendrier de formation et moteur Markdown personnalisé.

L'application est aujourd'hui mise gratuitement à disposition afin que d'autres personnes puissent également l'utiliser comme **support complémentaire de révision**.

> **Important**  
> CTCR Trainer est un projet personnel et indépendant. Il n'est affilié à aucun organisme de formation, ministère, administration, organisme certificateur ou entreprise de transport. Il ne remplace ni une formation officielle, ni les textes réglementaires en vigueur.

---

## Fonctionnalités

### Apprentissage et révision

- **Révision fiche par fiche** avec contenu pédagogique structuré.
- **Quiz par leçon** pour travailler un sujet précis.
- **Quiz globaux** à l'échelle d'un module.
- **Mode examen blanc** avec durée configurable et questions mélangées.
- **Révision des erreurs** à la fin d'une session.
- **Révision ciblée des points faibles** à partir des statistiques enregistrées.
- **Carte d'examen oral** tirée aléatoirement pour reproduire le format de l'épreuve.
- **Mission du jour** adaptée à la progression.
- **Corrections immédiates** en mode entraînement.
- **Détail complet des réponses** à la fin d'un quiz.

### Moteur de questions

CTCR Trainer prend en charge plusieurs formats de questions :

- réponse libre ;
- vrai / faux ;
- oui / non ;
- choix unique ;
- choix multiple.

Chaque question peut également contenir :

- une illustration ;
- un indice ;
- une explication ;
- plusieurs réponses textuelles acceptées ;
- des tags de classification.

Les réponses libres sont normalisées afin de tolérer notamment les différences de casse, les accents, les espaces et l'utilisation d'une virgule ou d'un point pour les valeurs décimales.

### Progression locale

La progression est calculée automatiquement à partir des réponses de l'utilisateur :

- nombre de questions vues ;
- taux global de réussite ;
- nombre total de réponses ;
- réussite par fiche et par module ;
- détection des questions fragiles ;
- niveaux de progression : non commencé, fragile, en cours, bon, maîtrisé.

Les statistiques sont stockées **localement dans le navigateur** avec `localStorage`. Aucun compte utilisateur n'est nécessaire pour réviser.

### Contenu pédagogique enrichi

Les leçons ne sont pas limitées à du texte brut. CTCR Trainer possède son propre système d'extensions Markdown permettant d'intégrer des composants pédagogiques directement dans le contenu.

Exemples d'extensions :

- `info`, `tip`, `warning`, `danger` — encadrés pédagogiques ;
- `memory` — règle ou valeur à mémoriser ;
- `compare` — comparaison de notions ;
- `timeline` — chronologie ;
- `sequence` — enchaînement d'étapes ;
- `schedule` — représentation d'une journée de conduite, travail, pause et repos ;
- `scenario` — mise en situation ;
- `checklist` — procédure ou contrôles ;
- `metrics` — valeurs clés ;
- `summary` — synthèses structurées ;
- intégration **YouTube** et **Vimeo** ;
- tableaux GitHub Flavored Markdown ;
- formules mathématiques avec **KaTeX**.

```md
:::memory[À retenir]
4 h 30 de conduite continue

➡️ 45 min de pause
:::

:::schedule[Exemple de journée]
Conduite | 2 h | drive
Autres tâches | 1 h | work
Pause | 45 min | break
Conduite | 2 h 30 | drive
:::
```

Le parseur personnalisé protège également les blocs de code : une syntaxe d'extension écrite dans un bloc Markdown clôturé reste du code et n'est pas interprétée par l'application.

### Interface

- interface **responsive** pensée pour ordinateur et mobile ;
- mode clair, sombre ou système ;
- mode plein écran ;
- navigation adaptée aux petites tailles d'écran ;
- formules KaTeX redimensionnées automatiquement lorsqu'elles dépassent la largeur disponible ;
- défilement automatique vers les questions et corrections ;
- protection contre la fermeture accidentelle pendant un quiz ;
- changelog intégré à l'application.

### Calendrier de formation

Un calendrier dédié peut récupérer un flux **ICS** côté serveur et proposer :

- une vue mensuelle sur ordinateur ;
- une vue hebdomadaire sur mobile ;
- navigation tactile par swipe ;
- détail des événements ;
- calcul du volume horaire ;
- aperçu des séances du jour et du lendemain sur le tableau de bord.

Le flux distant est récupéré via une route serveur et mis en cache afin de ne pas exposer directement son URL dans le client.

---

## Modules disponibles

| Module | Contenu |
| --- | --- |
| 📖 **Fiches écrites** | 20 fiches de préparation et leurs questionnaires |
| 🚌 **Socle 1** | Vérifications courantes de sécurité intérieures et extérieures |
| 🔧 **Thèmes** | 6 thèmes de vérification du véhicule |
| 🎤 **Fiches orales** | 12 fiches, quiz et mode carte d'examen |
| 🛑 **Socle 2** | Contrôles, installation et essais de freinage |
| 🚧 **Manœuvres** | Préparation aux manœuvres de l'épreuve |
| 🚗 **Code de la route** | Distances, sécurité, signalisation et règles de conduite |
| 🚦 **Circulation** | Vérifications et annonces avant le départ |
| 🕒 **Réglementation sociale** | RSE, RSF interurbaine et RSF urbaine |
| 🧭 **Cartes et calculs professionnels** | Distance, vitesse, temps, carburant, proportionnalité et calculs métier |
| ♿ **Personnes à mobilité réduite** | Accueil, accompagnement et prise en charge PMR |

Le contenu continue d'évoluer au fil des corrections, des vérifications réglementaires et des besoins de révision.

---

## Stack technique

| Domaine | Technologie |
| --- | --- |
| Framework | React 19 + React Router 7 en mode framework |
| Langage | TypeScript 6 en mode strict |
| Rendu | SSR React Router |
| Build | Vite 8 |
| Styles | Tailwind CSS 4 |
| UI | shadcn/ui + Radix UI |
| Icônes | Lucide React |
| Markdown | react-markdown + remark-gfm |
| Mathématiques | remark-math + rehype-katex + KaTeX |
| Calendrier | node-ical |
| Police | Inter Variable |
| Hébergement | Vercel |
| Gestionnaire de paquets | pnpm |

---

## Architecture

Le projet suit une organisation **par domaines fonctionnels** plutôt qu'une organisation uniquement basée sur le type de fichier.

```text
app/
├── components/                  # Composants transverses et page d'accueil
│   ├── home/
│   ├── navigation/
│   └── ui/
├── domains/
│   ├── changelog/               # Versions et nouveautés
│   ├── learning/
│   │   ├── categories/          # Cartes et actions des modules
│   │   ├── data/                # Contenus pédagogiques
│   │   ├── learn/               # Lecteur de leçons + moteur Markdown
│   │   ├── oral-exam/           # Cartes d'examen oral
│   │   ├── quiz/                # Moteur de quiz
│   │   └── stats/               # Progression et stockage local
│   └── training-calendar/       # Agenda et intégration ICS
├── layouts/                     # Layout global, header, footer, fond
├── pages/                       # Pages routées
├── routes/                      # Routes serveur / documentation
├── services/                    # Providers applicatifs
├── root.tsx                     # Document racine React Router
└── routes.ts                    # Déclaration des routes

docs/
└── markdown-extensions.md       # Documentation du DSL pédagogique
```

Une description plus détaillée est disponible dans [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md).

---

## Quelques choix techniques intéressants

### Un vrai moteur de contenu pédagogique

Les leçons sont définies sous forme de données TypeScript et peuvent combiner Markdown, médias, formules et composants métier. Cela permet d'ajouter du contenu sans reconstruire manuellement une page React pour chaque fiche.

### Un parseur Markdown personnalisé

Le parseur parcourt le document ligne par ligne afin de reconnaître les extensions CTCR Trainer tout en respectant les blocs de code Markdown. Les extensions sont ensuite converties vers des composants React typés.

### Formules mathématiques réellement responsives

Les blocs KaTeX sont mesurés dans le navigateur avec `ResizeObserver`. Lorsqu'une formule dépasse son conteneur, sa taille est ajustée automatiquement afin d'éviter le débordement sur mobile.

### Mélange compatible avec le SSR

Le mélange des questions et des propositions est réalisé côté client après le montage du composant. Cela évite de générer un ordre aléatoire différent entre le serveur et le navigateur et donc les erreurs d'hydratation.

### Progression sans backend utilisateur

Le système de statistiques fonctionne entièrement côté navigateur. Les identifiants de questions sont stables et servent de clé pour conserver l'historique des réponses dans `localStorage`.

### Intégration serveur du calendrier

La route `/api/training-calendar` récupère et parse un calendrier ICS côté serveur, transforme les événements dans un format applicatif et applique une stratégie de cache HTTP.

### Version et changelog synchronisés

La version du `package.json` est injectée au build et utilisée par le système de changelog pour afficher automatiquement les nouveautés encore non consultées.

---

## Modèle de données

Le moteur d'apprentissage repose sur des unions TypeScript discriminées.

```ts
export type Question =
  | TextQuestion
  | TrueFalseQuestion
  | YesNoQuestion
  | SingleChoiceQuestion
  | MultipleChoiceQuestion

export type Lesson = {
  id: string
  title: string
  contentType: "questions" | "markdown"
  questions: Question[]
  markdown?: string
  video?: LessonVideo
}
```

Cette structure permet au lecteur de leçons, au moteur de quiz et au système de statistiques de partager la même source de données.

---

## Installation locale

### Prérequis

- **Node.js 22** recommandé ;
- **pnpm** ;
- Git.

### Installation

```bash
git clone <URL_DU_REPOSITORY>
cd tp-ctcr-trainer
pnpm install
pnpm dev
```

L'application est ensuite disponible sur l'adresse affichée par React Router/Vite.

### Variables d'environnement

Le calendrier est optionnel pour le développement du reste de l'application. Pour l'activer :

```env
TRAINING_CALENDAR_ICS_URL=https://example.com/calendar.ics
```

Un modèle est fourni dans [`.env.example`](./.env.example).

> Ne versionnez jamais une URL de calendrier privée dans le dépôt. Utilisez les variables d'environnement de votre environnement local ou de votre hébergeur.

---

## Scripts

| Commande | Description |
| --- | --- |
| `pnpm dev` | Lance le serveur de développement accessible sur le réseau local |
| `pnpm build` | Génère le build de production React Router |
| `pnpm start` | Lance le serveur à partir du build généré |
| `pnpm typecheck` | Génère les types React Router puis exécute TypeScript |
| `pnpm format` | Formate les fichiers TypeScript/TSX avec Prettier |

---

## Ajouter du contenu

Les contenus pédagogiques se trouvent principalement dans :

```text
app/domains/learning/data/
```

Exemple simplifié :

```ts
export const myLesson: Lesson = {
  id: "my-lesson",
  title: "Ma leçon",
  contentType: "markdown",
  markdown: `
# Mon cours

:::tip[Astuce]
Une information importante.
:::
  `,
  questions: [
    {
      id: "my-lesson-q01",
      type: "single-choice",
      question: "Quelle est la bonne réponse ?",
      options: ["A", "B", "C"],
      correctOption: "B",
      explanation: "Explication de la réponse.",
    },
  ],
}
```

La syntaxe complète des composants pédagogiques est documentée dans [`docs/markdown-extensions.md`](./docs/markdown-extensions.md).

> Les identifiants des questions déjà publiées doivent rester stables : ils sont utilisés pour associer les statistiques locales aux questions.

---

## Qualité et intégration continue

Le projet utilise TypeScript en mode strict et Prettier avec tri automatique des classes Tailwind.

Une workflow GitHub Actions est proposée dans ce dépôt pour vérifier automatiquement :

1. l'installation reproductible des dépendances ;
2. le typecheck TypeScript ;
3. le build de production.

```bash
pnpm typecheck
pnpm build
```

Des tests automatisés pourront être ajoutés progressivement autour du parseur Markdown, de la validation des réponses et des calculs de progression.

---

## Déploiement

CTCR Trainer est conçu pour être déployé comme application React Router SSR et est actuellement hébergé sur **Vercel**.

Pour un déploiement utilisant le calendrier, la variable suivante doit être configurée côté serveur :

```text
TRAINING_CALENDAR_ICS_URL
```

Aucune URL de calendrier privée ne doit être embarquée dans le bundle client.

---

## Roadmap

Quelques pistes d'évolution du projet :

- couverture de tests du moteur de quiz et du parseur Markdown ;
- amélioration continue de l'accessibilité ;
- missions quotidiennes configurables ;
- calendrier personnalisable ;
- enrichissement des modules et cas pratiques ;
- amélioration du fonctionnement installable/PWA ;
- outillage supplémentaire pour faciliter la création de nouvelles leçons.

La roadmap reste volontairement souple : CTCR Trainer est avant tout un projet personnel qui évolue selon les besoins réels rencontrés sur le terrain et en révision.

---

## Exactitude du contenu

Un soin particulier est apporté à la vérification des informations proposées. Malgré cela, **des erreurs, imprécisions ou coquilles peuvent subsister**.

Les réglementations, programmes de formation, modalités d'évaluation et pratiques professionnelles peuvent également évoluer après la rédaction d'une leçon. Un contenu peut donc devenir incomplet ou obsolète sans être immédiatement mis à jour.

En cas de doute, il convient de privilégier :

- les textes réglementaires en vigueur ;
- les publications des autorités compétentes ;
- les consignes de l'organisme de formation concerné.

Les résultats obtenus dans CTCR Trainer sont fournis uniquement à des fins d'entraînement et ne préjugent pas d'un résultat à une épreuve officielle.

---

## Ressources externes

Certaines leçons peuvent intégrer des ressources externes, notamment des vidéos YouTube ou Vimeo. Elles restent hébergées et diffusées par leurs plateformes respectives à l'aide de leurs lecteurs officiels.

Les marques, noms, logos et ressources appartenant à des tiers restent la propriété de leurs titulaires respectifs.

---

## Contribuer

Les signalements d'erreurs de contenu, bugs et propositions d'amélioration sont les bienvenus.

Avant de proposer une modification, consultez [`CONTRIBUTING.md`](./CONTRIBUTING.md).

Des modèles d'issues dédiés sont fournis pour distinguer :

- les bugs techniques ;
- les erreurs ou informations obsolètes dans le contenu ;
- les demandes de fonctionnalités.

---

## Sécurité

Pour signaler une vulnérabilité ou un problème qui ne doit pas être publié dans une issue publique, consultez [`SECURITY.md`](./SECURITY.md).

---

## Licence

Aucune licence open source n'est imposée dans cette proposition de README.

En l'absence de licence explicite, le code et les contenus restent protégés par le droit d'auteur et ne sont pas automatiquement réutilisables, modifiables ou redistribuables.

Plusieurs stratégies adaptées au projet sont présentées dans [`LICENSE-OPTIONS.md`](./LICENSE-OPTIONS.md), notamment la possibilité de distinguer :

- la **licence du code source** ;
- la **licence des contenus pédagogiques et illustrations originales** ;
- les **ressources tierces**, qui conservent leur propre statut.

---

## Contact

Une erreur, un bug ou une suggestion ?

**CTCR Trainer** — `ctcr@johan-chereau.com`

---

<div align="center">
  <p>
    Développé avec ❤️ en France par Johan.
  </p>
  <p>
    Projet personnel d'apprentissage, indépendant et non affilié à un organisme de formation.
  </p>
</div>
