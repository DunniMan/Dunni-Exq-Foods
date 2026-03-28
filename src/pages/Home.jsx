import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../assets/GIG exq transparent logo.png';
import './Home.css';

const WHATSAPP_NUMBER = '2348173132957';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20would%20like%20to%20place%20an%20order`;

const whyChooseUs = [
  { icon: '🌾', title: 'Premium Quality', text: 'Our garri is carefully processed from the finest cassava, ensuring top-grade quality in every pack.' },
  { icon: '🔥', title: 'Oven-Dried Perfection', text: 'Our fish is oven-dried using modern techniques that preserve freshness, flavour, and nutrients.' },
  { icon: '🧼', title: 'Hygienic Process', text: 'Produced in a clean, controlled environment following strict food safety standards.' },
  { icon: '📦', title: 'Well Packaged', text: 'Sealed and packaged for maximum shelf life and easy storage.' },
  { icon: '🚚', title: 'Fast Delivery', text: 'We deliver promptly to your doorstep. Order today and enjoy convenience.' },
  { icon: '💰', title: 'Affordable Pricing', text: 'Premium products at prices that won\'t break the bank.' },
];

const productSlides = [
  {
    category: 'Premium Garri',
    slides: [
      { title: 'White Garri', desc: 'Fine-grained, smooth white garri perfect for eba and drinking.' },
      { title: 'Yellow Garri', desc: 'Rich, golden yellow garri with a slightly sweet taste.' },
      { title: 'Ijebu Garri', desc: 'Crunchy, sour Ijebu garri — perfect as a snack or with soup.' },
    ],
  },
  {
    category: 'Oven-Dried Fish',
    slides: [
      { title: 'Dried Catfish', desc: 'Premium oven-dried catfish, smoky and flavourful for your soups and stews.' },
      { title: 'Dried Croaker', desc: 'Carefully dried Atlantic croaker, perfect for pepper soup and more.' },
      { title: 'Dried Tilapia', desc: 'Whole oven-dried tilapia, seasoned and ready for your favourite dishes.' },
    ],
  },
];

function ProductSlider({ category, slides }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="product-slider">
      <h3>{category}</h3>
      <div className="slider-track">
        {slides.map((slide, i) => (
          <div key={i} className={`slide ${i === current ? 'active' : ''}`}>
            <div className="slide-image-placeholder">
              <span>Product Image</span>
            </div>
            <div className="slide-content">
              <h4>{slide.title}</h4>
              <p>{slide.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="slider-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function Home() {
  const [heroSlide, setHeroSlide] = useState(0);
  const heroImages = [0, 1, 2];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          {heroImages.map((_, i) => (
            <div
              key={i}
              className={`hero-bg-slide ${i === heroSlide ? 'active' : ''}`}
            />
          ))}
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <img src={logo} alt="GIG Exquisite Dining" className="hero-logo" />
          <p className="hero-slogan">Clean, Sour, Crunchy, Simply Perfect</p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Order on WhatsApp
          </a>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">We take pride in delivering the best quality products to your table</p>
          <div className="features-grid">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="feature-card">
                <span className="feature-icon">{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Products Preview */}
      <section className="products-preview">
        <div className="container">
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">Discover our range of premium garri and oven-dried fish</p>
          <div className="sliders-row">
            {productSlides.map((product, i) => (
              <ProductSlider key={i} category={product.category} slides={product.slides} />
            ))}
          </div>
          <div className="products-cta">
            <Link to="/products" className="btn btn-primary">View Our Products</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
