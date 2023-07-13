import "./login.css";
import LoginImg from "./login-img.png";
import Logo from "./logo.svg";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import $ from "jquery";
import validator from "validator";
import ForgotPage from "./forgot";
import { Link } from "react-router-dom";


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const emailCheck = (event) => {
    setEmail(event.target.value);
    setEmailError("");
  };

  const passwordCheck = (event) => {
    setPassword(event.target.value);
    setPasswordError("");
  };

  const validateForm = (event) => {
    event.preventDefault();

    let hasError = false;

    if (!email) {
      setEmailError("Please enter an email address");
      hasError = true;
    } else if (!validator.isEmail(email)) {
      setEmailError("Please enter a valid email address");
      hasError = true;
      console.log(email.value);
    }

    if (!password) {
      setPasswordError("Please enter a password");
      hasError = true;
    } else if (password.length < 8) {
      setPasswordError("Password should be at least 8 characters long");
      hasError = true;
    }

    if (!hasError) {
      console.log(email);
      console.log(password);
      console.log("Form submitted successfully");
      setEmail("");
      setPassword("");
      setEmailError("");
      setPasswordError("");
    }
  };

  const disabledButton = !(email && password);


  return (
    <div className="main-container">
      <div className="slider-container">
        <div className="slider-content">
          <div className="slide">
            <div className="logo-img-banner">
              <img src={LoginImg} alt="login-screen-image" className="login-screen-image" />
            </div>
            <div className="logo-img-content">
              <h1>Welcome to Dreams LMS.</h1>
              <p className="logo-para">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi quae omnis aut quidem quos, exercitationem
                officiis maxime! Vero, consequuntur quos. Iste, architecto quas quaerat accusamus quo facilis? Vero, dolorem
                quo!
              </p>
            </div>
          </div>
          <div className="slide">
            <div className="logo-img-banner">
              <img src={LoginImg} alt="login-screen-image" className="login-screen-image" />
            </div>
            <div className="logo-img-content">
              <h1>Welcome to Dreams LMS.</h1>
              <p className="logo-para">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi quae omnis aut quidem quos, exercitationem
                officiis maxime! Vero, consequuntur quos. Iste, architecto quas quaerat accusamus quo facilis? Vero, dolorem
                quo!
              </p>
            </div>          </div>
          <div className="slide">
            <div className="logo-img-banner">
              <img src={LoginImg} alt="login-screen-image" className="login-screen-image" />
            </div>
            <div className="logo-img-content">
              <h1>Welcome to Dreams LMS.</h1>
              <p className="logo-para">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi quae omnis aut quidem quos, exercitationem
                officiis maxime! Vero, consequuntur quos. Iste, architecto quas quaerat accusamus quo facilis? Vero, dolorem
                quo!
              </p>
            </div>
          </div>
        </div>
        <div className="slider-dots">
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
        <h3 className="form-head">Login to you account</h3>
        <div className="form-content">
          <form onSubmit={validateForm}>
            <label>Username or Email Address </label>
            <br />
            <input
              type="text"
              name="Email"
              className="input"
              value={email}
              onChange={emailCheck}
            />
            {emailError && (
              <div className="error-message" >
                {emailError}
              </div>
            )}
            <br />

            <label>Password </label>
            <br />
            <input
              type="password"
              name="password"
              className="input"
              value={password}
              onChange={passwordCheck}
            />
            {passwordError && (
              <div className="error-message">
                {passwordError}
              </div>
            )}
            <br />

            <div className="check">
              <div className="check-box">
                <input type="checkbox" id="remember" className="checkbox" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <div>
                <Link className="link" to="/forgot">
                  Forgot Password
                </Link>
              </div>
            </div>
            <br />
            <button type="submit" className={`form-btn ${disabledButton ? 'disabled' : ''}`} disabled={disabledButton}>
              Login
            </button>
          </form>
        </div>
        <div>
          <p>
            New User?{" "}
            <a href="./forgot.js" style={{ color: "#FF6575" }}>
              Create an account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
