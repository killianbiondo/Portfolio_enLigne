import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaCode, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export default function Projet() {
    const projects = [
        {
            title: 'Mon premier site web',
            description: 'Un site web sur la photographie pour premier site web mis en ligne.',
            technologies: ['HTML', 'CSS', 'Javascript'],
            github: 'https://github.com/killianbiondo/Site_Web',
            live: 'https://www.biondokillian.fr/',
        },
        {
            title: 'Petit jeu Pong',
            description: 'Un jeu interactif et ludique conçu afin de maîtriser et de perfectionner vos compétences en JavaScript.',
            technologies: ['HTML', 'Javascript', 'CSS'],
            github: 'https://github.com/killianbiondo/Pong_P5',
            live: '/documents/pong.zip',
            image: '/images/pong.png',
        },
        {
            title: 'Application Symfony',
            description: 'Une petite application qui gère la gestion de congés avec une base de données qui lui est relié.',
            technologies: ['PHP', 'HTML', 'CSS'],
            github: 'https://github.com/killianbiondo/Gestion_Conges_Status',
            live: '/documents/gestion_congés_status.zip',
        },
        {
            title: 'Application Full-Stack',
            description: 'Une page web avec des composants utilisant React pour le front-end et Node.js pour le back-end.',
            technologies: ['React', 'Node.js', 'Express', 'PHPMyAdmin'],
            github: 'https://github.com/killianbiondo/APIJson',
            live: '/documents/ApiJson.zip',
            challenges: 'Je suis en train  de développer une application qui récupère une API publique pour afficher les articles.',
        },

        {
            title: 'Mes certifications',
            description: 'Toutes mes certifications et formations durant ma carrière en tant que développeur web.',
            technologies: ['Symfony', 'Firebase', 'CNIL','ANSSI','Vigipirate'],
            live: '/documents/certifications.pdf',
        },
    ];

    return (
        <div>
            <Header />
            <main className="container mx-auto px-4 py-10" style={{ paddingTop: '4.5rem' }}>
                {/* En-tête */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-extrabold text-blue-600 mb-4">
                        Mes réalisations
                    </h2>
                    <p className="text-lg text-gray-700">
                        Voici une sélection de mes projets réalisés, mettant en avant mes compétences en développement web.
                    </p>
                </div>

                {/* Liste des projets */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            {project.image ? (
                                <img src={project.image} alt="" className="h-48 w-full bg-slate-100 object-cover" />
                            ) : (
                                <div className="flex h-48 items-center justify-center bg-gradient-to-br from-blue-100 via-indigo-100 to-slate-200">
                                    <FaCode className="text-5xl text-blue-700/70" aria-hidden="true" />
                                </div>
                            )}
                            <div className="p-6">
                                <h3 className="mb-3 text-xl font-semibold text-slate-900">{project.title}</h3>
                                <p className="mb-4 text-slate-600">{project.description}</p>
                                <h4 className="mb-2 text-sm font-semibold text-slate-600">
                                    Technologies utilisées :
                                </h4>
                                <ul className="mb-5 flex flex-wrap gap-2">
                                    {project.technologies.map((tech, techIndex) => (
                                        <li
                                            key={techIndex}
                                            className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-800"
                                        >
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            <div className="mt-4 flex flex-wrap items-center gap-5">
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
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-sm font-medium text-blue-700 hover:text-blue-900"
                                >
                                    <FaExternalLinkAlt className="mr-2" aria-hidden="true" />
                                    Voir le projet
                                </a>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
