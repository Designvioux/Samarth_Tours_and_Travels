import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ContactForm from './Component/Cform.jsx';
import Navbar from './Component/Navbar.jsx';
import Home from './Home.js';
import Footer from './Component/Footer.jsx';
import Cars from './Component/Cartype.jsx';
import ScrollToTop from './Component/ScrollToTop.jsx';
import BookingForm from './Component/Contact.jsx';
import AboutSection from './Component/Aboutus.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/ContactForm" element={<ContactForm />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/Bookbtn" element={<BookingForm/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
