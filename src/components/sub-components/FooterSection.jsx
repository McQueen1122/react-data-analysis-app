// FooterSection.js
import React from "react";

const FooterSection = ({ title, items }) => {
  return (
    <div>
      <h6 className="font-medium text-gray-400">{title}</h6>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="py-2 text-sm">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;
