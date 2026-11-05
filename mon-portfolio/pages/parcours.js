import Header from '../components/Header';
import Footer from '../components/Footer';
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
            description: 'Diplôme national du brevet.',
            icon: <FaGraduationCap aria-hidden="true" />,
        },
        {
            title: 'Baccalauréat STI2D',
            subtitle: 'Lycée Saint-Exupéry',
            location: 'Valserhone, France',
            date: 'Juin 2022',
            sortDate: '2022-06',
            duration: '2 ans',
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

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <Header />
            <main className="container mx-auto max-w-5xl px-6 pb-20 pt-28 lg:px-10">
                <header className="mb-12 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
                        Études et expériences
                    </p>
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                        Mon parcours
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
                        De mes premières expériences professionnelles à ma formation actuelle en Information Science.
                    </p>
                </header>

                <div className="mb-12 flex flex-wrap justify-center gap-3" aria-label="Filtrer le parcours">
                    {filters.map(({ id, label }) => (
                        <button
                            key={id}
                            type="button"
                            aria-pressed={filter === id}
                            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition focus:outline-none focus:ring-4 focus:ring-blue-200 ${
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

                <ol className="relative ml-3 border-l-2 border-blue-100 pl-7 sm:ml-8 sm:pl-10">
                    {entries.map((item) => (
                        <li key={`${item.title}-${item.sortDate}`} className="relative pb-8 last:pb-0">
                            <span className="absolute -left-[2.38rem] top-6 flex h-10 w-10 items-center justify-center rounded-full border-4 border-slate-50 bg-blue-600 text-base text-white sm:-left-[3.13rem]">
                                {item.icon}
                            </span>
                            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg sm:p-7">
                                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                    <div>
                                        <p className="text-sm font-semibold text-blue-700">{item.date}</p>
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
                                    <FaMapMarkerAlt className="shrink-0 text-blue-500" aria-hidden="true" />
                                    {item.location}
                                </p>
                            </article>
                        </li>
                    ))}
                </ol>
            </main>
            <Footer />
        </div>
    );
}
