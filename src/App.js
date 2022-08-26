import logo from './logo.svg';
import './App.css';
import Home from "./components/Home"
import ChatRoom from "./components/ChatRoom"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={ <Home/> }/>
              <Route path="/chatrroom" element={ <ChatRoom/> }/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
