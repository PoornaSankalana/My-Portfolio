import React from "react";
import "./experience.css";
import { FaJava, FaNodeJs, FaPhp, FaReact } from "react-icons/fa";
import { BiLogoCss3, BiLogoMongodb } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { SiExpress, SiPython, SiTailwindcss, SiDotnet } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io";
import { DiMsqlServer } from "react-icons/di";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <AiFillHtml5 className="experience_details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BiLogoCss3 className="experience_details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <IoLogoJavascript className="experience_details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <i
                className="bi-bootstrap experience_details-icon"
                style={{ marginTop: "-12px" }}
              ></i>
              {/*<bootstrap-fill className="experience_details-icon" />*/}
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <SiTailwindcss className="experience_details-icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <FaReact className="experience_details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/*END OF FRONTEND*/}
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <FaNodeJs className="experience_details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BiLogoMongodb className="experience_details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <FaPhp className="experience_details-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Moderate</small>
              </div>
            </article>

            <article className="experience_details">
              <GrMysql className="experience_details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <SiPython className="experience_details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Moderate</small>
              </div>
            </article>

            <article className="experience_details">
              <DiMsqlServer className="experience_details-icon" />
              <div>
                <h4>MS SQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <FaJava className="experience_details-icon" />
              <div>
                <h4>Java</h4>
                <small className="text-light">Moderate</small>
              </div>
            </article>

            <article className="experience_details">
              <SiExpress className="experience_details-icon" />
              <div>
                <h4>Express JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <SiDotnet className="experience_details-icon" />
              <div>
                <h4>C# .NET</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
