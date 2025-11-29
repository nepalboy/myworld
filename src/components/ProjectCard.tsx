import './ProjectCard.css';

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    url: string;
    icon: string;
}

const ProjectCard = ({ title, description, tags, url, icon }: ProjectCardProps) => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="project-card">
            <div className="card-icon">{icon}</div>
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            <div className="card-tags">
                {tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                ))}
            </div>
            <div className="card-footer">
                <span className="visit-link">
                    Visit Project
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </span>
            </div>
        </a>
    );
};

export default ProjectCard;
