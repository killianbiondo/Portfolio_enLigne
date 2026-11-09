import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';

function SectionTransition({ fill }) {
    return (
        <svg
            aria-hidden="true"
            className={`pointer-events-none absolute inset-x-0 bottom-0 h-14 w-full md:h-20 ${fill}`}
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
        >
            <path d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1350,40 1440,28 L1440,80 L0,80 Z" />
        </svg>
    );
}

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
            <main className="pt-20">
                <section className="relative isolate overflow-hidden bg-slate-950 text-white">
                    <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/60 via-slate-950 to-slate-950" />
                    <header className="container mx-auto max-w-6xl px-6 py-16 text-center md:py-20 lg:px-10">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-300">
                            Qui suis-je ?
                        </p>
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                            Mon profil
                        </h1>
                        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">
                            Mon parcours, mes compétences et les sujets qui me motivent.
                        </p>
                    </header>
                    <SectionTransition fill="fill-slate-50" />
                </section>

                <section className="relative bg-slate-50">
                    <div className="container mx-auto max-w-6xl px-6 pb-32 pt-14 lg:px-10">
                {/* Section principale : Grid pour afficher les cards */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Toutes les cards ont une hauteur minimale fixe */}
                    {/* Card : Présentation personnelle */}
                    <div className="flex h-full min-h-[360px] flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
                        <h2 className="mb-6 text-xl font-semibold text-blue-700">Présentation</h2>
                        <ul className="flex-grow list-disc space-y-3 pl-5 leading-relaxed marker:text-blue-600 text-slate-700">
                            <li>Killian Biondo, passionné par l’informatique et le développement web.</li>
                            <li>Étudiant en Bachelor Information Science.</li>
                            <li>J’apprends en réalisant des projets concrets et en mettant mes compétences en pratique.</li>
                        </ul>
                    </div>

                    {/* Card : Compétences */}
                    <div className="flex h-full min-h-[360px] flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
                        <h2 className="mb-6 text-xl font-semibold text-blue-700">Compétences</h2>
                        <p className="mb-5 leading-relaxed text-slate-600">
                            Technologies mises en pratique dans mes projets :
                        </p>
                        <ul className="space-y-4 flex-grow">
                            <li className="flex items-center">
                                <img src="/images/html.png" alt="HTML5" className="w-8 h-8 mr-4" />
                                <span>HTML — structure de pages web</span>
                            </li>
                            <li className="flex items-center">
                                <img src="/images/css.png" alt="CSS3" className="w-8 h-8 mr-4" />
                                <span>CSS — mise en page et styles</span>
                            </li>
                            <li className="flex items-center">
                                <img src="/images/javascript.jpg" alt="JavaScript" className="w-8 h-8 mr-4" />
                                <span>JavaScript — interactions et logique</span>
                            </li>
                            <li className="flex items-center">
                                <img src="/images/react.png" alt="React" className="w-8 h-8 mr-4" />
                                <span>React — interfaces à base de composants</span>
                            </li>
                            <li className="flex items-center">
                                <img src="/images/symfony.png" alt="Symfony" className="w-8 h-8 mr-4" />
                                <span>Symfony — framework PHP</span>
                            </li>
                            <li className="flex items-center">
                                <img src="/images/php.svg" alt="PHP" className="w-8 h-8 mr-4" />
                                <span>PHP — développement web côté serveur</span>
                            </li>
                            <li className="flex items-center">
                                <img src="/images/mysql.svg" alt="MySQL" className="w-8 h-8 mr-4" />
                                <span>SQL / MySQL — bases de données</span>
                            </li>
                        </ul>
                    </div>

                    {/* Card : Timeline */}
                    <div className="flex h-full min-h-[360px] flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
                        <h2 className="mb-6 text-xl font-semibold text-blue-700">Formation</h2>
                        <ul className="border-l-4 border-blue-600 pl-4 space-y-5 flex-grow">
                            <li>
                                <h4 className="font-medium text-lg">Depuis septembre 2026</h4>
                                <p>Étudiant en Bachelor Information Science à l'HES-SO</p>
                            </li>
                            <li>
                                <h4 className="font-medium text-lg">2023 - 2025</h4>
                                <p>Étudiant en BTS SIO option SLAM au Lycée Simone Weil</p>
                            </li>
                            <li>
                                <h4 className="font-medium text-lg">2019 - 2022</h4>
                                <p>Baccalauréat STI2D, option SIN, au Lycée Saint-Exupéry</p>
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
                    </div>
                    <SectionTransition fill="fill-white" />
                </section>

                {/* Section pour le bouton de téléchargement du CV */}
                <section className="bg-white">
                    <div className="container mx-auto max-w-6xl px-6 py-10 lg:px-10">
                        <div className="flex justify-center">
                            <a href="/documents/killian.pdf" download className="rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200">
                                Télécharger mon CV
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
