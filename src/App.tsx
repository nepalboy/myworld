import './App.css';
import ProjectCard from './components/ProjectCard';
import About from './components/About';

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
      tags: ['Medical Devices', 'Security', 'Safety', 'Risk Management'],
      url: 'https://www.medicsec.com/',
      icon: '🔒',
      image: '/medicsec-preview.png'
    },
    {
      title: 'Picture Speaks',
      description: 'A curated collection of moments frozen in time. Explore 40+ photos from my adventures - from the peaks of Kilimanjaro to the streets of Nepal, featuring food, places, and thrilling activities.',
      tags: ['Photography', 'Gallery', 'Travel', 'Memories'],
      url: 'https://nepalboy.github.io/myworld/',
      icon: '📸',
      image: '/images/Nepal_Trolleybus_Tripureswore_1985.jpg'
    },
    {
      title: 'The Hope',
      description: 'A memoir from the Foothills of the Himalayas. The story of war, mood disorder, education, immigration, and hopes - from Nepal to the United States of America.',
      tags: ['Book', 'Memoir', 'Nepal', 'Immigration'],
      url: 'https://www.amazon.com/Hope-Foothills-Himalayas-education-immigration/dp/1801287775',
      icon: '📖',
      image: '/book-cover.jpg'
    }
  ];

  return (
    <div className="app">
      {/* Navigation Header */}
      <nav className="navbar">
        <div className="nav-content">
          <h1 className="nav-logo">OurWorld</h1>
          <div className="nav-links">
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#about" className="nav-link">About</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2 className="hero-title">Welcome</h2>
          <p className="hero-tagline">
            Thank you for being here and being part of my journey
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-header">
          <h2 className="section-title">My Collections</h2>
          <p className="section-subtitle">
            A showcase of my passions - travel, security, photography, and storytelling
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

      {/* About Section */}
      <About />

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
            <a href="https://www.amazon.com/Hope-Foothills-Himalayas-education-immigration/dp/1801287775" target="_blank" rel="noopener noreferrer" className="footer-link">
              The Hope
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
