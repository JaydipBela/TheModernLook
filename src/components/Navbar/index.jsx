import React, { useState, useEffect } from "react";
import "./navbar.css";
import { FaSearch, FaUser, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import images from "../../assets/images.js";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { cartCount } = useCart();

    // Function to handle scroll effects
    function scrollFunction() {
        if (window.scrollY > 20) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    }


    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

  
    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

   
    useEffect(() => {
        window.addEventListener('scroll', scrollFunction);
        return () => {
            window.removeEventListener('scroll', scrollFunction);
        };
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolling' : ''}`}>
            <div className="navbar-container">
                <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <img src={images.logo1} alt="Modern Look Logo" className="logo" />
                </NavLink>

                <div className="menu-icon" onClick={toggleMobileMenu}>
                    {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                </div>

                <ul className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
                    <li>
                        <NavLink to="/" onClick={closeMobileMenu}>HOME</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop" onClick={closeMobileMenu}>SHOP</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" onClick={closeMobileMenu}>ABOUT</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog" onClick={closeMobileMenu}>BLOG</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" onClick={closeMobileMenu}>CONTACT US</NavLink>
                    </li>
                </ul>

                <div className="navbar-icons">
                    <div className="nav-icon-container">
                        <button aria-label="User Account" className="nav-icon">
                            <FaUser />
                        </button>
                    </div>
                    <NavLink to="/cart" className="cart" aria-label="Shopping Cart">
                        <FaShoppingCart className="nav-icon1" />
                        {cartCount > 0 && (
                            <div className="cart-count">{cartCount}</div>
                        )}
                    </NavLink>
                    <NavLink to="#" className="logout-btn">
                        LOGOUT
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
