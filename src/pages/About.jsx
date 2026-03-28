import { useState, useEffect, useRef } from 'react';
import './About.css';

const galleryItems = [
  { label: 'Cassava Processing' },
  { label: 'Garri Production' },
  { label: 'Fish Preparation' },
  { label: 'Oven Drying' },
  { label: 'Quality Control' },
  { label: 'Packaging' },
];

function About() {
  const galleryRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = galleryRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 5);
  };

  useEffect(() => {
    checkScroll();
    const el = galleryRef.current;
    if (el) el.addEventListener('scroll', checkScroll);
    return () => { if (el) el.removeEventListener('scroll', checkScroll); };
  }, []);

  const scroll = (direction) => {
    const el = galleryRef.current;
    if (!el) return;
    const amount = 320;
    el.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <div className="about-page">
      {/* About Section */}
      <section className="about-hero">
        <div className="container">
          <h1 className="section-title">About Us</h1>
          <div className="about-content">
            <p>
              Welcome to <strong>GIG EXQUISITE DINING</strong>, a dedicated company focused on the
              production and processing of <strong>DUNNI IJEBU GARRI</strong> and <strong>DUNNI
              OVEN-DRIED FISH</strong>. We are committed to delivering high-quality, nutritious, and
              locally sourced products that meet the needs of consumers both at home and abroad.
            </p>
            <p>
              Garri, a staple food in many African households, is produced from carefully selected
              cassava roots that are processed with utmost care to preserve their natural flavor
              and nutritional value. Our production process is carefully done to ensure that every
              grain of Garri is rich in taste, texture, and quality.
            </p>
            <p>
              In addition to Garri, we specialize in the processing of oven-dried fish, a delicacy
              enjoyed by many for its rich, smoky flavor and versatility. Using stainless steel
              oven-drying kilns, we ensure that the fish is hygienic with NO SOOT, retains its
              nutrients, taste, and long shelf life, making it perfect for both immediate consumption
              and long-term storage.
            </p>
            <p>
              At GIG EXQUISITE DINING, sustainability and health are at the forefront of our
              operations. We aim to contribute to local economies by sourcing raw materials from
              local farmers and fishermen while creating job opportunities in the community. Our
              products are carefully processed with the highest standards of hygiene and safety,
              ensuring that you receive only the best.
            </p>
            <p>
              We believe in the power of good food to bring people together, and we are excited to
              share the authentic taste of DUNNI IJEBU GARRI and DUNNI OVEN-DRIED FISH with you.
              Whether you are a retail customer, wholesaler, or distributor, we are here to provide
              quality products that satisfy the demands of your market.
            </p>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="our-process">
        <div className="container">
          <h2 className="section-title">Our Process</h2>
          <p className="section-subtitle">
            From raw materials to your table, every step is carried out with precision and care
          </p>

          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <h4>Sourcing</h4>
              <p>We source only the freshest cassava and fish from trusted local farmers and suppliers.</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h4>Processing</h4>
              <p>Our products are processed in a clean, modern facility using both traditional and contemporary methods.</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h4>Quality Control</h4>
              <p>Every batch undergoes strict quality checks to ensure consistency and safety.</p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <h4>Packaging &amp; Delivery</h4>
              <p>Products are carefully sealed in airtight packaging and delivered fresh to your doorstep.</p>
            </div>
          </div>

          {/* Scrollable Gallery */}
          <div className="gallery-wrapper">
            <h3>Gallery</h3>
            <div className="gallery-controls">
              {canScrollLeft && (
                <button className="gallery-arrow left" onClick={() => scroll('left')} aria-label="Scroll left">‹</button>
              )}
              {canScrollRight && (
                <button className="gallery-arrow right" onClick={() => scroll('right')} aria-label="Scroll right">›</button>
              )}
            </div>
            <div className="gallery-scroll" ref={galleryRef}>
              {galleryItems.map((item, i) => (
                <div key={i} className="gallery-item">
                  <div className="gallery-placeholder">
                    <span>{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
