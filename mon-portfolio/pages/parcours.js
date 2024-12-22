// pages/parcours.js
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Parcours() {
    return (
        <div>
            <Header />
            <main className="container mx-auto px-4 py-10" style={{ paddingTop: "4.5rem" }}>
                <h2 className="text-3xl font-bold mb-10 text-center animate-fadeInUp">Mon Parcours</h2>

                {/* Section des Expériences Professionnelles */}
                <section className="mb-16">
                    <h3 className="text-2xl font-bold mb-6">Expériences Professionnelles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Exemple d'Expérience */}
                        <div className="border rounded-lg shadow-lg p-6 bg-white">
                            <h4 className="text-xl font-bold mb-2">Technicien polyvalent</h4>
                            <p className="text-gray-600 mb-1">🏢 Centre Technique Muncipal</p>
                            <p className="text-gray-600 mb-1">📍 Saint-Genis-Pouilly, France</p>
                            <p className="text-gray-600 mb-1">📅 Juillet 2021 - Aout 2021</p>
                            <p className="text-gray-700">
                                J'ai pu m'occuper de l'entretien de ma ville: les esopaces verts, les ordures,
                                l'éléctricité..
                            </p>
                        </div>

                        {/* Ajoute d'autres expériences ici */}
                        <div className="border rounded-lg shadow-lg p-6 bg-white">
                            <h4 className="text-xl font-bold mb-2"> Hote de caisse</h4>
                            <p className="text-gray-600 mb-1">🏢 Migros</p>
                            <p className="text-gray-600 mb-1">📍 Thoiry, France</p>
                            <p className="text-gray-600 mb-1">📅 Juillet 2022 - Aout 2022</p>
                            <p className="text-gray-700">
                                J'ai aidé mes supérieurs pour fidéliser la clientèle.
                            </p>
                        </div>

                        {/* Exemple d'Expérience */}
                        <div className="border rounded-lg shadow-lg p-6 bg-white">
                            <h4 className="text-xl font-bold mb-2">Conseiller de vente</h4>
                            <p className="text-gray-600 mb-1">🏢 Botanic</p>
                            <p className="text-gray-600 mb-1">📍 Saint-Genis-Pouilly, France</p>
                            <p className="text-gray-600 mb-1">📅 Avril 2023 - Aout 2023</p>
                            <p className="text-gray-700">
                                J'ai fait de la mise en rayon et aussi de la vente dans différents rayons du magasin.
                            </p>
                        </div>

                        {/* Exemple d'Expérience */}
                        <div className="border rounded-lg shadow-lg p-6 bg-white">
                            <h4 className="text-xl font-bold mb-2">Stagiaire informatique</h4>
                            <p className="text-gray-600 mb-1">🏢 Safran Aerosystems</p>
                            <p className="text-gray-600 mb-1">📍 Roche-la-Molière, France</p>
                            <p className="text-gray-600 mb-1">📅 Mai 2024 - Juin 2024</p>
                            <p className="text-gray-700">
                                J'ai refait l'architecture d'un site web collanoratif (SharePoint).
                            </p>
                        </div>

                        {/* Exemple d'Expérience */}
                        <div className="border rounded-lg shadow-lg p-6 bg-white">
                            <h4 className="text-xl font-bold mb-2">Conseiller de vente</h4>
                            <p className="text-gray-600 mb-1">🏢 Kiabi</p>
                            <p className="text-gray-600 mb-1">📍 Thoiry, France</p>
                            <p className="text-gray-600 mb-1">📅 Juillet 2024 - Aout 2024</p>
                            <p className="text-gray-700">
                                J'ai fait de la mise en rayon et aussi de la vente dans différents rayons du magasin.
                            </p>
                        </div>

                    </div>
                </section>

                {/* Section des Diplômes */}
                <section>
                    <h3 className="text-2xl font-bold mb-6">Diplômes</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Exemple de Diplôme */}
                        <div className="border rounded-lg shadow-lg p-6 bg-white">
                            <h4 className="text-xl font-bold mb-2">Brevet des collèges</h4>
                            <p className="text-gray-600 mb-1">📍 Collège Jacques Prévert</p>
                            <p className="text-gray-600 mb-1">📅 2015 - 2019</p>
                            <p className="text-gray-700">
                                Formation de base.
                            </p>
                        </div>
                        {/* Ajoute d'autres diplômes ici */}
                        <div className="border rounded-lg shadow-lg p-6 bg-white">
                            <h4 className="text-xl font-bold mb-2">BAC STI2D</h4>
                            <p className="text-gray-600 mb-1">📍 Collège Saint-Exupéry</p>
                            <p className="text-gray-600 mb-1">📅 2019 - 2022</p>
                            <p className="text-gray-700">
                                Formation complète en Systèmes d'Informations Numériques.
                            </p>
                        </div>

                        {/* Ajoute d'autres diplômes ici */}
                        <div className="border rounded-lg shadow-lg p-6 bg-white">
                            <h4 className="text-xl font-bold mb-2">BTS SIO</h4>
                            <p className="text-gray-600 mb-1">📍 Collège Simone Weil</p>
                            <p className="text-gray-600 mb-1">📅 2023 - présent</p>
                            <p className="text-gray-700">
                                Formation complète en Solutions Logicielles et Applications Métiers.
                            </p>
                        </div>

                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
