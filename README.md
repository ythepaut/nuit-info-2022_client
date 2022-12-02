# Nuit de l'info 2022 - Client

## Installation

```bash
$ npm install
```

## Exécution

```bash
$ npm run start
```

## Environnements

Les branches sont déployées automatiquement sur Vercel.

Production Front : [https://nuit-info.ythepaut.com](https://nuit-info.ythepaut.com) <br>
Repository Api : [https://github.com/clau555/nuit-info-2022_api](https://github.com/clau555/nuit-info-2022_api)

## Technologies utilisées

-   <strong>Next.js</strong> : Framework React
-   <strong>TailwindCSS</strong> : Framework CSS

## Défis relevés :

---

### Défi 1 : Easter egg

Nous avons abandonné ce défi.

### Défi 2 : To git or not to git

Dans l'optique de respecter une convention de nommage des branches et des commits, nous avons mis en place un code de conduite git basé sur le modèle de [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).
Ce qui nous a permis d'assurer un constant respect de la convention de nommage des branches et des commits.
Pour la répartition du travail, aillant travaillé principalement en pair programming, la répartition du travail peut sembler déséquilibrée, bien que ce ne fut pas réellement le cas.

### Défi 3 : Du propre

Dans l'optique de respecter les bonnes pratiques de développement, nous avons mis en place un linter et un formatter pour le code.
Pour le linter, nous avons utilisé [ESLint](https://eslint.org/) de sorte à respecter les conventions de syntaxe.
Pour nous assurer en permanence d'une qualité de code correcte, nous avons utilisé SonarQube pour l'analyser.
Nous avons aussi utilisé git afin de toujours avoir une architecture de fichier structurée.
Nous avons également mis en place un système de CI/CD pour automatiser le déploiement de l'application et s'assurer de toujours avoir une version fonctionnelle de l'application déployée (pas de commit non fonctionnel).

### Défi 4 : CA-TS éco conçoit ses services numériques, et vous ?

L'objectif de ce défi est de concevoir une application en prenant en compte des critères de conception éco-responsables
telles que [les 115 bonnes pratiques de l'éco-conception web](https://communication-responsable.ademe.fr/sites/default/files/les-115-bonnes-pratiques-ecoconception-web-frederic-bordage.pdf).

#### Conception :

##### Fonctionnelle

-   1 : Eliminer les fonctionnalités non essentielles :
    -   Nous n'avons pas concervé de fonctionnalités non essentielles, grace au linter et au formatter.
-   2 : Quantifier précisément le besoin :
    -   Nous avons quantifier le besoin en debut de projet, en définissant les fonctionnalités essentielles que nous devions réaliser, ainsi que les technologies que nous allions utiliser.
-   3 : Fluidifier le processus TODO
-   4 : Préférer la saisie assistée à l'autocomplétion :
    -   Nous ne sommes pas concernés par cette pratique, car nous n'avons pas de formulaire.
-   5 : Respecter le principe de navigation rapide dans l'historique TODO

##### Graphique

-   6 : Favoriser un design simple, épuré et adapté au Web :
-   Notre design est simple et efficace, il comporte seulement des éléments essentiels au fonctionnement.
-   7 : Préférer l'approche "mobile first" ou, à défaut, RESS plutôt que RWD :
    -   Nous avons favorisé une approche Responsive lors de ce projet, notamment à l'aide de TailwindCSS.

##### Technique

-   8 : Proposer un traitement asynchrone lorsque c'est possible :
    -   Nous avons utilisé des requêtes asynchrones pour récupérer les données de l'API.
-   9 : Limiter le nombre de requêtes HTTP :
    -   Nous avons limité le nombre de requêtes HTTP en minimisant leur appel et maximisant le nombre de données récupérées par requête.
-   10 : Stocker localement les données statiques :
    -   Nous avons stocké localement les données statiques, notamment les images.
-   11 : Choisir les technologies les plus adaptées :
    -   Nous avons choisi les technologies les plus adaptées selon nous, notamment Next.js et TailwindCSS, de sorte à minimiser le temp de developpement.
-   12 : Utiliser un framework ou développer sur mesure :
    -   Nous avons utilisé un framework, Next.js, pour développer notre application.
-   13 : Limiter le recours aux plug-ins :
    -   Nous avons utilisé des plug-ins uniquement pour l'évaluation du code, et pour le linter et le formatter.
-   14 : Limiter l'utilisation de Flash :
    -   Nous n'avons pas utilisé de Flash.

#### Templating :

##### HTML

-   15 : Valider les pages auprès du W3C
-   16 : Externaliser les CSS et JavaScript

##### Polices

-   17 : Favoriser les polices standards :
    -   Nous avons utilisé des polices standards.
-   18 : Préférer les glyphes aux images :
    -   Nous n'utilisons que peu d'images (surtout des icones) et n'avons donc pas prit le temps de les remplacer par des glyphes.

##### Images

-   19 : Supprimer les balises images dont l'attribut SRC est vide :
    -   Notre linter nous permet d'éviter l'utilisation de balises images dont l'attribut SRC est vide.
-   20 : Redimensionner les images en dehors du navigateur TODO
-   21 : Eviter d'utiliser des images bitmap pour l'interface :
    -   Nous n'utilisons que peu d'images (surtout des icones) et n'utilisons donc pas de bitmap.
-   22 : Optimiser les images vectorielles :
    -   Nous n'utilisons que peu d'images (surtout des icones) et n'utilisons donc pas de vectorielles.

##### CSS

-   23 : Générer des spritesheets CSS TODO
-   24 : Découper les CSS :
    -   Nous utilisons de tailwindCSS, qui nous permet de découper notre CSS.
-   25 : Limiter le nombre de CSS et les compresser :
    -   Nous utilisons un framework CSS, TailwindCSS, qui nous permet de n'avoir qu'un seul CSS minime.
-   26 : Préférer les CSS aux Images :
    -   Nous utilisons du CSS dès que possible (background, etc ...).
-   27 : Écrire des sélecteurs CSS efficaces :
    -   Nous utilisons Tailwind.
-   28 : Grouper les déclarations CSS similaires :
    -   Nous utilisons Tailwind, dans des composants, ce qui limite les déclarations CSS similaires.
-   29 : Utiliser les notations CSS abrégées :
    -   Nous utilisons Tailwind.
-   30 : Toujours fournir une CSS print :
    -   Nous n'avons pas de CSS print, car nous utilisons Tailwind.
-   31 : Utiliser les commentaires conditionnels :
    -   Nous utilisons TailwindCSS.
-   32 : Modifier plusieurs propriétés CSS en une seule fois :
    -   Nous utilisons TailwindCSS.
        <br>

Tailwind est un framework CSS optimiser, qui, au moment de la compilation, ne garde que les classes utilisées et les minimise.

#### Code client :

##### JavaScript

-   33 : Valider le code JavaScript avec JSLint :
    -   Nous utilisons un linter TS-lint pour valider notre code TypeScript.
-   34 : Eviter d'utiliser try..catch..finally :
    -   Nous n'utilisons pas try..catch..finally.
-   35 : Utiliser les opérations primitives
-   36 : Mettre en cache les objets souvent accédés en JavaScript
-   37 : Privilégier les variables locales
-   38 : Privilégier les fonctions anonymes
-   39 : Utiliser le concaténateur de chaines de façon optimale
-   40 : Préférer les fonctions aux strings, en argument à setTimeout et setInterval
-   41 : Eviter les boucles for in

<br> Nous utilisons un formater et un linter, de sorte à optimiser notre code et éviter les erreurs et mauvaises pratiques.

##### DOM

-   42 : Réduire les accès au DOM via JavaScript
-   43 : Ne pas modifier le DOM lorsqu'on le traverse
-   44 : Rendre les éléments du DOM invisibles lors de leur modification
-   45 : Réduire au maximum le repaint (appearance) et le reflow (layout)
-   46 : Utiliser la délégation d'événements

##### Animations

-   47 : Privilégier les changements visuels instantanés
-   48 : Eviter les animations JavaScript/CSS couteuses :
    -   Nous n'utilisons pas de grosses animations JavaScript/CSS.

##### Echanges de données

-   49 : Utiliser Ajax pour les zones de contenu souvent mises à jour
-   50 : Utiliser la méthode GET pour les requêtes Ajax

#### Code Serveur :

##### Conception

-   51 : Favoriser les pages statiques :
    -   Nous avons utilisé Next.js, qui nous permet de générer des pages statiques.
-   52 : Créer une architecture applicative modulaire :
    -   Nous avons utilisé le framework Next.js.
-   53 : Utiliser certains forks applicatifs orientés "performance"
-   54 : Choisir un format de données adapté
-   55 : Limiter le nombre de domaines servant les ressources

##### CMS

-   56 : Utiliser un moteur de templating
-   57 : Utiliser tous les niveaux de cache du CMS
-   58 : Générer les PDF en dehors du CMS
-   59 : Redimensionner les images en dehors du CMS
-   60 : Encoder les sons en dehors du CMS

##### Serveur d'applications

-   61 : Mettre en cache le bytecode
-   62 : Mettre en cache les données calculées souvent utilisées
-   63 : Libérer de la mémoire les variables qui ne sont plus nécessaires
-   64 : Ne pas appeler de fonction dans la déclaration d'une boucle de type for
-   65 : Supprimer tous les warnings et toutes les notices
-   66 : Utiliser des variables statiques
-   67 : Eviter la réécriture des getters et setters natifs
-   68 : Ne pas assigner inutilement de valeurs aux variables
-   69 : Utiliser la simple quote au lieu du guillemet
-   70 : Remplacer les $i++ par des ++$i

##### Base de données

-   71 : Eviter d'effectuer des requêtes SQl à l'intérieur d'une boucle
-   72 : Ne se connecter à une base de données que si nécessaire
-   73 : Ne jamais écrire de SELECT \* FROM
-   74 : Limiter le nombre de résultats
-   75 : Utiliser les procédures stockées

#### Hébergement :

##### Ressources et contenu

-   76 : Optimiser les images bitmap
-   77 : N'utiliser que les portions indispensables des libraires JavaScript et CSS
-   78 : Minifier les fichiers CSS
-   79 : Minifier les fichiers JavaScript
-   80 : Compresser les feuilles de style CSS et les bibliothèques JavaScript
-   81 : Combiner les fichiers CSS et les fichiers JavaScript
-   82 : Optimiser la taille des cookies
-   83 : Compresser la sortie HTML

##### Infrastucture physique

-   84 : Choisir un hébergeur "vert":
    -   Nous herbergeons l'api auprès d'ovh, qui est un hébergeur "vert" (cf. http://www.ovh.com/fr/infrastructures/infrastructures-vertes.xml). Et le front est deployé grace à vercel, qui a vraisemblablement une politique "verte" (cf. https://vercel.com/blog/vercel-is-now-carbon-negative).
-   85 : Utiliser une électricité "verte" :
    -   Comme dit ci-dessous, nous utilisons des fournisseurs qui semble être des hébergeurs "vert" et donc on une dépense énergétique plus neutre en carbone que de nombreux concurrents.
-   86 : Adapter la qualité de service et le niveau de disponibilité :
    -   Les services deployé grace a vercel sont déployé de sorte à avoir une disponibilité presque totale, la qualité de service étant minimale, nous avons décidé de négliger ce paramètre.
-   87 : Utiliser des serveurs virtualisés :
    -   Les deux hébergeurs que nous utilisons sont des hébergeurs virtuels, et nous leur faisons confiance pour que cela reste le cas.
-   88 : Optimiser l'efficacité énergétique des serveurs :
    -   Les hébergeurs que nous utilisons font de leur mieux pour optmiser leur dépense énergétique, et donc leur efficacité.
-   89 : Installer uniquement les services indispensables sur le serveur
-   90 : Monter les caches entièrement en RAM
-   91 : Privilégier les serveurs équipés de mémoires SSD
-   92 : Stocker les données dans le cloud
-   93 : Désactiver les logs binaires de MySQL ou MariaDB

##### Infrastucture logicielle

-   94 : Utiliser un serveur asynchrone
-   95 : Limiter le recours aux certificats SSL
-   96 : Héberger les ressources sur un domaine sans cookies :
    -   Nous n'utilisons aucuns cookies, nous n'avons pas à tenir compte de cette pratique.
-   97 : Eviter les redirections
-   98 : Ne pas générer de page 404
-   99 : Désactiver certains logs d'accès du serveur web
-   100 : Désactiver le DNS lookup d'Apache
-   101 : Désactiver la directive AllowOverride d'Apache

##### Cache

-   102 : Utiliser un CDN
-   103 : Utiliser un reverse proxy
-   104 : Mettre en cache le favicon.ico
-   105 : Ajouter des en-têtes Expires ou Cache-Control
-   106 : Utiliser les Etags
-   107 : Mettre en cache les réponses Ajax

#### Contenu :

##### Documents

-   108 : Compresser les documents
-   109 : Optimiser les PDF
    <br>Nous n'avons pas de documents (PDF ou autre).

##### E-mails

-   110 : Dédoublonner les fichiers d'adresses e-mail avant envoi
-   111 : N'utiliser que les adresses e-mail double opt-in
-   112 : Préférer le texte brut au HTML

##### Sons

-   113 : Adapter les sons aux contextes d'écoute

##### Textes

-   114 : Adapter les textes au Web

##### Vidéos

-   115 : Adapter les vidéos aux contextes de visualisation

Lors de la conception et le developpement de cette application, de nombreuses pratiques recommandées par le guide n'ont pas eu à être appliquées, car elles ne sont pas pertinentes pour notre application.
Nous avons donc décidé de ne pas mentionner leur application dans ce document.

### Défi 5 : Mettez l'IA de DALL-E dans votre projet

Défi non réalisé suite à un manque de temps et de problèmes liés à la quantité limités de générations d'image possible par jour.
