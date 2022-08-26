import '../App.css';
import Aquimap from './Aqimap';
import CardApp from './Cards'
import Label from "./Logo"
function Home() {
    return (
        <div className={"outer_container_big"}>
                        <Label/>
                        <Aquimap/>
                        <CardApp/>
        </div>
    );
}

export default Home;
