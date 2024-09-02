/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";
import { FaInstagram, FaYoutube, FaLinkedin, FaEye, FaEyeSlash } from "react-icons/fa";
import { UserData } from "../../context/UserContext";
import { CourseData } from "../../context/CourseContext";

const Login = () => {
  const navigate = useNavigate();
  const { btnLoading, loginUser } = UserData();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { fetchMyCourse } = CourseData();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await loginUser(email, password, navigate, fetchMyCourse);
  };

  return (
    <div className="auth-page">
      <div className="auth-form">
        <h2>Login</h2>
        <form onSubmit={submitHandler}>
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
          <button disabled={btnLoading} type="submit" className="pulse">
            {btnLoading ? "Please Wait..." : "Login"}
          </button>
        </form>
        <p>
          Do not have an account? <Link to="/register">Register</Link>
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
        <p>
    <Link to="/forgot">
  Forgot Password
    </Link>
   </p>
      </div>
    </div>
  );
};

export default Login;
