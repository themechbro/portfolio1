import React, { Component } from "react";
import "./firstframe.css";

class Firstframe extends Component {
  render() {
    return (
      <div class="first-frame p-5">
        <div class="text1">
          <p class="lead text-light display-1">
            <u> Home</u>
          </p>
          <p class="display-6 text-light">
            Hi, my name is <b class="text-dark">Adrin T Paul </b>{" "}
          </p>
          <p class="display-6 text-light">
            I design and develop <em>Websites </em>
          </p>
          <p class="lead text-light">Let me show you</p>
          <a class="btn btn-lg" id="scroll-btn" href="#work">
            {" "}
            <i class="fa-solid fa-angles-down text-light"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Firstframe;
