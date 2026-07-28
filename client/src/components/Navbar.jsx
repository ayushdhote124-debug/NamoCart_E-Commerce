import React, { useContext, useState } from 'react';
import logoImage from "/namoCart.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AuthContext } from "../context/AuthContext";
import "../styles/navbarCSS.css";

const Navbar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const { user, logout } = useContext(AuthContext);

    const cartItems = useSelector(
        (state) => state.cart?.cartItems || []
    );

    const handleLogout = () => {
        logout();
        setIsOpen(false);
        navigate("/login");
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar-container">
            {/* Logo */}
            <Link to="/" className="navbar-logo" onClick={closeMenu}>
                <img src={logoImage} alt="NamoCart" />
            </Link>

            {/* Hamburger Mobile Toggle Button */}
            <button
                className="hamburger-btn"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle navigation menu"
            >
                {isOpen ? '✕' : '☰'}
            </button>

            {/* Nav Menu */}
            <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
                <Link className="nav-link" to="/" onClick={closeMenu}>
                    Home
                </Link>

                <Link className="nav-link" to="/shop" onClick={closeMenu}>
                    Shop
                </Link>

                <Link className="nav-link" to="/about" onClick={closeMenu}>
                    About
                </Link>

                <Link className="cart-link" to="/cart" onClick={closeMenu}>
                    🛒 Cart <span className="cart-badge">{cartItems.length}</span>
                </Link>

                {user ? (
                    <>
                        {user.role === 'admin' && (
                            <Link className="nav-link" style={{ color: '#f97316' }} to="/admin/dashboard" onClick={closeMenu}>
                                Admin Dashboard
                            </Link>
                        )}
                        <span className="user-greeting">
                            <Link to="/profile" onClick={closeMenu}>Hi, {user?.name}</Link>
                        </span>

                        <button onClick={handleLogout} className="btn-auth">
                            Logout
                        </button>
                    </>
                ) : (
                    <Link to="/login" className="btn-auth" onClick={closeMenu}>
                        Login
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
