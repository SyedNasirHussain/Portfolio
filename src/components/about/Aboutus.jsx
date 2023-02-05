import React from "react";
import "./Aboutus.css";
import Aboutme from "../../assets/about-me.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const Aboutus = () => {
  return (
    <section id="Aboutus">
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-img">
            <img src={Aboutme} alt="My-Picture" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-icon" />
              <h5>Working Experience</h5>
              <small>5+ Year Working</small>
            </article>

            {/* <article className="about-card">
              <FiUsers className="about-icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide </small>
            </article> */}

            <article className="about-card">
              <VscFolderLibrary className="about-icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>
          I have 5+ years’ experience and
seeking a challenging position and
a chance to work in a progressive
environment with opportunities for
career growth, where I can
interactively use creative concepts
as well as educational qualifications
to work hard in order to contribute
towards achieving the
organizational goals.

          </p>

          <a href="#Contactus" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
