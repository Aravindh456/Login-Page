import "./login.css";
import LoginImg from "./login-img.png";
import Logo from "./logo.svg";
import React from "react";
import { useState } from "react";
import validator from "validator";
import ForgotPage from "./forgot";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (event) => {
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
    }

    if (!password) {
      setPasswordError("Please enter a password");
      hasError = true;
    } else if (password.length < 8) {
      setPasswordError("Password should be at least 8 characters long");
      hasError = true;
    }

    if (!hasError) {
      // Perform form submission logic here
      console.log("Form submitted successfully");
    }
  };
  return (
    <div class="main-container">
      <div class="slider-container">
        <div class="slider-content">
          <div class="slide">
            <div class="logo-img-banner">
              <img src={LoginImg} alt="login-screen-image" class="login-screen-image" />
            </div>
            <div class="logo-img-content">
              <h1>Welcome to Dreams LMS.</h1>
              <p class="logo-para">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi quae omnis aut quidem quos, exercitationem
                officiis maxime! Vero, consequuntur quos. Iste, architecto quas quaerat accusamus quo facilis? Vero, dolorem
                quo!
              </p>
            </div>
          </div>
          <div class="slide">
          <div class="logo-img-banner">
              <img src={LoginImg} alt="login-screen-image" class="login-screen-image" />
            </div>
            <div class="logo-img-content">
              <h1>Welcome to Dreams LMS.</h1>
              <p class="logo-para">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi quae omnis aut quidem quos, exercitationem
                officiis maxime! Vero, consequuntur quos. Iste, architecto quas quaerat accusamus quo facilis? Vero, dolorem
                quo!
              </p>
            </div>          </div>
          <div class="slide">
          <div class="logo-img-banner">
              <img src={LoginImg} alt="login-screen-image" class="login-screen-image" />
            </div>
            <div class="logo-img-content">
              <h1>Welcome to Dreams LMS.</h1>
              <p class="logo-para">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi quae omnis aut quidem quos, exercitationem
                officiis maxime! Vero, consequuntur quos. Iste, architecto quas quaerat accusamus quo facilis? Vero, dolorem
                quo!
              </p>
            </div>          </div>
        </div>
        <div class="slider-dots">
          <span class="slider-dot"></span>
          <span class="slider-dot"></span>
          <span class="slider-dot"></span>
        </div>
      </div>

      <div class="form-container">
        <div class="form-logo-content">
          <div>
            <img src={Logo} alt="register-screen-image" class="form-logo-img" />
          </div>
          <div>
            <p>
              <a href="#" class="back-home">
                Back to Home
              </a>
            </p>
          </div>
        </div>
        <h3 class="form-head">Login to you account</h3>
        <div class="form-content">
          <form onSubmit={validateForm}>
            <label>Username or Email Address </label>
            <br />
            <input
              type="text"
              name="Email"
              class="input"
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && (
              <div className="error-message" style={{ color: "red" }}>
                {emailError}
              </div>
            )}
            <br />

            <label>Password </label>
            <br />
            <input
              type="password"
              name="password"
              class="input"
              value={password}
              onChange={handlePasswordChange}
            />
            {passwordError && (
              <div className="error-message" style={{ color: "red" }}>
                {passwordError}
              </div>
            )}
            <br />

            <div class="check">
              <div class="check-box">
                <input type="checkbox" id="remember" class="checkbox" />
                <label for="remember">Remember me</label>
              </div>
              <div>
                <Link className="link" to="/forgot">
                  Forgot Password
                </Link>
              </div>
            </div>
            <br />
            <button type="submit" class="form-btn">
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
