import React, { useState } from "react";

import "./Contact.css";
import CommonHero from "../../components/CommonHero/CommonHero.jsx"
import images from "../../../src/assets/images.js";

// const ICONS = [
//   {
//     id: 1,
//     icon: "/img/Contact/contact-1.svg", // Path to your image
//     title: "Transit  Protocol",
//     description: "Eget arcu dictum varius duis at lorem donec.",
//   },
//   {
//     id: 2,
//     icon: "/img/Contact/contact-2.svg", // Path to your image
//     title: "Chat Assistance",
//     description: "Tuam quisque id diam vel quam aenean.",
//   },
//   {
//     id: 3,
//     icon: "/img/Contact/contact-3.svg", // Path to your image
//     title: "Email Interaction",
//     description: "Quis varius quam id diam vel aenean.",
//   },
//   {
//     id: 4,
//     icon: "/img/Contact/contact-4.svg", // Path to your image
//     title: "Global Stores",
//     description: "Condimentum id venenatis a vitae sapien.",
//   },
// ];
const Contact = () => {

  const [formData, setFormData] = useState({ name: "", email: "", phoneno: "", message: "" });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage(""); 
  };

  return (
    <>
      <CommonHero title="Contact" navlink="Contact" subtitle="Home"  image={images.Contact}/>
      <div className="contact-wrapper">
        <div className="contact-header">
          <h5 className="contact-subtitle">Drop Us A Line</h5>
          <h1 className="contact-title">  Round-The-Clock <br /> Service</h1>
          <p className="contact-description">
            Sed id semper risus in hendrerit gravida rutrum quisque. Vitae proin
            sagittis nisl vel scelerisque mauris rhoncus mattis rhoncus urna.
          </p>
        </div>

    
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="contact-input" required />
              <input type="text" name="phoneno" value={formData.phoneno} onChange={handleChange} placeholder="Mobile Number" className="contact-input" required />
            </div>
            <div className="form-row">
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Mail ID" className="contact-input full-width" required />
            </div>
            <div className="form-row">
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Additional Information" className="contact-textarea full-width" required />
            </div>
            <div className="form-row">
              <button type="submit" className="contact-submit">Submit Query</button>
            </div>
          </form>
          {responseMessage && <p className="response-message">{responseMessage}</p>}
        </div>
      </div>

      <div className="contactmap">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.9051575683134!2d72.84992747584532!3d21.235609180640832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f27ee8159e3%3A0xf6defb4d03e81080!2sSutex%20Bank%20College%20of%20Computer%20Applications%20%26%20Science!5e0!3m2!1sen!2sin!4v1738932355005!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </>
  );
};

export default Contact;
