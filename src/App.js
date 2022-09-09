import './App.css';
import Home from "./components/Home"
import ChatRoom from "./components/ChatRoom"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/navbar";
function App() {
  return (
      <div>
      <Navbar/>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={ <Home/> }/>
              <Route path="/chatroom" element={ <ChatRoom/> }/>
          </Routes>
      </BrowserRouter>
      </div>

  );
}

export default App;
