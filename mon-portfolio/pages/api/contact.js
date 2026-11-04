import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ message: 'Tous les champs sont requis.' });
        }

        try {
            const contact = await prisma.contact.create({
                data: {
                    name,
                    email,
                    message,
                },
            });

            res.status(201).json({ message: 'Formulaire soumis avec succès !', contact });
        } catch (error) {
            console.error('Erreur lors de l’enregistrement dans la base de données:', error);
            res.status(500).json({ message: 'Erreur serveur.' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Méthode ${req.method} non autorisée`);
    }
}
