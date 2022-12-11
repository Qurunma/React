import React, { useState, useEffect } from "react";
import Top from "./top";
import ChatsElem from "./ChatsElem";
import SearchChat from "./search";
import "./chatsStyle.css";
import { Route, Routes } from "react-router-dom";
import ChatBar from "../ChatBar";
import { useDispatch } from "react-redux";

let requestOptions = {
  method: "GET",
  redirect: "follow",
};

function ChatsMenu() {
  const dispatch = useDispatch();
  const [array, setArray] = useState([]);
  const [arU, setArU] = useState([]);
  async function getHistory() {
    const array = await fetch(
      "http://localhost:5000/get/message/1",
      requestOptions
    )
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
    setArray(array);
    dispatch({ type: "setMessages", payload: array });
    getUsers();
  }

  async function getUsers() {
    const aru = await fetch("http://localhost:5000/get/users", requestOptions)
      .then((response) => response.json())
      .catch((error) => console.log("error", error));

    setArU(aru);
    dispatch({ type: "setUsers", payload: aru });
  }
  useEffect(() => {
    getHistory();
  }, []);

  console.log(array);
  return (
    <div className="chatsMenu">
      <Top></Top>
      <SearchChat></SearchChat>
      <Routes>
        <Route path=":id_sender" element={<ChatBar></ChatBar>}></Route>
      </Routes>
      {array?.map((element) => {
        console.log(arU);
        console.log(
          element.id_sender != 1 ? element.id_sender : element.id_recipient
        );
        return (
          <ChatsElem
            index={element.id_sender}
            name={
              element.id_sender != 1
                ? arU[element.id_sender - 1]?.name +
                  arU[element.id_sender - 1]?.surname
                : arU[element.id_recipient - 1]?.name +
                  arU[element.id_recipient - 1]?.surname
            }
            lastMessageText={element.text_massage}
          ></ChatsElem>
        );
      })}
    </div>
  );
}

export default ChatsMenu;
