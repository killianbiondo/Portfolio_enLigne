import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

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
            description: 'Un jeu sympathique pour apprendre et progresser en JavaScript.',
            technologies: ['HTML', 'Javascript', 'CSS'],
            github: 'https://github.com/killianbiondo/Pong_P5',
            live: 'document/pong.zip',
        },
        {
            title: 'Mes certifications',
            description: 'Toutes mes certifications et formations durant ma carrière en tant que développeur web.',
            technologies: ['Symfony', 'Firebase', 'CNIL'],
            live: 'https://ecommerce-store-example.com',
        },
    ];

    return (
        <div>
            <Header />
            <main className="container mx-auto px-4 py-10" style={{ paddingTop: '4.5rem' }}>
                {/* En-tête */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-extrabold text-blue-600 mb-4">
                        Mes Projets
                    </h2>
                    <p className="text-lg text-gray-700">
                        Voici une sélection de mes projets, mettant en avant mes compétences en développement web.
                    </p>
                </div>

                {/* Liste des projets */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 animate-fadeIn"
                        >
                            <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                                {project.title}
                            </h3>
                            <p className="text-gray-700 mb-4">{project.description}</p>
                            <div className="mb-4">
                                <h4 className="text-sm font-semibold text-gray-600 mb-2">
                                    Technologies utilisées :
                                </h4>
                                <ul className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, techIndex) => (
                                        <li
                                            key={techIndex}
                                            className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded"
                                        >
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-700 text-sm font-medium flex items-center"
                                >
                                    <FaGithub className="mr-2" />
                                    Code source
                                </a>
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-700 text-sm font-medium flex items-center"
                                >
                                    <FaExternalLinkAlt className="mr-2" />
                                    Voir le projet
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
