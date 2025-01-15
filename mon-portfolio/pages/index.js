import Header from '../components/Header';
import Footer from '../components/Footer';
import Particles from "react-tsparticles";

export default function Home() {
    return (
        <div className="relative min-h-screen flex flex-col">
            {/* Effet Particles */}
            <Particles
                className="absolute inset-0 -z-10"
                options={{
                    particles: {
                        number: { value: 50 },
                        size: { value: 3 },
                        move: { speed: 1 },
                        line_linked: { enable: true, opacity: 0.2 },
                    },
                }}
            />

            {/* Fond avec dégradé superposé */}
            <div
                className="relative flex-1 bg-cover bg-center"
                style={{
                    backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/informatique-bg.jpg')",
                }}
            >
                <Header />
                <main className="container mx-auto px-4 py-20 text-center text-white" style={{ paddingTop: "4.5rem", paddingBottom: "4rem" }}>
                    {/* Titre principal avec animation */}
                    <h1 className="text-5xl font-bold mb-6 drop-shadow-[0_0_10px_rgba(0,0,255,0.5)] animate-slideIn">
                        Bienvenue dans Mon Univers Informatique
                    </h1>

                    {/* Description avec une légère animation */}
                    <p className="text-xl mb-10 drop-shadow-md animate-fadeIn">
                        Découvrez mon parcours, mes compétences et mes projets dans le domaine du développement web.
                    </p>

                    {/* Citation stylisée */}
                    <blockquote className="italic text-gray-300 text-lg mb-10 drop-shadow-md animate-fadeIn delay-1s">
                        "L'informatique n'est pas seulement une science, c'est un art de résoudre des problèmes avec élégance et simplicité."
                    </blockquote>

                    {/* Bouton interactif */}
                    <a
                        href="/profil"
                        className="relative inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg overflow-hidden group hover:bg-blue-800 transition duration-300">
                        <span className="absolute inset-0 w-full h-full bg-blue-800 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                        <span className="relative">En savoir plus</span>
                    </a>

                    {/* Section de cartes */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-slideUp">
                        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 transform hover:scale-105">
                            <h3 className="text-2xl font-bold mb-4 text-blue-600">
                                <i className="fas fa-laptop-code mr-2"></i> Compétences
                            </h3>
                            <p className="text-gray-700">
                                Développement Web, React, Symfony, et bien plus encore.
                            </p>
                            <a
                                href="/profil"
                                className="mt-4 inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-800 transition duration-300">
                                Voir plus
                            </a>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 transform hover:scale-105">
                            <h3 className="text-2xl font-bold mb-4 text-purple-600">
                                <i className="fas fa-graduation-cap mr-2"></i> Parcours
                            </h3>
                            <p className="text-gray-700">
                                Étudiant en BTS SIO, passionné par la programmation et les nouvelles technologies.
                            </p>
                            <a
                                href="/parcours"
                                className="mt-4 inline-block bg-purple-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-purple-800 transition duration-300">
                                Voir plus
                            </a>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 transform hover:scale-105">
                            <h3 className="text-2xl font-bold mb-4 text-pink-600">
                                <i className="fas fa-project-diagram mr-2"></i> Projets
                            </h3>
                            <p className="text-gray-700">
                                Découvrez mes réalisations et mes travaux personnels.
                            </p>
                            <a
                                href="/projets"
                                className="mt-4 inline-block bg-pink-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-pink-800 transition duration-300">
                                Voir plus
                            </a>
                        </div>
                    </div>

                    {/* Section de statistiques */}
                    <div className="bg-gray-100 py-10 mt-20 relative overflow-hidden">
                        <svg
                            className="absolute bottom-full left-0 w-full transform translate-y-[1px]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1440 320"
                        >
                            <path fill="#f3f4f6" fillOpacity="1" d="M0,96L1440,160L1440,320L0,320Z"></path>
                        </svg>
                        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div>
                                <h3 className="text-4xl font-bold text-blue-600">3+</h3>
                                <p className="text-gray-700">Projets Réalisés</p>
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold text-purple-600">2 Ans</h3>
                                <p className="text-gray-700">Expérience dans le Développement web</p>
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold text-pink-600">100%</h3>
                                <p className="text-gray-700">Passion pour le Web</p>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action (CTA) */}
                    <div className="bg-gradient-to-r from-blue-600 to-purple-500 text-white text-center py-10 mt-20 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-bold mb-4">Prêt à collaborer ?</h2>
                        <p className="mb-6">Contactez-moi dès maintenant pour discuter de vos projets.</p>
                        <a
                            href="/contact"
                            className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                            Contactez-moi
                        </a>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
}
