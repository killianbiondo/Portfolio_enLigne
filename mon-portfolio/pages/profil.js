import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Profil() {
    return (
        <div>
            <Header />
            <main className="container mx-auto px-4 py-10" style={{ paddingTop: "4.5rem" }}>
                <h2 className="text-3xl font-bold mb-10 text-center animate-fadeInUp">
                    Profil Personnel
                </h2>

                {/* Section principale : Grid pour afficher les cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Toutes les cards ont une hauteur minimale fixe */}
                    {/* Card : Présentation personnelle */}
                    <div className="bg-white shadow-md rounded-lg p-8 hover:shadow-xl transition min-h-[400px] h-full flex flex-col">
                        <h3 className="text-xl font-semibold mb-6 text-blue-700">Présentation</h3>
                        <p className="text-gray-700 leading-relaxed flex-grow">
                            Je m'appelle Killian Biondo, passionné par l'informatique et plus particulièrement par le
                            développement web. Animé par une soif constante d'apprentissage et de découverte, je suis
                            actuellement étudiant en BTS SIO. Mon objectif principal est de perfectionner mes compétences
                            et de développer ce portfolio pour refléter mon évolution et mes réalisations dans le domaine.
                        </p>
                    </div>

                    {/* Card : Compétences */}
                    <div className="bg-white shadow-md rounded-lg p-8 hover:shadow-xl transition min-h-[400px] h-full flex flex-col">
                        <h3 className="text-xl font-semibold mb-6 text-blue-700">Compétences</h3>
                        <ul className="space-y-4 flex-grow">
                            <li className="flex items-center">
                                <img src="/images/html.png" alt="HTML5" className="w-8 h-8 mr-4" />
                                <span>HTML5 - Maîtrise des balises sémantiques</span>
                            </li>
                            <li className="flex items-center">
                                <img src="/images/css.png" alt="CSS3" className="w-8 h-8 mr-4" />
                                <span>CSS3 - Styling, Flexbox, Grid</span>
                            </li>
                            <li className="flex items-center">
                                <img src="/images/javascript.jpg" alt="JavaScript" className="w-8 h-8 mr-4" />
                                <span>JavaScript - Dynamique et interactif</span>
                            </li>
                            <li className="flex items-center">
                                <img src="/images/react.png" alt="React" className="w-8 h-8 mr-4" />
                                <span>React - Création de composants réutilisables</span>
                            </li>
                            <li className="flex items-center">
                                <img src="/images/symfony.png" alt="Symfony" className="w-8 h-8 mr-4" />
                                <span>Symfony - Framework de PHP</span>
                            </li>
                        </ul>
                    </div>

                    {/* Card : Timeline */}
                    <div className="bg-white shadow-md rounded-lg p-8 hover:shadow-xl transition min-h-[400px] h-full flex flex-col">
                        <h3 className="text-xl font-semibold mb-6 text-blue-700">Timeline</h3>
                        <ul className="border-l-4 border-blue-600 pl-4 space-y-5 flex-grow">
                            <li>
                                <h4 className="font-medium text-lg">2023 - Présent</h4>
                                <p>Étudiant en BTS SIO option SLAM au Lycée Simone Weil</p>
                            </li>
                            <li>
                                <h4 className="font-medium text-lg">2019 - 2022</h4>
                                <p>Baccalauréat STI2D option SIN au Lycée Saint-Exupéry</p>
                            </li>
                            <li>
                                <h4 className="font-medium text-lg">Avant 2019</h4>
                                <p>Brevet des Collèges au Collège Jacques Prévert</p>
                            </li>
                        </ul>
                    </div>

                    {/* Card : Certifications */}
                    <div className="bg-white shadow-md rounded-lg p-8 hover:shadow-xl transition min-h-[400px] h-full flex flex-col">
                        <h3 className="text-xl font-semibold mb-6 text-blue-700">Certifications</h3>
                        <ul className="space-y-4 flex-grow">
                            <li>
                                <h4 className="font-medium text-lg">Certification : Le Mooc de l'ANSSI</h4>
                                <p>Formation sur l'ANSSI et ses missions <a href="https://secnumacademie.gouv.fr/"
                                                                            className="text-blue-600 hover:underline">Voir
                                    la certification</a></p>
                            </li>
                            <li>
                                <h4 className="font-medium text-lg">Certification : Symfony 7</h4>
                                <p>Formation sur le framework de PHP, Symfony version 7. <a
                                    href="https://certification.symfony.com/exams/symfony.html"
                                    className="text-blue-600 hover:underline">Voir la certification</a></p>
                            </li>
                            <li>
                                <h4 className="font-medium text-lg">Certification : Firebase</h4>
                                <p>Formation sur Firebase Google, mise en place d'une application. <a
                                    href="https://firebase.google.com/" className="text-blue-600 hover:underline">Voir
                                    la certification</a></p>
                            </li>
                            <li>
                                <h4 className="font-medium text-lg">Certification : Vigipirate</h4>
                                <p>Formation sur Vigipirate, permet de comprendre ce dispositif. <a
                                    href="https://vigipirate.gouv.fr/" className="text-blue-600 hover:underline">Voir
                                    la certification</a></p>
                            </li>
                        </ul>
                    </div>

                    {/* Section combinée : Centres d'intérêt + WorldSkills */}
                    <div className="bg-white shadow-md rounded-lg p-8 hover:shadow-xl transition min-h-[400px] h-full flex flex-col">
                        <h3 className="text-xl font-semibold mb-6 text-blue-700">Centres d'intérêt</h3>
                        <ul className="list-disc pl-5 space-y-3 flex-grow">
                            <li>Lecture : Livres de science-fiction et policiers</li>
                            <li>Sports : football, Formule 1, basket</li>
                            <li>Jouer aux jeux vidéos</li>
                        </ul>
                    </div>

                    {/* Card : WorldSkills */}
                    <div className="bg-white shadow-md rounded-lg p-8 hover:shadow-xl transition min-h-[400px] h-full flex flex-col">
                        <h3 className="text-xl font-semibold mb-6 text-blue-700">WorldSkills</h3>
                        <p className="text-gray-700 leading-relaxed flex-grow">
                            J'ai participé au concours régional des <span className="font-semibold">WorldSkills 2024 </span>
                            dans la catégorie <span className="font-semibold">Web Technologies</span>. Je suis fier d'avoir
                            terminé à la <span className="font-semibold">3ème place</span>, une expérience enrichissante qui
                            m'a permis de mettre en pratique mes compétences dans un environnement compétitif.
                        </p>
                    </div>
                </div>

                {/* Section pour le bouton de téléchargement du CV */}
                <div className="flex justify-center mt-10">
                    <a href="/documents/killian.pdf" download className="bg-blue-600 text-white py-3 px-8 rounded-lg shadow-lg text-lg hover:bg-blue-800 transition">
                        Télécharger mon CV
                    </a>
                </div>
            </main>
            <Footer />
        </div>
    );
}
