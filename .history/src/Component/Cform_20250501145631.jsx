import React from "react";

import "./CSS/Cform.css";


import Contactform from "../Component/Contact.jsx";
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
          We’d love to hear from you! Whether you have a question, need support, or just want to say hello, our team is here to help. Please feel free to reach out using the contact information below, or fill out the form, and we’ll get back to you as soon as possible.          </p>
          <p className="contact-note">
          Avoid your inquiry is delay response, please enter your WhatsApp/Wechat/Skype along with the message, so we can contact you at the very first time.          </p>
        </div>


        <div className="contact-right">
          <Contactform /> {/* Your booking form goes here! */}
        </div>

       

      </div>

 
    

    </section>

    <div className="location-contact">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61151.22929737553!2d74.3944358486328!3d16.67929370000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0e26c3ce7b5f1%3A0xa49598fce4e121ab!2sSamarth%20Tour&#39;s%20And%20Travels!5e0!3m2!1sen!2sin!4v1745919105620!5m2!1sen!2sin"
    width="800"
    height="300"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
    </div>
    </div>
  );
};



export default ContactForm;