import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./ChatBar.css";
import MesSend from "./MesSend/MesSend";

async function postMess() {
  const id_recipient = window.location.href
    .split("/")
    [window.location.href.split("/").length - 1].split("")[0];

  console.log(id_recipient);

  let inputValue = document.querySelector(".chat-input").value.trim();
  let postVal = JSON.stringify({
    text_massage: inputValue,
  });
  let requestOptions = {
    method: "POST",
    body: postVal,
    redirect: "follow",
  };
  await fetch(
    `http://localhost:5000/post/message/1/${id_recipient}`,
    requestOptions
  )
    .then((response) => response.text())
    .catch((error) => console.log("error", error));
  console.log("entre");
  window.location.href = `http://localhost:3000/chats/${id_recipient}`;
}
function ChatBar() {
  const { id_sender } = useParams();
  const Messages = useSelector((Storage) => Storage.Messages);
  const Users = useSelector((Storage) => Storage.Users);

  return (
    <div className="chat-block">
      <div className="div-res-info">
        <img className="res-photo" src="nika.svg" alt="" />
        <div className="res-info">
          <span className="res-name">
            {Users[
              Messages.map((element) => {
                if (element.id_sender == id_sender && element.id_recipient == 1)
                  return element;
              })[0]?.id_recipient ||
                Messages.map((element) => {
                  if (
                    element.id_recipient == id_sender &&
                    element.id_sender == 1
                  )
                    return element;
                })[0]?.id_recipient
            ]?.name +
              " " +
              Users[
                Messages.map((element) => {
                  if (
                    element.id_sender == id_sender &&
                    element.id_recipient == 1
                  )
                    return element;
                })[0]?.id_recipient ||
                  Messages.map((element) => {
                    if (
                      element.id_recipient == id_sender &&
                      element.id_sender == 1
                    )
                      return element;
                  })[0]?.id_recipient
              ]?.surname}
          </span>
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
      <form className="input-message">
        <div className="add-files">
          <img className="img-add" src="" alt="" />
        </div>
        <input className="chat-input" type="text" placeholder="Text message" />
        <img className="add-emoji" src="" alt="" />
        <button className="send" onClick={postMess}>
          <img className="send-message" src="../../Send.svg" alt="" />
        </button>
      </form>
    </div>
  );
}

export default ChatBar;
