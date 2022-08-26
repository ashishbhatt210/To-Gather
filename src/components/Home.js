import '../App.css';
import Aquimap from './Aqimap';
import CardApp from './Cards'
import Label from "./Logo"
import Events from './yourEvents';
function Home() {
    return (
        <div className={"outer_container_big"}>
                        <Label/>
                        <Aquimap/>
                        <CardApp/>
                        <Events/>
        </div>
    );
}

export default Home;
