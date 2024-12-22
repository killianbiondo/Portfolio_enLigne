// components/ProjectCard.js
export default function ProjectCard({ title, description, link }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, index) => (
                <div
                    key={index}
                    className={`bg-white shadow-lg rounded-lg p-6 transition-opacity duration-700 ease-in-out opacity-0 animate-slideIn`}
                    style={{animationDelay: `${index * 0.3}s`}}
                >
                    <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                    <p className="text-gray-700">{card.content}</p>
                </div>
            ))}
        </div>
    );
}
