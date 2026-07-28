import React, { useEffect, useState } from 'react'
import ProductCards from '../components/ProductCards.jsx';

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
    <>
      <div className='home-content'>
        <div className='hero-baner' style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ textAlign: 'center', marginBottom: '15px' }}>
            <span
              style={{
                fontSize: '3rem',
                fontWeight: '800',
                background: 'linear-gradient(90deg, #FFD700 0%, #FF007F 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block',
                letterSpacing: '-0.5px',
                filter: 'drop-shadow(0px 4px 16px rgba(255, 215, 0, 0.25))',
              }}
            >
              Welcome to NamoCart
            </span>
          </h1>
          <p style={{ color: '#a1a1aa', fontSize: '1.2rem', marginBottom: '10px' }}>Everything You Need, One Cart.</p>
          <p style={{ color: '#a1a1aa', maxWidth: '600px', margin: '0 auto' }}>Explore trending products, exclusive deals, and amazing offers. Experience fast, secure, and hassle-free online shopping with NamoCart.</p>
        </div>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Featured Products</h2>
        {loading ? (
          <div>Loading........</div>
        ) : (
          <div className='product-grid'>
            {
              products.map((product) => {
                return <ProductCards key={product._id} product={product} />
              })
            }

          </div>
        )
        }
      </div>

    </>
  )
}

export default Home

