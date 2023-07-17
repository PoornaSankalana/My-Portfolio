/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header_social">
      <a href="#" target="_blank">
        <BsLinkedin />
      </a>
      <a href="#" target="_blank">
        <BsGithub />
      </a>
      <a href="#" target="_blank">
        <BsFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
