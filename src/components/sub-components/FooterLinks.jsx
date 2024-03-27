// FooterLinks.js
import React from "react";
import FooterSection from "./FooterSection";

const FooterLinks = ({ sections }) => {
  return (
    <div className="lg:col-span-2 flex justify-between">
      {sections.map((section, index) => (
        <FooterSection key={index} {...section} />
      ))}
    </div>
  );
};

export default FooterLinks;
