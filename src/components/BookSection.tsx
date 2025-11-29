import './BookSection.css';

const BookSection = () => {
    return (
        <section id="mybook" className="book-section">
            <div className="section-header">
                <h2 className="section-title">My Book</h2>
                <p className="section-subtitle">Sharing my story and experiences</p>
            </div>

            <div className="book-container">
                <div className="book-cover-wrapper">
                    <img
                        src="/book-cover.png"
                        alt="The Hope: A memoir from the Foothills of the Himalayas"
                        className="book-cover"
                    />
                    <div className="book-glow"></div>
                </div>

                <div className="book-content">
                    <h3 className="book-title">The Hope</h3>
                    <h4 className="book-subtitle">A memoir from the Foothills of the Himalayas, from Nepal to the United States of America</h4>

                    <div className="book-description">
                        <p>
                            The story of war, mood disorder, education, immigration, and hopes.
                        </p>
                        <p>
                            Ravi Dhungel is a former Major in the Nepalese Army, having served for more than eight years until 2010.
                            Having grown up in a middle-class family in Katunje, Nepal, Ravi focused on immigration, mood disorders,
                            military experience, the civil war, emerging technologies, and cyber security.
                        </p>
                        <p>
                            This experience taught him a lot about the problems faced by students migrating from third-world countries
                            to first-world countries in pursuit of education. Moreover, the duality of war—external and internal—taught
                            Ravi more about humanity and introspection than anything else.
                        </p>
                    </div>

                    <a
                        href="https://www.amazon.com/Hope-Foothills-Himalayas-education-immigration/dp/1801287775"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="book-cta"
                    >
                        Get it on Amazon
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default BookSection;
