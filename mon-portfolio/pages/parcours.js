import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';
import { useState } from 'react';
import { FaBriefcase, FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa';

export default function Parcours() {
    const [filter, setFilter] = useState('all');

    const experiences = [
        {
            title: 'Technicien polyvalent',
            subtitle: 'Centre Technique Municipal',
            location: 'Saint-Genis-Pouilly, France',
            date: 'Juillet 2021',
            sortDate: '2021-07',
            duration: '1 mois',
            type: 'experience',
            description: "Participation à l'entretien de la ville.",
            icon: <FaBriefcase aria-hidden="true" />,
        },
        {
            title: 'Hôte de caisse',
            subtitle: 'Migros',
            location: 'Thoiry, France',
            date: 'Juillet 2022',
            sortDate: '2022-07',
            duration: '1 mois',
            type: 'experience',
            description: 'Accueil des clients et contribution à leur fidélisation.',
            icon: <FaBriefcase aria-hidden="true" />,
        },
        {
            title: 'Conseiller de vente',
            subtitle: 'Botanic',
            location: 'Saint-Genis-Pouilly, France',
            date: 'Avril 2023',
            sortDate: '2023-04',
            duration: '6 mois',
            type: 'experience',
            description: 'Mise en rayon des produits et participation aux activités de vente.',
            icon: <FaBriefcase aria-hidden="true" />,
        },
        {
            title: 'Stagiaire informatique',
            subtitle: 'Safran Aerosystems',
            location: 'Roche-la-Molière, France',
            date: 'Mai 2024',
            sortDate: '2024-05',
            duration: '1 mois',
            type: 'experience',
            description: "Refonte de l'architecture d'un site web collaboratif (SharePoint).",
            icon: <FaBriefcase aria-hidden="true" />,
        },
        {
            title: 'Conseiller de vente',
            subtitle: 'Kiabi',
            location: 'Thoiry, France',
            date: 'Juillet 2024',
            sortDate: '2024-07',
            duration: '1 mois',
            type: 'experience',
            description: 'Mise en rayon des produits et participation aux activités de vente.',
            icon: <FaBriefcase aria-hidden="true" />,
        },
        {
            title: 'Conseiller de vente',
            subtitle: 'Darty',
            location: 'Saint-Genis-Pouilly, France',
            date: 'Novembre 2025',
            sortDate: '2025-11',
            duration: '9 mois',
            type: 'experience',
            description: "Conseil aux clients dans les rayons multimédia et électroménager.",
            icon: <FaBriefcase aria-hidden="true" />,
        },
    ];

    const diplomas = [
        {
            title: 'Brevet des collèges',
            subtitle: 'Collège Jacques Prévert',
            location: 'Saint-Genis-Pouilly, France',
            date: 'Juin 2019',
            sortDate: '2019-06',
            type: 'education',
            description: 'Diplôme national du brevet.',
            icon: <FaGraduationCap aria-hidden="true" />,
        },
        {
            title: 'Baccalauréat STI2D',
            subtitle: 'Lycée Saint-Exupéry',
            location: 'Valserhône, France',
            date: 'Juin 2022',
            sortDate: '2022-06',
            duration: '2 ans',
            type: 'education',
            description: "Spécialité systèmes d'information et numérique (SIN).",
            icon: <FaGraduationCap aria-hidden="true" />,
        },
        {
            title: 'BTS SIO — option SLAM',
            subtitle: 'Lycée Simone Weil',
            location: 'Saint-Étienne, France',
            date: '2023 – 2025',
            sortDate: '2023-09',
            duration: '2 ans',
            type: 'education',
            description: 'Services informatiques aux organisations, spécialité solutions logicielles et applications métiers.',
            icon: <FaGraduationCap aria-hidden="true" />,
        },
        {
            title: 'Bachelor Information Science',
            subtitle: 'HES-SO',
            location: 'Genève, Suisse',
            date: 'Depuis septembre 2026',
            sortDate: '2026-09',
            duration: '3 ans',
            type: 'education',
            description: 'Formation en Information Science.',
            icon: <FaGraduationCap aria-hidden="true" />,
        },
    ];

    const entries = [
        ...(filter !== 'diplomas' ? experiences : []),
        ...(filter !== 'experiences' ? diplomas : []),
    ].sort((a, b) => b.sortDate.localeCompare(a.sortDate));

    const filters = [
        { id: 'all', label: 'Tout' },
        { id: 'experiences', label: 'Expériences' },
        { id: 'diplomas', label: 'Formations' },
    ];
    const currentStudy = diplomas.find((item) => item.title === 'Bachelor Information Science');

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <Head>
                <title>Parcours — Killian Biondo</title>
                <meta
                    name="description"
                    content="Découvrez les formations et expériences professionnelles de Killian Biondo."
                />
            </Head>
            <Header />
            <main className="pb-20">
                <section className="relative isolate overflow-hidden bg-slate-950 text-white">
                    <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/60 via-slate-950 to-slate-950" />
                    <div className="container mx-auto max-w-6xl px-6 pb-20 pt-32 lg:px-10">
                        <header className="mx-auto max-w-3xl text-center">
                            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                                Études et expériences
                            </p>
                            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                                Mon parcours
                            </h1>
                            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">
                                Des premières expériences professionnelles à ma formation actuelle en Information Science.
                            </p>
                        </header>

                        <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
                            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-center backdrop-blur">
                                <p className="text-3xl font-extrabold text-white">{experiences.length}</p>
                                <p className="mt-1 text-sm font-medium text-slate-300">expériences professionnelles</p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-center backdrop-blur">
                                <p className="text-3xl font-extrabold text-white">{diplomas.length}</p>
                                <p className="mt-1 text-sm font-medium text-slate-300">formations et diplômes</p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-center backdrop-blur">
                                <p className="text-3xl font-extrabold text-white">Depuis 2019</p>
                                <p className="mt-1 text-sm font-medium text-slate-300">un parcours en évolution</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container mx-auto max-w-5xl px-6 lg:px-10">
                    {currentStudy && (
                        <section className="relative -mt-8 mb-12 overflow-hidden rounded-3xl border border-blue-100 bg-white p-6 shadow-xl shadow-blue-950/10 sm:p-8">
                            <div className="absolute right-0 top-0 h-40 w-40 translate-x-1/3 -translate-y-1/3 rounded-full bg-blue-100/70 blur-2xl" aria-hidden="true" />
                            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-2xl text-white shadow-lg shadow-blue-900/20">
                                    <FaGraduationCap aria-hidden="true" />
                                </div>
                                <div className="min-w-0 flex-grow">
                                    <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
                                        Formation actuelle
                                    </p>
                                    <h2 className="mt-1 text-2xl font-bold text-slate-900">{currentStudy.title}</h2>
                                    <p className="mt-1 text-slate-600">{currentStudy.subtitle} · {currentStudy.location}</p>
                                </div>
                                <span className="w-fit rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800">
                                    {currentStudy.date}
                                </span>
                            </div>
                        </section>
                    )}

                    <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Les étapes clés</p>
                            <h2 className="mt-1 text-2xl font-bold text-slate-900">Une expérience après l’autre</h2>
                        </div>
                        <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrer le parcours">
                            {filters.map(({ id, label }) => (
                                <button
                                    key={id}
                                    type="button"
                                    aria-pressed={filter === id}
                                    className={`rounded-full px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-4 focus:ring-blue-200 ${
                                        filter === id
                                            ? 'bg-blue-600 text-white shadow-md shadow-blue-900/10'
                                            : 'border border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:text-blue-700'
                                    }`}
                                    onClick={() => setFilter(id)}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                    </div>

                <ol className="relative ml-3 border-l-2 border-slate-200 pl-7 sm:ml-8 sm:pl-10">
                    {entries.map((item) => (
                        <li key={`${item.title}-${item.sortDate}`} className="relative pb-8 last:pb-0">
                            <span className={`absolute -left-[2.38rem] top-6 flex h-10 w-10 items-center justify-center rounded-full border-4 border-slate-50 text-base text-white sm:-left-[3.13rem] ${
                                item.type === 'education' ? 'bg-indigo-600' : 'bg-blue-600'
                            }`}>
                                {item.icon}
                            </span>
                            <article className={`rounded-2xl border border-slate-200 border-l-4 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg sm:p-7 ${
                                item.type === 'education' ? 'border-l-indigo-500' : 'border-l-blue-500'
                            }`}>
                                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                    <div>
                                        <div className="flex flex-wrap items-center gap-2">
                                            <p className={`text-sm font-semibold ${
                                                item.type === 'education' ? 'text-indigo-700' : 'text-blue-700'
                                            }`}>{item.date}</p>
                                            <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                                                item.type === 'education'
                                                    ? 'bg-indigo-50 text-indigo-700'
                                                    : 'bg-blue-50 text-blue-700'
                                            }`}>
                                                {item.type === 'education' ? 'Formation' : 'Expérience'}
                                            </span>
                                        </div>
                                        <h2 className="mt-1 text-xl font-bold text-slate-900">{item.title}</h2>
                                        <p className="mt-1 font-medium text-slate-600">{item.subtitle}</p>
                                    </div>
                                    {item.duration && (
                                        <span className="w-fit rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-800">
                                            {item.duration}
                                        </span>
                                    )}
                                </div>
                                <p className="mt-4 leading-relaxed text-slate-600">{item.description}</p>
                                <p className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                                    <FaMapMarkerAlt
                                        className={`shrink-0 ${item.type === 'education' ? 'text-indigo-500' : 'text-blue-500'}`}
                                        aria-hidden="true"
                                    />
                                    {item.location}
                                </p>
                            </article>
                        </li>
                    ))}
                    </ol>
                </div>
            </main>
            <Footer />
        </div>
    );
}
