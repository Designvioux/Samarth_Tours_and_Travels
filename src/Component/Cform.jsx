import React from "react";

import "./CSS/Cform.css";


import Contactform from "../Component/Contact.jsx";
import BookingForm from "../Component/Contact.jsx";
const ContactForm = () => {
    return(
       
      <div className="CForm-Container">
        <div className="Cform-heading">
            {/* <div className="Container">
                 <img src = {img1} alt="" className="image"></img>
            </div> */}
    <section className="contact-sectionn">
      <div className="contact-containerr">
        
        <div className="contact-leftt">
          <h2  className="contact-hd">Get in Touch<br />with Us</h2>
          <p className="contact-description">
          Do you have any questions? Need assistance?</p>         
           <p className="contact-note">
           Or just want to say hello?<br/>
           <span className ="Contact-Note1 ">The Samarth Tours and Travels</span> team is always here for you.

Reach out to us using the contact information provided below or fill out the form we will respond as soon as possible.

To avoid delays in responding to your inquiry, please include your WhatsApp in your message so we can get in touch with you immediately.</p>        </div>


        <div className="contact-right">
          <BookingForm/> {/* Your booking form goes here! */}
        </div>

       

      </div>

 
    

    </section>

    <div className="location-contact">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61151.22929737553!2d74.3944358486328!3d16.67929370000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0e26c3ce7b5f1%3A0xa49598fce4e121ab!2sSamarth%20Tour&#39;s%20And%20Travels!5e0!3m2!1sen!2sin!4v1745919105620!5m2!1sen!2sin"
    width="800"
    height="300"
      title="Samarth Tours and Travels Location"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  > </iframe>
</div>
    </div>
    </div>
  );
};



export default ContactForm;