import React, { Component } from "react";
import "./workcollection.css";

class Workcollection extends Component {
  render() {
    return (
      <div class="works pt-5 pb-5">
        <div class="collection">
          <div class="card-work">
            <div class="card-image one"></div>
            <div class="card-description">
              <p class="text-title"> Assasins Creed Mirage spoof</p>
            </div>
          </div>

          <div class="card-work">
            <div class="card-image two"></div>
            <div class="card-description">
              <p class="text-title">Farcry 6 </p>
              <p class="text-body">
                Build using HTML <i class="fa-brands fa-html5"></i>, CSS{" "}
                <i class="fa-brands fa-css3-alt"></i>, and Bootstrap{" "}
                <i class="fa-brands fa-bootstrap"></i>
              </p>
            </div>
          </div>

          <div class="card-work">
            <div class="card-image three"></div>
            <div class="card-description">
              <p class="text-title"> Yelpcamp</p>
              <p class="text-body">
                Build using HTML <i class="fa-brands fa-html5"></i>, CSS{" "}
                <i class="fa-brands fa-css3-alt"></i>, and Bootstrap{" "}
                <i class="fa-brands fa-bootstrap"></i>
              </p>
            </div>
          </div>

          <div class="card-work">
            <div class="card-image four"></div>
            <div class="card-description">
              <p class="text-title"> Random Password Generator</p>
              <p class="text-body">
                Build using HTML <i class="fa-brands fa-html5"></i>, CSS{" "}
                <i class="fa-brands fa-css3-alt"></i>, and Bootstrap{" "}
                <i class="fa-brands fa-bootstrap"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Workcollection;
