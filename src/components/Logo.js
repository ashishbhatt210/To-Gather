import React, { useState, useEffect } from "react";
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import icon from '../assets/map_danger_icon.png'
function Logo() {
    return (
        <div className={"w-100  justify-content-center d-flex flex-column "}>
            <img src={icon} alt=" Icon" width="80" className={"m-5 align-self-center" } />
            <h1 className={"text-setting"}>Danger Zones</h1>
            <p className={"my-2 text-setting2  align-self_center "}>
                The map below marks the most dangerous places on earth based on their air quality index.
                It also shows the current air contents.
            </p>
        </div>
    );
}

export default Logo;
