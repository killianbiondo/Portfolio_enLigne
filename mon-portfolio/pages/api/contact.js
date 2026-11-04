import nodemailer from 'nodemailer';

const recipient = process.env.CONTACT_EMAIL || 'biondo.killian@gmail.com';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ message: `Méthode ${req.method} non autorisée.` });
    }

    const body = req.body;
    const name = typeof body?.name === 'string' ? body.name.trim() : '';
    const email = typeof body?.email === 'string' ? body.email.trim() : '';
    const message = typeof body?.message === 'string' ? body.message.trim() : '';

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Tous les champs sont requis.' });
    }

    if (
        name.length > 120 ||
        email.length > 254 ||
        message.length > 5000 ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
        return res.status(400).json({ message: 'Veuillez vérifier les informations saisies.' });
    }

    const { SMTP_USER, SMTP_APP_PASSWORD } = process.env;
    if (!SMTP_USER || !SMTP_APP_PASSWORD) {
        console.error('Configuration Gmail SMTP manquante.');
        return res.status(503).json({ message: 'Le service de contact n’est pas encore configuré.' });
    }

    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: SMTP_USER,
                pass: SMTP_APP_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: `Portfolio <${SMTP_USER}>`,
            to: recipient,
            replyTo: { name, address: email },
            subject: 'Nouveau message depuis votre portfolio',
            text: `Nom : ${name}\nEmail : ${email}\n\nMessage :\n${message}`,
        });

        return res.status(200).json({ message: 'Votre message a été envoyé avec succès !' });
    } catch (error) {
        console.error('Erreur lors de l’envoi du message de contact :', error);
        return res.status(500).json({ message: 'Impossible d’envoyer votre message pour le moment.' });
    }
}
