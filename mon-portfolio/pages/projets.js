import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Profil() {
    return (
        <div>
            <Header />
            <main className="container mx-auto px-4 py-10" style={{ paddingTop: "4.5rem" }}>
                <h2 className="text-3xl font-bold mb-10 text-center">Profil Personnel</h2>

                {/* Section principale : Grid pour afficher les cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Card : Présentation personnelle */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-2xl font-bold mb-4">Présentation</h3>
                        <p className="text-gray-700">
                            Je suis Killian Biondo, passionné par l'informatique mais surtout le développement web, avec une grande envie de découvrir et d'apprendre en continu.
                            Actuellement étudiant en BTS SIO, j'ai pour objectif de développer ce portfolio.
                        </p>
                    </div>

                    {/* Card : Compétences */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-2xl font-bold mb-4">Compétences</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <img src="/images/html.png" alt="HTML5" className="w-8 h-8 mr-3" />
                                <span>HTML5 - Maîtrise des balises sémantiques</span>
                            </li>
                            <li className="flex items-center">
                                <img src="/images/css.png" alt="CSS3" className="w-8 h-8 mr-3" />
                                <span>CSS3 - Styling, Flexbox, Grid</span>
                            </li>
                            <li className="flex items-center">
                                <img src="/images/javascript.jpg" alt="JavaScript" className="w-8 h-8 mr-3" />
                                <span>JavaScript - Dynamique et interactif</span>
                            </li>
                            <li className="flex items-center">
                                <img src="/images/react.png" alt="React" className="w-8 h-8 mr-3" />
                                <span>React - Création de composants réutilisables</span>
                            </li>
                            <li className="flex items-center">
                                <img src="/images/symfony.png" alt="Symfony" className="w-8 h-8 mr-3" />
                                <span>Symfony - Framework de PHP</span>
                            </li>
                        </ul>
                    </div>

                    {/* Card : Parcours scolaire */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-2xl font-bold mb-4">Parcours Scolaire</h3>
                        <ul className="space-y-4">
                            <li>
                                <h4 className="font-semibold">2023 - Présent</h4>
                                <p>Étudiant(e) en BTS SIO option SLAM au Lycée Simone Weil à Saint-Priest-en-Jarez</p>
                            </li>
                            <li>
                                <h4 className="font-semibold">2019 - 2022</h4>
                                <p>Baccalauréat STI2D au lycée Saint-Exupéry à Valserhone</p>
                            </li>
                            <li>
                                <h4 className="font-semibold">Avant 2019</h4>
                                <p>Le brevet des collèges au collège Jacques Prevert à Saint-Genis-Pouilly</p>
                            </li>
                        </ul>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
}
