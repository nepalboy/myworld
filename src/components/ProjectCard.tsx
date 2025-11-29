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
            </div>
        </a>
    );
};

export default ProjectCard;
