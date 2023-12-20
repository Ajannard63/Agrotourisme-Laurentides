# Agrotourisme Laurentides Équipe 9 

Un site web dédiée au tourisme agroalimentaire afin de mettre à l’avant-plan les différents artisans et acteurs de ce secteur touristique en pleine effervescence au Québec. 

### Équipe d'artistes
- Albert Jannard 
- Oli Boucher

# Données de l'API
Les données qui devaient normalement être obtenues via l'**API** de la branche Laravel-Main peuvent être trouvées dans le répertoire public/json. Chaque tableau de données est stocké individuellement. Cette approche a été adoptée par **Albert Jannard** pour compenser le retard de livraison du projet par l'équipe de développement backend.

**N'hésitez pas à consulter les fichiers JSON correspondants dans le répertoire ```public/json``` pour accéder aux données nécessaires.**



# Données des entreprises
Les informations relatives aux entreprises sont stockées sous forme de fichiers JSON dans le répertoire public/JSON. Pour organiser et filtrer ces données par catégorie, un script JavaScript appelé trieurEntreprises.js a été développé par **Albert Jannard**.

### Utilisation du script
Pour utiliser le script trieurEntreprises.js, suivez les étapes suivantes :

1. Assurez-vous d'avoir le fichier JSON des entreprises (entreprises.json) dans le même répertoire que le script trieurEntreprises.js.

2. Exécutez le script à l'aide d'un moteur JavaScript, comme Node.js. Vous pouvez lancer la commande suivante dans votre terminal :

```sh
node tools/trieurEntreprises.js
```
3. Le script traitera le fichier entreprises.json, extraira les informations pertinentes et les triera par catégorie.

4. Une fois le traitement terminé, vous obtiendrez une version optimisée du fichier JSON trié par catégorie.

### Fichier de sortie
Le fichier JSON résultant sera disponible dans le même répertoire que le script trieurEntreprises.js. Vous pouvez le renommer selon vos besoins et l'utiliser comme source de données pour votre projet.

<br/>
<br/>



## Project Setup 

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
