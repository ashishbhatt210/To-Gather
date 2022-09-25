import '../App.css';
import Aquimap from './Aqimap';
import CardApp from './floatingCards/Cards'
import Label from "./Logo"
import Events from './yourEvents';
import Footer from './footer';
import Navbar from "./navbar";
function Home() {
    return (
        <div className={"outer_container_big"}>
                        <Navbar/>
                        <Label/>
                        <Aquimap/>
                        <CardApp/>
                        {
                           localStorage.getItem('email')== ""? null:<Events/>
                        }
                        <Footer/>
        </div>
    );
}

export default Home;
