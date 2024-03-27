// FooterSocialIcons.js
import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const FooterSocialIcons = () => {
  return (
    <div className="flex justify-between md:w-[75%] my-6">
      <FaFacebookSquare size={30}></FaFacebookSquare>
      <FaInstagramSquare size={30}></FaInstagramSquare>
      <FaTwitterSquare size={30}></FaTwitterSquare>
      <FaGithubSquare size={30}></FaGithubSquare>
      <FaDribbbleSquare size={30}></FaDribbbleSquare>
    </div>
  );
};

export default FooterSocialIcons;
