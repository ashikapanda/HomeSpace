import React from "react";
import img from "../images/services.jpg";
import Back from "../common/Back";
import "../home/featured/Featured.css";
import service1 from "../images/serviceImg/services1.jpg";
import service2 from "../images/serviceImg/services2.jpg";
import service3 from "../images/serviceImg/services3.jpg";
import service4 from "../images/serviceImg/services4.jpg";
import icon1 from "../images/serviceImg/Icon1.svg";
import icon2 from "../images/serviceImg/Icon2.svg";
import icon3 from "../images/serviceImg/Icon3.svg";
import icon4 from "../images/serviceImg/Icon4.svg";
import "./services.css";
import project1 from "../images/project1.jpg";
import project2 from "../images/project2.jpg";
import project3 from "../images/project3.jpg";
import project4 from "../images/project4.jpg";
import project5 from "../images/project5.jpg";
import project6 from "../images/project6.jpg";
import project7 from "../images/project7.jpg";
import project8 from "../images/project8.jpg";

const Services = () => {
  return (
    <section className="services mb">
      <Back name="" title="Services - Our Services" cover={img} />
      <div className="services">
        <div className="howWeWork">
          <div className="how-title">
            <h1>Our Design Philosophy</h1>
          </div>
          <div className="how-content">
            <div className="hc-img">
              <img src={service1} alt="concept"></img>
            </div>
            <div className="hc-text">
              <div className="hc-text-anima">
                <img src={icon1} alt="icon"></img>
                <p>01</p>
              </div>
              <div className="hc-subtext">
                <h2>Concept & Details</h2>
                <p>
                  It is a long established fact will be distracted. Lorem Ipsum
                  is simply dummy from text of the and typesetting indufstry.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="how-content">
            <div className="hc-text">
              <div className="hc-text-anima">
                <img src={icon2} alt="icon"></img>
                <p>02</p>
              </div>
              <div className="hc-subtext">
                <h2>Idea for work</h2>
                <p>
                  It is a long established fact will be distracted. Lorem Ipsum
                  is simply dummy from text of the and typesetting indufstry.{" "}
                </p>
              </div>
            </div>
            <div className="hc-img">
              <img src={service2} alt="concept"></img>
            </div>
          </div>

          <div className="how-content">
            <div className="hc-img">
              <img src={service3} alt="concept"></img>
            </div>
            <div className="hc-text">
              <div className="hc-text-anima">
                <img src={icon3} alt="icon"></img>
                <p>03</p>
              </div>
              <div className="hc-subtext">
                <h2>Design</h2>
                <p>
                  It is a long established fact will be distracted. Lorem Ipsum
                  is simply dummy from text of the and typesetting indufstry.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="how-content">
            <div className="hc-text">
              <div className="hc-text-anima">
                <img src={icon4} alt="icon"></img>
                <p>04</p>
              </div>
              <div className="hc-subtext">
                <h2>Perfection</h2>
                <p>
                  It is a long established fact will be distracted. Lorem Ipsum
                  is simply dummy from text of the and typesetting indufstry.{" "}
                </p>
              </div>
            </div>
            <div className="hc-img">
              <img src={service4} alt="concept"></img>
            </div>
          </div>
        </div>
        <h1 className="text-center">Our Projects</h1>
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="gallery">
            <img src={project1} alt="pro1" />
            <div class="desc">Add a description of the image here</div>
          </div>
          <div className="gallery">
            <img src={project2} alt="pro2" />
            <div class="desc">Add a description of the image here</div>
          </div>
          <div className="gallery">
            <img src={project3} alt="pro3" />
            <div class="desc">Add a description of the image here</div>
          </div>
          <div className="gallery">
            <img src={project4} alt="pro4" />
            <div class="desc">Add a description of the image here</div>
          </div>
          <div className="gallery">
            <img src={project5} alt="pro5" />
            <div class="desc">Add a description of the image here</div>
          </div>
          <div className="gallery">
            <img src={project6} alt="pro6" />
            <div class="desc">Add a description of the image here</div>
          </div>
          <div className="gallery">
            <img src={project7} alt="pro7" />
            <div class="desc">Add a description of the image here</div>
          </div>
          <div className="gallery">
            <img src={project8} alt="pro8" />
            <div class="desc">Add a description of the image here</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
