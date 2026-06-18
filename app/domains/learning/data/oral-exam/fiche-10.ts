import type { OralExamCard } from "~/domains/learning/oral-exam/types"

export const oralExamCard10: OralExamCard = {
  lessonId: "oral-10",

  number: 10,

  title: "Porte-à-faux et angles morts",

  sections: [
    {
      title: "Porte-à-faux",

      children: [
        {
          title: "Connaissance du véhicule",

          markdown: `
### Définition

Un **porte-à-faux** correspond à la partie du véhicule située au-delà d'un essieu.

### Types de porte-à-faux

#### Porte-à-faux avant

Distance entre :

- L'axe de la roue avant
- L'avant du véhicule

#### Porte-à-faux arrière

Distance entre :

- L'axe de la roue arrière
- L'arrière du véhicule

> **À retenir**
>
> Plus le véhicule est long, plus les déports peuvent être importants lors des changements de direction.
          `,
        },

        {
          title: "Situations particulières",

          markdown: `
- Virages serrés
- Virages à droite
- Virages à gauche
- Manœuvres
- Passages étroits
          `,
        },

        {
          title: "Dangers",

          markdown: `
### Risques principaux

- Accrochage avec un véhicule
- Accrochage avec un obstacle
- Renversement d'un piéton
- Renversement d'un cycliste
- Renversement d'un deux-roues
          `,
        },

        {
          title: "Précautions",

          markdown: `
- Surveiller l'avant et l'arrière du véhicule
- Utiliser tous les rétroviseurs
- Anticiper les trajectoires
- Anticiper les placements
- Descendre voir si nécessaire
- Se faire guider lors des manœuvres délicates
          `,
        },
      ],
    },

    {
      title: "Angles morts",

      children: [
        {
          title: "Connaissance du véhicule",

          markdown: `
### Définition

Les **angles morts** sont les zones que le conducteur ne peut pas voir directement ou à l'aide des rétroviseurs.

### Localisation

- À l'avant
- À l'arrière
- Sur les côtés

> **À retenir**
>
> Les angles morts sont particulièrement importants sur les véhicules lourds.
          `,
        },

        {
          title: "Situations particulières",

          markdown: `
- Dépassements
- Rabattements
- Changements de direction
- Manœuvres
          `,
        },

        {
          title: "Dangers",

          markdown: `
### Risques principaux

- Collision à l'avant
- Collision à l'arrière
- Collision sur les côtés

### Usagers vulnérables

- Piétons
- Cyclistes
- Deux-roues

### Vigilance renforcée

- En circulation urbaine
- Lors des arrêts
          `,
        },

        {
          title: "Précautions",

          markdown: `
- Utiliser tous les rétroviseurs
- Contrôler régulièrement son environnement
- Descendre voir en cas de doute
- Se faire guider lors des manœuvres

### Équipements d'aide

- Rétroviseur principal
- Rétroviseur grand angle
- Rétroviseur d'accostage
- Caméra de recul

> **À retenir**
>
> Les équipements réduisent les angles morts mais ne les suppriment jamais totalement.
          `,
        },
      ],
    },
  ],
}
