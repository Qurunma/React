import { configureStore } from "@reduxjs/toolkit";

const defaultState = {
  Users: [],
  Messages: [],
};

function reducer(state = defaultState, action) {
  console.log(action);
  switch (action.type) {
    case "setUsers":
      return { ...state, Users: action.payload };
    case "setMessages":
      return { ...state, Messages: action.payload };
    default:
      return state;
  }
}

export default configureStore({
  reducer: reducer,
});
