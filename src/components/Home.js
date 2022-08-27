import '../App.css';
import Aquimap from './Aqimap';
import CardApp from './Cards'
import Label from "./Logo"
import Events from './yourEvents';
import Footer from './footer';
function Home() {
    return (
        <div className={"outer_container_big"}>
                        <Label/>
                        <Aquimap/>
                        <CardApp/>
                        <Events/>
                        <Footer/>
        </div>
    );
}

export default Home;
