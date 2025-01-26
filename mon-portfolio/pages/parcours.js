import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

export default function Parcours() {
    const [filter, setFilter] = useState('all');

    const experiences = [
        {
            title: 'Technicien polyvalent',
            subtitle: 'Centre Technique Municipal',
            location: 'Saint-Genis-Pouilly, France',
            date: '2021-07',
            duration: '1 mois',
            description: "J'ai pu m'occuper de l'entretien de ma ville.",
            icon: <FaBriefcase />,
        },
        {
            title: 'Hôte de caisse',
            subtitle: 'Migros',
            location: 'Thoiry, France',
            date: '2022-07',
            duration: '1 mois',
            description: "Collaboration avec mes supérieurs pour développer des stratégies visant à renforcer la fidélisation de la clientèle.",
            icon: <FaBriefcase />,
        },
        {
            title: 'Conseiller de vente',
            subtitle: 'Botanic',
            location: 'Saint-Genis-Pouilly, France',
            date: '2023-04',
            duration: '6 mois',
            description: "J'ai assuré la mise en rayon des produits tout en contribuant activement aux activités de vente.",
            icon: <FaBriefcase />,
        },
        {
            title: 'Stagiaire informatique',
            subtitle: 'Safran Aerosystems',
            location: 'Roche-la-Molière, France',
            date: '2024-05',
            duration: '1 mois',
            description: "J'ai refait l'architecture d'un site web collaboratif.",
            icon: <FaBriefcase />,
        },
        {
            title: 'Conseiller de vente',
            subtitle: 'Kiabi',
            location: 'Thoiry, France',
            date: '2024-07',
            duration: '1 mois',
            description: "J'ai assuré la mise en rayon des produits tout en contribuant activement aux activités de vente.",
            icon: <FaBriefcase />,
        },
    ];

    const diplomas = [
        {
            title: 'Brevet des collèges',
            subtitle: 'Collège Jacques Prévert',
            location: 'Saint-Genis-Pouilly, France',
            date: '2019-06',
            description: 'Formation de base.',
            icon: <FaGraduationCap />,
        },
        {
            title: 'BAC STI2D',
            subtitle: 'Lycée Saint-Exupéry',
            location: 'Saint-Genis-Pouilly, France',
            date: '2022-06',
            duration: '2 ans',
            description: "Formation complète en Systèmes d'Informations Numériques.",
            icon: <FaGraduationCap />,
        },
        {
            title: 'BTS SIO',
            subtitle: 'Lycée Simone Weil',
            location: 'Saint-Étienne, France',
            date: '2023-09',
            duration: '2 ans',
            description: 'Formation complète en Solutions Logicielles et Applications Métiers.',
            icon: <FaGraduationCap />,
        },
    ];

    const data = filter === 'all' ? [...experiences, ...diplomas] : filter === 'experiences' ? experiences : diplomas;

    return (
        <div>
            <Header />
            <main className="container mx-auto px-4 py-10" style={{ paddingTop: '4.5rem' }}>
                <h2 className="text-4xl font-bold mb-10 text-center text-blue-700">Mon Parcours</h2>

                {/* Filter Menu */}
                <div className="flex justify-center space-x-4 mb-10">
                    <button
                        className={`px-6 py-3 rounded-full font-semibold shadow transition ${
                            filter === 'all' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-200 hover:bg-gray-300'
                        }`}
                        onClick={() => setFilter('all')}
                    >
                        Tout
                    </button>
                    <button
                        className={`px-6 py-3 rounded-full font-semibold shadow transition ${
                            filter === 'experiences' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-200 hover:bg-gray-300'
                        }`}
                        onClick={() => setFilter('experiences')}
                    >
                        Expériences
                    </button>
                    <button
                        className={`px-6 py-3 rounded-full font-semibold shadow transition ${
                            filter === 'diplomas' ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-200 hover:bg-gray-300'
                        }`}
                        onClick={() => setFilter('diplomas')}
                    >
                        Diplômes
                    </button>
                </div>

                {/* Grid Display */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center border border-gray-200"
                        >
                            <div className="bg-blue-600 h-16 w-16 rounded-full flex items-center justify-center text-white text-2xl mb-4">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-blue-600 mb-2">{item.title}</h3>
                            {item.subtitle && <p className="text-gray-500 mb-1">🏢 {item.subtitle}</p>}
                            {item.location && <p className="text-gray-500 mb-1">📍 {item.location}</p>}
                            <p className="text-gray-700">📅 {item.date}</p>
                            {item.duration && <p className="text-gray-500">⏳ Durée : {item.duration}</p>}
                            <p className="text-gray-600 mt-2">{item.description}</p>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
