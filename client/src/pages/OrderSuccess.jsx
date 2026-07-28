import React from 'react'
import { Link } from 'react-router-dom'

const OrderSuccess = () => {
   
  return (
    <>
    <div style={{
        maxWidth:'600px',
        margin:'50px auto',
        padding:'50px 30px',
        background:'#18181b',
        border:'1px solid rgba(255,255,255,0.05)',
        boxShadow:'0 10px 40px rgba(0,0,0,0.5)',
        textAlign:'center'
    }}>
        <h2 style={{fontSize:'2.5rem',marginBottom:'20px', color:'#10b981'}}>Payment Successful</h2>
        <p style={{color:'#a1a1aa', fontSize:'1.2rem', marginBottom:'40px'}}>Thank you for order. we have successfuly receive your payment and will process your shipment shortly </p>
        <Link to = "/shop">Continue Shopping</Link>

    </div>
      
    </>
  )
}

export default OrderSuccess
