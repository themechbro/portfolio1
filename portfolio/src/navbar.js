import React, { Component } from "react";
import Firstframe from "./firstframe";
import "./navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="container p-5">
        <nav className="navbar navbar-expand-lg navbar-light  shadow-lg rounded">
          <div class="container">
            <a href="#" class="navbar-brand navbar-dark">
              <strong> </strong> ADRIN <strong> </strong>{" "}
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <div class="navbar-nav ms-auto">
                <a href="#" class="nav-link">
                  Home
                </a>
                <a href="#work" class="nav-link">
                  My Works
                </a>
                <a href="#about-me" class="nav-link">
                  About Me{" "}
                </a>
                <a href="#contact-me" class="nav-link">
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </nav>
        <Firstframe />
      </div>
    );
  }
}

export default Navbar;
