import React from "react";

import "./ChatsElemStyle.css";

function ChatElem(
  photo,
  name,
  isOnline,
  status,
  lastMessage,
  lastMessageText,
  numberOfNotReaded
) {
  return (
    <div className="chatElem">
      <div className="profile-recipient">
        <img src="" alt="" />
        <span></span>
      </div>
    </div>
  );
}
