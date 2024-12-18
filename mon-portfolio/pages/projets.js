// pages/projets.js
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

export default function Projets() {
    return (
        <div>
            <Header />
            <main className="container mx-auto px-4 py-10">
                <h2 className="text-3xl font-bold mb-6 text-center">Mes Projets</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ProjectCard
                        title="Mon premier site web"
                        description="Description de votre projet."
                        link="http://www.biondokillian.fr/"
                    />

                    <ProjectCard
                        title="Mon jeu Pong"
                        description="Description de votre projet."
                        image="/images/projet2.jpg"
                    />
                </div>
            </main>
            <Footer />
        </div>
    );
}
