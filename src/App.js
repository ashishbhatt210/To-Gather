import logo from './logo.svg';
import './App.css';
import Aquimap from './components/Aqimap';
import CardApp from './components/Cards'
function App() {
  return (
      <div className={"outer_container"}>
          <Aquimap/>
          <CardApp/>
      </div>
  );
}

export default App;
