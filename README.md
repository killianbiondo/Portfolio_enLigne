# Portfolio de Killian Biondo

Site portfolio personnel réalisé avec Next.js, React et Tailwind CSS. Il présente mon profil, mon parcours, mes projets et un formulaire de contact.

## Prérequis

- **Git**, pour récupérer le code source ;
- **Node.js 20 LTS** recommandé (Node.js 18.18 ou ultérieur est nécessaire) ;
- **npm**, installé avec Node.js ;
- un navigateur web récent.

Pour vérifier que Node.js et npm sont installés, ouvrez un terminal et exécutez :

```bash
node --version
npm --version
```

## 1. Récupérer le projet

Clonez le dépôt, puis entrez dans le dossier de l’application :

```bash
git clone https://github.com/killianbiondo/Portfolio_enLigne.git
cd Portfolio_enLigne/mon-portfolio
```

Si le dépôt est déjà présent sur votre ordinateur, ouvrez simplement un terminal dans son dossier `mon-portfolio`. Les commandes suivantes doivent toutes être exécutées depuis ce dossier, là où se trouve `package.json`.

## 2. Installer les dépendances

```bash
npm ci
```

Cette commande installe les dépendances à partir du fichier `package-lock.json`. Elle nécessite une connexion Internet lors de la première installation.

## 3. Lancer le site en développement

```bash
npm run dev
```

Ouvrez ensuite [http://localhost:3000](http://localhost:3000) dans votre navigateur. Laissez le terminal ouvert pendant que vous utilisez le site : il affiche les erreurs éventuelles. Pour arrêter le serveur, utilisez `Ctrl+C` dans ce terminal.

## Formulaire de contact (facultatif)

Le site s’affiche sans configuration supplémentaire. Pour que le formulaire puisse envoyer des e-mails, configurez un compte Gmail :

1. Activez la validation en deux étapes sur le compte Google qui enverra les messages.
2. Créez un [mot de passe d’application Google](https://support.google.com/accounts/answer/185833). Il s’agit d’un mot de passe dédié à l’application, et non du mot de passe habituel du compte.
3. Depuis `mon-portfolio`, créez le fichier local de configuration :

   ```bash
   cp .env.example .env.local
   ```

   Sous Windows, vous pouvez aussi créer manuellement un fichier nommé `.env.local` dans `mon-portfolio`.
4. Remplacez les valeurs d’exemple dans `.env.local` :

   ```dotenv
   SMTP_USER=adresse@gmail.com
   SMTP_APP_PASSWORD=mot_de_passe_application
   CONTACT_EMAIL=adresse_de_reception@example.com
   ```

   - `SMTP_USER` : adresse Gmail utilisée pour envoyer les messages ;
   - `SMTP_APP_PASSWORD` : mot de passe d’application Google ;
   - `CONTACT_EMAIL` : adresse qui reçoit les messages. Si cette variable est omise, l’application utilise l’adresse définie par défaut dans le code.
5. Redémarrez le serveur (`Ctrl+C`, puis `npm run dev`) pour prendre en compte la configuration.

Sans les deux variables `SMTP_USER` et `SMTP_APP_PASSWORD`, le site reste consultable, mais l’envoi du formulaire est désactivé. Ne partagez jamais ces identifiants et ne les ajoutez jamais à Git : `.env.local` est ignoré par le dépôt.

## Vérifier et lancer la version de production

Pour vérifier que l’application peut être compilée :

```bash
npm run build
```

Après une compilation réussie, lancez le site en mode production :

```bash
npm start
```

Le site est alors accessible sur [http://localhost:3000](http://localhost:3000). Les variables de `.env.local`, si elles sont configurées, sont également utilisées par le formulaire.

## Base de données

Il n’est pas nécessaire d’installer ou de lancer PostgreSQL pour démarrer le site ou utiliser son formulaire de contact. Celui-ci envoie les messages par Gmail SMTP ; les fichiers Prisma et Docker présents dans le dépôt ne sont pas nécessaires au fonctionnement actuel du portfolio.

## Structure du projet

```text
Portfolio_enLigne/
├── docker-compose.yml
├── README.md
└── mon-portfolio/
    ├── components/       # En-tête, pied de page et composants réutilisables
    ├── pages/            # Pages du site et route API du formulaire
    │   ├── api/
    │   │   └── contact.js # Envoi du formulaire par e-mail
    │   ├── index.js      # Accueil
    │   ├── profil.js     # Profil et compétences
    │   ├── parcours.js   # Parcours
    │   ├── projets.js    # Projets
    │   └── contact.js    # Contact
    ├── prisma/           # Schéma et migration conservés dans le dépôt
    ├── public/           # Images, documents et autres ressources statiques
    ├── styles/           # Styles globaux
    ├── .env.example      # Exemple de configuration du formulaire
    ├── package.json      # Dépendances et commandes npm
    └── package-lock.json # Versions exactes des dépendances
```
