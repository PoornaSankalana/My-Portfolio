/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./portfolio.css";
import { techData } from "./data";
import { GiPlainCircle } from "react-icons/gi";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {techData.map(
          ({ id, image, title, description, techName, color, url }) => {
            return (
              <article key={id} className="portfolio_item">
                <div className="portfolio_item-img">
                  <img src={image} alt="sample" />
                </div>
                <h3>{title}</h3>
                <h5>{description}</h5>
                <div className="techName_container">
                  <GiPlainCircle size={16} style={{ color: `${color}` }} />
                  <small className="techName">&nbsp;&nbsp;{techName}</small>
                </div>
                <div className="portfolio_item-cta">
                  <a href={url} className="btn btn-primary" target="_blank">
                    Github
                  </a>
                </div>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Portfolio;
