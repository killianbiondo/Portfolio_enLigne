import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';
import { FaPaperPlane, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState(null); // Statut de la requête pour les retours utilisateur
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            if (response.ok) {
                setStatus({ success: true, message: result.message });
                setFormData({ name: '', email: '', message: '' }); // Réinitialisation des champs
            } else {
                setStatus({ success: false, message: result.message || 'Une erreur est survenue.' });
            }
        } catch (error) {
            console.error("Erreur lors de l'envoi du formulaire :", error);
            setStatus({ success: false, message: 'Erreur de connexion au serveur.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <Header />
            <main className="container mx-auto max-w-6xl px-6 pb-20 pt-28 lg:px-10">
                <header className="mb-12 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
                        Une question ou une idée ?
                    </p>
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                        Parlons-en.
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
                        Écrivez-moi pour discuter d&apos;un projet, d&apos;une collaboration ou simplement échanger.
                        Je vous répondrai dès que possible.
                    </p>
                </header>

                <section aria-label="Mes coordonnées" className="mb-10 grid gap-4 md:grid-cols-3">
                    <a
                        href="mailto:biondo.killian@gmail.com"
                        className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-100"
                    >
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-700">
                            <FaEnvelope aria-hidden="true" />
                        </span>
                        <span className="min-w-0">
                            <span className="block font-semibold text-slate-900">Email</span>
                            <span className="mt-1 block break-all text-sm text-slate-600 group-hover:text-blue-700">
                                biondo.killian@gmail.com
                            </span>
                        </span>
                    </a>

                    <a
                        href="tel:+33677718670"
                        className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-100"
                    >
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-700">
                            <FaPhoneAlt aria-hidden="true" />
                        </span>
                        <span>
                            <span className="block font-semibold text-slate-900">Téléphone</span>
                            <span className="mt-1 block text-sm text-slate-600 group-hover:text-blue-700">
                                +33 6 77 71 86 70
                            </span>
                        </span>
                    </a>

                    <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-700">
                            <FaMapMarkerAlt aria-hidden="true" />
                        </span>
                        <span>
                            <span className="block font-semibold text-slate-900">Localisation</span>
                            <span className="mt-1 block text-sm text-slate-600">Saint-Genis-Pouilly, France</span>
                        </span>
                    </div>
                </section>

                <form
                    onSubmit={handleSubmit}
                    aria-busy={isSubmitting}
                    className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9"
                >
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900">Envoyez-moi un message</h2>
                        <p className="mt-2 text-slate-600">Tous les champs sont obligatoires.</p>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="name" className="block text-sm font-semibold text-slate-700">
                            Nom
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            autoComplete="name"
                            value={formData.name}
                            onChange={(e) => {
                                setFormData({ ...formData, name: e.target.value });
                                setStatus(null);
                            }}
                            className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                            placeholder="Votre nom"
                            required
                            maxLength={120}
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-semibold text-slate-700">
                            Adresse e-mail
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            autoComplete="email"
                            value={formData.email}
                            onChange={(e) => {
                                setFormData({ ...formData, email: e.target.value });
                                setStatus(null);
                            }}
                            className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                            placeholder="vous@exemple.com"
                            required
                            maxLength={254}
                        />
                    </div>

                    <div className="mb-7">
                        <label htmlFor="message" className="block text-sm font-semibold text-slate-700">
                            Votre message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={(e) => {
                                setFormData({ ...formData, message: e.target.value });
                                setStatus(null);
                            }}
                            className="mt-2 w-full resize-y rounded-lg border border-slate-300 px-4 py-3 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                            rows="6"
                            placeholder="Expliquez-moi brièvement ce que vous avez en tête..."
                            required
                            maxLength={5000}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-md transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        <FaPaperPlane aria-hidden="true" />
                        {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                    </button>

                    {status && (
                        <p
                            role={status.success ? 'status' : 'alert'}
                            aria-live={status.success ? 'polite' : 'assertive'}
                            className={`mt-5 rounded-lg px-4 py-3 text-center font-medium ${
                                status.success
                                    ? 'border border-emerald-200 bg-emerald-50 text-emerald-800'
                                    : 'border border-red-200 bg-red-50 text-red-800'
                            }`}
                        >
                            {status.message}
                        </p>
                    )}
                </form>
            </main>
            <Footer />
        </div>
    );
}
