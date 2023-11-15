import React, { Component } from "react";
import "./trailingpointer.css";

class Trailingpointer extends Component {
  render() {
    document.addEventListener("mousemove", function (e) {
      var trailingCursor = document.getElementById("trailing-pointer");
      trailingCursor.style.left = e.clientX + "px";
      trailingCursor.style.top = e.clientY + "px";
    });

    // JavaScript to adjust the trailing element size with the window size
    window.addEventListener("resize", function () {
      var trailingCursor = document.getElementById("trailing-pointer");
      trailingCursor.style.width =
        "20px"; /* Customize the size of the trailing element */
      trailingCursor.style.height = "20px";
    });
    return <div id="trailing-pointer"></div>;
  }
}
export default Trailingpointer;
