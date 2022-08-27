import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { Routes, Route, useNavigate } from 'react-router-dom';
import './yourEvents.css'
import '../App.css'
import icon from "../assets/image.gif";

const yourEvents = () => {
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
                        <h2>Create An Event</h2>
                        <div className="size">
                            <input className="input-form" placeholder="Event Name" type={"textbox"}></input>
                        </div>
                        <div className="color">
                            <textarea className="input1" name="message" placeholder="Event Description" spellcheck="false"></textarea>
                        </div>
                        <div class="box">
                            <select>
                                <option>Event Type</option>
                                <option>Reforestration</option>
                                <option>Marathon</option>
                                <option>Cleaning</option>
                                <option>Others</option>
                            </select>
                        </div>
                        <a href="#">Create Now</a>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="wsk-cp-product">
                            <div className="wsk-cp-img">
                                <img src="https://3.bp.blogspot.com/-eDeTttUjHxI/WVSvmI-552I/AAAAAAAAAKw/0T3LN6jABKMyEkTRUUQMFxpe6PLvtcMMwCPcBGAYYCw/s1600/001-culture-clash-matthew-gianoulis.jpg" alt="Product" className="img-responsive" />
                            </div>
                            <div className="wsk-cp-text">
                                <div className="category">
                                    <span>Program</span>
                                </div>
                                <div className="title-product">
                                    <h3>My face not my heart</h3>
                                </div>
                                <div className="description-prod">
                                    <p>Description Product tell me how to change playlist height size like 600px in html5 player. player good work now check this link</p>
                                </div>
                                <div className="card-footer">
                                    <div className="wcf-left"><span className="price">200 joined</span></div>
                                    <button className="button-74 wcf-right" role="button">Join</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="wsk-cp-product">
                            <div className="wsk-cp-img"><img src="https://1.bp.blogspot.com/-b-2SgNUrFHg/WVSvmewWqgI/AAAAAAAAAK0/1K4YCcbYjhokHwV_IgiVJN9mEnQoWunIwCPcBGAYYCw/s1600/fashion-portrait-nicole-6347.jpg" alt="Product" className="img-responsive" /></div>
                            <div className="wsk-cp-text">
                                <div className="category">
                                    <span>Program</span>
                                </div>
                                <div className="title-product">
                                    <h3>My face not my heart</h3>
                                </div>
                                <div className="description-prod">
                                    <p>Description Product tell me how to change playlist height size like 600px in html5 player. player good work now check this link</p>
                                </div>
                                <div className="card-footer">
                                    <div className="wcf-left"><span className="price">89 joined</span></div>
                                    <button className="button-74 wcf-right" role="button">Join</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="wsk-cp-product">
                            <div className="wsk-cp-img"><img src="https://1.bp.blogspot.com/-XL_Ba-178Fo/WVSvm5AbApI/AAAAAAAAAK4/X5109HTqUiAhPjbmz4NFVHcpL7ZWe6T3ACPcBGAYYCw/s1600/wow-29.jpg" alt="Product" className="img-responsive" /></div>
                            <div className="wsk-cp-text">
                                <div className="category">
                                    <span>Contribute</span>
                                </div>
                                <div className="title-product">
                                    <h3>My face not my heart</h3>
                                </div>
                                <div className="description-prod">
                                    <p>Description Product tell me how to change playlist height size like 600px in html5 player. player good work now check this link</p>
                                </div>
                                <div className="card-footer">
                                    <div className="wcf-left"><span className="price">50 joined</span></div>
                                    <button className="button-74 wcf-right" role="button">Join</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="wsk-cp-product">
                            <div className="wsk-cp-img"><img src="https://3.bp.blogspot.com/-iUes8qr4uC8/WVSvl6Wf_fI/AAAAAAAAAKs/JiTUUVvdbqEC_QGGaQhuVJiezIN3LIqEgCPcBGAYYCw/s1600/IMG_5367-bp.jpg" alt="Product" className="img-responsive" /></div>
                            <div className="wsk-cp-text">
                                <div className="category">
                                    <span>Marathon</span>
                                </div>
                                <div className="title-product">
                                    <h3>My face not my heart cvf ggf gfg g</h3>
                                </div>
                                <div className="description-prod">
                                    <p>Description Product tell me how to change playlist height size like 600px in html5 player. player good work now check this link</p>
                                </div>
                                <div className="card-footer">
                                    <div className="wcf-left"><span className="price">150 joined</span></div>
                                    <button className="button-74 wcf-right" role="button">Join</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default yourEvents;