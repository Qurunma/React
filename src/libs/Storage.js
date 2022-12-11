import { configureStore } from "@reduxjs/toolkit";

const defaultState = {
  Users: [
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
  ],
};

function reducer(state = defaultState, action) {
  console.log(action);
  switch (action.type) {
    case "setUsers":
      return { ...state, Users: action.payload };
    default:
      return state;
  }
}

export default configureStore({
  reducer: reducer,
});
