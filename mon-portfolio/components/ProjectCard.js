
export default function ProjectCard({ title, description, image }) {
    return (
        <div className="border rounded-lg overflow-hidden shadow-lg">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-700">{description}</p>
            </div>
        </div>
    );
}
