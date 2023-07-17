/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header_social">
      <a
        href="https://www.linkedin.com/in/poorna-sankalana-67213620b/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/PoornaSankalana" target="_blank">
        <BsGithub />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100091867815707"
        target="_blank"
      >
        <BsFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
