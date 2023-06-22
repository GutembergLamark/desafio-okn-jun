import React from "react";
import ListIcon from "./ListIcon";
import "./BenefitsItem.scss";

const BenefitsItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="item">
      <ListIcon />
      <p>{children}</p>
    </li>
  );
};

export { BenefitsItem };
