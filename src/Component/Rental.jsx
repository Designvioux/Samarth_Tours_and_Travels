import React from "react";
import "./CSS/Rental.css";
import car from "../Images/swift-dzire.png";
const features = [
  { title: "Best Deal",icon: "ℹ️" },
  { title: "Doorstep Delivery",icon: "📦" },
  { title: "Safe And Hygiene Rides",icon: "📷" },
  { title: "Latest Cars",icon: "🚗" },
  { title: "Customer Support",icon: "🎧" },
  { title: "No Hidden Charges",icon: "🎯" },
];

const CarRentalPlatform = () => {
  return (
    <section className="car-rental-section">
      <div className="car-rental-content">
        <div className="left-section">
          <h2 className="title">Best Platform for Car Rental</h2>
          <p className="subtitle">
          Find and book reliable, affordable rental cars in minutes. Wide vehicle selection, transparent pricing, and 24/7 support-perfect for any trip.
          </p>
          <img
            src= {car}
            alt="Car"
            className="car-image"
          />
        </div>

        <div className="right-section">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="icon">{feature.icon}</div>
              <div className="feature-text">
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarRentalPlatform;
