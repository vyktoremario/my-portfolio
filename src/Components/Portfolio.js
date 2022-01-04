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
                src="./assets/images/music-box-img.png"
                alt="oville"
              />
            </figure>
          </div>
          <div class="card__detail">
            <h4 class="card__title">Music Box</h4>
            <ul class="card__list">
              <li class="card__list-item">Search For Music</li>
              <div class="card__divider"></div>
              <li class="card__list-item">Create Playlist</li>
              <div class="card__divider"></div>
              <li class="card__list-item">Library (Album And Playlist)</li>
              <div class="card__divider"></div>
              <li class="card__list-item">Browse Genre/Artist/Album</li>
              <li class="card__list-item">Music Player Controls</li>
            </ul>
            <div class="card__links">
              <div class="card__demo">
                <svg class="card__icon">
                  <use
                    href="images/icons/icons.svg#icon-global"
                  ></use>
                </svg>
                <a
                  target="_blank"
                  href="https://themusicbox.netlify.app/home"
                  >Demo</a>
              </div>
              <div class="card__github">
                <svg class="card__icon">
                  <use
                    href="images/icons/icons.svg#icon-github"
                  ></use>
                </svg>
                <a
                  target="_blank"
                  href="https://github.com/oluSammy/music-box-backend"
                  >Github</a>
              </div>
            </div>
            <div class="card__lang">
              <figure class="card__lang-fig">
                <img
                  class="card__lang-img"
                  src="https://cdn.iconscout.com/icon/free/png-512/node-js-1-1174935.png"
                  alt=""
                />
                <figcaption class="card__figcaption">Node</figcaption>
              </figure>
              <figure class="card__lang-fig">
                <img
                  class="card__lang-img"
                  src="images/portfolio/icons/MongoDB.jpeg"
                  alt=""
                />
                <figcaption class="card__figcaption">MongoDB</figcaption>
              </figure>
              <figure class="card__lang-fig">
                <img
                  class="card__lang-img"
                  src="images/portfolio/icons/React.webp"
                  alt=""
                />
                <figcaption class="card__figcaption">React</figcaption>
              </figure>
              <figure class="card__lang-fig">
                <img
                  class="card__lang-img"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNvlAM2kg5H1ufCzBW7GjzCo77Ys_neYxOHQ&usqp=CAU"
                  alt=""
                />
                <figcaption class="card__figcaption">Express</figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div class="card__side card__side--back">
          <div class="card__link">
            <div class="card__link-header">
              <svg class="card__link-icon">
                <use
                  href="images/icons/icons.svg#icon-global"
                ></use>
              </svg>
              <h5>Demo</h5>
            </div>
            <a target="_blank" href="https://themusicbox.netlify.app"
              >https://themusicbox.netlify.app</a>
          </div>
          <div class="card__link">
            <div class="card__link-header">
              <svg class="card__link-icon">
                <use
                  href="images/icons/icons.svg#icon-github"
                ></use>
              </svg>
              <h5>Github Link</h5>
            </div>
            <a
              target="_blank"
              href="https://github.com/oluSammy/music-box-backend"
              >https://github.com/oluSammy/music-box-backend</a>
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
        <div className="card-box">
        {projects}
        </div>
    </section>
  );
};

export default Portfolio;
