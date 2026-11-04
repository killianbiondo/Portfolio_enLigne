# Portfolio de Killian Biondo

Site portfolio réalisé avec Next.js, React et Tailwind CSS. Il présente mon profil, mon parcours et mes projets, et permet de me contacter via un formulaire.

## Prérequis

- Node.js 18.18 ou une version ultérieure
- npm
- Un navigateur web

## Installation

Depuis la racine du dépôt, placez-vous dans le dossier de l’application et installez ses dépendances :

```bash
cd mon-portfolio
npm ci
```

## Lancer le site en développement

```bash
npm run dev
```

Ouvrez ensuite [http://localhost:3000](http://localhost:3000) dans votre navigateur. Les modifications apportées aux fichiers sont prises en compte automatiquement.

## Formulaire de contact

Le formulaire envoie ses messages par Gmail SMTP. Pour activer l’envoi :

1. Activez la validation en deux étapes sur le compte Google qui enverra les messages et créez un [mot de passe d’application Google](https://support.google.com/accounts/answer/185833).
2. Depuis le dossier `mon-portfolio`, copiez le fichier d’exemple :

   ```bash
   cp .env.example .env.local
   ```

3. Renseignez les variables dans `mon-portfolio/.env.local` :
   - `SMTP_USER` : adresse Gmail utilisée pour l’envoi ;
   - `SMTP_APP_PASSWORD` : mot de passe d’application Google ;
   - `CONTACT_EMAIL` : adresse qui reçoit les messages (facultative ; une adresse de réception par défaut est définie par l’application).
4. Redémarrez le serveur de développement après avoir modifié `.env.local`.

Ne partagez pas et ne committez jamais le mot de passe d’application. Le fichier `.env.local` est ignoré par Git.

## Vérification et production

Depuis `mon-portfolio`, vérifiez la compilation de production avec :

```bash
npm run build
```

Puis lancez le site en mode production :

```bash
npm start
```

## Structure du projet

```text
mon-portfolio/
├── components/       # En-tête, pied de page et composants réutilisables
├── pages/            # Pages et routes Next.js
│   ├── api/          # API du formulaire de contact
│   ├── index.js      # Accueil
│   ├── profil.js     # Profil et compétences
│   ├── parcours.js   # Parcours
│   └── projets.js    # Projets
├── prisma/           # Schéma et migrations de la base de données
├── public/           # Images, documents et autres ressources statiques
├── styles/           # Styles globaux
├── .env.example      # Exemple de configuration des variables d’environnement
└── package.json      # Dépendances et commandes du projet
```
