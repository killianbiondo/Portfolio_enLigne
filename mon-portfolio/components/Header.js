// components/Header.js
import Link from 'next/link';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-70 text-white py-4 z-50">
            <nav className="container mx-auto flex justify-between items-center px-4">
                <h1 className="text-2xl font-bold">Mon Portfolio</h1>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/" className="hover:text-blue-400 transition">
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link href="/profil" className="hover:text-blue-400 transition">
                            Profil
                        </Link>
                    </li>
                    <li>
                        <Link href="/parcours" className="hover:text-blue-400 transition">
                            Parcours
                        </Link>
                    </li>
                    <li>
                        <Link href="/projets" className="hover:text-blue-400 transition">
                            Projets
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-blue-400 transition">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
