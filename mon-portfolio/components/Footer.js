import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-6">
            <div className="container mx-auto text-center">
                {/* Texte de copyright */}
                <p className="mb-4">&copy; {new Date().getFullYear()} Killian. Tous droits réservés.</p>

                {/* Icônes des réseaux sociaux */}
                <div className="flex justify-center space-x-6">
                    {/* GitHub */}
                    <a
                        href="https://github.com/killianbiondo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-transform transform hover:scale-110"
                    >
                        <FaGithub className="text-2xl" />
                        <span className="sr-only">GitHub</span>
                    </a>
                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/killian-biondo-33103a2a0/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-500 transition-transform transform hover:scale-110"
                    >
                        <FaLinkedin className="text-2xl" />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}
