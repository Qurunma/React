import React from "react";
import Top from "./top";
import ChatsElem from "./ChatsElem";
import SearchChat from "./search";
import { useDispatch } from "react-redux";

import "./chatsStyle.css";
import { Route, Routes } from "react-router-dom";
import ChatBar from "../ChatBar";

const array = [
  {
    photo: "/luy.svg",
    name: "Luy Robin",
    isOnline: true,
    status: "writes",
    lastMessage: "1 minute ago",
    lastMessageText:
      "Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes). ",
    numberOfNotReaded: 2,
  },
  {
    photo: "/jared.svg",
    name: "Jared Sunn",
    isOnline: true,
    status: "record voice message",
    lastMessage: "1 minute ago",
    lastMessageText: "voice message",
    numberOfNotReaded: 1,
  },
  {
    photo: "/nika.svg",
    name: "Nika Jerrardo",
    isOnline: false,
    status: "last online 5 hours ago",
    lastMessage: "3 days ago",
    lastMessageText:
      "Cicero famously orated against his political opponent Lucius Sergius Catilina.",
    numberOfNotReaded: 0,
  },
  {
    photo: "/david.svg",
    name: "David Amrosa",
    isOnline: false,
    status: "last online 5 hours ago",
    lastMessage: "3 days ago",
    lastMessageText:
      "Cicero famously orated against his political opponent Lucius Sergius Catilina.",
    numberOfNotReaded: 0,
  },
];
function ChatsMenu() {
  useDispatch({ type: "setUsers", payload: array });
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
