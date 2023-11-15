import React, { Component } from "react";
import "./work.css";
import Workcollection from "./workcollection";
import Workbutton from "./workbutton";

class Work extends Component {
  render() {
    return (
      <section id="work">
        <div className="container p-5">
          <div class="text2">
            <p class="lead text-light display-1">
              <u> Works </u>{" "}
            </p>
            <p class="display-6 text-light">Some of my works.........</p>
          </div>
          <Workcollection />
          <Workbutton />
        </div>
      </section>
    );
  }
}

export default Work;
