import type { OralExamCard } from "~/domains/learning/oral-exam/types"

export const oralExamCard02: OralExamCard = {
  lessonId: "oral-02",

  number: 2,

  title: "Comportement en cas d'accident",

  sections: [
    {
      title: "Gestes d'urgence",

      children: [
        {
          title: "Règle P.A.S.",

          markdown: `
### Protéger

- Gilet haute visibilité
- Triangle si possible
- Feux de détresse
- Éclairage des lieux la nuit

### Alerter

Recueillir :

- Lieu exact
- Type de véhicule
- Nombre de blessés
- État apparent des victimes

### Numéros d'urgence

- 15 : SAMU
- 17 : Police / Gendarmerie
- 18 : Pompiers
- 112 : Numéro d'urgence européen

### Secourir

- Couvrir les victimes
- Leur parler
- Les rassurer
- Ne faire que les gestes maîtrisés
          `,
        },
      ],
    },

    {
      title: "Protection des personnes",

      children: [
        {
          title: "Gestes dangereux",

          markdown: `
### Ne jamais

- Donner à boire
- Déplacer un blessé
- Réaliser un geste non maîtrisé
- Retirer le casque d'un motard

### Exceptions

Uniquement en cas de :

- Risque d'incendie
- Risque de noyade
          `,
        },
      ],
    },

    {
      title: "Conduite à tenir",

      children: [
        {
          title: "Accident matériel",

          markdown: `
### Comportement

- Rester calme et courtois
- Prévenir l'entreprise
- Sécuriser les lieux
- Dégager les véhicules si possible

### Constat amiable

Compléter :

- Conducteurs
- Assurances
- Date et heure
- Lieu
- Dégâts
- Croquis

### À retenir

- Un exemplaire par conducteur
- Recto non modifiable après signature
- Envoi à l'assurance sous 5 jours ouvrés
          `,
        },
      ],
    },

    {
      title:
        "Particularités spécifiques aux véhicules affectés au transport de personnes",

      children: [
        {
          title: "Mesures immédiates",

          markdown: `
- Garder son calme
- Arrêter le moteur
- Allumer les feux de détresse
- Couper le coupe-batterie
          `,
        },

        {
          title: "Évacuation des passagers",

          markdown: `
### Hors agglomération

- Faire évacuer
- Regrouper les passagers
- Les éloigner du danger
- Derrière les glissières si possible

### En agglomération

- Les passagers restent à bord

### Exceptions

- Incendie
- Danger immédiat
          `,
        },

        {
          title: "Aide aux secours",

          markdown: `
Indiquer l'emplacement :

- Extincteurs
- Trousse de secours
- Marteaux brise-vitres
- Lampe autonome
- Gilets de sécurité
          `,
        },
      ],
    },
  ],
}
