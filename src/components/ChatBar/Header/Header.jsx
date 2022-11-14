import React from "react";

function Header(path, name) {
  return (
    <div className="chat-header">
      <img src={path} alt="" />
    </div>
  );
}

export default Header;
