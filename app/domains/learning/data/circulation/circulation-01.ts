import type { Lesson } from "../../types/learning"

export const circulation01: Lesson = {
  id: "circulation-01",

  title: "Circulation - Vérifications avant le départ",

  contentType: "markdown",

  video: {
    provider: "youtube",
    videoId: "wKGkkl2Hefs",
  },

  markdown: `
  # Vérifications avant le départ en circulation

Avant de démarrer l'épreuve de circulation, effectuer les vérifications suivantes dans l'ordre.

## 1. Démarrage du véhicule

- Démarrer le moteur.
- Vérifier l'absence de fumée anormale.
- Annoncer les voyants restés allumés.
- Vérifier que la pression d'air du système de freinage est suffisante.

> Si un voyant reste allumé, l'annoncer à l'inspecteur.

---

## 2. Installation au poste de conduite

Effectuer les réglages si nécessaire :

- Siège.
- Volant.
- Rétroviseurs.
- Appui-tête.
- Ceinture de sécurité.

L'objectif est de voir correctement et d'atteindre facilement toutes les commandes.

---

## 3. Sécurité du véhicule

Vérifier le bon fonctionnement des ouvrants :

- Ouvrir puis refermer les portes voyageurs.
- Vérifier qu'elles se ferment correctement.

Annoncer ensuite que :

- Les portes sont correctement fermées.
- Les soutes sont correctement fermées.

Demander aux passagers :

> « Est-ce que tout le monde a bien attaché sa ceinture de sécurité ? »

---

## 4. Chronotachygraphe

Annoncer à l'inspecteur :

> « Je suis en présence d'un chronotachygraphe numérique semi-automatique. Il est réglé à la date et à l'heure du jour. Il est positionné sur **Autres tâches** et passera automatiquement sur **Conduite** dès que le véhicule commencera à rouler. Je suis dispensé de carte conducteur car je suis en examen. »

Vérifier également :

- La date.
- L'heure.
- Le mode **Autres tâches**.

---

## 5. Documents de bord

Vérifier la présence de la pochette contenant les documents de bord.

---

## 6. Avant de partir

Avant de mettre le véhicule en mouvement :

- Allumer les feux si les conditions l'exigent.
- Mettre le clignotant pour signaler le départ.
  `,

  questions: [
    {
      id: "circulation-01-q01",
      type: "multiple-choice",
      question:
        "Avant le départ en circulation, que dois-je vérifier après avoir démarré le véhicule ?",
      options: [
        "L'absence de fumée anormale",
        "Les voyants restés allumés",
        "La pression d'air",
        "La couleur des sièges",
      ],
      correctOptions: [
        "L'absence de fumée anormale",
        "Les voyants restés allumés",
        "La pression d'air",
      ],
      explanation:
        "Après le démarrage, j'annonce les éventuelles anomalies : fumée, voyants et pression d'air.",
      tags: ["circulation", "départ"],
    },

    {
      id: "circulation-01-q02",
      type: "multiple-choice",
      question:
        "Quels réglages dois-je contrôler pour mon installation au poste de conduite ?",
      options: [
        "Le siège",
        "Le volant",
        "Les rétroviseurs",
        "La ceinture de sécurité",
        "La radio",
      ],
      correctOptions: [
        "Le siège",
        "Le volant",
        "Les rétroviseurs",
        "La ceinture de sécurité",
      ],
      explanation:
        "Je dois être bien installé, bien voir et pouvoir atteindre toutes les commandes.",
      tags: ["installation", "sécurité"],
    },

    {
      id: "circulation-01-q03",
      type: "multiple-choice",
      question: "Que dois-je vérifier concernant les portes avant le départ ?",
      options: [
        "Elles s'ouvrent correctement",
        "Elles se ferment correctement",
        "Elles sont bien fermées avant de partir",
        "Elles sont de la bonne couleur",
      ],
      correctOptions: [
        "Elles s'ouvrent correctement",
        "Elles se ferment correctement",
        "Elles sont bien fermées avant de partir",
      ],
      explanation:
        "Je contrôle le bon fonctionnement des portes puis j'annonce qu'elles sont correctement fermées.",
      tags: ["portes", "sécurité"],
    },

    {
      id: "circulation-01-q04",
      type: "multiple-choice",
      question:
        "Que dois-je annoncer pour le chronotachygraphe numérique en examen ?",
      options: [
        "Il est à la date et à l'heure du jour",
        "Il est positionné sur autres tâches",
        "Il passera automatiquement en conduite dès que le véhicule roule",
        "Je suis dispensé de carte conducteur car je suis en examen",
        "Je dois obligatoirement insérer ma carte conducteur",
      ],
      correctOptions: [
        "Il est à la date et à l'heure du jour",
        "Il est positionné sur autres tâches",
        "Il passera automatiquement en conduite dès que le véhicule roule",
        "Je suis dispensé de carte conducteur car je suis en examen",
      ],
      explanation:
        "En examen, on annonce le fonctionnement du chronotachygraphe et la dispense de carte conducteur.",
      tags: ["tachygraphe", "examen"],
    },

    {
      id: "circulation-01-q05",
      type: "multiple-choice",
      question:
        "Avant de partir, que dois-je annoncer ou vérifier pour la sécurité des passagers ?",
      options: [
        "Les portes sont fermées",
        "Les soutes sont fermées",
        "Les passagers ont bien attaché leur ceinture",
        "Les passagers ont choisi leur musique",
      ],
      correctOptions: [
        "Les portes sont fermées",
        "Les soutes sont fermées",
        "Les passagers ont bien attaché leur ceinture",
      ],
      explanation:
        "Avant le départ, je m'assure que le véhicule est fermé et que les passagers sont correctement ceinturés.",
      tags: ["sécurité", "passagers"],
    },

    {
      id: "circulation-01-q06",
      type: "true-false",
      question:
        "Avant de partir, je dois penser aux feux si nécessaire et au clignotant pour signaler mon départ.",
      correctAnswer: true,
      explanation:
        "Oui. Je dois adapter les feux aux conditions et signaler clairement mon départ.",
      tags: ["départ", "signalisation"],
    },

    {
      id: "circulation-01-q07",
      type: "multiple-choice",
      question:
        "Qui va réussir son départ en circulation proprement et calmement ?",
      options: [
        "Moi, parce que je suis préparé",
        "Moi, parce que je reste prudent",
        "Moi, parce que je contrôle la situation",
        "L'inspecteur à ma place",
      ],
      correctOptions: [
        "Moi, parce que je suis préparé",
        "Moi, parce que je reste prudent",
        "Moi, parce que je contrôle la situation",
      ],
      explanation:
        "Départ propre, calme, contrôles faits : tu sais quoi faire.",
      tags: ["confiance", "mental"],
    },

    {
      id: "circulation-01-q08",
      type: "multiple-choice",
      question:
        "Quel état d'esprit je garde pendant l'épreuve de circulation ?",
      options: [
        "Je reste calme",
        "Je reste prudent",
        "Je prends mon temps",
        "Je contrôle la situation",
        "Je panique dès qu'il y a une voiture",
      ],
      correctOptions: [
        "Je reste calme",
        "Je reste prudent",
        "Je prends mon temps",
        "Je contrôle la situation",
      ],
      explanation:
        "Zen, propre, prudent. L'objectif n'est pas d'aller vite, mais de conduire en sécurité.",
      tags: ["confiance", "circulation"],
    },

    {
      id: "circulation-01-q09",
      type: "multiple-choice",
      question: "Pourquoi je vais y arriver ?",
      options: [
        "Parce que je connais ma procédure",
        "Parce que je fais mes contrôles",
        "Parce que je conduis avec prudence",
        "Parce que je suis le meilleur",
        "Parce que je ferme les yeux et j'espère",
      ],
      correctOptions: [
        "Parce que je connais ma procédure",
        "Parce que je fais mes contrôles",
        "Parce que je conduis avec prudence",
        "Parce que je suis le meilleur",
      ],
      explanation:
        "La confiance vient de la préparation : procédure, contrôles, prudence et mental solide.",
      tags: ["mental", "motivation"],
    },

    {
      id: "circulation-01-q10",
      type: "true-false",
      question: "Je suis prudent, zen, préparé, et je vais réussir.",
      correctAnswer: true,
      explanation:
        "Exactement. Tu sais quoi faire, tu prends ton temps, tu contrôles et tu avances proprement.",
      tags: ["motivation", "confiance"],
    },
  ],
}
