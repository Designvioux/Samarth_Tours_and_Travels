
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
   
   

      <div className="contact-form">
     
        <BookingForm/>
     

        
      </div>
      <h1 className="hero-title">
 
  <span className="bold-black">We Offer Luxury Buses And </span>
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
