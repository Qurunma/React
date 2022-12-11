import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import "./ChatBar.css";
import MesSend from "./MesSend/MesSend";

function ChatBar() {
  const { id_sender } = useParams();
  const Messages = useSelector((Storage) => Storage.Messages);
  const Users = useSelector((Storage) => Storage.Users);

  return (
    <div className="chat-block">
      <div className="div-res-info">
        <img className="res-photo" src="nika.svg" alt="" />
        <div className="res-info">
          <span className="res-name">{}</span>
          <span className="res-online">Online</span>
        </div>
        <div className="div-more">
          <img className="img-file" src="" alt="" />
          <img className="img-more" src="" alt="" />
        </div>
      </div>
      <div className="div-chat-message">
        {Messages.map((element) => {
          console.log(element);
          console.log(element.id_sender);
          console.log(element.id_recipient);
          console.log(element.text_massage);
          if (
            (element.id_sender == id_sender && element.id_recipient == 1) ||
            (element.id_sender == 1 && element.id_recipient == id_sender)
          ) {
            return (
              <MesSend
                id_sender={element.id_sender}
                id_recipient={element.id_recipient}
                text_message={element.text_massage}
              ></MesSend>
            );
          }
        })}
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
