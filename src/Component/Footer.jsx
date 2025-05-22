import React from "react";
import "./CSS/Footer.css"; // Import the CSS file
import logo from "../Images/Logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src = {logo} className="footer-logo" alt="samarth Tours"></img>
          <h3 className="book-span">Book your car anytime anywhere !</h3>
          <h4>Address:</h4>
          <p>Gaon Bhag , 6 ,Gujari Peth,</p>
          <p>Ichalkaranji, Maharashtra 416115</p>
        </div>
        <div className="footer-right">
          <h3>Quick Link</h3>
          <ul className="footer-linkss">
            <a href="/" className='navbarr'>Home</a> 
            <a href="/about" className='navbarr'>About</a> 
            <Link to ="/cars" className="navbarr">Cars</Link>
            <Link to="/ContactForm" className="navbarr">Contact</Link>
            
          </ul>
        </div>

        <div className="social-icons">
          <h2>Social Accounts</h2>
  <a href="https://www.facebook.com/profile.php?id=100082511393422" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-facebook"> Samarth Tours and Travels</i>
  </a>
  <a href="https://www.instagram.com/tourstravelssamarth?igsh=MXZ4MG1pbnlsbTNhcA==" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-instagram"> tourstravelssamarth</i>
  </a>
</div>
      </div>
      <hr></hr>

      <div className="footer-bottom">
        <p>© 2025 All rights reserved for Samarth Tours and Travels  </p>
       <a href="https://designvio.framer.ai/" target="_blank" rel="noopener noreferrer"><p>© 2025 Designed by Designvio Pvt.Ltd </p></a> 
      </div>
    </footer>
  );
};

export default Footer;
