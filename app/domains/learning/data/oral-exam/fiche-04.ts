import type { OralExamCard } from "~/domains/learning/oral-exam/types"

export const oralExamCard04: OralExamCard = {
  lessonId: "oral-04",

  number: 4,

  title: "Gestes et postures - Accidents du travail",

  sections: [
    {
      title: "Gestes et postures à adopter",

      children: [
        {
          title: "Montée et descente du véhicule",

          markdown: `
### Risques

- Chutes
- Entorses
- Foulures
- Fractures

### Bonnes pratiques

- Ne jamais sauter les marches
- Vérifier l'état des marches
- Utiliser les poignées
- Conserver 3 points d'appui

### Porte conducteur

- Attention aux véhicules arrivant par l'arrière
          `,
        },

        {
          title: "Chargement et déchargement",

          markdown: `
- Garder le dos droit
- Utiliser la force des jambes
- Conserver son équilibre
- Vérifier la stabilité des charges
          `,
        },

        {
          title: "Lavage du véhicule",

          markdown: `
- Attention aux travaux en hauteur
- Attention aux surfaces glissantes
- Respecter les consignes de sécurité
          `,
        },

        {
          title: "Équipements de protection",

          markdown: `
### EPI

- Gants
- Chaussures de sécurité
- Vêtements adaptés
          `,
        },
      ],
    },

    {
      title: "Importance des accidents",

      children: [
        {
          title: "Définitions",

          markdown: `
### Accident du travail

Accident survenant :

- Pendant l'activité professionnelle
- Ou à l'occasion du travail

### Accident de trajet

Accident survenant :

- Domicile → Travail
- Travail → Domicile
- Pendant une coupure liée au travail
          `,
        },

        {
          title: "Quelques chiffres",

          markdown: `
### Transport de voyageurs

- 223 accidents corporels impliquant un autocar (2024)
- 36 personnes tuées
- L'autocar est environ 14 fois plus sûr que l'automobile
          `,
        },
      ],
    },

    {
      title: "Dangers et risques",

      children: [
        {
          title: "Chiffres à retenir",

          markdown: `
- 2 914 accidents du travail (2022)
- 479 accidents de trajet
- Plus de 100 000 conducteurs salariés concernés
- Véhicule lourd : 13 fois plus dangereux à l'arrêt qu'en circulation
          `,
        },

        {
          title: "Principales causes",

          markdown: `
- Montée et descente du véhicule
- Chutes de hauteur
- Chutes de plain-pied
- Risques routiers
- Agressions
- Mauvaises postures
- Port de charges lourdes
          `,
        },

        {
          title: "Principales lésions",

          markdown: `
- Traumatismes physiques ou psychiques
- Entorses
- Douleurs dos, bras, épaules
- Intoxications
- Allergies
- Brûlures
          `,
        },

        {
          title: "Risques liés au véhicule",

          markdown: `
### Portes

- Coincement
- Écrasement
- Blessure d'un voyageur

### Soutes

- Coincement de la main
- Écrasement lors de la fermeture
          `,
        },
      ],
    },
  ],
}
