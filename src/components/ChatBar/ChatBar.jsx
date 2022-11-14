import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "./Header";

function ChatBar() {
  const id = useParams().id;
  const account = useSelector((Storage) => Storage);
  console.log(account);
  return (
    <div className="chat-bar">
      <Header path={account.photo} name={account.name}></Header>
    </div>
  );
}

export default ChatBar;
