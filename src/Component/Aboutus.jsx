import React from "react";
import "./CSS/Aboutus.css";
import Car1 from "../Images/About-cars.jpeg";
import Car2 from "../Images/school.png";
import Car3 from "../Images/3.png";
const AboutSection = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <div className="hero-contentt">
          <h1>About Us</h1>
          <p className="p-tag">
            Welcome to Samarth Tours and Travels, your trusted partner for safe,
            comfortable, and affordable car rental services.
          </p>
          <p className="mission">
            Since our inception, we’ve been driven by a simple goal — to make travel
            easier and more enjoyable for everyone. Whether you’re planning a weekend
            getaway, a business trip, or need a reliable ride for daily commuting, we
            offer flexible car rental solutions to suit every need.
          </p>
        </div>
      </section>

      {/* <h2 className="offer-heading">What We Offer..!</h2> */}

      <section className="offers">
        <div className="offer-item1">
          <h3>About Tours & Travels</h3>
          <ul>
            <li>We Offer More than 35 Destinations in one Day Tours.</li>
            <li>More than 30 Destinations for Weekend Tours.</li>
            <li>Custom Tailor Package Tours for Unlimited Destinations in India.</li>
            <li>Honeymoon, Industrial Tour & Spiritual.</li>
            <li>Adventure Trekking Camps all over Maharashtra.</li>
          </ul>
        </div>
        <div className="offer-image1">
          <img src ={Car1} alt="Car 1" />
        </div>

        <div className="offer-image2">
          <img src={Car2} alt="Car 2" />
        </div>
        <div className="offer-item2">
          <h3>Special For Students</h3>
          <ul>
            <li>Industrial Visits to all Important Destinations in Maharashtra</li>
            <li>With Prior Permissions.</li>
            <li>We have conducted one day tour for about 25,000 students.</li>
            <li>We are official trip organizers for more than 20 schools.</li>
          </ul>
        </div>

        <div className="offer-item3">
          <h3>Booking & Rental Services</h3>
          <ul>
            <li>We Offer Booking and Rental Services all over India.</li>
            <li>Group Trips, Individual and Corporate Bookings.</li>
            <li>We Provide A/c Non-A/c Buses, Cars, as per requirement.</li>
          </ul>
        </div>
        <div className="offer-image3">
          <img src={Car3} alt="Car Interior" />
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
