import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ProjectCard from './components/ProjectCard';
import About from './components/About';
import GallerySection from './components/GallerySection';
import AdUnit from './components/AdUnit';
import { projects, latestStories } from './data/projects';

function App() {
  return (
    <Router>
      <div className="app">
        {/* Navigation Header */}
        <nav className="navbar">
          <div className="nav-content">
            <h1 className="nav-logo">OurWorld</h1>
            <div className="nav-links">
              <Link to="/" className="nav-link mobile-hide">Home</Link>
              <Link to="/collections" className="nav-link"><span className="mobile-hide">My </span>Collections</Link>
              <Link to="/about" className="nav-link">About</Link>
            </div>
            <img src="/avatar.jpg" alt="Profile" className="nav-avatar" />
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <p>&copy; 2026 Nepaliboy.com — Ravi Dhungel. Stories on Nepal travel, Himalayan trekking, medical device cybersecurity, photography, immigration, and San Diego life.</p>
            <p className="footer-meta">Last updated: October 2026 | San Diego</p>
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
              <a href="https://iloveimmigration.blog/" target="_blank" rel="noopener noreferrer" className="footer-link">
                I Love Immigration
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

// Home Page
function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Nepaliboy.com — Stories from Nepal to San Diego</h1>
          <p className="hero-sub">From the Foothills of the Himalayas to the Coast of California</p>
          <div className="hero-intro">
            <p>
              I&apos;m Ravi Dhungel, a cybersecurity and safety engineer working in the medical device
              industry in San Diego, California. I was born and raised in Nepal, in the foothills of
              the Himalayas, and my journey — through war, education, immigration, and eventually to
              the United States — shaped everything I write about here.
            </p>
            <p>
              Nepaliboy.com is my corner of the internet: a collection of the things I love.
              You&apos;ll find travel stories from high-altitude treks like Everest Base Camp and
              Mount Kilimanjaro, practical writing on medical device security and safety, photography
              from my adventures across continents, reflections on immigration and the student-visa
              journey, and notes on soccer culture in San Diego.
            </p>
            <p>
              Everything here is written from personal experience — the trails I&apos;ve hiked, the
              systems I&apos;ve helped secure, the photos I&apos;ve taken, and the road I traveled
              from Nepal to America. I hope something here is useful, interesting, or at least worth
              your time.
            </p>
          </div>
        </div>
      </section>

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

      <section className="stories-section">
        <div className="section-header">
          <h2 className="section-title">Latest Stories</h2>
          <p className="section-subtitle">
            Recent writing from the travel blog — hikes, treks, and trail notes
          </p>
        </div>
        <div className="stories-grid">
          {latestStories.map((story, index) => (
            <a
              key={index}
              href={story.url}
              target="_blank"
              rel="noopener noreferrer"
              className="story-card"
            >
              <h3 className="story-title">{story.title}</h3>
              <p className="story-description">{story.description}</p>
              <span className="story-link">Read the story →</span>
            </a>
          ))}
        </div>
      </section>

      <section className="about-teaser">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
        </div>
        <p className="about-teaser-text">
          I grew up in Nepal during a difficult decade of conflict, earned my education against long
          odds, and eventually immigrated to the United States — a story I tell in full in my memoir,{' '}
          <em>The Hope</em>. Today I work as a cybersecurity and safety engineer focused on medical
          devices, and I spend my free time hiking, photographing, and following San Diego soccer.{' '}
          <Link to="/about" className="about-teaser-link">Read more about me →</Link>
        </p>
      </section>

      <AdUnit slot="home-top-ad" />
    </>
  );
}

// Collections Page
function CollectionsPage() {
  return (
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

      <AdUnit slot="collections-top-ad" />
    </section>
  );
}

// About Page
function AboutPage() {
  return <About />;
}

// Gallery Page
function GalleryPage() {
  return <GallerySection />;
}

export default App;
