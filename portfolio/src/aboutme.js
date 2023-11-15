import React, { Component } from "react";
import "./aboutme.css";

class Aboutme extends Component {
  render() {
    return (
      <section id="about-me">
        <div class="container p-5">
          <div class="text3 card-about p-5">
            <p class="lead text-light display-1">
              {" "}
              <u>About me</u>{" "}
            </p>
            <p class="blockquote ">
              {" "}
              <span class="return">class</span>{" "}
              <span class="heading">Adrin T Paul</span> &#123;{" "}
            </p>
            <p class="blockquote  return">constructor() &#123;</p>
            <p class="blockquote  text-content">
              ····<span class="this">this</span>
              <span class="after-this">.name</span> ={" "}
              <span class="name">'Adrin T Paul'</span>{" "}
            </p>
            <p class="blockquote  text-content">
              ····<span class="this">this</span>
              <span class="after-this">.dayOfBirthTimestamp</span> ={" "}
              <span class="dob">29081999</span>{" "}
            </p>
            <p class="blockquote  text-content">
              ····<span class="this">this</span>
              <span class="after-this">.email</span> ={" "}
              <span class="email">'adrinpaul29@gmail.com'</span>{" "}
            </p>
            <p class="blockquote  text-light">&#125; </p>

            <p class="blockquote  heading ">
              workExperience <span class="text-light">( ) &#123;</span>
            </p>
            <p class="blockquote  return">
              return <span class="text-light"> [</span>
            </p>
            <p class="blockquote text-content">
              ......&#123;'June 2019- July 2019' : 'Automobile Service
              Supervisor'&#125;
            </p>
            <p class="blockquote text-content">
              ......&#123;'Aug 2021- March 2022': 'Assistant Executive CS'&#125;
            </p>
            <p class="blockquote text-light">...]</p>
            <p class="blockquote text-light">..&#125;</p>

            <p class="blockquote  heading">
              education <span class="text-light">( ) &#123;&#123; </span>
            </p>
            <p class="blockquote  return">
              return <span class="text-light">[</span>
            </p>
            <p class="blockquote text-content">
              ......&#123; '2014-2015':'St Marys Sen Sec School-Class
              10th'&#125;
            </p>
            <p class="blockquote text-content">
              ......&#123; '2016-2017':'St Marys Sen Sec School- Class
              12th'&#125;
            </p>
            <p class="blockquote text-content">
              ......&#123; '2017-2021':'Noida Institute of Engineering and
              Technology- B.Tech'&#125;
            </p>
            <p class="blockquote text-light">...]</p>
            <p class="blockquote text-light">..&#125;</p>

            <p class="blockquote  heading display-6">
              skills <span class="text-light">( ) &#123; </span>
            </p>
            <p class="blockquote  return">
              return{" "}
              <span class="text-content">
                [ 'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'AJAX',
              </span>{" "}
            </p>
            <p class="blockquote text-content">
              'Node.js', 'Express,js','MongoDB','Mongoose',
            </p>
            <p class="blockquote text-content">'AutoCAD', 'PTC Creo']</p>
            <p class="blockquote text-light">&#125;</p>
            <p class="blockquote text-light">&#125;</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Aboutme;
