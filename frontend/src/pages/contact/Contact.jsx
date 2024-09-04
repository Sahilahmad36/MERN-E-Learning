/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'; 
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send('service_q0mkt2p', 'template_wwfbmjm', formData, 'xm4j5IisX35o5jpNc')
      .then((response) => {
        console.log('Success!', response.status, response.text);
        alert('Your message was sent successfully!');
      })
      .catch((err) => {
        console.error('Fail!', err);
        alert('We failed to send your message, please try again later.');
      });

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <>
      <main className="contact-container">
        <div className="contact-card">
          <div className="contact-info">
            <div>
              <h1>Get In Touch.</h1>
              <p>
              108 RL Tower,Zahirpur, Ransoora, Saharanpur
              <br />
              Uttar Pradesh (247554)
              </p>
              <div className="mobile">
      <p className="call" style={{ fontWeight:"800", fontFamily:"sans-serif"}}><MdEmail />
      sahilh3600@gmail.com</p>
      </div>
      <div className="mobile">
      <p className="call" style={{ fontWeight:"800"}}><FaPhoneVolume />+91 9259571146</p>
      </div>
            </div>
          </div>
          <div className="contact-form">
            <form>
              <input
                onChange={handleChange}
                value={formData.name}
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
              />
              <input
                onChange={handleChange}
                value={formData.email}
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
              />
              <textarea
                onChange={handleChange}
                value={formData.message}
                name="message"
                id="message"
                placeholder="Message..."
              ></textarea>
              <button onClick={handleSubmit} className='pulse1'>
                Submit Message 
              </button>
            </form>
          </div>
        </div>
        <section className="background-overlay"></section>
       
      </main>
    </>
  );
}

export default Contact;
