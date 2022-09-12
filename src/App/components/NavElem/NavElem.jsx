import React from "react";
import { Link } from "react-router-dom";

function NavElem({ href, label }) {
  return <Link to={href}>{label}</Link>;
}

export default NavElem;
