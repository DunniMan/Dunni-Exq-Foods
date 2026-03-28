import './Products.css';

const WHATSAPP_NUMBER = '2348173132957';
const WHATSAPP_GARRI = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20would%20like%20to%20order%20Garri`;
const WHATSAPP_FISH = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20would%20like%20to%20order%20Oven-Dried%20Fish`;

const garriProducts = [
  { name: 'White Garri — 1kg', desc: 'Fine-grained, smooth white garri. Perfect for eba and drinking garri.' },
  { name: 'White Garri — 2.5kg', desc: 'Family-size pack of our premium white garri.' },
  { name: 'White Garri — 5kg', desc: 'Bulk pack — ideal for large households and businesses.' },
  { name: 'Yellow Garri — 1kg', desc: 'Golden yellow garri with a slightly sweet, rich taste.' },
  { name: 'Yellow Garri — 2.5kg', desc: 'Family-size pack of our delicious yellow garri.' },
  { name: 'Ijebu Garri — 1kg', desc: 'Crunchy, sour Ijebu garri — great as a snack with groundnut.' },
];

const fishProducts = [
  { name: 'Oven-Dried Catfish', desc: 'Premium whole catfish, oven-dried for rich smoky flavour. Perfect for soups and stews.' },
  { name: 'Oven-Dried Croaker', desc: 'Atlantic croaker, carefully dried to preserve freshness. Ideal for pepper soup.' },
  { name: 'Oven-Dried Tilapia', desc: 'Whole tilapia, seasoned and oven-dried. Ready for your favourite dishes.' },
  { name: 'Fish Fillets (Assorted)', desc: 'A selection of oven-dried fish fillets, cleaned and ready to cook.' },
];

function Products() {
  return (
    <div className="products-page">
      <section className="products-header">
        <div className="container">
          <h1 className="section-title">Our Products</h1>
          <p className="section-subtitle">
            Premium quality, hygienically produced food products for your home and business
          </p>
        </div>
      </section>

      {/* Garri Section */}
      <section className="product-section garri-section">
        <div className="container">
          <div className="product-section-header">
            <h2>🌾 Premium Garri</h2>
            <p>
              Our garri is produced from carefully selected cassava, processed in a clean
              environment and packaged for freshness. Available in white, yellow, and Ijebu
              varieties in multiple sizes to suit your needs.
            </p>
          </div>
          <div className="product-grid">
            {garriProducts.map((product, i) => (
              <div key={i} className="product-card">
                <div className="product-image-placeholder">
                  <span>Product Image</span>
                </div>
                <div className="product-info">
                  <h4>{product.name}</h4>
                  <p>{product.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="product-order">
            <a href={WHATSAPP_GARRI} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              Click Here to Order Garri
            </a>
          </div>
        </div>
      </section>

      {/* Fish Section */}
      <section className="product-section fish-section">
        <div className="container">
          <div className="product-section-header">
            <h2>🐟 Oven-Dried Fish</h2>
            <p>
              Our fish is sourced fresh and oven-dried using modern techniques that lock in
              flavour and nutrients. Hygienically processed and well-packaged for long shelf
              life. Available in various types and sizes.
            </p>
          </div>
          <div className="product-grid">
            {fishProducts.map((product, i) => (
              <div key={i} className="product-card">
                <div className="product-image-placeholder fish">
                  <span>Product Image</span>
                </div>
                <div className="product-info">
                  <h4>{product.name}</h4>
                  <p>{product.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="product-order">
            <a href={WHATSAPP_FISH} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              Click Here to Order Fish
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
