import '../App.css';
import Aquimap from './Aqimap';
import CardApp from './Cards'
import Label from "./Logo"
import Navbar from './navbar';
function Home() {
    return (
        <div className={"outer_container_big"}>
                        <Navbar/>
                        <Label/>
                        <Aquimap/>
                        <CardApp/>
        </div>
    );
}

export default Home;
