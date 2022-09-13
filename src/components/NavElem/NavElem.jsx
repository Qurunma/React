import React from "react";
import { Link } from "react-router-dom";

import "./navElemStyle.css";

function NavElem({ href, label, img, className }) {
  return (
    <Link to={href} className={className}>
      <img src={img} alt="iconMenu" />
      <span>{label}</span>
    </Link>
  );
}

export default NavElem;
