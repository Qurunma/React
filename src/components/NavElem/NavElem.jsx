import React from "react";
import { NavLink } from "react-router-dom";

import "./navElemStyle.css";

function NavElem({ href, label, img }) {
  return (
    <NavLink
      to={href}
      className={({ isActive }) => (isActive ? `navElem selected` : `navElem`)}
    >
      <img className="nav-im" src={img} alt="iconMenu" />
      <span className="text-nav">{label}</span>
    </NavLink>
  );
}

export default NavElem;
