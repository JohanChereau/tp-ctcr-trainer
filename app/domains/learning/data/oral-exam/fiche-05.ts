import type { OralExamCard } from "~/domains/learning/oral-exam/types"

export const oralExamCard05: OralExamCard = {
  lessonId: "oral-05",

  number: 5,

  title: "Chargement - Surcharge",

  sections: [
    {
      title: "Chargement",

      children: [
        {
          title: "Précautions",

          markdown: `
### Vérifications préalables

- Posséder les autorisations nécessaires
- Vérifier la compatibilité du véhicule
- Respecter les masses autorisées

### Masses à respecter

- PTAC
- PTRA
- PMA
- Poids par essieu

### Chargement des passagers et bagages

- Répartir correctement les charges
- Arrimer les bagages si nécessaire
- Vérifier l'installation des voyageurs
- Informer sur le port de la ceinture
- Prendre les précautions nécessaires pour les PMR
- Placer les bagages lourds en soute

### Itinéraire et conduite

- Adapter sa vitesse
- Tenir compte du gabarit
- Tenir compte des limitations de tonnage
          `,
        },

        {
          title: "Risques",

          markdown: `
Un mauvais chargement peut provoquer :

- Déséquilibre du véhicule
- Départ de charge au freinage
- Risque de renversement
- Chute de marchandises ou bagages
- Détérioration du véhicule
- Dommages à la chaussée ou aux ouvrages d'art
- Dégâts sur les marchandises transportées
- Refus ou limitation de garantie de l'assurance
          `,
        },
      ],
    },

    {
      title: "Surcharge",

      markdown: `
### À respecter

- PTAC
- PTRA
- PMA
- Poids par essieu
- Nombre de passagers autorisé

### Attention

Une mauvaise répartition peut surcharger un essieu même si la masse totale est respectée.

### Où trouver les informations ?

#### Certificat d'immatriculation

- G1 : Poids à vide (PV)
- F2 : PTAC
- F3 : PTRA

#### Autres documents

- Plaque de tare
- Plaque constructeur
- Dispositif d'attelage (catégorie DE)

### Évaluation rapide

- 1 voyageur en autocar ≈ 70 kg
- 1 passager en autobus ≈ 65 kg
- 1 enfant ≈ 40 kg
      `,
    },

    {
      title: "Sanctions",

      markdown: `
### Amende de 4e classe

- 90 € minorée
- 135 € forfaitaire
- 375 € majorée

### Autres sanctions

- Immobilisation du véhicule au-delà de 5 % de surcharge
- Mise en fourrière après 48 h
- Peine de prison dans les cas les plus graves
      `,
    },
  ],
}
