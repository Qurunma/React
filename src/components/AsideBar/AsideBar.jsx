import React from "react";
import Nav from "../Nav";
import Profile from "../Profile";

import "./AsideBar.css";

function AsideBar() {
  return (
    <aside>
      <Profile name="Henry Jabbawockiez" photo="ProfilePhoto.svg" />
      <Nav />
    </aside>
  );
}

export default AsideBar;
