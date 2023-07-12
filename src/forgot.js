import "./login.css";
import LoginImg from "./login-img.png";
import Logo from "./logo.svg";
import React from "react";
import LoginPage from "./login";
import {Link} from 'react-router-dom';
function ForgotPage() {
  return (
    <div class="main-container">
      <div class="slider-container">
        <div class="slider-content">
          <div class="logo-img-banner">
            <img
              src={LoginImg}
              alt="login-screen-image"
              class="login-screen-image"
            />
          </div>
          <div class="logo-img-content">
            <h1 style={{ color: "#002058", fontWeight: "500" }}>
              Welcome to Dreams LMS.
            </h1>
            <p class="logo-para">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
              quae omnis aut quidem quos, exercitationem officiis maxime! Vero,
              consequuntur quos. Iste, architecto quas quaerat accusamus quo
              facilis? Vero, dolorem quo!
            </p>
          </div>
        </div>
      </div>
      {/* <div class="slider-container">
          <div class="slider-content">
            <div class="logo-img-banner">
              <img
                src={LoginImg}
                alt="login-screen-image"
                class="login-screen-image"
              />
            </div>
            <div class="logo-img-content">
              <h2>Welcome to Dreams LMS.</h2>
              <p class="logo-para">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
                quae omnis aut quidem quos, exercitationem officiis maxime! Vero,
                consequuntur quos. Iste, architecto quas quaerat accusamus quo
                facilis? Vero, dolorem quo!
              </p>
            </div>
          </div>
        </div>
        <div class="slider-container">
          <div class="slider-content">
            <div class="logo-img-banner">
              <img
                src={LoginImg}
                alt="login-screen-image"
                class="login-screen-image"
              />
            </div>
            <div class="logo-img-content">
              <h2>Welcome to Dreams LMS.</h2>
              <p class="logo-para">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
                quae omnis aut quidem quos, exercitationem officiis maxime! Vero,
                consequuntur quos. Iste, architecto quas quaerat accusamus quo
                facilis? Vero, dolorem quo!
              </p>
            </div>
          </div>
        </div> */}
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
        <h1 class="form-head">Forgot Password?</h1>
        <p class="form-para">Enter your email to reset your password.</p>
        <div class="form-content">
          <form>
            <label>Username or Email Address </label>
            <br />
            <input type="text" name="Email" class="input" />
            <br />
            <button type="submit" class="form-btn">
             Reset Password
            </button>
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
