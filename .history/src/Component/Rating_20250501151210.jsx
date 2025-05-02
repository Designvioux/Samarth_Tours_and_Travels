import React from "react";
import { CountUp } from 'react-countup';
import "./CSS/Rating.css";

const stats = [
  { number: 6000, label: 'Happy Customers' },
  { number: 28, label: 'Count of Cars' },
  { number: 625000, label: 'Locations to Pickup' },
  { number: 15000000, label: 'Total Kilometers' },
];

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((item, index) => (
          <div className="stat-item" key={index}>
            <h2 className="stat-number">
              <CountUp 
                start={1}
                end={item.number}
                duration={3}
                separator=","
                enableScrollSpy
                scrollSpyDelay={500}
              />
            </h2>
            <hr className="stat-divider" />
            <p className="stat-label">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
