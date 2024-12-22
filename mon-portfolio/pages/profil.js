import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Profil() {
    return (
        <div>
            <Header />
            <main className="container mx-auto px-4 py-10" style={{paddingTop: "4.5rem"}}>
                <h2 className="text-3xl font-bold mb-10 text-center animate-fadeInUp">
                    Profil Personnel
                </h2>

                {/* Section principale : Grid pour afficher les cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Card : Présentation personnelle */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-2xl font-bold mb-4">Présentation</h3>
                        <p className="text-gray-700">
                            Je suis Killian Biondo, passionné par l'informatique mais surtout le développement web, avec
                            une grande envie de découvrir et d'apprendre en continu.
                            Actuellement étudiant en BTS SIO, j'ai pour objectif de développer ce portfolio.
                        </p>
                    </div>

                    {/* Card : Compétences */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-2xl font-bold mb-4">Compétences</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <img src="/images/html.png" alt="HTML5" className="w-8 h-8 mr-3"/>
                                <span>HTML5 - Maîtrise des balises sémantiques</span>
                            </li>
                            <li className="flex items-center">
                                <img src="/images/css.png" alt="CSS3" className="w-8 h-8 mr-3"/>
                                <span>CSS3 - Styling, Flexbox, Grid</span>
                            </li>
                            <li className="flex items-center">
                                <img src="/images/javascript.jpg" alt="JavaScript" className="w-8 h-8 mr-3"/>
                                <span>JavaScript - Dynamique et interactif</span>
                            </li>
                            <li className="flex items-center">
                                <img src="/images/react.png" alt="React" className="w-8 h-8 mr-3"/>
                                <span>React - Création de composants réutilisables</span>
                            </li>
                            <li className="flex items-center">
                                <img src="/images/symfony.png" alt="React" className="w-8 h-8 mr-3"/>
                                <span>Symfony - Framework de PHP</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-2xl font-bold mb-4">Timeline</h3>
                        <ul className="border-l-4 border-blue-600 pl-4">
                            <li className="mb-4">
                                <h4 className="font-semibold">2023 - Présent</h4>
                                <p>Étudiant(e) en BTS SIO option SLAM au Lycée Simone Weil</p>
                            </li>
                            <li className="mb-4">
                                <h4 className="font-semibold">2019 - 2022</h4>
                                <p>Baccalauréat STI2D au Lycée Saint-Exupéry</p>
                            </li>
                            <li>
                                <h4 className="font-semibold">Avant 2019</h4>
                                <p>Brevet des Collèges au Collège Jacques Prévert</p>
                            </li>
                        </ul>
                    </div>


                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-2xl font-bold mb-4">Certifications</h3>
                        <ul className="space-y-4">
                            <li>
                                <h4 className="font-semibold">Certification : Le Mooc de l'ANSSI</h4>
                                <p>Formation sur l'ANSSI et ses missions <a
                                    href="https://certification-link.com" className="text-blue-600 hover:underline">Voir
                                    la certification</a></p>
                            </li>
                            <li>
                                <h4 className="font-semibold">Certification : Symfony 7</h4>
                                <p>Formation sur le framework de PHP, symfony version 7. <a
                                    href="https://certification-link.com" className="text-blue-600 hover:underline">Voir
                                    la certification</a></p>
                            </li>

                        </ul>
                    </div>


                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-2xl font-bold mb-4">Centres d'intérêt</h3>
                        <ul className="space-y-2">
                            <li>Jouer aux jeux vidéos</li>
                            <li>Sports : football, formule 1,basket</li>
                            <li>Lecture : Livres de science-fiction et policier</li>
                        </ul>
                    </div>

                    <a href="/documents/killian.pdf" download
                       className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-800 transition duration-300">
                        Télécharger mon CV
                    </a>

                </div>
            </main>
            <Footer/>
        </div>
    );
}
