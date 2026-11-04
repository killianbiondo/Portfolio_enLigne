This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Formulaire de contact

Les messages envoyés depuis le formulaire sont transmis par Gmail SMTP à `CONTACT_EMAIL` (par défaut `biondo.killian@gmail.com`). Pour activer l'envoi :

1. Activez la validation en deux étapes sur le compte Google utilisé pour l'envoi, puis créez un [mot de passe d'application](https://support.google.com/accounts/answer/185833).
2. Créez `mon-portfolio/.env.local` à partir de `.env.example` et renseignez `SMTP_USER` (votre adresse Gmail), `SMTP_APP_PASSWORD` (le mot de passe d'application) et, si nécessaire, `CONTACT_EMAIL`.
3. Redémarrez le serveur Next.js après avoir modifié `.env.local`.

Ne partagez pas et ne committez jamais le mot de passe d'application.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
