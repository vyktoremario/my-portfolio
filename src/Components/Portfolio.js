/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./Portfolio.css";

const Portfolio = ({ data }) => {
  if (data) {
    var projects = data.projects.map(function (projects) {
      // var projectImage = "images/portfolio/" + projects.image;
      return (
        <div key={projects.title} class="card animate-card">
          <div class="card__side card__side--front">
            <div class="card__top">
              <figure class="card__img card__img--desktop">
                <img
                  class="card__picture"
                  src={`images/portfolio/${projects.image}`}
                  alt="oville"
                />
              </figure>
            </div>
            <div class="card__detail">
              <h4 class="card__title">{projects.title}</h4>
              <ul class="card__list">
                {projects.descriptions.map((description) => (
                  <>
                    <li class="card__list-item">{description}</li>
                    <div class="card__divider"></div>
                  </>
                ))}
              </ul>
              <div class="card__links">
                <div class="card__demo">
                  <svg class="card__icon">
                    <use href="images/icons/icons.svg#icon-global"></use>
                  </svg>
                  <a target="_blank" href={projects.websiteLink}>
                    Demo
                  </a>
                </div>
                <div class="card__github">
                  <svg class="card__icon">
                    <use href="images/icons/icons.svg#icon-github"></use>
                  </svg>
                  <a target="_blank" href={projects.githubLink}>
                    Github
                  </a>
                </div>
              </div>
              <div class="card__lang">
                {projects.technologies.map((technology) => (
                  <>
                    <figure class="card__lang-fig">
                      <img
                        class="card__lang-img"
                        src={`images/portfolio/icons/${technology.img}`}
                        alt=""
                      />
                      <figcaption class="card__figcaption">
                        {technology.name}
                      </figcaption>
                    </figure>
                  </>
                ))}
              </div>
            </div>
          </div>
          <div class="card__side card__side--back">
            <div class="card__link">
              <div class="card__link-header">
                <svg class="card__link-icon">
                  <use href="images/icons/icons.svg#icon-global"></use>
                </svg>
                <h5>Demo</h5>
              </div>
              <a target="_blank" href={projects.websiteLink}>
                {projects.websiteLink}
              </a>
            </div>
            <div class="card__link">
              <div class="card__link-header">
                <svg class="card__link-icon">
                  <use href="images/icons/icons.svg#icon-github"></use>
                </svg>
                <h5>Github Link</h5>
              </div>
              <a target="_blank" href={projects.githubLink}>
                {projects.githubLink}
              </a>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <section class="projects" id="portfolio">
      <div class="projects__header">
        <h2 class="projects__title section-heading">Projects</h2>
        <svg class="projects__icon">
          <use href="images/icons/icons.svg#icon-shield"></use>
        </svg>
      </div>
      <div className="card-box">{projects}</div>
    </section>
  );
};

export default Portfolio;
