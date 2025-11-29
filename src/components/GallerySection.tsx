import { useState } from 'react';
import './GallerySection.css';

type Category = 'All' | 'Food' | 'Places' | 'Activities';

interface GalleryItem {
    id: number;
    src: string;
    category: Category;
    title: string;
}

const GallerySection = () => {
    const [activeCategory, setActiveCategory] = useState<Category>('All');

    const galleryItems: GalleryItem[] = [
        // Real Photos (Places/History)
        { id: 1, src: '/images/CA_deathvalley_1883-1889.jpg', category: 'Places', title: 'Death Valley (1883-1889)' },
        { id: 2, src: '/images/LA_Griffithobs1950.jpg', category: 'Places', title: 'Griffith Observatory (1950)' },
        { id: 3, src: '/images/Nepal_Trolleybus_Tripureswore_1985.jpg', category: 'Places', title: 'Tripureswore Trolleybus (1985)' },
        { id: 4, src: '/images/Nepal_dudhpati_bhaktapur_1963.jpg', category: 'Places', title: 'Bhaktapur (1963)' },
        { id: 5, src: '/images/SanDiego_LittleItaly_1932.jpg', category: 'Places', title: 'Little Italy, SD (1932)' },
        { id: 6, src: '/images/coronado1905.jpg', category: 'Places', title: 'Coronado (1905)' },
        { id: 7, src: '/images/sandiego_downtown_1910.jpg', category: 'Places', title: 'Downtown SD (1910)' },
        { id: 8, src: '/images/sandiego_oldtown_1874.jpg', category: 'Places', title: 'Old Town SD (1874)' },
        { id: 9, src: '/images/sandiego_pointloma_1931.jpg', category: 'Places', title: 'Point Loma (1931)' },
    ];

    const filteredItems = activeCategory === 'All'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeCategory);

    return (
        <section id="gallery" className="gallery-section">
            <div className="section-header">
                <h2 className="section-title">Picture Speaks</h2>
                <p className="section-subtitle">Moments frozen in time - Places and History</p>
            </div>

            <div className="category-tabs">
                {(['All', 'Places'] as Category[]).map((category) => (
                    <button
                        key={category}
                        className={`tab-btn ${activeCategory === category ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="gallery-grid">
                {filteredItems.map((item) => (
                    <div key={item.id} className="gallery-item">
                        <img src={item.src} alt={item.title} loading="lazy" />
                        <div className="item-overlay">
                            <span className="item-category">{item.category}</span>
                            <h3 className="item-title">{item.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default GallerySection;
