import React from "react";
import { NavLink } from "react-router-dom";

import "./chatElemStyle.css";

function ChatsElem({
  index,
  photo,
  name,
  isOnline,
  status,
  lastMessage,
  lastMessageText,
  numberOfNotReaded,
}) {
  return (
    <NavLink to={"/chats/" + index}>
      <div className="chatElem">
        <div className="recipient-profile">
          <div className="recipient-header">
            <div className="recipient-in">
              {isOnline ? <img className="recipient-online"></img> : undefined}
              <img src={photo} alt="" />
              <div className="recipient-info">
                <span className="recipient-name">{name}</span>
                <span className="recipient-status">{status}</span>
              </div>
            </div>
            <span className="recipient-lastMessage">{lastMessage}</span>
          </div>
          <div className="recipient-body">
            <span className="recipient-textMessage">{lastMessageText}</span>
            <span className="recipient-notReaded">{numberOfNotReaded}</span>
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default ChatsElem;
