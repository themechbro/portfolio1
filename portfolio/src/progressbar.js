import React, { Component } from "react";
import "./progressbar.css";

class Progressbar extends Component {
  render() {
    window.addEventListener("scroll", function () {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollProgress = (scrollTop / scrollHeight) * 100;

      const progressBarFill = document.getElementById("progress-bar-fill");
      progressBarFill.style.width = scrollProgress + "%";
    });
    return (
      <div id="progress-bar">
        <div id="progress-bar-fill"></div>
      </div>
    );
  }
}

export default Progressbar;
