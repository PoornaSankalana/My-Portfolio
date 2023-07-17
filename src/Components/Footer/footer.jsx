/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.css";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <h2 className="footer_logo">Poorna Sankalana</h2>

      <ul className="permalinks">
        <li className="hover-underline-animation">
          <a href="#">Home</a>
        </li>
        <li className="hover-underline-animation">
          <a href="#about">About</a>
        </li>
        <li className="hover-underline-animation">
          <a href="#experience">Experience</a>
        </li>
        <li className="hover-underline-animation">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="hover-underline-animation">
          <a href="#testimonials">Testimonials</a>
        </li>
        <li className="hover-underline-animation">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a
          href="https://www.facebook.com/profile.php?id=100091867815707"
          target="_blank"
        >
          <BsFacebook />
        </a>
        <a href="https://www.instagram.com/poorna_sankalana/" target="_blank">
          <AiFillInstagram />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Poorna Sankalana. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
