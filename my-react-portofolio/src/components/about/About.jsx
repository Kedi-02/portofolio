import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="About__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="About__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>300+ WorldWide</small>
            </article>

            <article className="About__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>80+ completed prjoects</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolores
            illo placeat hic nisi laborum voluptatem voluptates magnam, vel
            consequatur recusandae distinctio adipisci amet voluptatibus quae a
            debitis voluptas maiores.
          </p>

          <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;