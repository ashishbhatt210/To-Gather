import React from 'react';
import Marquee from "react-fast-marquee";

import './Cards.css'
import '../App.css'
import '../cards.scss'

import eventdata from '../data/eventData.json'
import icon from "../assets/map_danger_icon.png";
const Cards = () => {
    const skillBoxStyle = {
        backgroundColor: '#F2AA4CFF',
        boxShadow: `0px 0px 20px #e9d971`
    }
    return (
        <div className="skills mt-5">
            <div className={"w-100  justify-content-center d-flex flex-column"}>
                <img src={icon} alt=" Icon" width="80" className={"m-4 align-self-center"} />
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
                                // <div className="skill--box" key={id} style={skillBoxStyle}>
                                //     <img src={event.image} alt={event.title} />
                                //     <div className="singleBlog--body">
                                //         <p style={{ color: '#212121' }}>{event.date}</p>
                                //         <h3 style={{ color: '#212121' }}>{event.title}</h3>
                                //         <h6 style={{ color: '#212121' }}>{event.description}</h6>
                                //     </div>
                                //     <h3 style={{ color: '#212121' }}>
                                //         {event.title}
                                //     </h3>
                                //     <div class="project--showcaseBtn">
                                //         <a href="..." target="_blank" rel="noreferrer" class="jss61">
                                //             <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="jss62" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                //             <path ></path>
                                //             </svg>
                                //         </a>
                                //         <a href="https://github.com/hhhrrrttt222111/developer-portfolio" target="_blank" rel="noreferrer" class="jss61">
                                //             <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" class="jss62" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                //                 <path ></path>
                                //             </svg>
                                //         </a>
                                //     </div>
                                // </div>
                            <div className="card">
                            <figure className="card__thumb">
                            <img src="https://source.unsplash.com/75S9fpDJVdo/300x510" alt="Picture by Kyle Cottrell" className="card__image"/>
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