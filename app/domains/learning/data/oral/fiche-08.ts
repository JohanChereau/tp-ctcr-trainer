import type { Lesson } from "../../types/learning"

export const fiche08: Lesson = {
  id: "oral-08",

  title: "Fiche orale 8 - Alcool, stupéfiants, médicaments",

  contentType: "markdown",

  youtubeVideoId: "s4sN9spec58",

  markdown: `
# Alcool, stupéfiants, médicaments

## Plan

* Alcool

  * Effets
  * Sanctions
* Stupéfiants

  * Effets
  * Sanctions
* Médicaments

---

# 1. Alcool

L'alcool est un danger grave pour le conducteur car il agit directement sur le cerveau et le système nerveux.

---

## Alcoolémie

Chaque verre consommé représente en moyenne :

* Entre 0,20 et 0,25 g/L de sang.
* Soit environ 0,10 mg/L d'air expiré.

Ce taux varie selon :

* Le sexe.
* L'âge.
* Le poids.
* L'état de santé.
* L'alimentation.

---

## Pic d'alcoolémie

Le taux maximal est atteint :

* Environ 30 minutes après le dernier verre à jeun.
* Environ 1 heure après le dernier verre lors d'un repas.

---

## Élimination de l'alcool

L'élimination est lente :

* Entre 0,10 et 0,15 g/L par heure.

À part le temps, aucun moyen ne permet d'éliminer l'alcool plus rapidement.

---

## Effets de l'alcool

L'alcool provoque :

* Une réduction du champ visuel.
* Une vision troublée.
* Un allongement du temps de réaction.
* Une diminution de l'attention.
* Une baisse de vigilance.
* Une diminution des réflexes.
* De la somnolence.
* Une perte de mémoire.
* Une perte des apprentissages.
* Une prise de risque excessive.
* De l'agressivité.
* De l'euphorie.

---

## Sanctions

### Contravention

Pour les conducteurs de transport en commun :

* À partir de 0,20 g/L de sang.
* Ou 0,10 mg/L d'air expiré.

Sanctions :

* Amende de 135 €.
* Retrait de 6 points.

---

### Délit

À partir de :

* 0,80 g/L de sang.
* Ou 0,40 mg/L d'air expiré.

Sanctions possibles :

* Retrait de 6 points.
* Jusqu'à 4 500 € d'amende.
* Immobilisation du véhicule.
* Suspension du permis jusqu'à 3 ans.
* Annulation du permis.
* Jusqu'à 2 ans d'emprisonnement.

---

# 2. Stupéfiants

La consommation de stupéfiants constitue un danger majeur pour la conduite.

---

## Effets des stupéfiants

Les stupéfiants provoquent :

* Un allongement du temps de réaction.
* Une perte de maîtrise des trajectoires.
* Une diminution de la vigilance.
* Une baisse de l'attention.
* De fausses perceptions.
* Une fausse impression de sécurité.

---

## Risques

Le cannabis :

* Multiplie le risque d'accident.
* Associé à l'alcool, le risque devient extrêmement élevé.

---

## Sanctions

La conduite sous l'emprise de stupéfiants constitue directement un délit.

Sanctions possibles :

* Retrait de 6 points.
* Jusqu'à 4 500 € d'amende.
* Immobilisation du véhicule.
* Suspension du permis jusqu'à 3 ans.
* Annulation du permis.
* Jusqu'à 2 ans d'emprisonnement.

---

## Alcool et stupéfiants

Le cumul alcool et stupéfiants aggrave les sanctions.

Sanctions possibles :

* Jusqu'à 9 000 € d'amende.
* Jusqu'à 3 ans d'emprisonnement.

---

# 3. Médicaments

Avant de conduire :

* Lire attentivement la notice.
* Respecter les indications.
* Demander conseil à un médecin ou un pharmacien si nécessaire.

Attention :

* Ne jamais mélanger alcool et médicaments.

---

## Les pictogrammes

### Niveau 1 - Jaune

Risque faible.

Je dois :

* Lire attentivement la notice.

---

### Niveau 2 - Orange

Risque modéré.

Je dois :

* Être prudent.
* Demander conseil à un médecin ou à un pharmacien.

---

### Niveau 3 - Rouge

Risque élevé.

Je dois :

* Ne pas conduire.
* Demander l'avis d'un médecin avant de reprendre la conduite.

---

## Fatigue et conduite

Certains médicaments peuvent accentuer la fatigue.

La fatigue diminue :

* L'attention.
* La concentration.
* La vigilance.

---

## Signes de fatigue

Les principaux signes sont :

* Les bâillements répétés.
* Une nuque raide.
* Un dos raide.
* Un regard fixe.
* Les paupières lourdes.
* Les microsommeils.

Un microsommeil peut durer :

* Entre 1 et 4 secondes.

---

# À retenir

## Alcool

* 1 verre ≈ 0,20 à 0,25 g/L.
* Pic d'alcoolémie :

  * 30 min à jeun.
  * 1 h après un repas.
* Élimination :

  * 0,10 à 0,15 g/L par heure.
* Limite conducteur transport en commun :

  * 0,20 g/L de sang.
  * 0,10 mg/L d'air expiré.

## Stupéfiants

* Temps de réaction allongé.
* Perte de vigilance.
* Perte de maîtrise des trajectoires.
* Délit systématique.

## Médicaments

* Jaune : lire la notice.
* Orange : demander conseil.
* Rouge : ne pas conduire.

## Sanctions importantes

### Alcool

* Contravention :

  * 135 €.
  * 6 points.

* Délit :

  * 4 500 €.
  * 6 points.
  * Suspension jusqu'à 3 ans.
  * 2 ans de prison.

### Alcool + stupéfiants

* 9 000 € d'amende.
* 3 ans de prison.

`,
  questions: [
    {
      id: "fop08-q01",

      type: "true-false",

      question:
        "L'alcool agit directement sur le cerveau et le système nerveux.",

      correctAnswer: true,
    },

    {
      id: "fop08-q02",

      type: "multiple-choice",

      question: "Quels effets peut provoquer l'alcool sur la conduite ?",

      options: [
        "Réduction du champ visuel",
        "Vision troublée",
        "Temps de réaction allongé",
        "Diminution des réflexes",
        "Amélioration de la vigilance",
      ],

      correctOptions: [
        "Réduction du champ visuel",
        "Vision troublée",
        "Temps de réaction allongé",
        "Diminution des réflexes",
      ],
    },

    {
      id: "fop08-q03",

      type: "multiple-choice",

      question: "Quels comportements peuvent être favorisés par l'alcool ?",

      options: [
        "Prise de risque",
        "Agressivité",
        "Euphorie",
        "Somnolence",
        "Meilleure concentration",
      ],

      correctOptions: [
        "Prise de risque",
        "Agressivité",
        "Euphorie",
        "Somnolence",
      ],
    },

    {
      id: "fop08-q04",

      type: "text",

      question:
        "Combien de grammes d'alcool par litre de sang représente environ un verre ?",

      canonicalAnswer: "0,20 à 0,25 g/L",

      acceptedAnswers: [
        "0.20",
        "0,20",
        "0.20 g/l",
        "0,20 g/l",
        "0.25",
        "0,25",
        "0.25 g/l",
        "0,25 g/l",
        "0.20 à 0.25",
        "0.20g/l à 0.25g/l",
        "0,20 à 0,25",
        "0,20g/l à 0,25g/l",
      ],
    },

    {
      id: "fop08-q05",

      type: "text",

      question:
        "Au bout de combien de temps l'alcoolémie maximale est-elle atteinte à jeun ?",

      canonicalAnswer: "30 minutes",

      acceptedAnswers: ["30 min", "30 minutes", "une demi heure", "demi heure"],
    },

    {
      id: "fop08-q06",

      type: "text",

      question:
        "Au bout de combien de temps l'alcoolémie maximale est-elle atteinte lors d'un repas ?",

      canonicalAnswer: "1 heure",

      acceptedAnswers: ["1 heure", "1h", "une heure"],
    },

    {
      id: "fop08-q07",

      type: "text",

      question: "De combien diminue en moyenne l'alcoolémie chaque heure ?",

      canonicalAnswer: "0,10 à 0,15 g/L par heure",

      acceptedAnswers: [
        "0.10",
        "0,10",
        "0.10 g/l",
        "0,10 g/l",
        "0.15",
        "0,15",
        "0.15 g/l",
        "0,15 g/l",
        "0.10 à 0.15",
        "0.10g/l à 0.15g/l",
        "0,10 à 0,15",
        "0,10g/l à 0,15g/l",
      ],
    },

    {
      id: "fop08-q08",

      type: "true-false",

      question: "Boire du café permet d'éliminer l'alcool plus rapidement.",

      correctAnswer: false,
    },

    {
      id: "fop08-q09",

      type: "text",

      question:
        "Quelle est la limite légale d'alcoolémie pour un conducteur de transport en commun en grammes par litre de sang ?",

      canonicalAnswer: "0,20 g/L",

      acceptedAnswers: ["0.20", "0,20", "0.20 g/l", "0,20 g/l"],
    },

    {
      id: "fop08-q10",

      type: "text",

      question:
        "Quelle est la limite légale d'alcoolémie pour un conducteur de transport en commun en mg par litre d'air expiré ?",

      canonicalAnswer: "0,10 mg/L",

      acceptedAnswers: ["0.10", "0,10", "0.10 mg/l", "0,10 mg/l"],
    },

    {
      id: "fop08-q11",

      type: "multiple-choice",

      question:
        "Quelles sanctions s'appliquent à partir de 0,20 g/L pour un conducteur de transport en commun ?",

      options: [
        "135 € d'amende",
        "Retrait de 6 points",
        "Contravention de 4e classe",
        "2 ans de prison",
      ],

      correctOptions: [
        "135 € d'amende",
        "Retrait de 6 points",
        "Contravention de 4e classe",
      ],
    },

    {
      id: "fop08-q12",

      type: "text",

      question:
        "À partir de quel taux d'alcoolémie en grammes par litre de sang est-on en délit ?",

      canonicalAnswer: "0,80 g/L",

      acceptedAnswers: ["0.80", "0,80", "0.80 g/l", "0,80 g/l"],
    },

    {
      id: "fop08-q13",

      type: "text",

      question:
        "À partir de quel taux d'alcoolémie en mg par litre d'air expiré est-on en délit ?",

      canonicalAnswer: "0,40 mg/L",

      acceptedAnswers: ["0.40", "0,40", "0.40 mg/l", "0,40 mg/l"],
    },

    {
      id: "fop08-q14",

      type: "text",

      question:
        "Quel est le montant maximal de l'amende en cas de délit lié à l'alcool ?",

      canonicalAnswer: "4 500 €",

      acceptedAnswers: [
        "4500",
        "4 500",
        "4 500 euros",
        "4500€",
        "4500 €",
        "4 500€",
        "4 500 €",
      ],
    },

    {
      id: "fop08-q15",

      type: "text",

      question:
        "Combien de points sont retirés en cas de conduite sous l'emprise de l'alcool ?",

      canonicalAnswer: "6 points",

      acceptedAnswers: ["6", "6 points"],
    },

    {
      id: "fop08-q16",

      type: "text",

      question:
        "Quelle peine maximale d'emprisonnement est encourue pour un délit lié à l'alcool ?",

      canonicalAnswer: "2 ans",

      acceptedAnswers: ["2", "2 ans"],
    },

    {
      id: "fop08-q17",

      type: "multiple-choice",

      question: "Quels effets peuvent être provoqués par les stupéfiants ?",

      options: [
        "Temps de réaction allongé",
        "Perte de vigilance",
        "Perte de maîtrise des trajectoires",
        "Fausses perceptions",
        "Meilleure attention",
      ],

      correctOptions: [
        "Temps de réaction allongé",
        "Perte de vigilance",
        "Perte de maîtrise des trajectoires",
        "Fausses perceptions",
      ],
    },

    {
      id: "fop08-q18",

      type: "true-false",

      question:
        "La conduite sous l'emprise de stupéfiants constitue directement un délit.",

      correctAnswer: true,
    },

    {
      id: "fop08-q19",

      type: "text",

      question:
        "Combien de points sont retirés en cas de conduite sous l'emprise de stupéfiants ?",

      canonicalAnswer: "6 points",

      acceptedAnswers: ["6", "6 points"],
    },

    {
      id: "fop08-q20",

      type: "text",

      question:
        "Quel est le montant maximal de l'amende pour conduite sous l'emprise de stupéfiants ?",

      canonicalAnswer: "4 500 €",

      acceptedAnswers: [
        "4500",
        "4 500",
        "4500€",
        "4500 €",
        "4 500€",
        "4 500 €",
      ],
    },

    {
      id: "fop08-q21",

      type: "text",

      question:
        "Quelle peine maximale d'emprisonnement est encourue pour conduite sous l'emprise de stupéfiants ?",

      canonicalAnswer: "2 ans",

      acceptedAnswers: ["2", "2 ans"],
    },

    {
      id: "fop08-q22",

      type: "text",

      question:
        "Quel est le montant maximal de l'amende lorsque alcool et stupéfiants sont associés ?",

      canonicalAnswer: "9 000 €",

      acceptedAnswers: [
        "9000",
        "9 000",
        "9000€",
        "9000 €",
        "9 000€",
        "9 000 €",
      ],
    },

    {
      id: "fop08-q23",

      type: "text",

      question:
        "Quelle peine maximale d'emprisonnement est encourue lorsque alcool et stupéfiants sont associés ?",

      canonicalAnswer: "3 ans",

      acceptedAnswers: ["3", "3 ans"],
    },

    {
      id: "fop08-q24",

      type: "single-choice",

      question:
        "Que doit faire un conducteur face à un médicament portant un pictogramme jaune (niveau 1) ?",

      options: [
        "Lire attentivement la notice",
        "Ne pas conduire",
        "Consulter obligatoirement un médecin",
        "Arrêter immédiatement le traitement",
      ],

      correctOption: "Lire attentivement la notice",
    },

    {
      id: "fop08-q25",

      type: "text",

      question: "Quelle couleur correspond au pictogramme de niveau 2 ?",

      canonicalAnswer: "Orange",

      acceptedAnswers: ["orange"],
    },

    {
      id: "fop08-q26",

      type: "multiple-choice",

      question:
        "Que doit faire un conducteur face à un médicament portant un pictogramme orange ?",

      options: [
        "Être prudent",
        "Demander conseil à un professionnel de santé",
        "Ne jamais conduire",
        "Lire la notice",
      ],

      correctOptions: [
        "Être prudent",
        "Demander conseil à un professionnel de santé",
      ],
    },

    {
      id: "fop08-q27",

      type: "text",

      question: "Quelle couleur correspond au pictogramme de niveau 3 ?",

      canonicalAnswer: "Rouge",

      acceptedAnswers: ["rouge"],
    },

    {
      id: "fop08-q28",

      type: "multiple-choice",

      question:
        "Que doit faire un conducteur face à un médicament portant un pictogramme rouge ?",

      options: [
        "Ne pas conduire",
        "Demander l'avis d'un médecin",
        "Continuer à conduire normalement",
        "Reporter son déplacement",
      ],

      correctOptions: ["Ne pas conduire", "Demander l'avis d'un médecin"],
    },

    {
      id: "fop08-q29",

      type: "multiple-choice",

      question: "Quels signes peuvent révéler un état de fatigue ?",

      options: [
        "Bâillements répétés",
        "Paupières lourdes",
        "Nuque raide",
        "Regard fixe",
        "Vision améliorée",
      ],

      correctOptions: [
        "Bâillements répétés",
        "Paupières lourdes",
        "Nuque raide",
        "Regard fixe",
      ],
    },

    {
      id: "fop08-q30",

      type: "text",

      question: "Combien de temps peut durer un microsommeil ?",

      canonicalAnswer: "1 à 4 secondes",

      acceptedAnswers: ["1 a 4 secondes", "1 à 4 secondes", "1-4 secondes"],
    },
  ],
}
