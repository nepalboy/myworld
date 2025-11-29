import './ProjectCard.css';

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    url: string;
    icon: string;
    image?: string;
}

const ProjectCard = ({ title, description, tags, url, icon, image }: ProjectCardProps) => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="project-card">
            {image && (
                <div className="card-image-container">
                    <img src={image} alt={title} className="card-image" />
                    <div className="card-image-overlay"></div>
                </div>
            )}
            <div className="card-content">
                <div className="card-header">
                    <span className="card-icon">{icon}</span>
                    <h3 className="card-title">{title}</h3>
                </div>
                <p className="card-description">{description}</p>
                <div className="card-tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="tag">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="card-footer">
                    <span className="visit-link">
                        Visit Project
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                    </span>
                </div>
            </div>
        </a>
    );
};

export default ProjectCard;
