import React from "react";
import Top from "./top";
// import ChatsElem from "./ChatsElem";
import SearchChat from "./search";

import "./chatsStyle.css";

function ChatsMenu() {
  return (
    <div className="chatsMenu">
      <Top></Top>
      <SearchChat></SearchChat>
    </div>
  );
}

export default ChatsMenu;
