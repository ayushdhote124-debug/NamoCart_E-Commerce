import React, { useContext } from 'react'
import logoImage from "/namoCart.png"
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
    const navigate = useNavigate();

    const { user, logout } = useContext(AuthContext);
    const auth = useContext(AuthContext);

    // console.log("Auth =", user.name);

    const cartItems = useSelector(
        (state) => state.cart?.cartItems || []
    );

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    const linkStyle = {
        color: "#fff",
        textDecoration: "none",
        fontSize: "17px",
        fontWeight: "500",
    };


    return (
        <>
            <div>
                <div style={{overflow: scroll}}>
                    <nav
                        style={{
                            background: "#09090b",
                            color: "white",
                            padding: "15px 40px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            position: "sticky",
                            top: "0",
                            zIndex: "1000",
                            borderBottom: "1px solid rgba(255,255,255,0.08)",
                        }}
                    >
                        {/* Logo */}
                        <Link
                            to="/"
                        >
                            <img src={logoImage} alt="NamoCart" style={{
                                height: "60px",
                                borderRadius: "50px"
                            }} />
                        </Link>

                        {/* Search */}
                        <input
                            type="text"
                            placeholder="Search Products..."
                            style={{
                                width: "300px",
                                padding: "10px 15px",
                                borderRadius: "30px",
                                border: "none",
                                outline: "none",
                                fontSize: "15px",
                            }}
                        />

                        {/* Menu */}
                        <div
                            style={{
                                display: "flex",
                                gap: "25px",
                                alignItems: "center",
                            }}
                        >
                            <Link style={linkStyle} to="/">
                                Home
                            </Link>

                            <Link style={linkStyle} to="/shop">
                                Shop
                            </Link>

                            <Link style={linkStyle} to="/about">
                                About
                            </Link>

                            <Link style={linkStyle} to="/cart">
                                🛒({cartItems.length})
                            </Link>

                            {user ? (
                                <>
                                    {user.role === 'admin' && (
                                        <Link style={{...linkStyle, color: '#f97316'}} to="/admin/dashboard">
                                            Admin Dashboard
                                        </Link>
                                    )}
                                    <span
                                        style={{
                                            color: "#FFD600",
                                            fontWeight: "600",
                                        }}
                                    >
                                        <Link to = "/profile" style={{color: "inherit", textDecoration: "none"}}>Hi, {user?.name}</Link>
                                       
                                    </span>

                                    <button
                                        onClick={handleLogout} 
                                        style={{
                                            background: "linear-gradient(to top right, #FFD600, #FF3CAC)",
                                            color: "#fff",
                                            padding: "10px 18px",
                                            borderRadius: "25px",
                                            textDecoration: "none",
                                            fontWeight: "600",
                                            boxShadow: "0 4px 12px rgba(255, 60, 172, 0.3)",
                                        }} 
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <Link
                                    to="/login"
                                    style={{
                                        background: "linear-gradient(to top right, #FFD600, #FF3CAC)",
                                        color: "#fff",
                                        padding: "10px 18px",
                                        borderRadius: "25px",
                                        textDecoration: "none",
                                        fontWeight: "600",
                                        boxShadow: "0 4px 12px rgba(255, 60, 172, 0.3)",
                                    }}
                                >
                                    Login
                                </Link>
                            )}
                        </div>
                    </nav>

                </div>

            </div>

        </>
    )
}

export default Navbar
