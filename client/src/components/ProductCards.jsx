import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/ProductCard.css"

const ProductCards = ({ product }) => {
    return (
        <>
            <div className='product-grid'>

                <div className='product-card'>

                    <img src={product.imageUrl} alt={product.name} className='product-image' />
                    <div className='product-info'>
                        <h3 className='product-name'>{product.name}</h3>
                        <p className="product-price">
                            ₹{Number(product.price).toFixed(2)}
                        </p>
                        <Link to={`/product/${product._id}`} className='view-detais-button'>View Details</Link>
                    </div>


                </div>

            </div>


        </>
    )
}

export default ProductCards
