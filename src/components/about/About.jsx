import React from "react";
import Back from "../common/Back";
import Heading from "../common/Heading";
import img from "../images/aboutUs.jpeg";
import "./about.css";

const About = () => {
  return (
    <>
      <section className="about">
        <Back name="" title="About Us - Who We Are?" cover={img} />
        <div className="container flex mtop">
          <Heading
            title="Welcome to HOME SPACE"
            subtitle="Bring your dream home live...."
          />
          <div className="left row">
            <p>
              Based out in <span className="abt-top-big-txt">Bhubaneswar</span>,
              Established in the year 2023 with a{" "}
              <span className="abt-top-big-txt">commitment</span> to provide{" "}
              <span className="abt-top-big-txt">quality solutions</span> in the
              field of designing, Home Space is an organization of{" "}
              <span className="abt-top-big-txt">highly creative</span> and
              professionals in the field of architecture, interior design, and
              project management. The core team of Home Space has successfully
              planned, designed & delivered{" "}
              <span className="abt-top-big-txt">refurbishments</span> to a wide
              range of spaces.
            </p>
            <p>
              Be it design & drafting for a{" "}
              <span className="abt-top-big-txt">residential</span> project or
              giving a finishing touch to a{" "}
              <span className="abt-top-big-txt">commercial</span> one, we can
              work on every dimension of the design realm. Our work ethics
              coupled with a proficient team of interior designers can execute
              any kind of project under the sun, within the{" "}
              <span className="abt-top-big-txt">shortest of deadlines</span>.
              The essence of our design is about people and how they live. We
              bring your dream home to live as you wish it to be
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
