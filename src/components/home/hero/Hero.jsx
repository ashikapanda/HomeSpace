import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <br />
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li
                data-target="#myCarousel"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>

            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <img src="./images/hero/Slider1.jpg" alt="Chania" />
                <div className="carousel-caption">
                  <p style={{ fontSize: "3rem" }}>
                    The Key To Great Design Is Capturing The Spirit Of The
                    Client And The Essence Of Space.
                  </p>
                </div>
              </div>

              <div className="item">
                <img src="./images/hero/slider2.jpg" alt="Chania" />
                <div className="carousel-caption">
                  <p style={{ fontSize: "3rem" }}>
                    An Interior Is The Natural Projection Of The Soul.
                  </p>
                </div>
              </div>

              <div className="item">
                <img src="./images/hero/slider3.jpg" alt="Flower" />
                <div className="carousel-caption">
                  <p style={{ fontSize: "3rem" }}>
                    A Space Should Never Allow The Eye To Settle In One Place.
                    It Should Smile At You And Create Fantasy.
                  </p>
                </div>
              </div>
            </div>
            <a
              className="left carousel-control"
              href="#myCarousel"
              role="button"
              data-slide="prev"
            >
              <span
                className="glyphicon glyphicon-chevron-left"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="right carousel-control"
              href="#myCarousel"
              role="button"
              data-slide="next"
            >
              <span
                className="glyphicon glyphicon-chevron-right"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
