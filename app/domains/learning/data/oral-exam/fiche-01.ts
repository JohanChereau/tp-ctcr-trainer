import type { OralExamCard } from "~/domains/learning/oral-exam/types"

export const oralExamCard01: OralExamCard = {
  lessonId: "oral-01",

  number: 1,

  title:
    "Conduite dans des conditions atmosphériques difficiles, route de nuit",

  sections: [
    {
      title: "Conduite et comportement",

      children: [
        {
          title: "Règles générales",

          markdown: `
- Réduire sa vitesse
- Augmenter les distances de sécurité
- Anticiper
          `,
        },

        {
          title: "Pluie",

          markdown: `
- Feux de croisement
- Feux de brouillard avant possibles
- Ventilation, dégivrage et climatisation
- Conduite souple
- Anticiper davantage
- Utiliser le frein moteur
          `,
        },

        {
          title: "Brouillard",

          markdown: `
### Règle des 3 × 50

- Visibilité inférieure à 50 m
- Vitesse maximale : 50 km/h
- Distance de sécurité : 50 m

### Éclairage

- Feux de croisement
- Feux de brouillard avant
- Feux de brouillard arrière
          `,
        },

        {
          title: "Vent",

          markdown: `
### Risque accru

Particulièrement avec les véhicules hauts et peu chargés.

### Vigilance renforcée

- Endroits exposés
- Passage zone abritée → zone exposée
- Croisements
- Dépassements
- Ponts
- Sommets et collines
          `,
        },

        {
          title: "Neige et verglas",

          markdown: `
### Avant le départ

- Vérifier les conditions de circulation

### Pendant le trajet

- Utiliser les équipements autorisés
- Feux de croisement
- Feux de brouillard avant possibles
- Feux de brouillard arrière
- Conduite très souple
- Anticiper au maximum
- Respecter les barrières de dégel

### Conditions dangereuses

- Ne pas partir
- Ou interrompre le trajet
          `,
        },

        {
          title: "Nuit",

          markdown: `
### Risques principaux

- Vitesse excessive
- Manque de visibilité
- Fatigue
- Alcool
- Présence d'animaux

### Vision dégradée

- Couleurs moins bien perçues
- Champ visuel réduit
          `,
        },
      ],
    },

    {
      title: "Précautions à prendre",

      children: [
        {
          title: "Avant le trajet",

          markdown: `
### Être reposé

- Éviter la fatigue avant le départ

### Vérifications

- Dispositifs de visibilité
- Propreté des vitrages
- Éclairage
- Batterie

### Matériel conseillé

- Boîte d'ampoules
- Boîte de fusibles
- Lampe torche
          `,
        },

        {
          title: "Pendant le trajet",

          markdown: `
- Faire des pauses plus fréquentes
- Adapter son allure à la météo
- Adapter son allure à la visibilité
- Ralentir avant les virages
- Anticiper les obstacles
- Utiliser le marquage au sol comme repère
- Surveiller les signes de fatigue
          `,
        },
      ],
    },

    {
      title: "Informations routières",

      markdown: `
### Sources d'information

- Internet
- Centres d'Information Routière
- Autoroute Info
- Radio
- Police
- Gendarmerie
      `,
    },
  ],
}
