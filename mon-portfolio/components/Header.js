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
                <h1 className="text-2xl font-extrabold tracking-wide text-blue-400">
                    <Link href="/">Mon Portfolio</Link>
                </h1>

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




                {/* Menu Mobile Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMobileMenu}
                        className="text-blue-400 focus:outline-none"
                    >
                        {isMobileMenuOpen ? (
                            <FaTimes className="text-2xl" />
                        ) : (
                            <FaBars className="text-2xl" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Menu Mobile - Dynamique */}
            {isMobileMenuOpen && (
                <div className="bg-gray-800 md:hidden fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-6 z-40">
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
                </div>
            )}
        </header>
    );
}
