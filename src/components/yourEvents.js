import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { Routes, Route, useNavigate } from 'react-router-dom';
import './yourEvents.css'
import '../App.css'
import icon from "../assets/community.png";
import eventData from "../data/eventData.json"

const YourEvents = () => {
    const [events, setEvents] = useState(eventData.events);
    const currentUser=0;
    useEffect(() => {

        fetch(`https://climex-5bd2f-default-rtdb.firebaseio.com/eventList/${currentUser}.json`)
            .then(results => results.json())
            .then(data => {
                console.log(data);
                setEvents(data);
            })

    }, []);


    return (
        <div className="shell">
            <div className={"w-100  justify-content-center d-flex flex-column"}>
                <img src={icon} alt=" Icon" width="90" className={"m-4 align-self-center"} />
                <h1 className={"text-setting"}> Create Events </h1>
                <p className={"my-2 text-setting2  align-self_center "}>
                    Below are some of the ongoing events for the betterment of the society. Feel free to join these and make some positive change.
                </p>
            </div>
            <div className="container">
                <div className="card">
                    <div className="imgBx">
                        <img src={icon} alt="nike-air-shoe"></img>
                    </div>
                    <div className="contentBx">
                        <h2>Host An Event</h2>
                        <div className="size">
                            <input className="input-form" placeholder="Event Name" type={"textbox"}></input>
                        </div>
                        <div className="color">
                            <textarea className="input1" name="message" placeholder="Event Description" spellcheck="false"></textarea>
                        </div>
                        <div className="centering_div d-flex flex-row">
                        <div className="box">
                            <select>
                                <option>Event Type</option>
                                <option>Reforestration</option>
                                <option>Marathon</option>
                                <option>Cleaning</option>
                                <option>Others</option>
                            </select>
                        </div>
                        <button className="button-form">Create</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">


                            <div className="col-md-3">
                        <div className="wsk-cp-product">
                        <div className="wsk-cp-img">
                        <img
                        src={events[events.length-1].image}
                        alt="Product" className="img-responsive"/>
                        </div>
                        <div className="wsk-cp-text">
                        <div className="category">
                        <span>{events[events.length-1].type}</span>
                        </div>
                        <div className="title-product">
                        <h3>{events[events.length-1].title}</h3>
                        </div>
                        <div className="description-prod">
                        <p>{events[events.length-1].description}</p>
                        </div>
                        <div className="card-footer">
                        <div className="wcf-left"><span className="price">{events[events.length-1].no_participant} joined</span></div>
                        <button className="button-74 wcf-right" role="button">Chat</button>
                        </div>
                        </div>
                        </div>
                        </div>

                    <div className="col-md-3">
                        <div className="wsk-cp-product">
                            <div className="wsk-cp-img">
                                <img
                                    src={events[events.length-2].image}
                                    alt="Product" className="img-responsive"/>
                            </div>
                            <div className="wsk-cp-text">
                                <div className="category">
                                    <span>{events[events.length-2].type}</span>
                                </div>
                                <div className="title-product">
                                    <h3>{events[events.length-2].title}</h3>
                                </div>
                                <div className="description-prod">
                                    <p>{events[events.length-2].description}</p>
                                </div>
                                <div className="card-footer">
                                    <div className="wcf-left"><span className="price">{events[events.length-2].no_participant} joined</span></div>
                                    <button className="button-74 wcf-right" role="button">Chat</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="wsk-cp-product">
                            <div className="wsk-cp-img">
                                <img
                                    src={events[events.length-3].image}
                                    alt="Product" className="img-responsive"/>
                            </div>
                            <div className="wsk-cp-text">
                                <div className="category">
                                    <span>{events[events.length-3].type}</span>
                                </div>
                                <div className="title-product">
                                    <h3>{events[events.length-3].title}</h3>
                                </div>
                                <div className="description-prod">
                                    <p>{events[events.length-3].description}</p>
                                </div>
                                <div className="card-footer">
                                    <div className="wcf-left"><span className="price">{events[events.length-3].no_participant} joined</span></div>
                                    <button className="button-74 wcf-right" role="button">Chat</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="wsk-cp-product">
                            <div className="wsk-cp-img">
                                <img
                                    src={events[events.length-4].image}
                                    alt="Product" className="img-responsive"/>
                            </div>
                            <div className="wsk-cp-text">
                                <div className="category">
                                    <span>{events[events.length-4].type}</span>
                                </div>
                                <div className="title-product">
                                    <h3>{events[events.length-4].title}</h3>
                                </div>
                                <div className="description-prod">
                                    <p>{events[events.length-4].description}</p>
                                </div>
                                <div className="card-footer">
                                    <div className="wcf-left"><span className="price">{events[events.length-4].no_participant} joined</span></div>
                                    <button className="button-74 wcf-right" role="button">Chat</button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default YourEvents;