import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const links = [
        { name: 'Accueil', path: '/' },
        { name: 'Profil', path: '/profil' },
        { name: 'Parcours', path: '/parcours' },
        { name: 'Projets', path: '/projets' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-4 z-50 shadow-lg">
            <nav className="container mx-auto flex justify-between items-center px-6 lg:px-10">
                {/* Logo ou Nom */}
                <p className="text-2xl font-extrabold tracking-wide text-blue-400">
                    <Link href="/">Mon Portfolio</Link>
                </p>

                {/* Menu Navigation - Desktop */}
                <ul className="hidden md:flex space-x-8">
                    {links.map((link, index) => (
                        <li key={index} className="group relative">
                            <Link
                                href={link.path}
                                className="font-semibold text-white transition duration-300"
                            >
                                {link.name}
                                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        </li>
                    ))}
                </ul>

                <a
                    href="/documents/killian.pdf"
                    download
                    className="hidden rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white transition hover:bg-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-300/40 md:inline-flex"
                >
                    Télécharger mon CV
                </a>

                {/* Menu Mobile Toggle */}
                <div className="md:hidden">
                    <button
                        type="button"
                        onClick={toggleMobileMenu}
                        aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mobile-navigation"
                        className="relative z-50 rounded p-2 text-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-300/40"
                    >
                        {isMobileMenuOpen ? (
                            <FaTimes className="text-2xl" aria-hidden="true" />
                        ) : (
                            <FaBars className="text-2xl" aria-hidden="true" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Menu Mobile - Dynamique */}
            {isMobileMenuOpen && (
                <div id="mobile-navigation" className="bg-gray-800 md:hidden fixed inset-0 flex flex-col items-center justify-center space-y-6 z-40">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.path}
                            className="text-xl font-semibold text-white hover:text-blue-400 transition duration-300"
                            onClick={() => setIsMobileMenuOpen(false)} // Ferme le menu après un clic
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="/documents/killian.pdf"
                        download
                        className="rounded-lg bg-blue-500 px-5 py-3 text-lg font-semibold text-white transition hover:bg-blue-400"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Télécharger mon CV
                    </a>
                </div>
            )}
        </header>
    );
}
