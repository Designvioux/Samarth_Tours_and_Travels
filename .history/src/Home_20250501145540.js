import React from 'react';
import './App.css'

import Work from "./Component/work.jsx";
import Cars from "./Component/Cartype.jsx";
import Rating from "./Component/Rating.jsx";
import Footer from "./Component/Footer.jsx";
import Location from "./Component/Location.jsx";
import Rental from "./Component/Rental.jsx";
// import Contact from "./Component/Contact.jsx";
// import About from "./Component/Rental.jsx";
// import Navbar from "./Component/Navbar.jsx";
import HeroSection from './Component/Home.jsx';
import Navbar from './Component/Navbar.jsx';
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