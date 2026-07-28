import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

const Editproduct = () => {

  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ name: "", description: "", price: "", category: '', stock: '' });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${id}`);
        const data = await res.json();
        if (data.product) {
          setFormData({ 
            name: data.product.name || '', 
            description: data.product.description || '', 
            price: data.product.price || '', 
            category: data.product.category || '', 
            stock: data.product.stock || '' 
          });
        }
      } catch (error) {
        console.error("Failed to fetch product", error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    data.append('name', formData.name);
    data.append('description', formData.description);
    data.append('price', formData.price);
    data.append('category', formData.category);
    data.append('stock', formData.stock);
    if (image) data.append('imageUrl', image);

    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${user.token}` },
        body: data
      });

      if (res.ok) {
        alert('Product Update Successfully....');
        navigate('/admin/products');
      } else {
        alert('Failed to update product');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    padding: '12px',
    background:'#09090b',
    border:'1px solid #27272a',
    borderRadius:'6px',
    color:'#fff',
    fontSize:'15px',
    outline:'none'
 };
 
  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', background: '#18181b', padding: '40px', borderRadius: '12px', border: '1px solid rgba( 255,255,255,0.05)' }}>
      <h4 style={{ color: '#f97316', marginBottom: '20px' }}>Edit Product</h4>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>

        <input type="text" placeholder='product name' required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} style={inputStyle} />

        <input type="text" placeholder='description' required value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} style={inputStyle} />

        <input type="text" placeholder='price' required value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} style={inputStyle} />

        <input type="text" placeholder='category' required value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} style={inputStyle} />

        <input type="text" placeholder='Stock' required value={formData.stock} onChange={(e) => setFormData({ ...formData, stock: e.target.value })} style={inputStyle} />
        <div style={{ padding: '15px', border: '1px dashed #f97316', borderRadius: '8px' }}>
          <label style={{ display: 'block', marginBottom: '10px', color: '#a1a1aa' }}>Replace Image (optional)</label>

          <input type="file" accept='image/*' onChange={(e) => setImage(e.target.files[0])} style={{ color: '#fff ' }} />

        </div>

        <button type='submit' className='btn' disabled={loading} style={{marginTop:"10px" }}>{loading ? "updating...." : 'Update Product'}</button>

      </form>

    </div>
  )
}

export default Editproduct
