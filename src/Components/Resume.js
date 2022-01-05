import React from "react";

const Resume = ({ data }) => {
  if (data) {
    var skillmessage = data.skillmessage;
    var education = data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });
    var work = data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });
    // var skills = data.skills.map(function (skills) {
    //   var className = "bar-expand " + skills.name.toLowerCase();
    //   return (
    //     <li key={skills.name}>
    //       <span style={{ width: skills.level }} className={className}></span>
    //       <em>{skills.name}</em>
    //     </li>
    //   );
    // });
  }

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{work}</div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="dev" id="dev">
          <p>{skillmessage}</p>
            <div className="dev__container animate-dev">
              <div className="dev__icon-box">
                <figure className="dev__figure">
                  <img
                    src="images/portfolio/icons/node-js-logo.png"
                    alt=""
                    className="dev__tool-icon"
                  />
                </figure>
                <p className="dev__icon-title">Node.js</p>
              </div>
              <div className="dev__icon-box">
                <figure className="dev__figure">
                  <img
                    src="images/portfolio/icons/react-icon.png"
                    alt=""
                    className="dev__tool-icon"
                  />
                </figure>
                <p className="dev__icon-title">React</p>
              </div>
              <div className="dev__icon-box">
                <figure className="dev__figure">
                  <img
                    src="images/portfolio/icons/express.webp"
                    alt=""
                    className="dev__tool-icon"
                  />
                </figure>
                <p className="dev__icon-title">Express</p>
              </div>
              <div className="dev__icon-box">
                <figure className="dev__figure">
                  <img
                    src="images/portfolio/icons/js-icon.png"
                    alt=""
                    className="dev__tool-icon"
                  />
                </figure>
                <p className="dev__icon-title">Javascript</p>
              </div>
              <div className="dev__icon-box">
                <figure className="dev__figure">
                  <img
                    src="images/portfolio/icons/ts-logo.svg"
                    alt=""
                    className="dev__tool-icon"
                  />
                </figure>
                <p className="dev__icon-title">Typescript</p>
              </div>
              <div className="dev__icon-box">
                <figure className="dev__figure">
                  <img
                    src="images/portfolio/icons/MongoDB.jpeg"
                    alt=""
                    className="dev__tool-icon"
                  />
                </figure>
                <p className="dev__icon-title">MongoDb</p>
              </div>
              <div className="dev__icon-box">
                <figure className="dev__figure">
                  <img
                    src="images/portfolio/icons/redux-icon.png"
                    alt=""
                    className="dev__tool-icon"
                  />
                </figure>
                <p className="dev__icon-title">Redux</p>
              </div>
              <div className="dev__icon-box">
                <figure className="dev__figure">
                  <img
                    src="images/portfolio/icons/circlr-ci.png"
                    alt=""
                    className="dev__tool-icon"
                  />
                </figure>
                <p className="dev__icon-title">Circle CI</p>
              </div>
              <div className="dev__icon-box">
                <figure className="dev__figure">
                  <img
                    src="images/portfolio/icons/jest-logo.png"
                    alt=""
                    className="dev__tool-icon"
                  />
                </figure>
                <p className="dev__icon-title">Jest</p>
              </div>
              <div className="dev__icon-box">
                <figure className="dev__figure">
                  <img
                    src="images/portfolio/icons/firebase-icon.webp"
                    alt=""
                    className="dev__tool-icon"
                  />
                </figure>
                <p className="dev__icon-title">Firebase</p>
              </div>
              <div className="dev__icon-box">
                <figure className="dev__figure">
                  <img
                    src="https://www.kindpng.com/picc/m/778-7783228_jira-logo-jira-cloud-icon-transparent-hd-png.png"
                    alt=""
                    className="dev__tool-icon"
                  />
                </figure>
                <p className="dev__icon-title">Jira</p>
              </div>
              <div className="dev__icon-box">
                <figure className="dev__figure">
                  <img
                    src="images/portfolio/icons/git-icon.png"
                    alt=""
                    className="dev__tool-icon"
                  />
                </figure>
                <p className="dev__icon-title">Git</p>
              </div>
              <div className="dev__icon-box">
                <figure className="dev__figure">
                  <img
                    src="images/portfolio/icons/vs-code-icon.jpg"
                    alt=""
                    className="dev__tool-icon"
                  />
                </figure>
                <p className="dev__icon-title">Vs code</p>
              </div>

              <div className="dev__icon-box">
                <figure className="dev__figure">
                  <img
                    src="images/portfolio/icons/css-icon.png"
                    alt=""
                    className="dev__tool-icon"
                  />
                </figure>
                <p className="dev__icon-title">CSS</p>
              </div>
              <div className="dev__icon-box">
                <figure className="dev__figure">
                  <img
                    src="images/portfolio/icons/sass-icon.png"
                    alt=""
                    className="dev__tool-icon"
                  />
                </figure>
                <p className="dev__icon-title">SASS</p>
              </div>
              <div className="dev__icon-box">
                <figure className="dev__figure">
                  <img
                    src="images/portfolio/icons/material-ui-icon.png"
                    alt=""
                    className="dev__tool-icon"
                  />
                </figure>
                <p className="dev__icon-title">Material-ui</p>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Resume;
