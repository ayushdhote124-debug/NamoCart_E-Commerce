import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { addToCart } from '../redux/cartSlice';

const ProductDetail = () => {

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${id}`);
        const data = await res.json();
        setProduct(data.product);
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    };
    fetchProduct();

  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart({
        _id: product._id,
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
        qty: 1
    }));
      alert('sussesfully added to your Cart....!');
    }
  }
  if (loading) return <div style={{ textAlign: 'center', margin: '100px', color: '#f97316' }}>Loading Product.......</div>;
  if (!product) return <div style={{ textAlign: 'center', margin: '100px', color: '#ef4444' }}>Product Not Found</div>
  return (
    <>
      <div className='product-detail-wrapper' style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>

        <div style={{ color: '#a1a1aa', marginBottom: '20px', fontSize: '0.95rem' }}>
          <Link to="/" style={{ color: "#f97316" }} >Home</Link> /  <Link to="/shop" style={{ color: "#f97316" }} >Shop</Link> / {product.category} / <span style={{ color: '#fff' }}>{product.name}</span>
        </div>

        <div className='product-Detail' style={{
          display: "flex",
          gap: "50px",
          alignItems: "flex-start",
          marginTop: "30px",
        }}>
          <div className='detail-image-container' style={{ flex: 1 }}>
            <img src={product.imageUrl} alt={product.name} className='detail-image' style={{
              width: "100%",
              maxWidth: "500px",
              height: "500px",
              objectFit: "contain",
              borderRadius: "12px",
            }} />
          </div>
          <div style={{
            flex: 1,
            display: "flex",
            flexDirection: "column", 
            gap: "15px",
          }}>
            <div className='detail-infom'>
              <h2 style={{ fontSize: "2.8rem", marginBottom: "10px" }}> {product.name}</h2>

              <p className="detai-price" style={{ fontSize: "2rem", margin: "15px 0" }}>
                ₹{Number(product?.price || 0).toFixed(2)}
              </p>
            </div>

            <div style={{ margin: "25px" }}>
              <h4 style={{ color: '#fff', marginBottom: '10px' }}>Product Description</h4>
              <p style={{ color: '#a1a1aa', lineHeight: '1.8' }}>{product.description}</p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <button onClick={handleAddToCart} className='btn' style={{ flexGrow: '1', padding: '18px', fontSize: '1.2rem' }}>Add to Shipping Cart</button>
            </div>
            <p>{product.stock > 0 ? `In Stock(${product.stock} units available)` : `Temporarily Out of Stock`}</p>

          </div>

        </div>
      </div>

    </>
  )
}

export default ProductDetail
