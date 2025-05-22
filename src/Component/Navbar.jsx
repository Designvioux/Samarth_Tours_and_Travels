import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CSS/Navbar.css";
import logo from "../Images/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the hamburger menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Close the menu
  const closeMenu = () => setIsOpen(false);

  // Close menu when user scrolls
  const handleScroll = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]); // Depend on `isOpen` so that it only triggers when needed

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li><Link to="/" className="navbar-l" onClick={closeMenu}>Home</Link></li>
         <li><Link to="/about" className="navbar-l" onClick={closeMenu}>About</Link></li>
        <li><Link to="/cars" className="navbar-l" onClick={closeMenu}>Cars</Link></li>
        <li><Link to="/ContactForm" className="navbar-l" onClick={closeMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
