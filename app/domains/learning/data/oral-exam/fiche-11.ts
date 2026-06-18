import type { OralExamCard } from "~/domains/learning/oral-exam/types"

export const oralExamCard11: OralExamCard = {
  lessonId: "oral-11",

  number: 11,

  title: "Comportement en tunnels et aux passages à niveau",

  sections: [
    {
      title: "Tunnels",

      children: [
        {
          title: "Conduite en sécurité",

          markdown: `
### Avant d'entrer

- Vérifier que le tunnel est ouvert
- Consulter les panneaux à messages variables
- Vérifier l'état du véhicule
- Vérifier le niveau de carburant
- Écouter la radio du tunnel (**107.7 FM**)

> **Exemple**
>
> Le tunnel du Mont-Blanc mesure plus de **12 km**.

### Dans le tunnel

- Retirer les lunettes de soleil si nécessaire
- Ne pas fumer
- Écouter les informations radio
- Respecter les consignes de sécurité
- Allumer les feux de croisement
- Respecter les limitations de vitesse
- Respecter les limitations de gabarit

### Respecter

- Les distances de sécurité
- Les intervalles à l'arrêt
- Les marquages et repères lumineux
          `,
        },

        {
          title: "En cas d'arrêt",

          markdown: `
- Conserver les distances de sécurité
- Allumer les feux de détresse
- Respecter les consignes affichées
- Rester à l'écoute de la radio

### Interdictions

- Ne jamais faire marche arrière
- Ne jamais faire demi-tour
          `,
        },

        {
          title: "En cas d'urgence",

          markdown: `
- Couper le moteur
- Allumer les feux de détresse
- Utiliser les aires d'arrêt d'urgence si elles existent
- Se garer au plus près de la paroi si nécessaire
- Prévenir rapidement les secours

### Moyens d'alerte

- Bornes SOS
- Niches SOS
- Poste de contrôle du tunnel
          `,
        },

        {
          title: "En cas d'incendie",

          markdown: `
### Réagir immédiatement

- S'arrêter
- Couper le moteur
- Allumer les feux de détresse
- Porter le gilet haute visibilité

### Alerter

- Utiliser les bornes SOS
- Prévenir les secours

### Évacuer

- Rejoindre un abri
- Rejoindre une issue de secours
- Aider les personnes en difficulté sans se mettre en danger

### Interdictions

- Ne jamais faire demi-tour
- Ne jamais faire marche arrière

### Si possible

- Utiliser les extincteurs
- Utiliser les lances à incendie
          `,
        },
      ],
    },

    {
      title: "Passages à niveau",

      children: [
        {
          title: "Différents types",

          markdown: `
### Sans barrière

- Rare
- Très dangereux

### À barrières manuelles

- Très rare

### Automatique

- Le plus répandu
- Demi-barrières ou barrières complètes
          `,
        },

        {
          title: "Données statistiques",

          markdown: `
### En France

- Environ **15 000 passages à niveau**

### Accidents

- **98 %** des accidents sont dus au non-respect du Code de la route

### SNCF 2024

- **31 accidents rail-route**
- **19 personnes tuées**
- **14 personnes blessées**
          `,
        },

        {
          title: "Précautions",

          markdown: `
### Tenir compte

- De l'inertie du véhicule
- De sa longueur
- De sa hauteur
- De sa garde au sol

### Avant de franchir

- Respecter la signalisation
- Adapter son allure
- Vérifier que le passage peut être dégagé entièrement
- Vérifier qu'il existe un espace suffisant après le passage à niveau

### Éviter

- De changer de vitesse sur le passage à niveau

### En cas d'immobilisation

- Tenter de redémarrer rapidement
- Évacuer le véhicule si nécessaire
- Prévenir immédiatement la SNCF via la borne d'urgence

### Si nécessaire

- Casser les barrières pour dégager le véhicule
          `,
        },
      ],
    },
  ],
}
