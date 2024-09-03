/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import { FaPhoneVolume } from "react-icons/fa6";

const Header = ({ isAuth }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="free" className="img" />
      </div>
      <div className="phn">
      <p className="phone"><FaPhoneVolume />+91 9259571146</p>
      </div>
      <div className={`link ${isOpen ? "active" : ""}`}>
        <Link to={"/"} onClick={() => setIsOpen(false)}>Home</Link>
        <Link to={"/course"} onClick={() => setIsOpen(false)}>Courses</Link>
        <Link to={"/about"} onClick={() => setIsOpen(false)}>About</Link>
        <Link to={"/contact"} onClick={() => setIsOpen(false)}>Contact-us</Link>
        <Link to={"/refund"} onClick={() => setIsOpen(false)}>RefundPolicy</Link>
        {isAuth ? (
          <Link to={"/account"} onClick={() => setIsOpen(false)}>Account</Link>
        ) : (
          <Link to={"/login"} onClick={() => setIsOpen(false)}>Login</Link>
        )}
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
};

export default Header;
