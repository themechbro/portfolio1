import React, { Component } from "react";
import "./loadingscreen.css";

class Loadingscreen extends Component {
  render() {
    window.addEventListener("load", function () {
      const loadingScreen = document.getElementById("loading-screen");
      loadingScreen.style.display = "none";
    });
    return (
      <div id="loading-screen">
        <i id="loading-icon" class="fa fa-spinner fa-spin"></i>
      </div>
    );
  }
}

export default Loadingscreen;
