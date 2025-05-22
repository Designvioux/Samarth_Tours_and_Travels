
import React from 'react';
import './CSS/Home.css';

 import bg from "../Images/background-hero.png";
import BookingForm from './Contact.jsx';
import "./CSS/Contact.css";




const HeroSection = () => {
  return (
    <section className="hero">
   
   

      <div className="contact-form">
     
        <BookingForm/>
     

        
      </div>
      <div className='Hero-Container'>
      <h1 className="hero-title">
 
  <span className="bold-black">We offer luxury bus and </span>
  <span className='bold-black'> car rental services</span>
</h1>
      <div className="hero-content">
        <div className="car-image">
          <img src={bg} alt="Car"  />
        </div>
      </div>
</div>
    </section>
  );
};

export default HeroSection;
