import React from 'react';
import './CSS/Cartype.css';
import { FiArrowRight } from 'react-icons/fi'; // For the small arrow icon
import wag1 from "../Images/wagonR.jpg";
import aura from "../Images/auraatlaswhite.jpg";
import dzire from "../Images/swift-dzire.png";
// import ertiga from "../Images/maruti-suzuki-ertiga.jpg";
import crysta from"../Images/toyota-innova-crysta.jpg";
import traveller from "../Images/traveller.png";
import kialogo from "../Images/kia-logo.jpg";
import hondalogo from "../Images/honda-logo.jpg";
import waglogo from "../Images/suzuki-logo.png";
import hyundailogo from "../Images/hyundai-logo.png";
import toyotalogo from "../Images/toyota-logo.jpg";
import suzukilogo from "../Images/suzuki-logo.png";
import mahindralogo from "../Images/mahindra-logo.png";
import forcelogo from "../Images/force-logo.png";
import ciaz from "../Images/ciaz.png";
import etos from "../Images/etos.jpg";
import celerio from "../Images/celerio.png";
import kia from "../Images/kia.jpg";
import ertiga from "../Images/ertiga.jpg";
import ecco from "../Images/ecco.png";
import tavera from "../Images/tavera.jpg";
import bus from "../Images/32bus.jpg";
import Seater26 from "../Images/26 seater.jpg";
import Seater21 from "../Images/21seater.jpg";
import innova from "../Images/innova.jpg";
import mobilio from "../Images/mobilio.jpg";
import seater32 from "../Images/32seater.jpg";
import {Link} from 'react-router-dom';
const categories = [
  {
    title: 'Wagon R',
    cars: '5 Seater',
    image: wag1 // Replace with your actual images
  },
  {
    title: 'Swift Dzire',
    cars: '5 Seater',
    image: dzire,
  },
  {
    title: 'Ciaz',
    cars: '5 Seater',
    image: ciaz,
  },
  {
    title: 'ETOS',
    cars: '5 Seater',
    image: etos,
  },
  {
    title: 'Celerio',
    cars: '5 Seater',
    image: celerio,
  },
  {
    title: 'Ertiga',
    cars: '7 Seater',
    image: ertiga,
  },
  {
    title: 'Kia Carens',
    cars: '7 seater',
    image: kia,
  },
  {
    title: 'Innova Crysta',
    cars: '7 Seater',
    image: crysta,
  },
  {
    title: 'Traveller',
    cars: '17 Seater',
    image: traveller,
  },
  {
    title: 'Ecco',
    cars: '8 Seater',
    image: ecco,
  },
  {
    title: 'Tavera',
    cars: '10 Seater',
    image: tavera,
  },
  {
    title: 'Mini Bus',
    cars: '32 Seater',
    image: seater32,
  },
  {
    title: 'Honda Mobilio',
    cars: '7 Seater',
    image: mobilio,
  },
  {
    title: 'Innova',
    cars: '7 Seater',
    image: innova,
  },
  {
    title: 'Traveller',
    cars: '21 Seater',
    image: Seater21,
  },
  {
    title: 'Traveller',
    cars: '26 Seater',
    image: Seater26,
  }
];

const FeaturedCategories = () => {
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
           <Link to="/ContactForm" className= "book-btn"style={{textDecoration:'none'}}>Book</Link>
              
            </div>
            <img src={item.image} alt={item.title} className="category-img" />
          </div>
        ))}
      </div>

    </section>
  );
};

export default FeaturedCategories;
