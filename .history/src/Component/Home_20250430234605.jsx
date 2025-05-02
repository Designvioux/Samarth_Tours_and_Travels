
import React from 'react';
import './CSS/Home.css';
import logo from "../Images/Logo.png";
 import bg from "../Images/background-hero.png";
import BookingForm from './Contact.jsx';
import "./CSS/Contact.css";
import {Link} from  'react-router-dom';
import Navbar from './Navbar.jsx';



const HeroSection = () => {
  return (
    <section className="hero" >
   
      {/* <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <ul className="nav-links">
          <a href="#home" className="navbar">Home</a>
          <a href="#about" className="navbar">About</a>
          <a href="#cars" className="navbar">Cars</a>

          <li><a>
            <Link to="/ContactForm"> Contact</Link>
         
          </a></li>
        </ul>
      </nav> */}

      <div className="contact-form">
        {/* <input type="text" placeholder="Enter your Full name" required />
        <input type="tel" placeholder="Enter Contact Number" required />

        <select required>
          <option value="">Select a Car</option>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
          <option value="Luxury">Luxury</option>
        </select>

        <input type="time" required />

        <div className="pickup-drop">
          <input type="text" placeholder="Enter Your Pick Up Location" required />
          <input type="date" required />
        </div>

        <div className="pickup-drop">
          <input type="text" placeholder="Enter Your Drop Location" required />
          <input type="date" required />
        </div>

        <button type="submit" className="whatsapp-btn">
          <img src="/whatsapp-icon.png" alt="WhatsApp" /> Send WhatsApp Message
        </button> */}
        <BookingForm/>
     

        
      </div>
      <h1 className="hero-title">
 
  <span className="bold-black">We Offer Luxury Busses And </span>
  <span className='bold-black'> Car Rental Services</span>
</h1>
      <div className="hero-content">
        <div className="car-image">
          <img src={bg} alt="Car" />
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
