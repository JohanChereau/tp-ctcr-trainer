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
- Vérifier l'absence d'anomalie.
- Identifier les éventuels voyants restant allumés.

> **J'annonce :**
>
> « Pas d'anomalie au démarrage.
>
> Il me reste uniquement le témoin du frein de parc qui est allumé. »

---

## 4. Installation au poste de conduite

Régler successivement :

- Le siège.
- Le volant.
- Les rétroviseurs.

Mettre ensuite :

- La ceinture de sécurité.

> ⚠️ Régler le siège avant les rétroviseurs.

---

## 5. Vérification avant le départ

Si les portes sont ouvertes :

- Les refermer.

Vérifier que :

- Les portes sont bien fermées.
- Les soutes sont bien fermées.
- La pression d'air du système de freinage est suffisante.

> **J'annonce :**
>
> « Les portes et les soutes sont bien fermées.
>
> Ma pression d'air est suffisante pour assurer un freinage efficace. »

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
      question: "Après avoir démarré le véhicule, que doit faire le candidat ?",
      options: [
        "Annoncer les voyants restés allumés",
        "Signaler immédiatement toute anomalie",
        "Accélérer fortement pour vérifier le moteur",
        "Positionner le chronotachygraphe sur repos",
      ],
      correctOptions: [
        "Annoncer les voyants restés allumés",
        "Signaler immédiatement toute anomalie",
      ],
      explanation:
        "Après la mise en marche du moteur, le candidat annonce les voyants restés allumés et signale immédiatement toute anomalie.",
      tags: ["circulation", "départ", "véhicule"],
    },

    {
      id: "circulation-01-q02",
      type: "multiple-choice",
      question:
        "Quels réglages le candidat effectue-t-il au besoin après la mise en marche du moteur ?",
      options: [
        "Le siège",
        "Le volant",
        "Les rétroviseurs",
        "L'autoradio",
        "L'éclairage intérieur des passagers",
      ],
      correctOptions: ["Le siège", "Le volant", "Les rétroviseurs"],
      explanation:
        "Après la mise en marche du moteur, le candidat règle au besoin son siège, son volant et ses rétroviseurs.",
      tags: ["circulation", "installation", "sécurité"],
    },

    {
      id: "circulation-01-q03",
      type: "multiple-choice",
      question:
        "Pour un véhicule de catégorie D, que doit vérifier le candidat concernant les accès au véhicule ?",
      options: [
        "Leur ouverture",
        "Leur bon fonctionnement",
        "Uniquement leur aspect extérieur",
        "Uniquement la porte conducteur",
      ],
      correctOptions: ["Leur ouverture", "Leur bon fonctionnement"],
      explanation:
        "Pour les catégories D1 et D, le candidat vérifie l'ouverture et le bon fonctionnement des accès au véhicule, depuis le tableau de bord ou manuellement lorsque l'accès ne dispose pas d'une commande depuis celui-ci.",
      tags: ["circulation", "portes", "sécurité"],
    },

    {
      id: "circulation-01-q04",
      type: "multiple-choice",
      question:
        "Que doit faire le candidat concernant le chronotachygraphe numérique avant le départ ?",
      options: [
        "Indiquer à l'expert qu'il est dispensé de carte",
        "Vérifier le jour indiqué sur l'appareil",
        "Vérifier l'heure indiquée sur l'appareil",
        "S'assurer que l'appareil est sur « autres tâches »",
        "Indiquer qu'il enregistrera automatiquement la conduite dès les premiers tours de roues",
        "Insérer obligatoirement sa carte conducteur",
      ],
      correctOptions: [
        "Indiquer à l'expert qu'il est dispensé de carte",
        "Vérifier le jour indiqué sur l'appareil",
        "Vérifier l'heure indiquée sur l'appareil",
        "S'assurer que l'appareil est sur « autres tâches »",
        "Indiquer qu'il enregistrera automatiquement la conduite dès les premiers tours de roues",
      ],
      explanation:
        "Avec un chronotachygraphe numérique, le candidat indique sa dispense de carte, vérifie le jour et l'heure, s'assure de la position « autres tâches » et indique que les déplacements seront automatiquement enregistrés en conduite dès les premiers tours de roues.",
      tags: ["circulation", "tachygraphe", "examen"],
    },

    {
      id: "circulation-01-q05",
      type: "single-choice",
      question:
        "Que doit vérifier le candidat concernant les documents de bord ?",
      options: [
        "La présence du porte-documents contenant les pièces obligatoires",
        "Uniquement le certificat d'immatriculation",
        "Uniquement l'attestation d'assurance",
        "Aucun document n'est à vérifier",
      ],
      correctOption:
        "La présence du porte-documents contenant les pièces obligatoires",
      explanation:
        "Le candidat doit s'assurer de la présence du porte-documents contenant les pièces obligatoires prévues pour le véhicule d'examen.",
      tags: ["circulation", "documents", "véhicule"],
    },

    {
      id: "circulation-01-q06",
      type: "multiple-choice",
      question:
        "Parmi ces éléments, lesquels font partie des vérifications générales spécifiques à un véhicule de catégorie D ?",
      options: [
        "La sellerie",
        "Les ceintures de sécurité",
        "La lampe autonome",
        "La boîte de secours",
        "Les marteaux pics",
        "L'extincteur",
        "La couleur de la carrosserie",
      ],
      correctOptions: [
        "La sellerie",
        "Les ceintures de sécurité",
        "La lampe autonome",
        "La boîte de secours",
        "Les marteaux pics",
        "L'extincteur",
      ],
      explanation:
        "Pour les catégories D1 et D, les vérifications générales portent notamment sur la sellerie, les ceintures, la lampe autonome, la boîte de secours, les inscriptions, les marteaux pics et l'extincteur.",
      tags: ["circulation", "véhicule", "sécurité"],
    },

    {
      id: "circulation-01-q07",
      type: "multiple-choice",
      question:
        "Quels feux font partie des contrôles prévus lors des vérifications du véhicule ?",
      options: [
        "Les feux stop",
        "Les feux de détresse",
        "Les feux de croisement",
        "Les feux de gabarit",
        "Uniquement les feux de route",
      ],
      correctOptions: [
        "Les feux stop",
        "Les feux de détresse",
        "Les feux de croisement",
        "Les feux de gabarit",
      ],
      explanation:
        "Le candidat vérifie l'absence d'anomalie sur les feux stop, de détresse, de croisement et de gabarit.",
      tags: ["circulation", "feux", "véhicule"],
    },

    {
      id: "circulation-01-q08",
      type: "single-choice",
      question:
        "Que doit faire le candidat concernant l'immobilisation du véhicule au début des vérifications ?",
      options: [
        "S'assurer que le véhicule est bien immobilisé",
        "Desserrer immédiatement le frein de parc",
        "Mettre obligatoirement le moteur en marche",
        "Faire avancer légèrement le véhicule",
      ],
      correctOption: "S'assurer que le véhicule est bien immobilisé",
      explanation:
        "Le candidat s'assure, au besoin en mettant le contact, que le véhicule est correctement immobilisé en contrôlant la commande et/ou le voyant correspondant.",
      tags: ["circulation", "immobilisation", "sécurité"],
    },

    {
      id: "circulation-01-q09",
      type: "multiple-choice",
      question:
        "Quelles caractéristiques du véhicule le candidat doit-il annoncer lors des vérifications ?",
      options: [
        "La longueur",
        "La largeur",
        "La hauteur",
        "Le poids maximum",
        "Le nombre de places assises",
        "La cylindrée du moteur",
      ],
      correctOptions: [
        "La longueur",
        "La largeur",
        "La hauteur",
        "Le poids maximum",
        "Le nombre de places assises",
      ],
      explanation:
        "Le candidat annonce les dimensions et le poids maximum du véhicule. Pour le transport de voyageurs, il annonce également le nombre de places assises.",
      tags: ["circulation", "véhicule", "dimensions"],
    },

    {
      id: "circulation-01-q10",
      type: "true-false",
      question:
        "En circulation, le conducteur et les passagers doivent porter leur ceinture de sécurité lorsque leur siège en est équipé, sauf exception prévue par la réglementation.",
      correctAnswer: true,
      explanation:
        "Le Code de la route impose en circulation le port de la ceinture au conducteur et aux passagers lorsque leur siège en est équipé, sous réserve des exemptions réglementaires.",
      tags: ["circulation", "ceinture", "sécurité"],
    },
  ],
}
