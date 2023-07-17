/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import CV from "../../Assets/cv.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn button_slide slide_right">
        Download CV
      </a>
      <a href="#contact" className="btn btn-secondary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
