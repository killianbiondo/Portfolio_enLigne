import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState(null); // Statut de la requête pour les retours utilisateur

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            if (response.ok) {
                setStatus({ success: true, message: 'Votre message a été envoyé avec succès !' });
                setFormData({ name: '', email: '', message: '' }); // Réinitialisation des champs
            } else {
                setStatus({ success: false, message: result.message || 'Une erreur est survenue.' });
            }
        } catch (error) {
            console.error('Error submitting the form:', error);
            setStatus({ success: false, message: 'Erreur de connexion au serveur.' });
        }
    };

    return (
        <div>
            <Header />
            <main className="container mx-auto px-4 py-10" style={{ paddingTop: '4.5rem' }}>
                {/* En-tête */}
                <div className="text-center mb-10">
                    <FaPaperPlane className="text-blue-500 text-6xl mx-auto mb-4 animate-bounce" />
                    <h2 className="text-4xl font-extrabold text-blue-600 mb-4">
                        Contactez-moi
                    </h2>
                    <p className="text-lg text-gray-700">
                        Je suis disponible pour discuter de vos projets ou répondre à vos questions. N'hésitez pas à m'envoyer un message !
                    </p>
                </div>

                {/* Formulaire */}
                <form
                    onSubmit={handleSubmit}
                    className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8 animate-fadeInUp"
                >
                    {/* Nom */}
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-600">
                            Nom
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
                            placeholder="Votre Nom"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
                            placeholder="Votre Email"
                            required
                        />
                    </div>

                    {/* Message */}
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-600">
                            Message
                        </label>
                        <textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
                            rows="6"
                            placeholder="Votre Message"
                            required
                        ></textarea>
                    </div>

                    {/* Bouton d'envoi */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-md transition duration-300"
                    >
                        Envoyer
                    </button>

                    {/* Message de statut */}
                    {status && (
                        <p
                            className={`mt-4 text-center font-medium ${
                                status.success ? 'text-green-500' : 'text-red-500'
                            }`}
                        >
                            {status.message}
                        </p>
                    )}
                </form>
            </main>
            <Footer />
        </div>
    );
}
