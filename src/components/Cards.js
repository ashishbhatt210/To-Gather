import React from 'react';
import Marquee from "react-fast-marquee";

import './Cards.css'
import '../App.css'

import eventdata  from '../data/eventData.json'
import icon from "../assets/map_danger_icon.png";
const Cards = () => {
    const skillBoxStyle = {
        backgroundColor: '#F2AA4CFF' ,
        boxShadow: `0px 0px 30px '#F2AA4CFF'`
    }
    return (
        <div className="skills mt-5">
            <div className={"w-100  justify-content-center d-flex flex-column"}>
                <img src={icon} alt=" Icon" width="80" className={"m-4 align-self-center" } />
                <h1 className={"text-setting"}> Events Hub</h1>
                <p className={"my-2 text-setting2  align-self_center "}>
                    Below are some of the ongoing events for the betterment of the society. Feel free to join these and make some positive change.
                </p>
            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee
                        gradient={false}
                        speed={80}
                        pauseOnHover={true}
                        pauseOnClick={true}
                        delay={0}
                        play={true}
                        direction="left"
                    >
                        {
                            eventdata.events.map((event, id) => (
                            <div className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={event.img} alt={event.title} />
                                <h3 style={{color: '#212121'}}>
                                    {event.title}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>

    );
}

export default Cards;