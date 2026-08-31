# Politique de sécurité

## Versions prises en charge

CTCR Trainer est un projet personnel en évolution active. Les correctifs de sécurité sont appliqués sur la version actuellement maintenue du projet.

## Signaler une vulnérabilité

Merci de **ne pas ouvrir d'issue publique** pour une vulnérabilité susceptible d'exposer des données, des secrets, des variables d'environnement ou de permettre un comportement dangereux.

Vous pouvez signaler le problème à :

`ctcr@johan-chereau.com`

Dans la mesure du possible, indiquez :

- la nature du problème ;
- les étapes permettant de le reproduire ;
- la route ou le composant concerné ;
- son impact potentiel ;
- une proposition de correction si vous en avez une.

Évitez d'inclure des secrets réels, des URL privées de calendrier ou des données personnelles dans votre message.

## Périmètre à surveiller

Les points particulièrement sensibles du projet comprennent notamment :

- les dépendances npm/pnpm ;
- le rendu de contenu Markdown ;
- les embeds de ressources externes ;
- les routes serveur ;
- la récupération et l'analyse du flux ICS ;
- la gestion des variables d'environnement.

## Variables d'environnement

La variable `TRAINING_CALENDAR_ICS_URL` doit rester côté serveur et ne doit pas être commitée dans le dépôt lorsqu'elle contient une URL privée.

Le fichier `.env.example` ne doit contenir que des valeurs fictives.

## Divulgation responsable

Merci de laisser un délai raisonnable pour analyser et corriger un problème avant toute publication détaillée de la vulnérabilité.
