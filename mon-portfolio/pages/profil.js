import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';

export default function Profil() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <Head>
                <title>Profil — Killian Biondo</title>
                <meta
                    name="description"
                    content="Profil, compétences, certifications et centres d’intérêt de Killian Biondo."
                />
            </Head>
            <Header />
            <main className="container mx-auto max-w-6xl px-6 pb-20 pt-28 lg:px-10">
                <header className="mb-12 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
                        Qui suis-je ?
                    </p>
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                        Mon profil
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
                        Mon parcours, mes compétences et les sujets qui me motivent.
                    </p>
                </header>

                {/* Section principale : Grid pour afficher les cards */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Toutes les cards ont une hauteur minimale fixe */}
                    {/* Card : Présentation personnelle */}
                    <div className="flex h-full min-h-[360px] flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
                        <h2 className="mb-6 text-xl font-semibold text-blue-700">Présentation</h2>
                        <p className="flex-grow leading-relaxed text-slate-700">
                            Je m'appelle Killian Biondo, passionné par l'informatique et plus particulièrement par le
                            développement web. Animé par une soif constante d'apprentissage et de découverte, je suis
                            actuellement étudiant en Bachelor Information Science. Mon objectif principal est de perfectionner mes compétences
                            et de développer ce portfolio pour refléter mon évolution et mes réalisations dans le domaine.
                        </p>
                    </div>

                    {/* Card : Compétences */}
                    <div className="flex h-full min-h-[360px] flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
                        <h2 className="mb-6 text-xl font-semibold text-blue-700">Compétences</h2>
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
                            <li className="flex items-center">
                                <img src="/images/php.svg" alt="PHP" className="w-8 h-8 mr-4" />
                                <span>PHP - Développement côté serveur</span>
                            </li>
                            <li className="flex items-center">
                                <img src="/images/mysql.svg" alt="MySQL" className="w-8 h-8 mr-4" />
                                <span>SQL / MySQL - Gestion de bases de données</span>
                            </li>
                        </ul>
                    </div>

                    {/* Card : Timeline */}
                    <div className="flex h-full min-h-[360px] flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
                        <h2 className="mb-6 text-xl font-semibold text-blue-700">Timeline</h2>
                        <ul className="border-l-4 border-blue-600 pl-4 space-y-5 flex-grow">
                            <li>
                                <h4 className="font-medium text-lg">2026 - maitenant</h4>
                                <p>Étudiant en Bachelor Information Science à l'HES-SO</p>
                            </li>
                            <li>
                                <h4 className="font-medium text-lg">2023 - 2025</h4>
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
                    <div className="flex h-full min-h-[360px] flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
                        <h2 className="mb-6 text-xl font-semibold text-blue-700">Certifications</h2>
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
                    <div className="flex h-full min-h-[360px] flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
                        <h2 className="mb-6 text-xl font-semibold text-blue-700">Centres d'intérêt</h2>
                        <ul className="list-disc pl-5 space-y-3 flex-grow">
                            <li>Lecture : Livres de science-fiction et policiers</li>
                            <li>Sports : football, Formule 1, basket</li>
                            <li>Jouer aux jeux vidéos</li>
                        </ul>
                    </div>

                    {/* Card : WorldSkills */}
                    <div className="flex h-full min-h-[360px] flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
                        <h2 className="mb-6 text-xl font-semibold text-blue-700">WorldSkills</h2>
                        <p className="flex-grow leading-relaxed text-slate-700">
                            J'ai participé au concours régional des <span className="font-semibold">WorldSkills 2024 </span>
                            dans la catégorie <span className="font-semibold">Web Technologies</span>. Je suis fier d'avoir
                            terminé à la <span className="font-semibold">3ème place</span>, une expérience enrichissante qui
                            m'a permis de mettre en pratique mes compétences dans un environnement compétitif.
                        </p>
                    </div>
                </div>

                {/* Section pour le bouton de téléchargement du CV */}
                <div className="mt-10 flex justify-center">
                    <a href="/documents/killian.pdf" download className="rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200">
                        Télécharger mon CV
                    </a>
                </div>
            </main>
            <Footer />
        </div>
    );
}
