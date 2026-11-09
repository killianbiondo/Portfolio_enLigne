import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';
import { useState } from 'react';
import {
    FaCheck,
    FaCopy,
    FaEnvelope,
    FaMapMarkerAlt,
    FaPaperPlane,
    FaPhoneAlt,
} from 'react-icons/fa';

const emailAddress = 'biondo.killian@gmail.com';

const initialFormData = {
    name: '',
    email: '',
    subject: '',
    message: '',
};

const inputClassName =
    'mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100';

export default function Contact() {
    const [formData, setFormData] = useState(initialFormData);
    const [status, setStatus] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [emailCopied, setEmailCopied] = useState(false);
    const [copyError, setCopyError] = useState(false);

    const updateField = (event) => {
        const { name, value } = event.target;
        setFormData((current) => ({ ...current, [name]: value }));
        setStatus(null);
    };

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(emailAddress);
            setEmailCopied(true);
            setCopyError(false);
            window.setTimeout(() => setEmailCopied(false), 2000);
        } catch (error) {
            console.error('Erreur lors de la copie de l’adresse e-mail :', error);
            setCopyError(true);
            setEmailCopied(false);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setStatus(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const result = await response.json();

            if (!response.ok) {
                setStatus({
                    success: false,
                    message: result.message || 'Une erreur est survenue. Veuillez réessayer.',
                });
                return;
            }

            setStatus({
                success: true,
                message: result.message || 'Votre message a été envoyé avec succès !',
            });
            setFormData(initialFormData);
        } catch (error) {
            console.error("Erreur lors de l'envoi du formulaire :", error);
            setStatus({ success: false, message: 'Erreur de connexion au serveur. Veuillez réessayer.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <Head>
                <title>Contact — Killian Biondo</title>
                <meta
                    name="description"
                    content="Contactez Killian Biondo pour discuter d’un projet, d’une collaboration ou d’une opportunité."
                />
            </Head>
            <Header />
            <main className="pb-20 pt-20">
                <section className="relative isolate overflow-hidden bg-slate-950 text-white">
                    <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/60 via-slate-950 to-slate-950" />
                    <div className="container mx-auto max-w-6xl px-6 py-16 text-center lg:px-10 lg:py-20">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                            Une question ou une idée ?
                        </p>
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                            Parlons-en
                        </h1>
                        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">
                            Un projet, une collaboration ou simplement envie d’échanger ? Choisissez le moyen
                            qui vous convient, je vous répondrai dès que possible.
                        </p>
                    </div>
                </section>

                <section className="container mx-auto grid max-w-6xl gap-6 px-6 py-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8 lg:px-10 lg:py-14">
                    <aside className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-950 p-7 text-white shadow-xl shadow-blue-950/15 sm:p-9">
                        <div
                            className="absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl"
                            aria-hidden="true"
                        />
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-200">
                            Contact direct
                        </p>
                        <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                            Restons en contact
                        </h2>
                        <p className="mt-3 leading-relaxed text-blue-100">
                            Vous pouvez aussi me joindre directement par e-mail ou par téléphone.
                        </p>

                        <div className="mt-8 space-y-3">
                            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.08] p-4 backdrop-blur transition hover:bg-white/[0.12]">
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-lg">
                                    <FaEnvelope aria-hidden="true" />
                                </span>
                                <div className="min-w-0 flex-grow">
                                    <p className="text-xs font-medium uppercase tracking-wider text-blue-200">E-mail</p>
                                    <a
                                        href={`mailto:${emailAddress}`}
                                        className="mt-1 block break-all text-sm font-semibold text-white hover:text-blue-200"
                                    >
                                        {emailAddress}
                                    </a>
                                </div>
                                <button
                                    type="button"
                                    onClick={copyEmail}
                                    aria-label={emailCopied ? 'Adresse e-mail copiée' : 'Copier l’adresse e-mail'}
                                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-blue-100 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/70"
                                >
                                    {emailCopied ? <FaCheck aria-hidden="true" /> : <FaCopy aria-hidden="true" />}
                                </button>
                            </div>

                            <a
                                href="tel:+33677718670"
                                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.08] p-4 transition hover:bg-white/[0.12] focus:outline-none focus:ring-2 focus:ring-white/70"
                            >
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-lg">
                                    <FaPhoneAlt aria-hidden="true" />
                                </span>
                                <span>
                                    <span className="block text-xs font-medium uppercase tracking-wider text-blue-200">Téléphone</span>
                                    <span className="mt-1 block text-sm font-semibold text-white">+33 6 77 71 86 70</span>
                                </span>
                            </a>

                            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.08] p-4">
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-lg">
                                    <FaMapMarkerAlt aria-hidden="true" />
                                </span>
                                <span>
                                    <span className="block text-xs font-medium uppercase tracking-wider text-blue-200">Localisation</span>
                                    <span className="mt-1 block text-sm font-semibold text-white">Saint-Genis-Pouilly, France</span>
                                </span>
                            </div>
                        </div>

                        <p
                            aria-live="polite"
                            className={`mt-4 min-h-5 text-sm ${copyError ? 'text-amber-200' : 'text-blue-200'}`}
                        >
                            {emailCopied ? 'Adresse e-mail copiée dans le presse-papiers.' : ''}
                            {copyError ? 'Copie impossible ici : utilisez le lien e-mail ci-dessus.' : ''}
                        </p>
                    </aside>

                    <form
                        onSubmit={handleSubmit}
                        aria-busy={isSubmitting}
                        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9"
                    >
                        <div className="mb-7">
                            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">À votre tour</p>
                            <h2 className="mt-2 text-2xl font-bold text-slate-900">Envoyez-moi un message</h2>
                            <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                Les champs marqués d’un astérisque sont obligatoires.
                            </p>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-slate-700">
                                    Nom <span aria-hidden="true" className="text-blue-600">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    autoComplete="name"
                                    value={formData.name}
                                    onChange={updateField}
                                    className={inputClassName}
                                    placeholder="Votre nom"
                                    required
                                    maxLength={120}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-slate-700">
                                    Adresse e-mail <span aria-hidden="true" className="text-blue-600">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                    value={formData.email}
                                    onChange={updateField}
                                    className={inputClassName}
                                    placeholder="vous@exemple.com"
                                    required
                                    maxLength={254}
                                />
                            </div>
                        </div>

                        <div className="mt-5">
                            <label htmlFor="subject" className="block text-sm font-semibold text-slate-700">
                                Sujet <span aria-hidden="true" className="text-blue-600">*</span>
                            </label>
                            <select
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={updateField}
                                className={`${inputClassName} appearance-none`}
                                required
                            >
                                <option value="" disabled>Choisissez le sujet de votre message</option>
                                <option value="Projet">Projet</option>
                                <option value="Collaboration">Collaboration</option>
                                <option value="Opportunité">Opportunité</option>
                                <option value="Autre">Autre</option>
                            </select>
                        </div>

                        <div className="mt-5">
                            <div className="flex items-center justify-between gap-3">
                                <label htmlFor="message" className="block text-sm font-semibold text-slate-700">
                                    Votre message <span aria-hidden="true" className="text-blue-600">*</span>
                                </label>
                                <span className="text-xs tabular-nums text-slate-500" aria-live="polite">
                                    {formData.message.length} / 5000
                                </span>
                            </div>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={updateField}
                                className={`${inputClassName} resize-y`}
                                rows="6"
                                placeholder="Expliquez-moi brièvement ce que vous avez en tête..."
                                required
                                maxLength={5000}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-md shadow-blue-900/15 transition hover:-translate-y-0.5 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 disabled:cursor-not-allowed disabled:opacity-70"
                        >
                            {isSubmitting ? (
                                <>
                                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden="true" />
                                    Envoi en cours...
                                </>
                            ) : (
                                <>
                                    <FaPaperPlane aria-hidden="true" />
                                    Envoyer le message
                                </>
                            )}
                        </button>

                        {status && (
                            <p
                                role={status.success ? 'status' : 'alert'}
                                aria-live={status.success ? 'polite' : 'assertive'}
                                className={`mt-5 rounded-xl border px-4 py-3 text-sm font-medium ${
                                    status.success
                                        ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
                                        : 'border-red-200 bg-red-50 text-red-800'
                                }`}
                            >
                                {status.message}
                            </p>
                        )}
                    </form>
                </section>
            </main>
            <Footer />
        </div>
    );
}
