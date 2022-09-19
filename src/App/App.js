import "./App.css";
import AsideBar from "../components/AsideBar";
import ChatsMenu from "../components/chats";

export function App() {
  return (
    <div className="App">
      <AsideBar />
      <ChatsMenu></ChatsMenu>
    </div>
  );
}

export default App;
