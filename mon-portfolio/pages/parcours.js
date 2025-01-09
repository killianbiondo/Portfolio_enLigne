import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

export default function Parcours() {
    const [filter, setFilter] = useState('all');
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);

    const experiences = [
        {
            title: 'Technicien polyvalent',
            subtitle: 'Centre Technique Municipal',
            location: 'Saint-Genis-Pouilly, France',
            date: '2021-07',
            duration: '1 mois',
            description: "J'ai pu m'occuper de l'entretien de ma ville.",
            missions: ['Entretien des espaces publics', 'Réparations techniques'],
            skills: ['Organisation', 'Travail en équipe'],
            icon: <FaBriefcase />,
        },
        {
            title: 'Hôte de caisse',
            subtitle: 'Migros',
            location: 'Thoiry, France',
            date: '2022-07',
            duration: '1 mois',
            description: "Collaboration avec mes supérieurs pour développer des stratégies visant à renforcer la fidélisation de la clientèle.",
            missions: ['Gestion des transactions', 'Accueil des clients','Mise en rayon'],
            skills: ['Relation client', 'Gestion du stress','Travail en équipe'],
            icon: <FaBriefcase />,
        },
        {
            title: 'Conseiller de vente',
            subtitle: 'Botanic',
            location: 'Saint-Genis-Pouilly, France',
            date: '2023-04',
            duration: '6 mois',
            description: "J'ai assuré la mise en rayon des produits tout en contribuant activement aux activités de vente.",
            missions: ['Mise en rayon', 'Assistance client'],
            skills: ['Gestion de stock', 'Relation client','Travail en équipe'],
            icon: <FaBriefcase />,
        },
        {
            title: 'Stagiaire informatique',
            subtitle: 'Safran Aerosystems',
            location: 'Roche-la-Molière, France',
            date: '2024-05',
            duration: '1 mois',
            description: "J'ai refait l'architecture d'un site web collaboratif.",
            missions: ['Reconstruction d’un site web', 'Collaboration avec les équipes techniques'],
            skills: ['Développement web', 'Gestion de projet'],
            icon: <FaBriefcase />,
        },
        {
            title: 'Conseiller de vente',
            subtitle: 'Kiabi',
            location: 'Thoiry, France',
            date: '2024-07',
            duration: '1 mois',
            description: "J'ai assuré la mise en rayon des produits tout en contribuant activement aux activités de vente.",
            missions: ['Mise en rayon', 'Gestion des stocks'],
            skills: ['Service client', 'Organisation','Travail en équipe'],
            icon: <FaBriefcase />,
        },
    ];

    const diplomas = [
        {
            title: 'Brevet des collèges',
            subtitle: 'Collège Jacques Prévert',
            location: 'Saint-Genis-Pouilly, France',
            date: '2019-06',
            duration: null,
            description: 'Formation de base.',
            missions: null,
            skills: ['Bases générales'],
            icon: <FaGraduationCap />,
        },
        {
            title: 'BAC STI2D',
            subtitle: 'Lycée Saint-Exupéry',
            location: 'Saint-Genis-Pouilly, France',
            date: '2022-06',
            duration: '2 ans',
            description: 'Formation complète en Systèmes d\'Informations Numériques.',
            missions: ['Projets techniques', 'Initiation à la programmation'],
            skills: ['Analyse', 'Résolution de problèmes'],
            icon: <FaGraduationCap />,
        },
        {
            title: 'BTS SIO',
            subtitle: 'Lycée Simone Weil',
            location: 'Saint-Étienne, France',
            date: '2023-09',
            duration: '2 ans',
            description: 'Formation complète en Solutions Logicielles et Applications Métiers.',
            missions: ['Développement web', 'Gestion de bases de données'],
            skills: ['Programmation', 'Gestion de projets informatiques'],
            icon: <FaGraduationCap />,
        },
    ];

    const sortedData = [...experiences, ...diplomas].sort((a, b) => new Date(a.date) - new Date(b.date));
    const filteredData = filter === 'all' ? sortedData : filter === 'experiences' ? experiences : diplomas;

    return (
        <div>
            <Header />
            <main className="container mx-auto px-4 py-10" style={{ paddingTop: '4.5rem' }}>
                <h2 className="text-4xl font-bold mb-10 text-center text-blue-700 animate-fadeInUp">Mon Parcours</h2>

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

                {/* Timeline */}
                <div className="relative flex justify-center py-10">
                    <div className="relative flex items-center space-x-16">
                        {filteredData.map((item, index) => (
                            <div
                                key={index}
                                className="group relative flex flex-col items-center cursor-pointer"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                onClick={() => setSelectedItem(item)}
                            >
                                <div className="bg-blue-600 h-16 w-16 rounded-full flex items-center justify-center text-white text-2xl group-hover:bg-blue-800 transition">
                                    {item.icon}
                                </div>
                                <p className="text-sm font-semibold mt-2 group-hover:text-blue-700">{item.date}</p>
                                <p className="text-gray-700 group-hover:text-gray-900">{item.title}</p>

                                {/* Hovered Card */}
                                {hoveredIndex === index && (
                                    <div className="absolute top-20 w-72 p-4 bg-white border rounded-lg shadow-lg text-left z-10">
                                        <h4 className="text-lg font-bold text-blue-600">{item.title}</h4>
                                        {item.subtitle && <p className="text-gray-500">🏢 {item.subtitle}</p>}
                                        {item.location && <p className="text-gray-500">📍 {item.location}</p>}
                                        <p className="text-gray-700 mt-2">{item.description}</p>
                                    </div>
                                )}

                                {/* Connector */}
                                {index < filteredData.length - 1 && (
                                    <div className="absolute top-8 left-full w-20 h-1 bg-gray-300"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Detailed Card */}
                {selectedItem && (
                    <div className="mt-10 p-6 bg-white border rounded-lg shadow-lg max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold text-blue-600">{selectedItem.title}</h3>
                        {selectedItem.subtitle && <p className="text-gray-500">🏢 {selectedItem.subtitle}</p>}
                        {selectedItem.location && <p className="text-gray-500">📍 {selectedItem.location}</p>}
                        <p className="text-gray-700 mt-2">📅 {selectedItem.date}</p>
                        {selectedItem.duration && <p className="text-gray-500">⏳ Durée : {selectedItem.duration}</p>}
                        <p className="mt-4">{selectedItem.description}</p>
                        {selectedItem.missions && (
                            <>
                                <h4 className="mt-6 text-lg font-semibold">Missions :</h4>
                                <ul className="list-disc ml-6 text-gray-700">
                                    {selectedItem.missions.map((mission, index) => (
                                        <li key={index}>{mission}</li>
                                    ))}
                                </ul>
                            </>
                        )}
                        {selectedItem.skills && (
                            <>
                                <h4 className="mt-6 text-lg font-semibold">Compétences développées :</h4>
                                <ul className="list-disc ml-6 text-gray-700">
                                    {selectedItem.skills.map((skill, index) => (
                                        <li key={index}>{skill}</li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}
