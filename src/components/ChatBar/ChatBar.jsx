import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "./ChatBar.css";

function ChatBar() {
  const id = useParams().id;
  const account = useSelector((Storage) => Storage.Users);
  console.log(account);
  return (
    <div className="chat-block">
      <div className="div-res-info">
        <img className="res-photo" src="nika.svg" alt="" />
        <div className="res-info">
          <span className="res-name">Nika</span>
          <span className="res-online">Online</span>
        </div>
        <div className="div-more">
          <img className="img-file" src="" alt="" />
          <img className="img-more" src="" alt="" />
        </div>
      </div>
      <div className="div-chat-message">
        <div className="message-res">
          <img className="message-res-photo" src="" alt="" />
          <div className="message-res">
            <span className="text-message-res"></span>
          </div>
          <img className="message-more-res" src="" alt="" />
        </div>
        <div className="message-user">
          <img className="message-user-photo" src="" alt="" />
          <div className="message-user">
            <span className="text-message-user"></span>
          </div>
          <img className="message-more-user" src="" alt="" />
        </div>
      </div>
      <div className="input-message">
        <div className="add-files">
          <img className="img-add" src="" alt="" />
        </div>
        <input className="chat-input" type="text" placeholder="Text message" />
        <img className="add-emoji" src="" alt="" />
        <img className="send-message" src="" alt="" />
      </div>
    </div>
  );
}

export default ChatBar;
