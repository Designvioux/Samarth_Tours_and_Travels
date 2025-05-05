import React, { useState } from 'react';
import BookingForm from './BookingForm'; // adjust path if needed

const FeaturedCategories = () => {
  const [popupCar, setPopupCar] = useState(null);

  const handleBook = (carTitle) => {
    setPopupCar(carTitle);
  };

  const closePopup = () => {
    setPopupCar(null);
  };

  return (
    <section className="featured-section">
      <h2 className="section-title">Featured Categories</h2>
      <p className="section-subtitle">
        Know what you’re looking for? Browse our extensive selection of cars
      </p>

      <div className="categories-wrapper">
        {categories.map((item, index) => (
          <div className="category-card" key={index}>
            <div className="card-header">
              <div>
                <h3>{item.title}</h3>
                <p>{item.cars}</p>
              </div>
              <button className="book-btn" onClick={() => handleBook(item.title)}>
                Book
              </button>
            </div>
            <img src={item.image} alt={item.title} className="category-img" />
          </div>
        ))}
      </div>

      {/* Popup Form Render */}
      {popupCar && (
        <BookingForm initialCar={popupCar} onClose={closePopup} />
      )}
    </section>
  );
};
