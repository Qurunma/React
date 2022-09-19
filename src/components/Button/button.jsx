import React from "react";

import "./buttonStyle.css";

function Button() {
  return (
    <button className="create-chat-button">
      <img className="im-create-chat-button" src="plus.svg" alt="" />
      <span className="text-create-chat-button">Create new chat</span>
    </button>
  );
}

export default Button;
