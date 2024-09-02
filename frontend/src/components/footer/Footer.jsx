// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Footer.css";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa"; // Import icons


const Footer = () => {
  return (
    <footer>
    <div className="footer-content">
    <p>
        &copy; 2024 E-learning Platform. All rights reserved. <br />
        Made by ❣️ <a href="">Sahil</a> <br />
        
    </p>
    <div className="social-links">
    <a href="https://www.instagram.com/sahil.as_/" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={30} />
      </a>
      <a href="https://youtube.com/@sahil-vi5jh?si=1Rps7VWDyNt8J9AK" target="_blank" rel="noopener noreferrer">
        <FaYoutube size={30} />
      </a>
      <a href="https://www.linkedin.com/in/sahil-ahmad-363406276/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} />
      </a>

    </div>
    </div>

    </footer>
  )
}

export default Footer;
