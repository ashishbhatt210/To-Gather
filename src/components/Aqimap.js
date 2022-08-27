import React, {useState, useEffect, useId} from "react";
import Map, {Marker, Popup} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import "../App.css"
import "./Aquimap.css"
import  countries from "../data/latitues_longitudes.json"
import mark from "../assets/mark.png";
import {nanoid} from "nanoid";


const MAPBOX_TOKEN = 'pk.eyJ1IjoiZ29kZmxhbWUiLCJhIjoiY2w3ODN5bXI2MDV6bDNybzN1N21hZnJyaSJ9.kNtArpczBGeDcqGNZCk2yQ'; // Set your mapbox token here
const baseURL = 'http://api.openweathermap.org/data/2.5/air_pollution?';
const baseURL2 = 'http://api.openweathermap.org/geo/1.0/direct?';

const apiKey = '89179d92f2cf39ffcbd592fe378db8ff';

const Aquimap = () => {
    const [coordinate, setCoordinate] = useState({
        "latitude":0.0,
        "longitude":0.0
    });

    const[city,setCity]=useState("");
    const[state,setState]=useState("");
    const[country,setCountry]=useState("");
    const[backgroundImg,setBackgroundImg]=useState("");
    const[countryList,setCountryList]=useState(countries.country)
    const [countryData, setCountryData] = useState(null);
    const[points,setPoints]=useState({
        "latitude": 29,
        "longitude": 76.45,
        "zoom": 8}
    );

    let name,value;
    const changeDetail =(event)=>
    {
        name=event.target.name;
value=event.target.value;
if(name === "state")
{
 setState(value);
}
else if(name === "city"){
    setCity(value);
}
else {
    setCountry(value);
}}
    const putOnMap=(event)=>{
        // http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
            fetch(`${baseURL2}q=${city},${state},${country}&limit=1&appid=${apiKey}`)
                .then(results => results.json())
                .then(data => {

                    setPoints({
                        "latitude": data[0].lat,
                        "longitude": data[0].lon,
                        "zoom": 10
                    })
                })

        countries.country.push({"latitude": points.latitude,
            "longitude": points.longitude,
        }
        );
            setCountryList(countries.country);


        fetch(`${baseURL}lat=${points.latitude}&lon=${points.longitude}&&appid=${apiKey}`)
            .then(results => results.json())
            .then(data => {
                const pollutant = data.list[0].components;
                if(pollutant.no2>=200||pollutant.pm10>=90||pollutant.o3>=180)
                    setBackgroundImg("DANGER")
                else
                    setBackgroundImg("SAFE")
            })
    }



    useEffect(() => {


    }, []);

    return (
        <div  className={"map_container d-flex flex-row  "} >
            <Map
                {...points}
                onMove={evt => setPoints(evt.viewState)}
                style={{width: "51%", height: "600px",marginLeft: "6%",borderRadius:"20px" ,boxShadow:"14px 14px 20px #000000, -14px -14px 20px #000000"}}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                mapboxAccessToken={MAPBOX_TOKEN}
            >
                {
                    countryList.map(country => (
                    <Marker
                        key={nanoid(5)}
                        style={{width: "50px", height: "50px"}}
                        longitude={country.longitude} latitude={country.latitude}>
                        <button
                            className={"myButton"}
                            onClick={e => {
                                e.preventDefault();
                                fetch(`${baseURL}lat=${country.latitude}&lon=${country.longitude}&&appid=${apiKey}`)
                                    .then(results => results.json())
                                    .then(data => {
                                        const pollutant = data.list[0].components;

                                        setCountryData(pollutant)
                                        setCoordinate(country)
                                    })
                            }}>


                                <img src={mark} alt="Skate Park Icon" width="50"/>

                             </button>
                    </Marker>
                    ))
                }
                {

                    countryData ? (
                        <Popup
                            latitude={coordinate.latitude}
                            longitude={coordinate.longitude}
                            onClose={() => {
                                setCountryData(null);
                                setCoordinate(null)

                            }}
                        >

                            <div className="container-popup">
                                <div className="item-1">
                                    <h3 className={"item_name"}>Co = {countryData.co}</h3>
                                </div>
                                <div className="item-2">
                                    <h3 className={"item_name"}>No = {countryData.no}</h3>

                                </div>
                                <div className="item-2">
                                    <h3 className={"item_name"}>NO2 = {countryData.no2}</h3>
                                </div>
                                <div className="item-1">
                                    <h3 className={"item_name"}>O3 = {countryData.o3}</h3>
                                </div>
                                <div className="item-1">
                                    <h3 className={"item_name"}>SO2 = {countryData.so2}</h3>
                                </div>
                                <div className="item-2">
                                    <h3 className={"item_name"}>PM25 = {countryData.pm2_5}</h3>
                                </div>
                                <div className="item-2">
                                    <h3 className={"item_name"}>PM10 = {countryData.pm_10}</h3>
                                </div>
                                <div className="item-1">
                                    <h3 className={"item_name"}>NH3 = {countryData.nh3}</h3>
                                </div>
                            </div>
                        </Popup>
                    ) : null
                }

            </Map>


            <div className="container_box">

                <div className="brand-title">Search Any Location </div>
                <div className="inputs-form">
                    <label className={"label-form font-weight-bold"}>CITY *</label>
                    <input className={" input-form "} type="text" placeholder="City" value={city} onChange={changeDetail} name="city"/>
                    <label className={"label-form font-weight-bold"}>STATE</label>
                    <input className={" input-form "} type="text" placeholder="State" value={state} onChange={changeDetail} name="state"/>
                    <label className={"label-form font-weight-bold"}>COUNTRY *</label>
                    <input className={" input-form "} type="text" placeholder="Country" value={country} onChange={changeDetail} name="country"/>
                    <button className={"button-form button-form mt-5"} type="submit" onClick={putOnMap}>SEARCH</button>
                    <div className="brand-title-again align-self-center">{backgroundImg}</div>
                </div>
            </div>


        </div>

    );
}

export default Aquimap;
