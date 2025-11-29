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

    // Hybrid Image Data: Real Photos + Unsplash Placeholders
    const galleryItems: GalleryItem[] = [
        // --- Real Photos (Places/History) ---
        { id: 1, src: '/images/CA_deathvalley_1883-1889.jpg', category: 'Places', title: 'Death Valley (1883-1889)' },
        { id: 2, src: '/images/LA_Griffithobs1950.jpg', category: 'Places', title: 'Griffith Observatory (1950)' },
        { id: 3, src: '/images/Nepal_Trolleybus_Tripureswore_1985.jpg', category: 'Places', title: 'Tripureswore Trolleybus (1985)' },
        { id: 4, src: '/images/Nepal_dudhpati_bhaktapur_1963.jpg', category: 'Places', title: 'Bhaktapur (1963)' },
        { id: 5, src: '/images/SanDiego_LittleItaly_1932.jpg', category: 'Places', title: 'Little Italy, SD (1932)' },
        { id: 6, src: '/images/coronado1905.jpg', category: 'Places', title: 'Coronado (1905)' },
        { id: 7, src: '/images/sandiego_downtown_1910.jpg', category: 'Places', title: 'Downtown SD (1910)' },
        { id: 8, src: '/images/sandiego_oldtown_1874.jpg', category: 'Places', title: 'Old Town SD (1874)' },
        { id: 9, src: '/images/sandiego_pointloma_1931.jpg', category: 'Places', title: 'Point Loma (1931)' },

        // --- Unsplash Placeholders (Places - Mountains) ---
        { id: 10, src: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80', category: 'Places', title: 'Everest Base Camp' },
        { id: 11, src: 'https://images.unsplash.com/photo-1585016495481-91613a3ab1bc?auto=format&fit=crop&w=800&q=80', category: 'Places', title: 'Mardi Himal Trek' },
        { id: 12, src: 'https://images.unsplash.com/photo-1623492701902-47d33d7d963c?auto=format&fit=crop&w=800&q=80', category: 'Places', title: 'Kalapathar View' },
        { id: 13, src: 'https://images.unsplash.com/photo-1650630728005-72e7962157d6?auto=format&fit=crop&w=800&q=80', category: 'Places', title: 'Kilimanjaro Summit' },
        { id: 14, src: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80', category: 'Places', title: 'Himalayan Range' },
        { id: 15, src: 'https://images.unsplash.com/photo-1486911278844-a81c5267e227?auto=format&fit=crop&w=800&q=80', category: 'Places', title: 'Sunset at Peaks' },

        // --- Unsplash Placeholders (Food) ---
        { id: 20, src: 'https://images.unsplash.com/photo-1626804475297-411d863b5285?auto=format&fit=crop&w=800&q=80', category: 'Food', title: 'Traditional Momos' },
        { id: 21, src: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80', category: 'Food', title: 'Dal Bhat Power' },
        { id: 22, src: 'https://images.unsplash.com/photo-1585937421612-70a008356f36?auto=format&fit=crop&w=800&q=80', category: 'Food', title: 'Spicy Newari Cuisine' },
        { id: 23, src: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80', category: 'Food', title: 'Street Food Delights' },
        { id: 24, src: 'https://images.unsplash.com/photo-1619860860774-1e7e17397526?auto=format&fit=crop&w=800&q=80', category: 'Food', title: 'Thakali Set' },
        { id: 25, src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80', category: 'Food', title: 'Fresh Organic Salad' },
        { id: 26, src: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=800&q=80', category: 'Food', title: 'Morning Breakfast' },
        { id: 27, src: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=800&q=80', category: 'Food', title: 'Festive Feast' },

        // --- Unsplash Placeholders (Activities) ---
        { id: 30, src: 'https://images.unsplash.com/photo-1521336575822-6da63fb45455?auto=format&fit=crop&w=800&q=80', category: 'Activities', title: 'Skydiving Adventure' },
        { id: 31, src: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=800&q=80', category: 'Activities', title: 'Paragliding Over Lake' },
        { id: 32, src: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80', category: 'Activities', title: 'Mountain Hiking' },
        { id: 33, src: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=800&q=80', category: 'Activities', title: 'Rock Climbing' },
        { id: 34, src: 'https://images.unsplash.com/photo-1533130061792-649d45df8c2d?auto=format&fit=crop&w=800&q=80', category: 'Activities', title: 'Camping Under Stars' },
        { id: 35, src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80', category: 'Activities', title: 'Beach Volleyball' },
        { id: 36, src: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80', category: 'Activities', title: 'Surfing Waves' },
        { id: 37, src: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?auto=format&fit=crop&w=800&q=80', category: 'Activities', title: 'Bungee Jumping' },
        { id: 38, src: 'https://images.unsplash.com/photo-1605548230624-8d2d639f5cb1?auto=format&fit=crop&w=800&q=80', category: 'Activities', title: 'Rafting Rapids' },
        { id: 39, src: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80', category: 'Activities', title: 'Marathon Run' },
    ];

    const filteredItems = activeCategory === 'All'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeCategory);

    return (
        <section id="pictures" className="gallery-section">
            <div className="section-header">
                <h2 className="section-title">Picture Speaks</h2>
                <p className="section-subtitle">Moments frozen in time - Food, Places, and Adventures</p>
            </div>

            <div className="category-tabs">
                {(['All', 'Food', 'Places', 'Activities'] as Category[]).map((category) => (
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
