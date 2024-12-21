// pages/contact.js
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
    return (
        <div>
            <Header />
            <main className="container mx-auto px-4 py-10 text-center">
                <h2 className="text-3xl font-bold mb-6">Contactez-moi</h2>
                <p>
                    Vous pouvez me contacter par email à : <a href="mailto:biondo.killian@gmail.com" className="text-blue-500">votre@email.com</a>
                </p>
            </main>
            <Footer />
        </div>
    );
}
