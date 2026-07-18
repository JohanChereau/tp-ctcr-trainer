# Extensions Markdown

TP CTCR Trainer ajoute plusieurs extensions au Markdown classique afin d’enrichir les leçons avec des composants visuels, structurés et interactifs.

Les extensions sont interprétées automatiquement par `MarkdownLessonViewer`.

Deux syntaxes principales sont utilisées :

- `::` pour les contenus intégrés, comme les vidéos ;
- `:::` pour les blocs personnalisés, comme les encadrés ou les chronologies.

---

# Sommaire

- Vidéos
- Callouts
- Metrics
- Timeline
- Compare
- Sequence
- Scenario
- Checklist
- Memory

---

# Vidéos

Les extensions vidéo permettent d’intégrer une vidéo directement dans une leçon.

Deux fournisseurs sont actuellement supportés :

- YouTube ;
- Vimeo.

La syntaxe générale est la suivante :

```md
::provider[valeur]
```

La valeur peut être un identifiant de vidéo ou, selon le fournisseur, une URL complète reconnue par le parseur.

---

## YouTube avec un identifiant

L’identifiant d’une vidéo YouTube peut être utilisé directement.

### Code

```md
::youtube[dQw4w9WgXcQ]
```

### Rendu

::youtube[dQw4w9WgXcQ]

---

## YouTube avec une URL complète

Une URL YouTube classique peut également être utilisée.

### Code

```md
::youtube[https://www.youtube.com/watch?v=dQw4w9WgXcQ]
```

### Rendu

::youtube[https://www.youtube.com/watch?v=dQw4w9WgXcQ]

---

## YouTube avec une URL courte

Les URLs utilisant le domaine `youtu.be` sont également supportées.

### Code

```md
::youtube[https://youtu.be/dQw4w9WgXcQ]
```

### Rendu

::youtube[https://youtu.be/dQw4w9WgXcQ]

---

## YouTube avec des paramètres

Les paramètres placés après l’identifiant de la vidéo sont ignorés lors de l’extraction de l’identifiant.

### Code

```md
::youtube[https://youtu.be/dQw4w9WgXcQ?t=42]
```

### Rendu

::youtube[https://youtu.be/dQw4w9WgXcQ?t=42]

---

## Vimeo avec un identifiant

L’identifiant numérique d’une vidéo Vimeo peut être utilisé directement.

### Code

```md
::vimeo[76979871]
```

### Rendu

::vimeo[76979871]

---

## Vimeo avec une URL complète

Une URL Vimeo complète peut également être utilisée si elle est reconnue par le parseur vidéo.

### Code

```md
::vimeo[https://vimeo.com/76979871]
```

### Rendu

::vimeo[https://vimeo.com/76979871]

---

## Règles de syntaxe des vidéos

L’extension doit être écrite seule sur sa ligne.

Syntaxe valide :

```md
::youtube[dQw4w9WgXcQ]
```

Évitez de placer du texte sur la même ligne :

```md
Regardez cette vidéo : ::youtube[dQw4w9WgXcQ]
```

Le nom du fournisseur doit être écrit en minuscules.

Valeurs supportées :

| Fournisseur | Syntaxe             |
| ----------- | ------------------- |
| YouTube     | `::youtube[valeur]` |
| Vimeo       | `::vimeo[valeur]`   |

---

# Callouts

Les callouts permettent de mettre en valeur une information dans un encadré visuel.

Quatre variantes sont actuellement disponibles :

| Variante  | Utilisation recommandée                            |
| --------- | -------------------------------------------------- |
| `info`    | Information générale ou complémentaire             |
| `tip`     | Conseil, astuce ou méthode                         |
| `warning` | Point nécessitant une attention particulière       |
| `danger`  | Erreur critique, interdiction ou règle essentielle |

La syntaxe générale est la suivante :

```md
:::type[Titre optionnel]
Contenu
:::
```

Le titre placé entre crochets est facultatif.

Le contenu peut utiliser du Markdown classique.

---

# Info

Le callout `info` permet d’afficher une information neutre ou complémentaire.

## Avec un titre

### Code

```md
:::info[Information]
Le conducteur doit conserver son attestation de formation.
:::
```

### Rendu

:::info[Information]
Le conducteur doit conserver son attestation de formation.
:::

---

## Sans titre

### Code

```md
:::info
Le conducteur doit conserver son attestation de formation.
:::
```

### Rendu

:::info
Le conducteur doit conserver son attestation de formation.
:::

---

## Avec du Markdown

### Code

```md
:::info[Documents à conserver]
Le conducteur doit notamment pouvoir présenter :

- son permis de conduire ;
- sa carte de qualification ;
- sa carte conducteur.

Les documents doivent être **valides** et disponibles lors du contrôle.
:::
```

### Rendu

:::info[Documents à conserver]
Le conducteur doit notamment pouvoir présenter :

- son permis de conduire ;
- sa carte de qualification ;
- sa carte conducteur.

Les documents doivent être **valides** et disponibles lors du contrôle.
:::

---

# Tip

Le callout `tip` permet de présenter une astuce, une méthode de mémorisation ou un conseil de révision.

## Avec un titre

### Code

```md
:::tip[Astuce]
Apprenez les durées sous forme de schéma plutôt que comme une liste de nombres.
:::
```

### Rendu

:::tip[Astuce]
Apprenez les durées sous forme de schéma plutôt que comme une liste de nombres.
:::

---

## Sans titre

### Code

```md
:::tip
Associez chaque durée à une situation concrète.
:::
```

### Rendu

:::tip
Associez chaque durée à une situation concrète.
:::

---

## Avec une liste

### Code

```md
:::tip[Méthode de révision]
Pour apprendre une nouvelle règle :

1. lisez la règle ;
2. reformulez-la avec vos propres mots ;
3. créez un exemple ;
4. testez-vous sans regarder la réponse.
   :::
```

### Rendu

:::tip[Méthode de révision]
Pour apprendre une nouvelle règle :

1. lisez la règle ;
2. reformulez-la avec vos propres mots ;
3. créez un exemple ;
4. testez-vous sans regarder la réponse.
   :::

---

# Warning

Le callout `warning` permet d’attirer l’attention sur une subtilité ou un risque de confusion.

## Avec un titre

### Code

```md
:::warning[Attention]
Une pause ne doit pas être confondue avec un repos journalier.
:::
```

### Rendu

:::warning[Attention]
Une pause ne doit pas être confondue avec un repos journalier.
:::

---

## Sans titre

### Code

```md
:::warning
Vérifiez toujours l’unité utilisée dans la question.
:::
```

### Rendu

:::warning
Vérifiez toujours l’unité utilisée dans la question.
:::

---

## Avec plusieurs paragraphes

### Code

```md
:::warning[Point de vigilance]
Le temps de conduite ne correspond pas à l’amplitude de la journée.

L’amplitude peut également comprendre du travail, de la disponibilité, des pauses et d’autres interruptions.
:::
```

### Rendu

:::warning[Point de vigilance]
Le temps de conduite ne correspond pas à l’amplitude de la journée.

L’amplitude peut également comprendre du travail, de la disponibilité, des pauses et d’autres interruptions.
:::

---

# Danger

Le callout `danger` permet de signaler une règle critique, une erreur grave ou une confusion à éviter absolument.

## Avec un titre

### Code

```md
:::danger[Erreur fréquente]
Ne confondez pas l’amplitude de travail avec le temps de conduite.
:::
```

### Rendu

:::danger[Erreur fréquente]
Ne confondez pas l’amplitude de travail avec le temps de conduite.
:::

---

## Sans titre

### Code

```md
:::danger
Une règle réglementaire ne doit jamais être déduite uniquement à partir d’une habitude professionnelle.
:::
```

### Rendu

:::danger
Une règle réglementaire ne doit jamais être déduite uniquement à partir d’une habitude professionnelle.
:::

---

## Avec une mise en évidence

### Code

```md
:::danger[Règle essentielle]
Le dépassement d’une durée maximale ne devient pas autorisé simplement parce que le conducteur prend une pause ensuite.

La limite doit être respectée **avant** le dépassement.
:::
```

### Rendu

:::danger[Règle essentielle]
Le dépassement d’une durée maximale ne devient pas autorisé simplement parce que le conducteur prend une pause ensuite.

La limite doit être respectée **avant** le dépassement.
:::

---

# Titre optionnel

Le titre d’un callout est placé entre crochets immédiatement après le nom de l’extension.

## Avec un titre

### Code

```md
:::info[Titre personnalisé]
Contenu de l’encadré.
:::
```

### Rendu

:::info[Titre personnalisé]
Contenu de l’encadré.
:::

---

## Sans titre

### Code

```md
:::info
Contenu de l’encadré.
:::
```

### Rendu

:::info
Contenu de l’encadré.
:::

---

# Markdown dans les callouts

Le contenu des callouts est rendu avec le moteur Markdown utilisé par l’application.

Il peut notamment contenir :

- du texte en gras ;
- du texte en italique ;
- des listes ;
- des liens ;
- des citations ;
- du code inline ;
- des tableaux, si ceux-ci sont supportés par la configuration du renderer.

## Exemple complet

### Code

```md
:::tip[Exemple enrichi]
Retenez les points suivants :

- la durée maximale doit être identifiée ;
- les exceptions doivent être apprises séparément ;
- les unités doivent être vérifiées.

La valeur **4 h 30** correspond ici à une durée de conduite.

> Une bonne méthode consiste à expliquer la règle à voix haute.

Vous pouvez également utiliser du `code inline`.
:::
```

### Rendu

:::tip[Exemple enrichi]
Retenez les points suivants :

- la durée maximale doit être identifiée ;
- les exceptions doivent être apprises séparément ;
- les unités doivent être vérifiées.

La valeur **4 h 30** correspond ici à une durée de conduite.

> Une bonne méthode consiste à expliquer la règle à voix haute.

Vous pouvez également utiliser du `code inline`.
:::

---

# Règles de syntaxe des callouts

Le bloc doit commencer par une ligne contenant le nom de l’extension :

```md
:::info
```

ou avec un titre :

```md
:::info[Information]
```

Le bloc doit se terminer par une ligne contenant uniquement :

```md
:::
```

Exemple valide :

```md
:::warning[Attention]
Contenu du bloc.
:::
```

Le contenu doit commencer sur la ligne située après l’ouverture du bloc.

Cette syntaxe ne sera pas reconnue :

```md
:::warning[Attention] Contenu du bloc.
:::
```

Le nom de l’extension doit être écrit exactement comme prévu :

```md
:::info
:::tip
:::warning
:::danger
```

Les variantes suivantes ne sont pas supportées :

```md
:::Info
:::TIP
:::alert
:::error
```

---

# Bonnes pratiques pour les callouts

Utilisez un callout lorsqu’une information mérite d’être séparée visuellement du texte principal.

Évitez de placer la totalité d’une leçon dans un callout.

Un callout doit idéalement contenir une idée principale.

Utilisez les variantes de manière cohérente :

- `info` pour expliquer ;
- `tip` pour conseiller ;
- `warning` pour attirer l’attention ;
- `danger` pour signaler une erreur critique.

Évitez d’utiliser `danger` pour une simple remarque, car cela réduirait l’importance visuelle des véritables alertes.

# Metrics, Timeline et Compare

> Cette partie documente les extensions `metrics`, `timeline` et `compare`.

## Metrics

Les métriques permettent de présenter des chiffres clés sous forme de cartes.

### Syntaxe

```md
:::metrics[Temps de conduite]
4 h 30 | Conduite continue | Maximum avant pause
45 min | Pause | Minimum obligatoire
:::
```

### Rendu

:::metrics[Temps de conduite]
4 h 30 | Conduite continue | Maximum avant pause
45 min | Pause | Minimum obligatoire
:::

### Format

Chaque ligne suit la forme :

```text
Valeur | Libellé | Détail (optionnel)
```

Les lignes incomplètes sont ignorées.

---

## Timeline

Affiche une chronologie verticale.

### Syntaxe

```md
:::timeline[Journée]
Départ | 08h00
Pause | Après 4 h 30
Repos | Fin de journée
:::
```

### Rendu

:::timeline[Journée]
Départ | 08h00
Pause | Après 4 h 30
Repos | Fin de journée
:::

Format :

```text
Titre | Description (optionnelle)
```

---

## Compare

Permet de comparer plusieurs éléments.

### Syntaxe

```md
:::compare[Repos journalier]
Repos normal | 11 h | Règle générale
Repos réduit | 9 h | Maximum 3 fois
:::
```

### Rendu

:::compare[Repos journalier]
Repos normal | 11 h | Règle générale
Repos réduit | 9 h | Maximum 3 fois
:::

Format :

```text
Titre | Valeur | Description (optionnelle)
```

# Sequence et Scenario

## Sequence

Affiche une succession d'étapes.

### Syntaxe

```md
:::sequence[Journée]
Conduite | 4 h 30 | drive
Pause | 45 min | break
Repos | 11 h | rest
:::
```

### Rendu

:::sequence[Journée]
Conduite | 4 h 30 | drive
Pause | 45 min | break
Repos | 11 h | rest
:::

Types reconnus :

- drive / conduite
- break / pause
- work / travail
- rest / repos

Toute autre valeur utilise l'icône générique.

---

## Scenario

Permet de masquer une correction.

### Syntaxe

```md
:::scenario[Question]
Quelle est la durée maximale de conduite continue ?

---

4 h 30.
:::
```

### Rendu

:::scenario[Question]
Quelle est la durée maximale de conduite continue ?

---

4 h 30.
:::

# Checklist et Memory

## Checklist

### Syntaxe

```md
:::checklist[Contrôle]

- Permis
- Carte conducteur
- Assurance
  :::
```

### Rendu

:::checklist[Contrôle]

- Permis
- Carte conducteur
- Assurance
  :::

Les préfixes `-`, `*` et `+` sont acceptés et supprimés automatiquement.

---

## Memory

Permet d'afficher un mémo avec une explication facultative.

### Syntaxe

```md
:::memory[Astuce]
4 h 30 → 45 min → 9 h

---

Retenir cette suite facilite la mémorisation.
:::
```

### Rendu

:::memory[Astuce]
4 h 30 → 45 min → 9 h

---

Retenir cette suite facilite la mémorisation.
:::

# Bonnes pratiques

## Blocs de code

Les blocs de code sont automatiquement protégés.

```md
:::info[Test]
Ce bloc reste affiché comme du code lorsqu'il est placé dans une clôture Markdown.
:::
```

Ils ne seront pas interprétés comme des extensions.

## Conseils

- Fermer chaque bloc par `:::`.
- Utiliser les noms d'extensions en minuscules.
- Laisser le contenu commencer sur la ligne suivante.
- Tout Markdown non reconnu est rendu normalement par React Markdown.
