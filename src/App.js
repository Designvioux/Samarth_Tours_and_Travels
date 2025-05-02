import React from 'react';
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom';

import ContactForm from './Component/Cform.jsx';
// import Home from './Home.js';
import Navbar from './Component/Navbar.jsx';
import Home from './Home.js';
import Footer from './Component/Footer.jsx';
import Cars from './Component/Cartype.jsx';

function App() {
  return (
 
<Router>
   <Navbar/>
  
  <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/ContactForm" element={<ContactForm/>}/>
  <Route path="/cars" element={<Cars/>} />
 
  </Routes>
  <Footer/>
</Router>
   
  );
}
export default App;