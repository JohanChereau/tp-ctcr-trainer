import type { Lesson } from "../../types/learning"

export const rsfUrban01: Lesson = {
  id: "rsf-urban-01",

  title: "Réglementation Sociale Française - Urbain",

  contentType: "markdown",

  quizContext: "rsf-urban",

  markdown: `
# Réglementation Sociale Française (Urbain)

Le transport public urbain de voyageurs est soumis à des règles spécifiques concernant notamment :

- la durée du travail ;
- l'organisation des services ;
- l'amplitude ;
- les coupures ;
- les repos.

L'objectif est de protéger le conducteur tout en permettant d'assurer la continuité du service public.

---

# Cadre réglementaire

:::info[Textes applicables]

Les principales règles proviennent :

- du **Code du travail** ;
- du **décret n° 2000-118 du 14 février 2000** ;
- de la **Convention collective nationale des réseaux de transports publics urbains de voyageurs** ;
- de l'**accord-cadre de branche du 22 décembre 1998** ;
- des accords collectifs applicables dans l'entreprise.

:::

:::info[RSE ou RSF ?]

Les services réguliers de transport de voyageurs dont le parcours de la ligne ne dépasse pas **50 km** sont exclus du règlement européen n° 561/2006.

Ils relèvent donc principalement de la **Réglementation Sociale Française (RSF)**.

Lorsque le parcours de la ligne dépasse **50 km**, le règlement européen n° 561/2006 s'applique également au service.

:::

:::memory

Ligne ≤ 50 km

➡️ Pas de RSE 561/2006

Ligne > 50 km

➡️ RSE applicable

:::

---

# L'organisation du travail

## Les cycles de travail

En transport urbain, le travail peut être organisé selon des **cycles de plusieurs semaines**.

La durée du travail peut alors varier d'une semaine à l'autre afin d'adapter l'organisation aux besoins du réseau.

:::checklist[Objectifs]

Répartir les contraintes entre les conducteurs

Adapter le travail aux variations de l'activité

Alterner les différents types de services

Lisser la durée du travail sur plusieurs semaines

:::

:::warning

Un cycle ne peut pas dépasser **12 semaines**.

Sa mise en place fait l'objet des consultations et informations prévues par la réglementation.

:::

---

## Exemple d'un cycle

| Semaine | S1 | S2 | S3 | S4 | S5 | S6 | S7 | S8 | S9 | S10 | S11 | S12 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Durée | 44 h | 35 h | 42 h | 42 h | 46 h | 40 h | 38 h | 44 h | 42 h | 46 h | 41 h | 44 h |

Toutes les semaines ne comportent donc pas nécessairement la même durée de travail.

---

# La durée du travail

## Les limites hebdomadaires

La durée du travail est organisée sur une base de **35 heures en moyenne**.

:::compare

Durée hebdomadaire de référence | 35 h en moyenne

Maximum sur une semaine | 46 h

Moyenne maximale sur 12 semaines consécutives | 42 h

:::

:::warning

Une semaine peut atteindre **46 heures**, mais la moyenne calculée sur une période quelconque de **12 semaines consécutives** ne doit pas dépasser **42 heures**.

:::

## Exemple

Sur le cycle précédent :

44 + 35 + 42 + 42 + 46 + 40 + 38 + 44 + 42 + 46 + 41 + 44 = **504 h**

504 ÷ 12 = **42 h**

La moyenne maximale est donc respectée.

---

# Le temps de travail effectif

## Définition

Le **temps de travail effectif (TTE)** correspond au temps pendant lequel le conducteur :

- reste à la disposition de son employeur ;
- se conforme à ses directives ;
- ne peut pas vaquer librement à ses occupations personnelles.

Il comprend notamment :

:::checklist

La conduite

Les autres tâches professionnelles

Les temps pendant lesquels le conducteur reste à disposition

Les coupures d'une durée inférieure ou égale à 30 minutes

:::

:::info[Temps à disposition]

Un conducteur qui attend son prochain départ tout en restant à la disposition de l'exploitation est toujours en temps de travail.

À l'inverse, pendant une véritable coupure, il n'est plus à la disposition de l'employeur et peut vaquer librement à ses occupations.

:::

## Durée journalière maximale

:::compare

TTE journalier maximum | 10 h

:::

:::memory

TTE

➡️ Temps comptabilisé comme travail

Amplitude

➡️ Temps total entre la prise et la fin de service

:::

---

# Les vacations et les coupures

## La vacation

Une **vacation** est une période de travail comprise entre :

- la prise de service et une coupure ;
- deux coupures ;
- ou une coupure et la fin de service.

Un service peut comporter au maximum **deux coupures**, soit au maximum **trois vacations**.

---

## La coupure

Une **coupure** est une période comprise dans l'amplitude pendant laquelle le conducteur :

- n'est plus à la disposition de l'employeur ;
- peut vaquer librement à ses occupations personnelles.

:::compare

Coupure ≤ 30 min | Comprise dans le TTE et l'amplitude

Coupure > 30 min | Hors TTE mais comprise dans l'amplitude

Nombre de coupures | 2 maximum par service

:::

:::memory

≤ 30 min

➡️ TTE + amplitude

> 30 min

➡️ Amplitude uniquement

:::

---

# L'amplitude

## Définition

L'**amplitude** correspond au temps écoulé entre le début de la première vacation et la fin de la dernière vacation.

Elle comprend donc les périodes de travail **et les coupures**.

:::warning

Amplitude ≠ temps de travail.

Une coupure de plus de 30 minutes augmente l'amplitude sans augmenter le TTE.

:::

## Exemple

:::schedule[Amplitude : 11 h · TTE : 9 h]

Première vacation | 3 h | drive

Coupure | 1 h | break

Deuxième vacation | 4 h | drive

Coupure | 1 h | break

Troisième vacation | 2 h | drive

:::

Dans cet exemple :

- TTE = **9 h** ;
- coupures = **2 h** ;
- amplitude = **11 h**.

---

## Durée maximale

:::compare

Amplitude normale maximale | 11 h

Amplitude maximale avec dérogation | 13 h

:::

L'amplitude peut être portée jusqu'à **13 heures** notamment :

- lorsque le travail hebdomadaire est réparti sur moins de 5 jours ;
- lorsque les nécessités d'exploitation le justifient.

Dans ce second cas, les services dépassant 11 heures d'amplitude sont limités à **35 % des services** de la période de référence.

:::memory

Amplitude normale → 11 h maximum

Dérogation → 13 h maximum

:::

---

# Les coupures obligatoires

## Après plus de 6 heures de travail

Lorsque le temps de travail quotidien est **supérieur à 6 heures**, le conducteur doit bénéficier d'au moins **20 minutes de coupure**.

Cette durée peut être constituée de plusieurs périodes d'au moins **5 minutes consécutives**.

:::compare

Travail ≤ 6 h | Pas de minimum au titre de cette règle

Travail > 6 h | 20 min minimum

:::

:::info

Les temps de repas, certains temps d'attente, de disponibilité ou d'inactivité peuvent participer à ces 20 minutes lorsqu'ils répondent aux conditions prévues par le décret.

Pour des raisons techniques d'exploitation, cette coupure peut exceptionnellement être remplacée par un repos compensateur équivalent accordé au plus tard avant la fin de la journée suivante.

:::

## Repas de midi

:::compare

Coupure pour le repas de midi | 45 min minimum

:::

Lorsqu'un conducteur travaille entre **11 h 30 et 14 h** sans bénéficier dans cet intervalle d'une coupure repas d'au moins 45 minutes, une contrepartie doit être prévue par accord collectif.

---

# Le repos journalier

Le **repos journalier** correspond au temps entre la fin d'une journée de travail et le début de la suivante.

:::compare

Repos journalier normal | 11 h minimum

Repos journalier réduit | 10 h minimum

Certains cas particuliers | 9 h minimum

:::

## Réduction à 10 heures

Le repos peut être réduit à **10 heures** notamment :

:::checklist

Passage d'un service de soirée à un service de matinée

Amplitude supérieure à 11 h

Travail réparti sur moins de 5 jours

Changement d'horaires collectifs

:::

## Réduction jusqu'à 9 heures

Dans certains cas prévus par le décret, le repos peut descendre jusqu'à **9 heures**, notamment pour :

- le personnel travaillant en équipes successives de type 3 × 8 ;
- le personnel de remplacement ;
- le passage d'un service de soirée à un service de matinée.

## Compensation

Toute réduction du repos journalier **en dessous de 11 heures** doit être compensée par un repos au moins équivalent au temps manquant.

Cette compensation doit être accordée au plus tard avant la fin de la **semaine civile suivante** et être accolée à un repos journalier ou hebdomadaire.

:::info[Exemple]

Repos normal : **11 h**

Repos pris : **10 h**

Repos manquant : **1 h**

➡️ **1 h doit être récupérée.**

:::

:::memory

Normal → 11 h

Réduit → 10 h

Cas particuliers → 9 h minimum

Toute réduction sous 11 h → compensation

:::

---

# Le repos hebdomadaire

Après une période maximale de **6 jours de travail**, le conducteur doit bénéficier d'au moins **35 heures consécutives de repos**.

:::compare

Repos hebdomadaire normal | 35 h minimum

Travail avant le repos | 6 jours maximum

:::

:::memory

24 h de repos hebdomadaire

➕

11 h de repos journalier

=

35 h minimum

:::

## Dérogations

Pour remplacer un salarié absent, la période de travail peut exceptionnellement être portée à **7 jours**, avec l'accord du salarié, après information de l'inspection du travail et avec une compensation appropriée.

Lors du passage d'un service de soirée à un service de matinée, le repos hebdomadaire peut également être réduit :

:::compare

Repos normal | 35 h minimum

Repos réduit | 24 h minimum

:::

Les heures manquantes doivent alors être compensées au plus tard avant la fin de la **troisième semaine civile suivante** et être accolées à un repos journalier ou hebdomadaire.

:::info[Exemple]

35 h normalement dues

− 24 h prises

= **11 h à récupérer**

:::

:::info

Le transport urbain assurant la continuité du service public, le repos hebdomadaire ne tombe pas nécessairement le dimanche.

:::

---

# Le travail de nuit

Tout travail effectué entre **22 h et 5 h** est considéré comme travail de nuit.

Une autre période de **7 heures consécutives comprise entre 22 h et 7 h** peut être prévue dans les conditions fixées par la réglementation.

:::compare

Période de nuit de référence | 22 h – 5 h

:::

## Le travailleur de nuit

Est notamment considéré comme **travailleur de nuit** le salarié qui :

- effectue habituellement au moins **3 heures de nuit**, au moins **2 fois par semaine** ;
- ou effectue au moins **270 heures de nuit sur 12 mois**.

Pour un travailleur de nuit, la durée quotidienne de travail ne doit pas dépasser **8 heures en moyenne par période de 24 heures**, sur la période de référence applicable.

:::warning

Effectuer occasionnellement quelques heures entre 22 h et 5 h ne signifie donc pas automatiquement être juridiquement considéré comme « travailleur de nuit ».

:::

---

# Les heures supplémentaires

Dans une organisation par cycles, une semaine supérieure à **35 heures** ne signifie pas automatiquement que toutes les heures au-delà de 35 heures sont immédiatement des heures supplémentaires.

Leur décompte dépend de la période de référence et de l'organisation du temps de travail applicable dans l'entreprise.

---

# Les notions à distinguer

:::compare

TTE | Temps comptabilisé comme travail

Amplitude | Durée totale de la journée

Vacation | Période de travail entre deux coupures

Coupure | Période libre comprise dans l'amplitude

Repos journalier | Repos entre deux journées

Repos hebdomadaire | Repos après 6 jours de travail maximum

:::

---

# À mémoriser

:::summary[Durée du travail]

Cycle | 12 semaines maximum

Durée hebdomadaire de référence | 35 h en moyenne

Maximum sur une semaine | 46 h

Moyenne sur 12 semaines | 42 h maximum

TTE journalier | 10 h maximum

:::

:::summary[Coupures et amplitude]

Coupure ≤ 30 min | Comprise dans le TTE

Coupure > 30 min | Hors TTE

Nombre de coupures | 2 maximum

Amplitude normale | 11 h maximum

Amplitude avec dérogation | 13 h maximum

Travail > 6 h | 20 min minimum

Repas de midi | 45 min minimum

:::

:::summary[Repos]

Repos journalier normal | 11 h minimum

Repos journalier réduit | 10 h minimum

Certains cas particuliers | 9 h minimum

Repos hebdomadaire normal | 35 h minimum

Travail avant repos hebdomadaire | 6 jours maximum

Repos hebdomadaire réduit | 24 h minimum

:::

:::summary[Travail de nuit]

Période de nuit | 22 h – 5 h

Travailleur de nuit | 3 h de nuit au moins 2 fois/semaine ou 270 h sur 12 mois

Durée quotidienne du travailleur de nuit | 8 h en moyenne maximum

:::

:::memory

Les chiffres essentiels :

**46 h** → maximum sur une semaine

**42 h** → moyenne maximale sur 12 semaines

**10 h** → TTE journalier maximum

**11 h** → amplitude normale maximum

**13 h** → amplitude avec dérogation

**11 h** → repos journalier normal

**35 h** → repos hebdomadaire normal

:::
  `,

  questions: [
    {
      id: "rsf-urban-01-q01",
      type: "single-choice",
      question:
        "À partir de quelle distance une ligne régulière de transport de voyageurs entre-t-elle dans le champ d'application du règlement européen n° 561/2006 ?",
      options: [
        "À partir de 25 km",
        "Lorsque le parcours dépasse 50 km",
        "À partir de 100 km",
        "Toutes les lignes urbaines y sont soumises",
      ],
      correctOption: "Lorsque le parcours dépasse 50 km",
      explanation:
        "Les services réguliers dont le parcours de la ligne ne dépasse pas 50 km sont exclus du règlement européen n° 561/2006. Au-delà de 50 km, la RSE s'applique au service.",
      tags: ["rse", "champ d'application"],
    },
    {
      id: "rsf-urban-01-q02",
      type: "single-choice",
      question:
        "Quelle est la durée maximale d'un cycle de travail en transport urbain ?",
      options: ["4 semaines", "8 semaines", "12 semaines", "16 semaines"],
      correctOption: "12 semaines",
      explanation: "Un cycle de travail ne peut pas dépasser 12 semaines.",
      tags: ["cycle", "organisation du travail"],
    },
    {
      id: "rsf-urban-01-q03",
      type: "single-choice",
      question:
        "Quelle est la durée hebdomadaire de référence du travail en transport urbain ?",
      options: ["32 h", "35 h en moyenne", "39 h", "42 h"],
      correctOption: "35 h en moyenne",
      explanation:
        "La durée du travail est organisée sur une base de 35 heures en moyenne.",
      tags: ["durée hebdomadaire"],
    },
    {
      id: "rsf-urban-01-q04",
      type: "single-choice",
      question:
        "Hors circonstances exceptionnelles, quelle est la durée maximale de travail autorisée sur une semaine isolée ?",
      options: ["42 h", "44 h", "46 h", "48 h"],
      correctOption: "46 h",
      explanation:
        "La durée du travail peut atteindre 46 heures au maximum sur une semaine isolée.",
      tags: ["durée hebdomadaire", "maximum"],
    },
    {
      id: "rsf-urban-01-q05",
      type: "single-choice",
      question:
        "Quelle est la durée moyenne maximale de travail sur 12 semaines consécutives ?",
      options: ["35 h", "40 h", "42 h", "46 h"],
      correctOption: "42 h",
      explanation:
        "La moyenne calculée sur une période quelconque de 12 semaines consécutives ne doit pas dépasser 42 heures.",
      tags: ["durée hebdomadaire", "moyenne"],
    },
    {
      id: "rsf-urban-01-q06",
      type: "single-choice",
      question:
        "Quelle est la durée maximale quotidienne du temps de travail effectif (TTE) ?",
      options: ["8 h", "9 h", "10 h", "11 h"],
      correctOption: "10 h",
      explanation:
        "Le temps de travail effectif journalier ne doit pas dépasser 10 heures.",
      tags: ["tte", "durée journalière"],
    },
    {
      id: "rsf-urban-01-q07",
      type: "multiple-choice",
      question:
        "Quels éléments peuvent être comptabilisés dans le temps de travail effectif (TTE) ?",
      options: [
        "La conduite",
        "Les autres tâches professionnelles",
        "Les temps pendant lesquels le conducteur reste à disposition",
        "Une coupure libre de 1 h",
        "Une coupure de 30 min",
      ],
      correctOptions: [
        "La conduite",
        "Les autres tâches professionnelles",
        "Les temps pendant lesquels le conducteur reste à disposition",
        "Une coupure de 30 min",
      ],
      explanation:
        "Le TTE comprend notamment la conduite, les autres tâches, les périodes pendant lesquelles le conducteur reste à disposition et les coupures d'une durée inférieure ou égale à 30 minutes.",
      tags: ["tte", "composition"],
    },
    {
      id: "rsf-urban-01-q08",
      type: "true-false",
      question:
        "Un conducteur qui attend son prochain départ tout en restant à la disposition de l'exploitation est en temps de travail effectif.",
      correctAnswer: true,
      explanation:
        "Tant que le conducteur reste à la disposition de l'employeur et ne peut pas vaquer librement à ses occupations, ce temps est du travail effectif.",
      tags: ["tte", "temps à disposition"],
    },
    {
      id: "rsf-urban-01-q09",
      type: "yes-no",
      question:
        "Une coupure de 30 minutes exactement est-elle comptabilisée dans le TTE ?",
      correctAnswer: true,
      explanation:
        "Les coupures d'une durée inférieure ou égale à 30 minutes sont comptabilisées dans le TTE.",
      tags: ["coupure", "tte", "piège"],
    },
    {
      id: "rsf-urban-01-q10",
      type: "single-choice",
      question:
        "Une coupure de 45 minutes pendant laquelle le conducteur peut vaquer librement à ses occupations est comptabilisée comment ?",
      options: [
        "Dans le TTE uniquement",
        "Dans le TTE et l'amplitude",
        "Dans l'amplitude uniquement",
        "Ni dans le TTE ni dans l'amplitude",
      ],
      correctOption: "Dans l'amplitude uniquement",
      explanation:
        "Une coupure supérieure à 30 minutes n'est pas comprise dans le TTE, mais elle reste comprise dans l'amplitude.",
      tags: ["coupure", "amplitude", "tte"],
    },
    {
      id: "rsf-urban-01-q11",
      type: "single-choice",
      question: "Combien de coupures un service peut-il comporter au maximum ?",
      options: ["1", "2", "3", "Il n'existe aucune limite"],
      correctOption: "2",
      explanation:
        "Un service peut comporter au maximum deux coupures, soit au maximum trois vacations.",
      tags: ["coupure", "vacation"],
    },
    {
      id: "rsf-urban-01-q12",
      type: "single-choice",
      question: "Qu'est-ce qu'une vacation ?",
      options: [
        "Une journée entière de travail",
        "Une période de travail comprise entre deux coupures ou entre une coupure et une prise ou fin de service",
        "Un repos d'au moins 30 minutes",
        "Une période de congés",
      ],
      correctOption:
        "Une période de travail comprise entre deux coupures ou entre une coupure et une prise ou fin de service",
      explanation:
        "Une vacation correspond à une période de travail située entre la prise de service et une coupure, entre deux coupures, ou entre une coupure et la fin du service.",
      tags: ["vacation", "définition"],
    },
    {
      id: "rsf-urban-01-q13",
      type: "single-choice",
      question: "À quoi correspond l'amplitude d'une journée de travail ?",
      options: [
        "Uniquement au temps de conduite",
        "Uniquement au TTE",
        "Au temps écoulé entre le début de la première vacation et la fin de la dernière",
        "Au temps de conduite additionné au repos journalier",
      ],
      correctOption:
        "Au temps écoulé entre le début de la première vacation et la fin de la dernière",
      explanation:
        "L'amplitude représente toute la durée comprise entre la prise et la fin de service, y compris les coupures.",
      tags: ["amplitude", "définition"],
    },
    {
      id: "rsf-urban-01-q14",
      type: "single-choice",
      question:
        "Quelle est l'amplitude maximale normale d'une journée de travail ?",
      options: ["10 h", "11 h", "12 h", "13 h"],
      correctOption: "11 h",
      explanation:
        "En règle générale, l'amplitude maximale d'une journée de travail est de 11 heures.",
      tags: ["amplitude"],
    },
    {
      id: "rsf-urban-01-q15",
      type: "single-choice",
      question:
        "Jusqu'à quelle durée l'amplitude peut-elle être portée avec dérogation ?",
      options: ["11 h 30", "12 h", "13 h", "14 h"],
      correctOption: "13 h",
      explanation:
        "Dans les situations prévues par les textes, l'amplitude peut être portée jusqu'à 13 heures.",
      tags: ["amplitude", "dérogation"],
    },
    {
      id: "rsf-urban-01-q16",
      type: "single-choice",
      question:
        "Pour nécessité d'exploitation, quelle proportion maximale des services peut dépasser 11 h d'amplitude ?",
      options: ["20 %", "25 %", "35 %", "50 %"],
      correctOption: "35 %",
      explanation:
        "Les services dépassant 11 heures d'amplitude sont limités à 35 % des services de la période de référence dans cette organisation.",
      tags: ["amplitude", "dérogation"],
    },
    {
      id: "rsf-urban-01-q17",
      type: "text",
      question:
        "Un conducteur effectue 3 h de travail, 1 h de coupure libre, 4 h de travail, 1 h de coupure libre puis 2 h de travail. Quel est son TTE ?",
      canonicalAnswer: "9 heures",
      acceptedAnswers: ["9 heures", "9 h", "9h"],
      explanation:
        "Le TTE correspond aux trois vacations : 3 h + 4 h + 2 h = 9 h. Les coupures libres d'une heure ne sont pas comptabilisées.",
      tags: ["tte", "calcul", "situation"],
    },
    {
      id: "rsf-urban-01-q18",
      type: "text",
      question:
        "Un conducteur effectue 3 h de travail, 1 h de coupure libre, 4 h de travail, 1 h de coupure libre puis 2 h de travail. Quelle est l'amplitude de sa journée ?",
      canonicalAnswer: "11 heures",
      acceptedAnswers: ["11 heures", "11 h", "11h"],
      explanation:
        "L'amplitude correspond au temps écoulé entre le début et la fin de la journée : 3 h + 1 h + 4 h + 1 h + 2 h = 11 h.",
      tags: ["amplitude", "calcul", "situation"],
    },
    {
      id: "rsf-urban-01-q19",
      type: "single-choice",
      question:
        "À partir de quelle durée quotidienne de travail la coupure minimale de 20 minutes devient-elle obligatoire ?",
      options: [
        "À partir de 4 h 30",
        "À partir de 6 h exactement",
        "Lorsque le travail dépasse 6 h",
        "Lorsque le travail dépasse 9 h",
      ],
      correctOption: "Lorsque le travail dépasse 6 h",
      explanation:
        "La règle s'applique lorsque le temps de travail quotidien est supérieur à 6 heures.",
      tags: ["coupure", "pause"],
    },
    {
      id: "rsf-urban-01-q20",
      type: "single-choice",
      question:
        "Quelle est la durée minimale des périodes pouvant constituer la coupure obligatoire de 20 minutes ?",
      options: ["5 min", "10 min", "15 min", "20 min"],
      correctOption: "5 min",
      explanation:
        "Les périodes retenues doivent durer au moins 5 minutes consécutives.",
      tags: ["coupure", "fractionnement"],
    },
    {
      id: "rsf-urban-01-q21",
      type: "single-choice",
      question:
        "Quelle est la durée minimale de la coupure destinée au repas de midi ?",
      options: ["20 min", "30 min", "45 min", "1 h"],
      correctOption: "45 min",
      explanation:
        "La coupure destinée au repas de midi doit durer au minimum 45 minutes.",
      tags: ["coupure", "repas"],
    },
    {
      id: "rsf-urban-01-q22",
      type: "text",
      question: "Quelle est la durée normale minimale du repos journalier ?",
      canonicalAnswer: "11 heures",
      acceptedAnswers: ["11 heures", "11 h", "11h"],
      explanation: "Le repos journalier normal est d'au moins 11 heures.",
      tags: ["repos journalier"],
    },
    {
      id: "rsf-urban-01-q23",
      type: "single-choice",
      question:
        "Dans les situations prévues par l'accord de branche, à combien le repos journalier peut-il être réduit ?",
      options: ["8 h", "9 h", "10 h", "10 h 30"],
      correctOption: "10 h",
      explanation:
        "Le repos journalier peut notamment être réduit à 10 heures dans certaines situations prévues par la branche.",
      tags: ["repos journalier", "dérogation"],
    },
    {
      id: "rsf-urban-01-q24",
      type: "single-choice",
      question:
        "Quel est le minimum de repos journalier prévu dans certains cas particuliers ?",
      options: ["8 h", "9 h", "10 h", "11 h"],
      correctOption: "9 h",
      explanation:
        "Dans certains cas particuliers prévus par les textes, le repos journalier peut descendre jusqu'à 9 heures.",
      tags: ["repos journalier", "dérogation"],
    },
    {
      id: "rsf-urban-01-q25",
      type: "yes-no",
      question:
        "Un repos journalier réduit de 11 h à 10 h doit-il être compensé ?",
      correctAnswer: true,
      explanation:
        "Toute réduction du repos journalier en dessous de 11 heures doit être compensée par un repos au moins équivalent au temps manquant.",
      tags: ["repos journalier", "compensation", "piège"],
    },
    {
      id: "rsf-urban-01-q26",
      type: "text",
      question:
        "Un conducteur bénéficie de 9 h de repos journalier au lieu de 11 h. Combien d'heures doit-il récupérer ?",
      canonicalAnswer: "2 heures",
      acceptedAnswers: ["2 heures", "2 h", "2h"],
      explanation: "11 h − 9 h = 2 h de repos manquant à compenser.",
      tags: ["repos journalier", "calcul", "compensation"],
    },
    {
      id: "rsf-urban-01-q27",
      type: "single-choice",
      question:
        "Au plus tard quand la compensation d'un repos journalier réduit doit-elle être accordée ?",
      options: [
        "Avant la fin de la journée suivante",
        "Avant la fin de la semaine civile suivante",
        "Dans les trois semaines",
        "Dans le mois suivant",
      ],
      correctOption: "Avant la fin de la semaine civile suivante",
      explanation:
        "La compensation doit être accordée au plus tard avant la fin de la semaine civile suivante.",
      tags: ["repos journalier", "compensation"],
    },
    {
      id: "rsf-urban-01-q28",
      type: "text",
      question: "Quelle est la durée minimale normale du repos hebdomadaire ?",
      canonicalAnswer: "35 heures",
      acceptedAnswers: ["35 heures", "35 h", "35h"],
      explanation:
        "Le repos hebdomadaire normal est d'au moins 35 heures consécutives.",
      tags: ["repos hebdomadaire"],
    },
    {
      id: "rsf-urban-01-q29",
      type: "single-choice",
      question:
        "Après combien de jours de travail au maximum le repos hebdomadaire doit-il normalement intervenir ?",
      options: ["5 jours", "6 jours", "7 jours", "8 jours"],
      correctOption: "6 jours",
      explanation:
        "Le conducteur doit normalement bénéficier d'un repos hebdomadaire après 6 jours de travail maximum.",
      tags: ["repos hebdomadaire"],
    },
    {
      id: "rsf-urban-01-q30",
      type: "single-choice",
      question:
        "Dans quel cas la période de travail entre deux repos hebdomadaires peut-elle exceptionnellement être portée à 7 jours ?",
      options: [
        "À la demande de n'importe quel conducteur",
        "Pour remplacer un salarié absent, sous les conditions prévues",
        "Lorsqu'une ligne dépasse 50 km",
        "Chaque semaine si l'entreprise le souhaite",
      ],
      correctOption:
        "Pour remplacer un salarié absent, sous les conditions prévues",
      explanation:
        "Cette dérogation est prévue notamment pour assurer le remplacement d'un salarié absent.",
      tags: ["repos hebdomadaire", "dérogation"],
    },
    {
      id: "rsf-urban-01-q31",
      type: "single-choice",
      question:
        "Quel est le minimum d'un repos hebdomadaire réduit dans les situations prévues ?",
      options: ["20 h", "24 h", "30 h", "35 h"],
      correctOption: "24 h",
      explanation:
        "Dans les situations prévues, le repos hebdomadaire réduit ne peut pas être inférieur à 24 heures.",
      tags: ["repos hebdomadaire", "dérogation"],
    },
    {
      id: "rsf-urban-01-q32",
      type: "text",
      question:
        "Un repos hebdomadaire est réduit de 35 h à 24 h. Combien d'heures doivent être compensées ?",
      canonicalAnswer: "11 heures",
      acceptedAnswers: ["11 heures", "11 h", "11h"],
      explanation: "35 h − 24 h = 11 h de repos manquant à compenser.",
      tags: ["repos hebdomadaire", "calcul", "compensation"],
    },
    {
      id: "rsf-urban-01-q33",
      type: "single-choice",
      question:
        "Au plus tard quand les heures manquantes d'un repos hebdomadaire réduit doivent-elles être compensées ?",
      options: [
        "Avant la fin de la semaine suivante",
        "Avant la fin de la deuxième semaine suivante",
        "Avant la fin de la troisième semaine civile suivante",
        "Avant la fin du mois suivant",
      ],
      correctOption: "Avant la fin de la troisième semaine civile suivante",
      explanation:
        "La compensation doit intervenir au plus tard avant la fin de la troisième semaine civile suivant la semaine de la réduction.",
      tags: ["repos hebdomadaire", "compensation"],
    },
    {
      id: "rsf-urban-01-q34",
      type: "true-false",
      question:
        "En transport urbain, le repos hebdomadaire doit obligatoirement être pris le dimanche.",
      correctAnswer: false,
      explanation:
        "Le transport urbain assure la continuité du service public. Le repos hebdomadaire peut donc être pris un autre jour.",
      tags: ["repos hebdomadaire", "dimanche", "piège"],
    },
    {
      id: "rsf-urban-01-q35",
      type: "text",
      question:
        "Quelle est la période de référence du travail de nuit en transport urbain ?",
      canonicalAnswer: "De 22 h à 5 h",
      acceptedAnswers: [
        "de 22 h à 5 h",
        "22 h à 5 h",
        "22h à 5h",
        "22h-5h",
        "22 h - 5 h",
      ],
      explanation:
        "La période de nuit de référence est comprise entre 22 heures et 5 heures.",
      tags: ["travail de nuit"],
    },
    {
      id: "rsf-urban-01-q36",
      type: "multiple-choice",
      question:
        "Quelles situations permettent notamment de caractériser un travailleur de nuit ?",
      options: [
        "Effectuer habituellement au moins 3 h de nuit au moins 2 fois par semaine",
        "Effectuer au moins 270 h de nuit sur 12 mois",
        "Effectuer une seule heure de nuit dans l'année",
        "Terminer exceptionnellement un service à 22 h 15",
      ],
      correctOptions: [
        "Effectuer habituellement au moins 3 h de nuit au moins 2 fois par semaine",
        "Effectuer au moins 270 h de nuit sur 12 mois",
      ],
      explanation:
        "Le cours retient notamment ces deux critères pour caractériser un travailleur de nuit.",
      tags: ["travail de nuit", "travailleur de nuit"],
    },
    {
      id: "rsf-urban-01-q37",
      type: "single-choice",
      question:
        "Quelle est la durée quotidienne maximale moyenne de travail d'un travailleur de nuit ?",
      options: ["7 h", "8 h", "9 h", "10 h"],
      correctOption: "8 h",
      explanation:
        "Pour un travailleur de nuit, la durée quotidienne de travail ne doit pas dépasser 8 heures en moyenne par période de 24 heures sur la période de référence applicable.",
      tags: ["travail de nuit", "durée journalière"],
    },
    {
      id: "rsf-urban-01-q38",
      type: "true-false",
      question:
        "Dans une organisation par cycles, toute heure effectuée au-delà de 35 h au cours d'une semaine est automatiquement une heure supplémentaire.",
      correctAnswer: false,
      explanation:
        "Le décompte des heures supplémentaires dépend de la période de référence et de l'organisation du temps de travail applicable.",
      tags: ["heures supplémentaires", "cycle", "piège"],
    },
    {
      id: "rsf-urban-01-q39",
      type: "single-choice",
      question:
        "Un conducteur travaille 4 h, bénéficie d'une coupure libre de 45 min, puis travaille encore 4 h. Quels sont son TTE et son amplitude ?",
      options: [
        "TTE 8 h · amplitude 8 h",
        "TTE 8 h · amplitude 8 h 45",
        "TTE 8 h 45 · amplitude 8 h 45",
        "TTE 7 h 15 · amplitude 8 h",
      ],
      correctOption: "TTE 8 h · amplitude 8 h 45",
      explanation:
        "La coupure de 45 minutes est supérieure à 30 minutes : elle est exclue du TTE mais reste comprise dans l'amplitude.",
      tags: ["tte", "amplitude", "calcul", "situation"],
    },
    {
      id: "rsf-urban-01-q40",
      type: "single-choice",
      question:
        "Un conducteur travaille 3 h 30, prend une coupure de 30 min, puis travaille 4 h. Quels sont son TTE et son amplitude ?",
      options: [
        "TTE 7 h 30 · amplitude 8 h",
        "TTE 8 h · amplitude 8 h",
        "TTE 7 h 30 · amplitude 7 h 30",
        "TTE 8 h · amplitude 8 h 30",
      ],
      correctOption: "TTE 8 h · amplitude 8 h",
      explanation:
        "Une coupure de 30 minutes exactement est comptabilisée dans le TTE. La journée représente donc 8 heures de TTE et 8 heures d'amplitude.",
      tags: ["tte", "amplitude", "calcul", "coupure", "piège"],
    },
  ],
}
