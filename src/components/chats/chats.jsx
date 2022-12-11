import React from "react";
import Top from "./top";
import ChatsElem from "./ChatsElem";
import SearchChat from "./search";
import { useSelector } from "react-redux";

import "./chatsStyle.css";
import { Route, Routes } from "react-router-dom";
import ChatBar from "../ChatBar";

function ChatsMenu() {
  const array = useSelector((Storage) => Storage.Users);
  return (
    <div className="chatsMenu">
      <Top></Top>
      <SearchChat></SearchChat>
      <Routes>
        <Route path=":id" element={<ChatBar></ChatBar>}></Route>
      </Routes>
      {array.map((element, index) => {
        return (
          <ChatsElem
            index={index}
            photo={element.photo}
            name={element.name}
            isOnline={element.isOnline}
            status={element.status}
            lastMessage={element.lastMessage}
            lastMessageText={element.lastMessageText}
            numberOfNotReaded={element.numberOfNotReaded}
          ></ChatsElem>
        );
      })}
    </div>
  );
}

export default ChatsMenu;
