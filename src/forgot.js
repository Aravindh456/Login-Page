import "./login.css";
import LoginImg from "./login-img.png";
import Logo from "./logo.svg";
import React from "react";
import { useState } from "react";
import validator from "validator";
import LoginPage from "./login";
import {Link} from 'react-router-dom';
const ForgotPage = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const emailChange = (event) => {
    setEmail(event.target.value);
  };
  const validateForm = (event) => {
    event.preventDefault();

    if (!email) {
      setEmailError('Please enter an email address');
    } else if (!validator.isEmail(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
      console.log(email);
      setSuccessMessage("Email Sended Successfully !");
      setEmail("")
      setEmailError("")
    }
  };

   
 

  return (
    <div className="main-container">
      <div className="slider-container">
      <div className="slider-content">
          <div className="slide">
            {/* <div className="logo-img-banner">
              <img src={LoginImg} alt="login-screen-image" className="login-screen-image" />
            </div> */}
            <div className="logo-img-content">
              <h1>Welcome to Dreams LMS Courses.</h1>
              <p className="logo-para">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi quae omnis aut quidem quos, exercitationem
                officiis maxime! Vero, consequuntur quos. Iste, architecto quas quaerat accusamus quo facilis? Vero, dolorem
                quo!
              </p>
            </div>
          </div>
          <div className="slide">
            {/* <div className="logo-img-banner">
              <img src={LoginImg} alt="login-screen-image" className="login-screen-image" />
            </div> */}
            <div className="logo-img-content">
              <h1>Welcome to Dreams LMS Courses.</h1>
              <p className="logo-para">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi quae omnis aut quidem quos, exercitationem
                officiis maxime! Vero, consequuntur quos. Iste, architecto quas quaerat accusamus quo facilis? Vero, dolorem
                quo!
              </p>
            </div>          </div>
          <div className="slide">
            {/* <div className="logo-img-banner">
              <img src={LoginImg} alt="login-screen-image" className="login-screen-image" />
            </div> */}
            <div className="logo-img-content">
              <h1>Welcome to Dreams LMS Courses.</h1>
              <p className="logo-para">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi quae omnis aut quidem quos, exercitationem
                officiis maxime! Vero, consequuntur quos. Iste, architecto quas quaerat accusamus quo facilis? Vero, dolorem
                quo!
              </p>
            </div>
          </div>
        </div>
        <div className="forgot-slider-dots">
          <span className="slider-dot"></span>
          <span className="slider-dot"></span>
          <span className="slider-dot"></span>
        </div>
      </div>
      <div className="form-container">
        <div className="form-logo-content">
          <div>
            <img src={Logo} alt="register-screen-image" className="form-logo-img" />
          </div>
          <div>
            <p>
              <a href="#" className="back-home">
                Back to Home
              </a>
            </p>
          </div>
        </div>
        <h1 className="form-head">Forgot Password?</h1>
        <p className="form-para">Enter your email to reset your password.</p>
        <div className="form-content">
          <form onSubmit={validateForm}>
            <label>Username or Email Address </label>
            <br />
            <input type="text" name="Email" className="input" value={email} onChange={emailChange} />
            {emailError && <div className="error-message">{emailError}</div>}
            <br />
            <button type="submit" className="form-btn">
             Reset Password
            </button>
            {successMessage && <div className="success-message">{successMessage}</div>}
          </form>
        </div>
        <div>
          <p>
            Already known Password?{" "}
            <Link className="link" to="/login" style={{ color: "#FF6575" }}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ForgotPage;
