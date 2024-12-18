import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/informatique-bg.jpg')" }}>
            <Header />
            <main className="container mx-auto px-4 py-20 text-center text-white">
                <h1 className="text-5xl font-bold mb-6 drop-shadow-md">
                    Bienvenue dans Mon Univers Informatique
                </h1>
                <p className="text-xl mb-10 drop-shadow-md">
                    Découvrez mon parcours, mes compétences et mes projets dans le domaine du développement web.
                </p>
                <a
                    href="/profil"
                    className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300">
                    En savoir plus
                </a>
            </main>
            <Footer />
        </div>
    );
}
