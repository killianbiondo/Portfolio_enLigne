# **Documentation - Création d'un Portfolio avec Next.js et Tailwind CSS**

## **Prérequis**
Avant de commencer, assurez-vous d’avoir les outils suivants installés sur votre machine :

- **Node.js** : Version 16 ou supérieure ([télécharger ici](https://nodejs.org/)).
- **npm** ou **yarn** : Gestionnaire de paquets.
- **Un IDE** comme [WebStorm](https://www.jetbrains.com/webstorm/) ou [Visual Studio Code](https://code.visualstudio.com/).

---

## **Étapes d'installation**

### 1. **Créer un projet Next.js**
Exécutez les commandes suivantes dans votre terminal pour créer un nouveau projet Next.js :

```bash
npx create-next-app@latest nom-du-projet
cd nom-du-projet
```

### 2. **Installer Tailwind CSS**
Ajoutez Tailwind CSS et ses dépendances dans le projet :

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

### 3. **Configurer Tailwind CSS**
Mettez à jour le fichier **`tailwind.config.js`** pour inclure tous les fichiers du projet où Tailwind sera utilisé :

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Ajoutez les directives Tailwind au fichier **`styles/globals.css`** :

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## **Structure du projet**

### **Arborescence**
Voici une structure simplifiée du projet pour organiser les fichiers et dossiers :

```
nom-du-projet/
├── pages/
│   ├── index.js        # Page d'accueil
│   ├── profil.js       # Page Profil
│   ├── parcours.js     # Page Parcours
│   └── _app.js         # Configuration globale
├── components/
│   ├── Header.js       # Composant pour le menu de navigation
│   ├── Footer.js       # Composant pour le pied de page
│   ├── ProjectCard.js  # Composant pour afficher les projets
├── public/
│   ├── images/         # Dossier pour les images
├── styles/
│   └── globals.css     # Fichier CSS global
└── tailwind.config.js
```

---

---

## **Démarrer le projet**

1. Lancez le projet en mode développement :
   ```bash
   npm run dev
   ```

2. Accédez à votre projet dans le navigateur :  
   Ouvrez [http://localhost:3000](http://localhost:3000).

3. Pour construire une version de production :
   ```bash
   npm run build
   ```

4. Pour lancer le serveur de production :
   ```bash
   npm start
   ```

---


