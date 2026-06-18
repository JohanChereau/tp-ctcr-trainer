import type { OralExamCard } from "~/domains/learning/oral-exam/types"

export const oralExamCard06: OralExamCard = {
  lessonId: "oral-06",

  number: 6,

  title: "Dépassement",

  sections: [
    {
      title: "Précautions avant, pendant et après le dépassement",

      children: [
        {
          title: "Avant le dépassement",

          markdown: `
### Particularités des véhicules lourds

- Masse importante
- Gabarit important
- Angles morts
- Porte-à-faux
- Faible accélération

### Vérifications

- Dépassement autorisé
- Signalisation respectée
- Distance suffisante
- Vitesse adaptée
- Contrôle des rétroviseurs
- Tenir compte du limiteur et du régulateur

### Possibilité d'utiliser

- Avertisseurs lumineux
- Avertisseurs sonores si nécessaire

### Cas particuliers

Ne pas dépasser :

- Si la chaussée est enneigée
- Si la signalisation l'interdit

### Autoroute

Les véhicules de plus de :

- 7 mètres
- et 3,5 tonnes

sont soumis à des restrictions d'utilisation de la troisième voie.
          `,
        },

        {
          title: "Pendant le dépassement",

          markdown: `
- Respecter les distances de sécurité
- Surveiller la trajectoire
- Adapter sa vitesse
- Contrôler les rétroviseurs
- Surveiller les angles morts

### Usagers vulnérables

Distances minimales :

- 1 m en agglomération
- 1,50 m hors agglomération
          `,
        },

        {
          title: "Après le dépassement",

          markdown: `
- Ne pas gêner le véhicule dépassé
- Contrôler les rétroviseurs
- Contrôler les angles morts
- Utiliser le clignotant
- Faire attention au porte-à-faux

### Véhicule de même catégorie

- Respecter 50 m avant de se rabattre
          `,
        },
      ],
    },

    {
      title: "Dangers liés au dépassement",

      markdown: `
### Principal danger

- Accrochage

### Causes fréquentes

- Mauvaise évaluation des distances
- Mauvaise évaluation des vitesses
- Écart de trajectoire
- Mauvaise surveillance des angles morts

### Attention au vent

Le vent peut provoquer un déport du véhicule :

- Lors d'un croisement
- Lors d'un dépassement
- Lors du passage d'une zone abritée à une zone exposée
      `,
    },

    {
      title: "Être dépassé",

      markdown: `
- Maintenir son allure
- Serrer à droite lorsque possible
- Faciliter les distances de sécurité
- Rester attentif aux écarts de trajectoire
- Faire attention au vent

### En cas de danger

- Ralentir si nécessaire pour faciliter la manœuvre
      `,
    },

    {
      title: "Dispositifs de protection anti-encastrement",

      children: [
        {
          title: "Protection latérale",

          markdown: `
### Protège principalement

- Cyclistes
- Usagers vulnérables

### Évite

- Le passage sous les roues arrière
- Le passage sous le véhicule
          `,
        },

        {
          title: "Protection arrière",

          markdown: `
### Protège

- Les usagers arrivant par l'arrière

### Évite

- L'encastrement sous le véhicule
          `,
        },
      ],
    },
  ],
}
