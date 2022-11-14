import "./App.css";
import AsideBar from "../components/AsideBar";
import ChatsMenu from "../components/chats";
import { Route, Routes } from "react-router-dom";
import Error from "../components/Error";
import ChatBar from "../components/ChatBar";

export function App() {
  return (
    <div className="App">
      <AsideBar />
      <Routes>
        <Route path="/home" element={<Error />}></Route>
        <Route path="/chats/*" element={<ChatsMenu />}></Route>
        <Route path="/contact" element={<Error />}></Route>
        <Route path="/notifications" element={<Error />}></Route>
        <Route path="/calendar" element={<Error />}></Route>
        <Route path="/settings" element={<Error />}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </div>
  );
}

export default App;
