import './App.css';
import Home from "./components/Home"
import ChatRoom from "./components/ChatRoom"
import DarkChatRoom from "./components/chatroom/darkchatroom"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
      <div>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={ <Home/> }/>
              <Route path="/chatroom" element={ <DarkChatRoom/> }/>
          </Routes>
      </BrowserRouter>
      </div>

  );
}

export default App;
