import React from "react";
import "./CSS/Location.css";
import taj from "../Images/tajmahal.jpg";
import mumbai from "../Images/mumbai.jpg";
import goa from "../Images/goa.jpg";
import pune from "../Images/pune.jpg";

import mahabaleshwar from "../Images/mahabaleshwar.jpg";

const locations = [
  {
    name: "Delhi",
    image: taj,
  },
  {
    name: "Mumbai",
    image: mumbai,
  },
  {
    name: "Goa",
    image: goa,
  },
  {
    name: "Pune",  
    image: pune,
  },
  
  {
    name: "Mahabaleshwar",  
    image: mahabaleshwar,
  },
];

const PopularLocation = () => {
  return (
    <section className="popular-section">
      <h2 className="popular-title">Popular Location</h2>
      <p className="popular-subtitle">
      Trusted across India for their reliability, affordability, and practical features perfect for local travel needs.
      </p>

      <div className="location-cards">
        {locations.map((location, index) => (
          <div className="location-card" key={index}>
            <img src={location.image} alt={location.name} />
            <div className="location-info">
              <h3>{location.name}</h3>
              <p>{location.yachts}</p>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="navigation-buttons">
        <button className="nav-btn">&#8592;</button>
        <button className="nav-btn">&#8594;</button>
      </div> */}
    </section>
  );
};

export default PopularLocation;
