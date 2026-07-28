import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            {/* <div style={{
                background: '#09090b',
                borderTop: '1px solid rgba(255,255,255,0.05)',
                padding: '40px 20px',
                marginTop: 'auto'

            }}>
                <div className='footer' style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '20px'
                }}>
                    <div>
                        <h3 style={{ color: '#f97316', marginBottom: '10px' }}>NamoCart</h3>
                        <p style={{ color: '#a1a1aa', fontSize: '0.9rem' }}> Everything You Need, One Cart</p>
                    </div>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <Link to="/about" style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>About Us</Link>
                        <Link to="/return" style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>Reutn Policy</Link>
                        <Link to="/disclaimer" style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>Disclaimer</Link>
                    </div>
                    <div style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>
                        &copy; {new Date().getFullYear} NamoCart: Everything You Need, One Cart.
                    </div>
                    <p style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>Privacy Policy | Terms & Conditions | Cookie Policy</p>


                </div>

            </div> */}



            <footer
                style={{
                    background: "#09090b",
                    color: "#fff",
                    borderTop: "1px solid rgba(255,255,255,0.08)",
                    padding: "50px 20px 20px",
                    marginTop: "auto",
                }}
            >
                <div
                    style={{
                        maxWidth: "1200px",
                        margin: "0 auto",
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                        gap: "40px",
                    }}
                >
                    {/* About */}
                    <div>
                        <h2
                            style={{
                                marginBottom: "15px",
                                fontSize: "28px",
                                fontWeight: "700",
                                display: "inline-block",
                                background:
                                  "linear-gradient(45deg, #FFD700 0%, #FFD700 10%, #FF4DA6 55%, #7B2CBF 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                               
                            }}
                        >
                            NamoCart
                        </h2>

                        <p
                            style={{
                                color: "#d4d4d8",
                                lineHeight: "1.8",
                                fontSize: "15px",
                            }}
                        >
                            Your trusted online shopping destination. Discover quality products,
                            secure payments, and fast delivery—all in one place.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 style={{ color: "#f4f4f5", marginBottom: "15px" }}>
                            Quick Links
                        </h3>

                        <ul
                            style={{
                                listStyle: "none",
                                padding: 0,
                                margin: 0,
                                lineHeight: "2",
                            }}
                        >
                            <li><a href="/" style={{ color: "#a1a1aa", textDecoration: "none" }}>Home</a></li>
                            <li><a href="/about" style={{ color: "#a1a1aa", textDecoration: "none" }}>About Us</a></li>
                            <li><a href="/disclaimer" style={{ color: "#a1a1aa", textDecoration: "none" }}>Disclaimer</a></li>
                            <li><a href="/returnpolicy" style={{ color: "#a1a1aa", textDecoration: "none" }}>Return Policy</a></li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h3 style={{ color: "#f4f4f5", marginBottom: "15px" }}>
                            Customer Service
                        </h3>

                        <ul
                            style={{
                                listStyle: "none",
                                padding: 0,
                                margin: 0,
                                color: "#d4d4d8",
                                lineHeight: "2",
                            }}
                        >
                            <li>FAQ</li>
                            <li>Shipping Policy</li>
                            <li>Returns & Refunds</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 style={{ color: "#f4f4f5", marginBottom: "15px" }}>
                            Contact Us
                        </h3>

                        <p style={{ color: "#d4d4d8", lineHeight: "2" }}>
                            📍 Indore, MadhyaPradesh
                        </p>
                        <p style={{ color: "#d4d4d8", lineHeight: "2" }}>
                            📧 support@namocart.com
                        </p>
                        <p style={{ color: "#d4d4d8", lineHeight: "2" }}>
                            📞 +91 98765 43210
                        </p>
                    </div>
                </div>

                <div
                    style={{
                        marginTop: "40px",
                        paddingTop: "20px",
                        borderTop: "1px solid rgba(255,255,255,0.08)",
                        textAlign: "center",
                        color: "#71717a",
                        fontSize: "14px",
                    }}
                >
                    © {new Date().getFullYear()} NamoCart. All Rights Reserved.
                    <br />
                    Designed with ❤️ using React, Node.js & MongoDB.
                </div>
            </footer>


        </>



    )
}

export default Footer
