import type { OralExamCard } from "~/domains/learning/oral-exam/types"

export const oralExamCard08: OralExamCard = {
  lessonId: "oral-08",

  number: 8,

  title: "Alcool, stupéfiants, médicaments",

  sections: [
    {
      title: "Alcool",

      children: [
        {
          title: "Effets",

          markdown: `
### Alcoolémie

- **1 verre** ≈ **0,20 à 0,25 g/L de sang**
- Soit environ **0,10 mg/L d'air expiré**

### Pic d'alcoolémie

- **30 min** après le dernier verre à jeun
- **1 h** après le dernier verre lors d'un repas

### Élimination

- Entre **0,10 et 0,15 g/L par heure**
- Aucun moyen ne permet d'accélérer l'élimination

### Effets sur la conduite

- Réduction du champ visuel
- Vision troublée
- Temps de réaction allongé
- Baisse de vigilance
- Diminution des réflexes
- Somnolence
- Perte de mémoire
- Prise de risque excessive
- Agressivité
- Euphorie
          `,
        },

        {
          title: "Sanctions",

          markdown: `
### Conducteur de transport en commun

Contravention à partir de :

- **0,20 g/L de sang**
- ou **0,10 mg/L d'air expiré**

Sanctions :

- **135 € d'amende**
- **Retrait de 6 points**

### Délit

À partir de :

- **0,80 g/L de sang**
- ou **0,40 mg/L d'air expiré**

Sanctions possibles :

- Retrait de 6 points
- Jusqu'à **4 500 € d'amende**
- Immobilisation du véhicule
- Suspension du permis jusqu'à 3 ans
- Annulation du permis
- Jusqu'à **2 ans d'emprisonnement**
          `,
        },
      ],
    },

    {
      title: "Stupéfiants",

      children: [
        {
          title: "Effets",

          markdown: `
### Effets sur la conduite

- Temps de réaction allongé
- Perte de maîtrise des trajectoires
- Diminution de la vigilance
- Baisse de l'attention
- Fausses perceptions
- Fausse impression de sécurité

### Risques

- Le cannabis multiplie le risque d'accident
- Associé à l'alcool, le risque devient extrêmement élevé
          `,
        },

        {
          title: "Sanctions",

          markdown: `
### Délit systématique

La conduite sous l'emprise de stupéfiants constitue directement un délit.

### Sanctions possibles

- Retrait de 6 points
- Jusqu'à **4 500 € d'amende**
- Immobilisation du véhicule
- Suspension du permis jusqu'à 3 ans
- Annulation du permis
- Jusqu'à **2 ans d'emprisonnement**

### Alcool + stupéfiants

Sanctions possibles :

- Jusqu'à **9 000 € d'amende**
- Jusqu'à **3 ans d'emprisonnement**
          `,
        },
      ],
    },

    {
      title: "Médicaments",

      markdown: `
### Avant de conduire

- Lire attentivement la notice
- Respecter les indications
- Demander conseil à un médecin ou un pharmacien si nécessaire

### Attention

- Ne jamais mélanger alcool et médicaments

### Pictogrammes

#### 🟡 Niveau 1 (Jaune)

- Risque faible
- Lire attentivement la notice

#### 🟠 Niveau 2 (Orange)

- Risque modéré
- Être prudent
- Demander conseil à un professionnel de santé

#### 🔴 Niveau 3 (Rouge)

- Risque élevé
- Ne pas conduire
- Demander l'avis d'un médecin avant de reprendre la conduite

### Fatigue

La fatigue diminue :

- L'attention
- La concentration
- La vigilance

### Signes de fatigue

- Bâillements répétés
- Nuque raide
- Dos raide
- Regard fixe
- Paupières lourdes
- Microsommeils

### Microsommeil

- Entre **1 et 4 secondes**
      `,
    },
  ],
}
