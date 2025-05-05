import React from 'react';
import './App.css'

import Work from "./Component/work.jsx";
import Cars from "./Component/Cartype.jsx";
import Rating from "./Component/Rating.jsx";
import Location from "./Component/Location.jsx";
import Rental from "./Component/Rental.jsx";

import HeroSection from './Component/Home.jsx';

// import BookingForm from './Component/Contact.jsx';


const Home =()=> {
  return (
 <React.Fragment>
<div id='Home'>
    <HeroSection  />
    </div>
    <Work/>
    <div id='Cars'>
    <Cars/>
    </div>
    <Rating/>
    <Rental/>
    <Location/>
        </React.Fragment>
   
  );
}
export default Home;