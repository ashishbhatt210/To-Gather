import logo from './logo.svg';
import './App.css';
import Aquimap from './components/Aqimap';
import CardApp from './components/Cards'
import Label from "./components/Logo"
function App() {
  return (
      <div className={"outer_container"}>
          <Label/>
          <Aquimap/>
          <CardApp/>
      </div>
  );
}

export default App;
