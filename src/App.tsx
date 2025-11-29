import './App.css';
import ProjectCard from './components/ProjectCard';

function App() {
  const projects = [
    {
      title: 'Traversing With Time',
      description: 'A personal travel blog featuring adventures from around the world. Explore stories from concerts, high-altitude hikes, and diverse cultural experiences across continents.',
      tags: ['Travel', 'Blog', 'Adventures', 'Photography'],
      url: 'https://nepalboy.github.io/Travelnew/#/',
      icon: '🌍',
      image: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXcOdgrNratZDgXqn6MfCsMopcCNVsJOISnfijo7MV1IMK6OFXACj32egHGEjj9xZbeKN0soMPUliFG9n47Q733WHO-55ARytS0rJ7HiHwyo50QkUXVrVanNl90Uxp81FyG8KK3LbA?key=RG9KWpZ8wPjWWIcXoGdZIEc4'
    },
    {
      title: 'MedicSec',
      description: 'A comprehensive platform for building safe and secure medical devices. Integrating processes, people, and technologies to ensure the highest standards of medical device security and safety.',
      tags: ['Medical Devices', 'Security', 'Healthcare', 'Platform'],
      url: 'https://www.medicsec.com/',
      icon: '🔒',
      image: '/medicsec-preview.png'
    }
  ];

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>MyWorld</h1>
          <p className="hero-tagline">
            Welcome, thank you for being here and being part of my journey
          </p>
          <a href="#projects" className="hero-cta">
            Explore My Projects
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            A showcase of my passions - from exploring the world to securing healthcare
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              url={project.url}
              icon={project.icon}
              image={project.image}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 MyWorld. Built with passion and code.</p>
          <div className="footer-links">
            <a href="https://nepalboy.github.io/Travelnew/#/" target="_blank" rel="noopener noreferrer" className="footer-link">
              Travel Blog
            </a>
            <a href="https://www.medicsec.com/" target="_blank" rel="noopener noreferrer" className="footer-link">
              MedicSec
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
