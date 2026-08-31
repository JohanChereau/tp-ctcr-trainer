# Contribuer à CTCR Trainer

Merci de vouloir améliorer CTCR Trainer.

Le projet a été créé comme support personnel de révision du TP CTCR. Les contributions les plus utiles sont donc celles qui améliorent à la fois **l'exactitude du contenu**, **l'expérience d'apprentissage** et **la qualité technique** de l'application.

## Avant de commencer

Pour une petite correction évidente, une pull request directe est possible.

Pour une modification importante, une nouvelle fonctionnalité ou une évolution de l'architecture, ouvrez de préférence une issue afin de discuter du besoin avant de commencer le développement.

## Signaler une erreur de contenu

Une erreur pédagogique ou réglementaire doit idéalement être accompagnée de :

- la page ou la fiche concernée ;
- le passage à corriger ;
- la correction proposée ;
- une source fiable et récente lorsque le sujet est réglementaire ;
- la date de consultation de la source si l'information peut évoluer.

Pour les sujets réglementaires, privilégiez les sources primaires et officielles : textes législatifs et réglementaires, publications administratives, référentiels officiels, etc.

Ne copiez pas directement des passages substantiels provenant de supports de formation, livres, sites ou autres contenus protégés. Reformulez les informations factuelles et respectez les droits des auteurs des ressources utilisées.

## Environnement de développement

### Prérequis

- Node.js 22 recommandé ;
- pnpm ;
- Git.

### Installation

```bash
git clone <URL_DU_REPOSITORY>
cd tp-ctcr-trainer
pnpm install
pnpm dev
```

### Vérifications avant une pull request

```bash
pnpm format
pnpm typecheck
pnpm build
```

## Organisation du code

Le projet est organisé par domaines fonctionnels.

```text
app/domains/
├── changelog/
├── learning/
│   ├── categories/
│   ├── data/
│   ├── learn/
│   ├── oral-exam/
│   ├── quiz/
│   └── stats/
└── training-calendar/
```

Avant de créer un nouveau dossier transverse, vérifiez si le code appartient à un domaine existant.

Pour plus de détails, consultez [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md).

## Ajouter ou modifier une leçon

Les contenus sont principalement définis dans :

```text
app/domains/learning/data/
```

### Identifiants stables

Les identifiants de questions servent de clé au système de statistiques stocké dans le navigateur.

**Ne renommez pas l'identifiant d'une question déjà publiée sans raison importante**, au risque de faire perdre le lien avec l'historique local des utilisateurs.

Convention recommandée :

```text
<lesson-id>-q01
<lesson-id>-q02
<lesson-id>-q03
```

### Types de questions disponibles

- `text`
- `true-false`
- `yes-no`
- `single-choice`
- `multiple-choice`

Les questions peuvent contenir des explications, indices, images et tags.

## Markdown enrichi

CTCR Trainer possède son propre ensemble d'extensions Markdown.

La documentation complète se trouve dans :

[`docs/markdown-extensions.md`](./docs/markdown-extensions.md)

Les extensions actuellement prises en charge comprennent notamment :

- callouts `info`, `tip`, `warning`, `danger` ;
- `metrics` ;
- `timeline` ;
- `compare` ;
- `sequence` ;
- `schedule` ;
- `scenario` ;
- `checklist` ;
- `memory` ;
- `summary` ;
- embeds YouTube et Vimeo.

Lorsque vous modifiez le parseur, vérifiez particulièrement le comportement à l'intérieur des blocs de code Markdown clôturés.

## Style et conventions

- TypeScript strict ;
- composants React fonctionnels ;
- alias `~/` pour les imports depuis `app/` ;
- Prettier pour le formatage ;
- classes Tailwind triées par `prettier-plugin-tailwindcss` ;
- composants réutilisables privilégiés lorsque cela simplifie réellement le code ;
- pas d'abstraction prématurée pour une logique utilisée une seule fois.

## Pull requests

Une pull request doit idéalement :

1. rester centrée sur un sujet ;
2. expliquer le problème résolu ;
3. décrire les changements fonctionnels visibles ;
4. inclure des captures si l'interface est modifiée ;
5. préciser les sources utilisées lorsqu'un contenu réglementaire change ;
6. passer `pnpm typecheck` et `pnpm build`.

## Ressources tierces

N'ajoutez pas au dépôt :

- une vidéo téléchargée depuis YouTube/Vimeo lorsqu'un embed officiel suffit ;
- une image trouvée sur le web sans droit d'utilisation clair ;
- un extrait substantiel de support pédagogique tiers ;
- des données personnelles ou une URL privée de calendrier.

## Contact

Pour une question qui ne nécessite pas une issue publique :

`ctcr@johan-chereau.com`
