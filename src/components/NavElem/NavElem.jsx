import React from "react";
import { Link } from "react-router-dom";

import "./navElemStyle.css";

function NavElem({ href, label, img, className }) {
  return (
    <Link to={href} className={className}>
      <div className="selected"></div>
      <img className="nav-im" src={img} alt="iconMenu" />
      <span className="text-nav">{label}</span>
    </Link>
  );
}

export default NavElem;
