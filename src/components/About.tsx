import AdUnit from './AdUnit';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <div className="about-header">
                    <img
                        src="/profile-photo.jpg"
                        alt="Ravi Dhungel"
                        className="profile-photo"
                    />
                    <div className="about-intro">
                        <h2 className="about-name">Ravi Dhungel</h2>
                        <p className="about-title">Cybersecurity Leader | Medical Device Security Expert</p>
                        <p className="about-location">📍 San Diego, California, United States</p>
                    </div>
                </div>

                <div className="about-content">
                    <h3>About</h3>
                    <p>
                        Seasoned cybersecurity professional with extensive experience in medical device security,
                        risk management, and regulatory compliance. Former Major in the Nepalese Army with a unique
                        blend of military discipline and technical expertise.
                    </p>
                    <p>
                        Passionate about building safe and secure medical devices, integrating processes, people,
                        and technologies to ensure the highest standards of patient safety and data protection.
                    </p>

                    <h3>Experience</h3>
                    <div className="experience-item">
                        <h4>Cybersecurity Leader - Medical Device Security</h4>
                        <p className="company">BD (Becton, Dickinson and Company)</p>
                        <p className="duration">Current Position</p>
                    </div>

                    <div className="experience-item">
                        <h4>Former Major</h4>
                        <p className="company">Nepalese Army</p>
                        <p className="duration">8+ years of service</p>
                    </div>

                    <AdUnit slot="about-page-ad" />

                    <div className="about-links">
                        <a
                            href="https://www.linkedin.com/in/ravidhungel/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="linkedin-btn"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            View LinkedIn Profile
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
