import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import './Cards.css'
import '../App.css'
import '../cards.scss'
import icon from "../assets/event_icon.png";
const Cards = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {

         fetch('https://climex-5bd2f-default-rtdb.firebaseio.com/events.json')
            .then(results => results.json())
            .then(data => {
                console.log(data);
                setEvents(data);
            })

    }, []);


    return (
        <div className="skills mt-5">
            <div className={"w-100  justify-content-center d-flex flex-column"}>
                <img src={icon} alt=" Icon" width="90" className={"m-4 align-self-center"} />
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
                            events.map((event, id) => (
                            <div className="card">
                            <figure className="card__thumb">
                            <img src={event.image} alt="Picture by Kyle Cottrell" className="card__image"/>
                            <figcaption className="card__caption">
                            <h2 className="card__title">{event.title}</h2>
                                <span className="tag tag-teal">Marathon</span>
                                <p className="card__snippet">{event.description}</p>
                                <div className="card__lowerBanner">
                            <button className={"card__button"}>Join</button>
                                <div className="user">
                                    <img
                                        src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo"
                                        alt="user"/>
                                    <div className="user-info">
                                        <h5>July Dec</h5>
                                        <small>2h ago</small>
                                    </div>
                                </div>
                                </div>
                            </figcaption>
                            </figure>
                            </div>
                            ))}
                    </Marquee>
                </div>
            </div>
        </div>

    );
}

export default Cards;