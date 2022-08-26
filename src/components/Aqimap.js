import React, { useState, useEffect } from "react";
import Map, {Marker, Popup} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import "../App.css"
import  countries from "../data/latitues_longitudes.json"
import danger from "../assets/danger.png";


const MAPBOX_TOKEN = 'pk.eyJ1IjoiZ29kZmxhbWUiLCJhIjoiY2w3ODN5bXI2MDV6bDNybzN1N21hZnJyaSJ9.kNtArpczBGeDcqGNZCk2yQ'; // Set your mapbox token here
const baseURL = 'http://api.openweathermap.org/data/2.5/air_pollution?';
const apiKey = '89179d92f2cf39ffcbd592fe378db8ff';

const Aquimap = () => {
    const [coordinate, setCoordinate] = useState({
        "latitude":0.0,
        "longitude":0.0
    });

    const [countryData, setCountryData] = useState(null);

    // {
    //     "co": 203.609,
    //     "no": 0.0,
    //     "no2": 0.396,
    //     "o3": 75.102,
    //     "so2": 0.648,
    //     "pm2_5": 23.253,
    //     "pm10": 92.214,
    //     "nh3": 0.117
    // }

    useEffect(() => {


    }, []);

    return (
        <div  className={"map_container"} >
            <Map
                initialViewState={{
                    latitude: 28.72,
                    longitude: 77.45,
                    zoom: 8

                }

                }
                style={{width: "1000px", height: "500px"}}
                mapStyle="mapbox://styles/mapbox/streets-v9"

                mapboxAccessToken={MAPBOX_TOKEN}
            >
                {
                    countries.country.map(country => (
                    <Marker
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
                            <img src={danger} alt="Skate Park Icon" width="50"/>
                        </button>
                    </Marker>
                    ))}
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
                                    <h3 className={"item_name"}>PM2_5 = {countryData.pm2_5}</h3>
                                </div>
                                <div className="item-2">
                                    <h3 className={"item_name"}>PM_10 = {countryData.pm_10}</h3>
                                </div>
                                <div className="item-1">
                                    <h3 className={"item_name"}>NH3 = {countryData.nh3}</h3>
                                </div>
                            </div>
                        </Popup>
                    ) : null
                }

            </Map>
        </div>

    );
}

export default Aquimap;
