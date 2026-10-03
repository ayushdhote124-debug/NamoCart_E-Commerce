import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import "../styles/ProductCard.css";

const ProductCards = ({ product }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className='product-card'
        >
            <img src={product.imageUrl} alt={product.name} className='product-image' />
            <div className='product-info'>
                <h3 className='product-name'>{product.name}</h3>
                <p className="product-price">
                    ₹{Number(product.price).toFixed(2)}
                </p>
                <Link to={`/product/${product._id}`} className='view-detais-button'>View Details</Link>
            </div>
        </motion.div>
    );
};

export default ProductCards;
