import Link from 'next/link';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-4 z-50 shadow-lg">
            <nav className="container mx-auto flex justify-between items-center px-6 lg:px-10">
                {/* Logo ou Nom */}
                <h1 className="text-2xl font-extrabold tracking-wide text-blue-400">
                    <Link href="/">Mon Portfolio</Link>
                </h1>

                {/* Menu Navigation */}
                <ul className="hidden md:flex space-x-6">
                    {[
                        { name: "Accueil", path: "/" },
                        { name: "Profil", path: "/profil" },
                        { name: "Parcours", path: "/parcours" },
                        { name: "Projets", path: "/projets" },
                        { name: "Contact", path: "/contact" },
                    ].map((link, index) => (
                        <li key={index} className="group">
                            <Link
                                href={link.path}
                                className="relative font-semibold text-white transition duration-300"
                            >
                                {link.name}
                                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Menu mobile */}
                <div className="md:hidden flex items-center">
                    <button className="text-blue-400 focus:outline-none">
                        <svg
                            className="w-8 h-8"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    );
}
