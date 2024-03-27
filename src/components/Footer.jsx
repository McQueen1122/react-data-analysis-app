// Footer.js
import React from "react";
import FooterLinks from "./sub-components/FooterLinks";
import FooterSocialIcons from "./sub-components/FooterSocialIcons";

const Footer = () => {
  const sections = [
    {
      title: "Solutions",
      items: ["Analytics", "Marketing", "Commerce", "Insights"],
    },
    {
      title: "Support",
      items: ["Pricing", "Documentation", "Guides", "Status"],
    },
    {
      title: "Solutions",
      items: ["Analytics", "Marketing", "Commerce", "Insights"],
    },
    {
      title: "Support",
      items: ["Pricing", "Documentation", "Guides", "Status"],
    },
    // Add more sections as needed
  ];

  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          quibusdam provident, magnam ea cupiditate, eligendi deleniti minima
        </p>
        <FooterSocialIcons />
      </div>
      <FooterLinks sections={sections} />
    </div>
  );
};

export default Footer;
