import React, { useEffect, useState } from 'react'
import ProductCards from '../components/ProductCards.jsx';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data.slice(0, 4));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();

  }, []);

  return (
    <div className='home-content'>
      
      {/* Modern Hero Section */}
      <section className='hero-section'>
        <div className='hero-content'>
          <h1 className='hero-title'>
            Elevate Your <br />
            <span>Lifestyle</span>
          </h1>
          <p className='hero-subtitle'>
            Experience fast, secure, and hassle-free online shopping. Discover trending products, exclusive deals, and amazing offers tailored just for you.
          </p>
          <div className='hero-buttons'>
            <Link to="/shop" className="btn">Shop Now</Link>
            <Link to="/about" className="btn-outline">Learn More</Link>
          </div>
        </div>

        <div className='hero-graphic'>
          <div className='shape shape-1'></div>
          <div className='shape shape-2'></div>
          <div className='shape shape-3'></div>
          <div className='hero-glass-card'>
             <div className='mock-image'>🛍️</div>
             <div className='mock-text-1'></div>
             <div className='mock-text-2'></div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <div style={{ marginTop: '80px', marginBottom: '40px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2.5rem' }}>Featured Products</h2>
        {loading ? (
          <div style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>Loading........</div>
        ) : (
          <div className='product-grid'>
            {
              products.map((product) => {
                return <ProductCards key={product._id} product={product} />
              })
            }
          </div>
        )}
      </div>

    </div>
  )
}

export default Home;
