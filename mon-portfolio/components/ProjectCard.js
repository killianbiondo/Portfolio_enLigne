// components/ProjectCard.js
export default function ProjectCard({ title, description, link }) {
    return (
        <div className="border rounded-lg shadow-lg p-6 bg-white">
            {/* Lien cliquable */}
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:text-blue-700 block mb-4 text-lg font-bold"
            >
                {title}
            </a>
            {/* Description */}
            <p className="text-gray-700">{description}</p>
        </div>
    );
}
