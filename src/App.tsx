import './App.css';
import ProjectCard from './components/ProjectCard';
import BookSection from './components/BookSection';
import GallerySection from './components/GallerySection';

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
          <h1>OurWorld</h1>
          <p className="hero-tagline">
            Welcome, thank you for being here and being part of my journey
          </p>
          <div className="hero-actions">
            <a href="#projects" className="hero-cta">
              Projects
            </a>
            <a href="#mybook" className="hero-cta secondary">
              My Book
            </a>
            <a href="#pictures" className="hero-cta secondary">
              Gallery
            </a>
          </div>
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

      {/* Book Section */}
      <BookSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 OurWorld. Built with passion and code.</p>
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
