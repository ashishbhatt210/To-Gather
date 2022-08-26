import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { Routes, Route, useNavigate } from 'react-router-dom';
import './yourEvents.css'
import '../App.css'
import '../cards.scss'
import icon from "../assets/map_danger_icon.png";

const yourEvents = () => {
    return (
        <div className="shell">
            <div className="container">
                <div className="card">
                    <div className="imgBx">
                        <img src="http://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png" alt="nike-air-shoe"></img>
                    </div>

                    <div className="contentBx">

                        <h2>Create An Event</h2>

                        <div className="size">
                            <h3>Event Name :</h3>
                            <input type={"textbox"}></input>
                        </div>

                        <div className="color">
                            <h3>Description :</h3>
                            <input type={"textbox"}></input>
                        </div>
                        <div class="container d-flex justify-content-center align-items-center">

                            <div class="dropdown">
                                <button class="btn btn-outline-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                                    <span>Countries</span>
                                    <i class="fa fa-caret-down"></i>
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li><a class="dropdown-item" href="#">Australia</a></li>
                                    <li><a class="dropdown-item" href="#">India</a></li>
                                    <li><a class="dropdown-item" href="#">United States</a></li>
                                </ul>
                            </div>


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