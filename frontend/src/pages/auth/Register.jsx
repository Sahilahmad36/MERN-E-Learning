// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";
import { FaInstagram, FaYoutube, FaLinkedin, FaEye, FaEyeSlash} from "react-icons/fa"; 
import { UserData } from "../../context/UserContext";


const Register = () => {
  const navigate = useNavigate();
  const { btnLoading, registerUser } = UserData();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await registerUser(name, email, password, number, navigate);
  };

  return (
    <div className="auth-page">
      <div className="auth-form">
        <h2>Register</h2>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
           <input
            type="text"
            placeholder="Enter your phone number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="password-input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <button type="submit" disabled={btnLoading} className="pulse">
            {btnLoading ? "Please Wait..." : "Register"}
          </button>
        </form>
        <p>
          Have an account? <Link to="/login">Login</Link>
        </p>
        <div className="social-icons">
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
    </div>
  );
}

export default Register;

