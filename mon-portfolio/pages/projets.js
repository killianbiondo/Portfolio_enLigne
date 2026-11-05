import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';
import { FaDownload, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export default function Projet() {
    const projects = [
        {
            title: 'Site de photographie',
            description: 'Mon premier site web mis en ligne, consacré à la photographie.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            image: '/images/projet-photographie.svg',
            imageAlt: 'Illustration d’un appareil photo devant un paysage ensoleillé',
            github: 'https://github.com/killianbiondo/Site_Web',
            live: 'https://www.biondokillian.fr/',
            liveLabel: 'Voir le site',
        },
        {
            title: 'Petit jeu Pong',
            description: 'Un jeu de réflexe développé en JavaScript : la raquette suit la souris pour garder la balle en jeu.',
            technologies: ['HTML', 'JavaScript', 'CSS'],
            github: 'https://github.com/killianbiondo/Pong_P5',
            live: '/documents/pong.zip',
            liveLabel: 'Télécharger le jeu',
            image: '/images/pong.png',
            imageAlt: 'Aperçu du jeu Pong',
            highlight: 'Le jeu affiche un score et propose un bouton pour relancer une partie.',
        },
        {
            title: 'Application Symfony',
            description: 'Une application de gestion des congés connectée à une base de données MariaDB.',
            technologies: ['Symfony', 'PHP', 'HTML', 'CSS'],
            image: '/images/projet-gestion-conges.svg',
            imageAlt: 'Illustration d’une interface de gestion des congés avec un calendrier',
            github: 'https://github.com/killianbiondo/Gestion_Conges_Status',
            live: '/documents/gestion_congés_status.zip',
            liveLabel: 'Télécharger le projet',
            highlight: 'Environnement conteneurisé avec Docker Compose, Nginx, PHP et MariaDB.',
        },
        {
            title: 'Application de consultation d’API',
            description: 'Une interface React pour consulter des informations sur des pays et rechercher des articles par identifiant.',
            technologies: ['React', 'JavaScript', 'API REST'],
            image: '/images/projet-api.svg',
            imageAlt: 'Illustration d’un globe et d’une interface listant des données issues d’une API',
            github: 'https://github.com/killianbiondo/APIJson',
            live: '/documents/ApiJson.zip',
            liveLabel: 'Télécharger le projet',
            highlight: 'Affiche notamment la capitale et les langues d’un pays sélectionné.',
        },
    ];

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <Head>
                <title>Projets — Killian Biondo</title>
                <meta
                    name="description"
                    content="Découvrez les projets web de Killian Biondo, leurs technologies et les liens vers leur code source ou leur téléchargement."
                />
            </Head>
            <Header />
            <main className="container mx-auto max-w-6xl px-6 pb-20 pt-28 lg:px-10">
                <header className="mb-12 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
                        Projets personnels
                    </p>
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                        Mes réalisations
                    </h1>
                    <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
                        Des projets personnels réalisés pour pratiquer le développement web, du site statique aux applications qui consomment des API.
                    </p>
                </header>

                <section aria-label="Projets" className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {projects.map((project) => (
                        <article
                            key={project.title}
                            className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            <img
                                src={project.image}
                                alt={project.imageAlt}
                                className="h-48 w-full bg-slate-100 object-cover"
                            />
                            <div className="flex flex-1 flex-col p-6">
                                <h2 className="mb-3 text-xl font-semibold text-slate-900">{project.title}</h2>
                                <p className="mb-4 leading-relaxed text-slate-600">{project.description}</p>
                                {project.highlight && (
                                    <p className="mb-4 rounded-lg bg-slate-50 px-4 py-3 text-sm leading-relaxed text-slate-700">
                                        <span className="font-semibold text-slate-900">À retenir : </span>
                                        {project.highlight}
                                    </p>
                                )}
                                <h4 className="mb-2 text-sm font-semibold text-slate-600">
                                    Technologies utilisées :
                                </h4>
                                <ul className="mb-5 flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <li
                                            key={tech}
                                            className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-800"
                                        >
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-auto flex flex-wrap items-center gap-5 pt-5">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-sm font-medium text-blue-700 hover:text-blue-900"
                                        >
                                            <FaGithub className="mr-2" aria-hidden="true" />
                                            Code source
                                        </a>
                                    )}
                                    <a
                                        href={project.live}
                                        target={project.live.startsWith('http') ? '_blank' : undefined}
                                        rel={project.live.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        download={project.live.startsWith('/documents/')}
                                        className="flex items-center text-sm font-medium text-blue-700 hover:text-blue-900"
                                    >
                                        {project.live.startsWith('/documents/') ? (
                                            <FaDownload className="mr-2" aria-hidden="true" />
                                        ) : (
                                            <FaExternalLinkAlt className="mr-2" aria-hidden="true" />
                                        )}
                                        {project.liveLabel}
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </section>

                <section aria-labelledby="certifications-title" className="mt-16 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-8">
                    <div>
                        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
                            Document complémentaire
                        </p>
                        <h2 id="certifications-title" className="text-2xl font-bold text-slate-900">
                            Certifications et formations
                        </h2>
                        <p className="mt-2 max-w-2xl leading-relaxed text-slate-600">
                            Consultez le dossier regroupant les certifications et formations présentées dans mon profil.
                        </p>
                    </div>
                    <a
                        href="/documents/certifications.pdf"
                        download
                        className="mt-6 inline-flex shrink-0 items-center justify-center rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 sm:mt-0"
                    >
                        <FaDownload className="mr-2" aria-hidden="true" />
                        Télécharger le dossier
                    </a>
                </section>
            </main>
            <Footer />
        </div>
    );
}
