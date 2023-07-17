/* eslint-disable jsx-a11y/img-redundant-alt */
// noinspection HtmlUnknownAnchorTarget

import React from "react";
import ME from "../../Assets/me.jpg";
import "./about.css";
import { BsFillLaptopFill } from "react-icons/bs";
import { VscFolderLibrary } from "react-icons/vsc";
import { GiGraduateCap } from "react-icons/gi";

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="about-image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <GiGraduateCap className="about_icon" />
              <h5>Education</h5>
              <small>4th Year Undergraduate</small>
            </article>

            <article className="about_card">
              <BsFillLaptopFill className="about_icon" />
              <h5>Carrier</h5>
              <small>Trainee Software Engineer</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>10+ Projects</small>
            </article>
          </div>
          <p>
            I am a student pursuing a degree in Software Engineering at SLIIT. I
            recently finished an internship as a Software Engineer at Antler IT
            Solutions. Currently, I am focusing on my academic studies and
            actively seeking to expand my knowledge of the latest technologies
            in the IT field. I have experience with various programming
            languages like Node.js, TypeScript, Python, Java, and React. My
            areas of interest revolve around Software Development, Data Science,
            Artificial Intelligence, and neural networks. I make it a point to
            stay up to date with the latest advancements in the IT industry.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
