import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CSS/Navbar.css";
import logo from "../Images/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={isOpen ? "bar open" : "bar"}></div>
        <div className={isOpen ? "bar open" : "bar"}></div>
        <div className={isOpen ? "bar open" : "bar"}></div>
      </div>

      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li><Link to="/" className="navbar-l">Home</Link>
        </li>
        <li>
         <Link to ="/cars" className="navbar-l">Cars</Link>
        </li>
        <li>
          <Link to="/ContactForm" className="navbar-l">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
