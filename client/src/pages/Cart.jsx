import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useNavigate } from 'react-router-dom';

import{addToCart, removeFromCart} from "../redux/cartSlice"
import "../styles/cart.css"

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch =useDispatch();
    const navigate = useNavigate();

    const handelRemove = (id) => {
        dispatch(removeFromCart(id));
    };
    const handelUdateQty = (item, qty) =>{
        if(qty>0){
            dispatch(addToCart({...item, qty}));
        }

    };
    const totalPrice = cartItems.reduce(
        (acc, item) => acc + item.price * item.qty,
        0
      );
  return (
    <>

    <div className='cart-container'>
        <h2>Shopping Cart</h2>
        { cartItems.length === 0 ? (
            <p>Your cart is empty. <Link to= "/shop">Go to Shopping</Link></p>
        ):(
            <div  className='cart-layout'>
                <div className='cart-items'>
                    {cartItems.map((item)=>(
                        <div key={item._id} className='cart-item'>
                            <img src={item.imageUrl} alt={item.name} className='cart-item-image' />
                            <div className='cart-item-details'>
                                <h4>{item.name}</h4>
                                <p>₹{item.price}</p>
                                <div className='qty-controls'>
                                    <button onClick={()=>handelUdateQty(item, item.qty-1)}>-</button>
                                    <span>{item.qty}</span>
                                    <button onClick={()=>handelUdateQty(item, item.qty+1)}>+</button>
                                </div>
                                <button onClick={()=>handelRemove(item._id)} className='btn-remove'>Remove Item</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='cart-summary'>
                    <h3>Total : {totalPrice.toFixed(2)}</h3>
                    <button onClick={()=>navigate('/checkout')} className='btn-checkout'>Proceed </button>

                </div>

            </div>
        )}

    </div>
      
    </>
  )
}

export default Cart
