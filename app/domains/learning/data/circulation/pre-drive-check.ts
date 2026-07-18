import type { Lesson } from "../../types/learning"

export const preDriveCheckLesson: Lesson = {
  id: "circulation-01",

  title: "Circulation - Vérifications avant le départ",

  contentType: "markdown",

  video: {
    provider: "youtube",
    videoId: "wKGkkl2Hefs",
  },

  markdown: `
# Vérification avant le départ en circulation

Cette vérification est réalisée juste avant le départ de l'épreuve de circulation.

## 1. Chronotachygraphe

> **J'annonce :**
>
> « Dans ma vie professionnelle, je devrais insérer ma carte conducteur. J'en suis dispensé pour l'examen. »

Vérifier ensuite :

- La date.
- L'heure.
- Le mode **Autres tâches**.

> **J'annonce :**
>
> « Je vérifie la bonne date et heure du chronotachygraphe. Je le positionne sur **Autres tâches** et il se mettra automatiquement en position **Conduite** dès les premiers tours de roue. »

---

## 2. Documents de bord

Vérifier la présence de la pochette contenant les documents de bord.

---

## 3. Mise en marche du véhicule

- Démarrer le moteur en contrôlant les rétroviseurs.

> **J'annonce :**
>
> « Pas d'anomalie au démarrage.
>
> Il me reste uniquement le témoin du frein de parc qui est allumé.
>
> Ma pression d'air est suffisante, je vais donc pouvoir m'installer au poste de conduite. »

---

## 4. Installation au poste de conduite

Régler successivement :

- Le siège.
- Le volant.
- Les rétroviseurs.

Mettre ensuite :

- La ceinture de sécurité.

> ⚠️ Respecter impérativement cet ordre de réglage.

---

## 5. Vérification avant le départ

Si les portes sont ouvertes :

- Les refermer.

Vérifier que :

- Les portes sont bien fermées.
- Les soutes sont bien fermées.

> **J'annonce :**
>
> « Les portes et les soutes sont bien fermées. »

Demander aux passagers :

> « Est-ce que tout le monde a bien attaché sa ceinture de sécurité ? »

Lorsque tous les passagers sont attachés :

> **J'annonce :**
>
> « Nous pouvons partir en toute sécurité. »

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
