import React from 'react';
import './CSS/work.css';

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <p className="subtitle">
        Booking a car rental is a straightforward process that typically involves the following steps
      </p>
      <div className="steps">
        <div className="step">
          <div className="icon-wrapper teal">
            <i className="icon">🛫</i>
          </div>
          <h3>1. Choose Date & Locations</h3>
          <p>
            Determine the date & location for your car rental. Consider factors such as your travel itinerary, 
            pickup/drop-off locations (e.g., airport, city center), and duration of rental.
          </p>
        </div>
        <div className="step">
          <div className="icon-wrapper orange">
            <i className="icon">📍</i>
          </div>
          <h3>2. Pick-Up Locations</h3>
          <p>
            Check the availability of your desired vehicle type for your chosen dates and location.
            Ensure that the rental rates, taxes, fees, and any additional charges.
          </p>
        </div>
        <div className="step">
          <div className="icon-wrapper black">
            <i className="icon">🚗</i>
          </div>
          <h3>3. Book your Car</h3>
          <p>
            Once you've found a car rental option, proceed to make a reservation. 
            Provide the required information, including your details, driver's license, contact info, and payment details.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
