# Architecture de CTCR Trainer

Ce document décrit l'organisation technique actuelle de CTCR Trainer et les principaux flux entre les différentes parties de l'application.

## Vue d'ensemble

CTCR Trainer est une application React Router 7 en mode framework avec rendu serveur activé.

L'architecture est organisée autour de **domaines fonctionnels** : apprentissage, quiz, statistiques, calendrier et changelog. Les composants purement transverses restent dans `app/components` et les éléments de structure dans `app/layouts`.

```text
app/
├── components/
├── config/
├── domains/
├── hooks/
├── layouts/
├── lib/
├── pages/
├── routes/
├── services/
├── root.tsx
└── routes.ts
```

## Routing

Les routes sont déclarées explicitement dans `app/routes.ts` avec `@react-router/dev/routes`.

Les familles de routes principales sont :

```text
/                                           Accueil
/about                                      À propos
/learning/:categoryId                       Module
/learning/:categoryId/revision              Liste des leçons
/learning/:categoryId/:lessonId              Choix du mode pour une leçon
/learning/:categoryId/:lessonId/learn        Lecture
/learning/:categoryId/:lessonId/quiz         Quiz d'une leçon
/learning/:categoryId/quiz                   Quiz global
/learning/:categoryId/exam                   Examen blanc
/learning/:categoryId/weak-questions         Révision ciblée
/learning/:categoryId/oral-card/:lessonId?   Carte orale
/training-calendar                           Calendrier
/api/training-calendar                       Endpoint ICS côté serveur
/docs/markdown                               Documentation de rendu
```

## Domaine `learning`

Le domaine `learning` concentre l'essentiel de la logique métier.

```text
app/domains/learning/
├── categories/
├── data/
├── learn/
├── oral-exam/
├── quiz/
├── stats/
└── types/
```

### `data`

Contient les catégories, leçons et questions.

Chaque catégorie référence ses leçons :

```ts
export type LearningCategory = {
  id: string
  type: LearningCategoryType
  title: string
  description: string
  icon: string
  lessons: Lesson[]
}
```

Les leçons sont soit orientées questions, soit orientées Markdown enrichi :

```ts
export type Lesson = {
  id: string
  title: string
  contentType: "questions" | "markdown"
  questions: Question[]
  markdown?: string
  video?: LessonVideo
}
```

### Questions

Le type `Question` est une union discriminée :

```ts
export type Question =
  | TextQuestion
  | TrueFalseQuestion
  | YesNoQuestion
  | SingleChoiceQuestion
  | MultipleChoiceQuestion
```

Le moteur de quiz n'a donc pas besoin de connaître la fiche d'origine pour rendre ou corriger une question.

## Lecture de leçons

Le dossier `learn/` gère deux types de contenu :

- les leçons basées sur des questions ;
- les leçons Markdown enrichies.

### Pipeline Markdown

```text
Markdown brut
    │
    ▼
parseMarkdown()
    │
    ├── texte Markdown standard
    ├── embed vidéo
    └── extension CTCR
            │
            ▼
MarkdownPart[]
    │
    ▼
MarkdownPartRenderer
    │
    ├── ReactMarkdown
    ├── MarkdownCallout
    ├── MarkdownTimeline
    ├── MarkdownSchedule
    ├── MarkdownScenario
    └── ...
```

Le parseur travaille ligne par ligne et sait ignorer les pseudo-extensions présentes dans les blocs de code Markdown.

### Markdown standard

Le rendu standard repose sur :

- `react-markdown` ;
- `remark-gfm` ;
- `remark-math` ;
- `rehype-katex`.

Les formules KaTeX sont redimensionnées côté client si elles débordent de leur conteneur.

## Quiz

Le moteur de quiz est isolé dans :

```text
app/domains/learning/quiz/
├── components/
├── hooks/
├── types/
└── utils/
```

### Cycle d'un quiz d'entraînement

```text
setup
  │
  ▼
question
  │ submit
  ▼
correction
  │ next
  ├───────────────┐
  ▼               │
question          │
                  │ dernière question
                  ▼
               résultats
```

### Cycle d'un examen

En mode examen, les réponses sont enregistrées sans afficher la correction intermédiaire. Le quiz passe directement à la question suivante jusqu'à la fin ou l'expiration du timer.

### Initialisation

Le mélange aléatoire est volontairement déclenché côté client dans un `useEffect` afin d'éviter une divergence entre le HTML produit par le SSR et le premier rendu du navigateur.

Les propositions des QCU/QCM sont également mélangées indépendamment.

### Validation des réponses

Les réponses libres passent par un normaliseur qui :

- supprime les espaces superflus ;
- ignore la casse ;
- retire les accents ;
- accepte la virgule comme séparateur décimal en la convertissant en point.

Les QCM comparent les ensembles de réponses triés.

## Statistiques

Le domaine `stats/` ne dépend pas d'un backend utilisateur.

Les statistiques sont stockées dans :

```text
localStorage["ctcr-question-stats"]
```

Pour chaque question :

```ts
type QuestionStats = {
  questionId: string
  correctCount: number
  incorrectCount: number
  lastAnsweredAt: string
}
```

À partir de cette structure, l'application calcule :

- le taux de réussite ;
- la progression par leçon ;
- la progression par catégorie ;
- les questions faibles ;
- les statistiques du tableau de bord.

Les questions non encore répondue peuvent également être intégrées dans les listes de révision ciblée selon le contexte.

## Calendrier

Le calendrier est séparé en deux parties.

### Côté serveur

`app/routes/api.training-calendar.ts` :

1. lit `TRAINING_CALENDAR_ICS_URL` ;
2. télécharge le flux ICS ;
3. le parse avec `node-ical` ;
4. transforme les événements ;
5. calcule les ensembles `today`, `tomorrow` et `upcoming` ;
6. renvoie une réponse JSON avec cache HTTP.

### Côté client

Le hook `useTrainingCalendar` interroge l'endpoint interne.

Le composant `TrainingCalendar` adapte ensuite l'interface :

- calendrier mensuel sur desktop ;
- semaine sur mobile ;
- navigation par boutons ;
- swipe horizontal sur écran tactile ;
- dialogue de détail d'un événement.

## Changelog

La version du `package.json` est injectée par Vite dans l'application.

Le changelog compare la version courante à la dernière version consultée dans le navigateur afin d'ouvrir automatiquement la fenêtre de nouveautés lorsque nécessaire.

## Layout et providers

`AppLayout` centralise :

- le fond applicatif ;
- le header ;
- la largeur maximale du contenu ;
- le changelog ;
- le footer.

Le thème est fourni au niveau racine afin d'être disponible dans toute l'application.

## Règles d'architecture utiles

### Garder la logique dans son domaine

Une fonctionnalité propre au quiz doit rester dans `learning/quiz`, et non dans un dossier de composants global.

### Préserver les identifiants de questions

Les IDs sont des clés persistantes pour les statistiques locales. Les modifier revient à créer une nouvelle question du point de vue du système de progression.

### Séparer contenu et rendu

Les données de cours doivent rester dans `learning/data` et les composants de rendu dans `learning/learn`.

### Ne pas mettre de secrets dans le client

Les URL privées, clés ou variables sensibles doivent rester côté serveur et être fournies via l'environnement d'exécution.

## Axes d'amélioration possibles

- tests unitaires du parseur Markdown ;
- tests du moteur de correction ;
- tests des fonctions de statistiques ;
- lint dédié en plus du typecheck ;
- personnalisation utilisateur des missions et du calendrier ;
- séparation plus formelle entre contenu éditorial et code applicatif si le volume de leçons continue à croître.
