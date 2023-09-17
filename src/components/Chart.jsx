import BorderImages from "./BorderImages";
import NewSearchBtn from "./NewSearchBtn";
import BackResultsBtn from "./BackResultsBtn"
import "../SearchResults.css";
import React, { useState } from 'react';
import Radar from './RadarChart'
import Radio from './RadioChart'
import Scatter from './ScatterChart'
import { Link } from "react-router-dom";
import { Outlet, useMatch } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../App";


export default function Chart() {
    const matchScatter = useMatch("/chart/scatter");
    const matchRadar = useMatch("/chart/radar");
    const matchRadio = useMatch("/chart/radio");

    const {
        composition,
        fromYear,
        toYear,
        minMass,
        maxMass,
        asteroidInput,
    } = useContext(AuthContext);

    let selectedImage = '';
    if (matchRadar) {
        selectedImage = 'radar-menu';
    } else if (matchRadio) {
        selectedImage = 'radio-menu';
    } else if (matchScatter) {
        selectedImage = 'graph-menu';
    }

    return (
        <div className="search-container text-center">

            <h2 className="uppercase pb-2 ">You Searched:</h2>

            <div className="flex justify-center flex-col items-center">
                <img className="w-4/5 h-auto" src="/images/search_field.png" alt="" />
                <div className="flex justify-between" style={{ width: '68%', marginTop: '-15px' }}>
                    <p className="uppercase">
                        {asteroidInput}
                    </p>
                    <span>&#8226;</span>
                    <p className="uppercase">{fromYear && toYear ? `${fromYear}-${toYear}` : "Any Year"}</p>
                    <span>&#8226;</span>
                    <p className="uppercase">{composition || "Any Composition"}</p>
                    <span>&#8226;</span>
                    <p className="uppercase">{minMass && maxMass ? `${minMass}g - ${maxMass}g` : "Any Mass"}</p>
                </div>
            </div>



            <div className="flex justify-between justify-between items-center px-20 mt-6 md:hidden">
                <Link to={'/chart/radar'}>
                    <img className={`w-16 h-16 ${selectedImage === 'radar-menu' ? 'border-2 border-black' : ''}`}
                        src="/images/radar-menu.svg" alt=""
                    /></Link>
                <Link to={'/chart/radio'}>
                    <img className={`w-16 h-16 ${selectedImage === 'radio-menu' ? 'border-2 border-black' : ''}`}
                        src="/images/radio-menu.png" alt=""
                    /></Link>
                <Link to={'/chart/scatter'}>
                    <img className={`w-16 h-16 ${selectedImage === 'graph-menu' ? 'border-2 border-black' : ''}`}
                        src="/images/graph-menu.svg" alt=""
                    /></Link>
            </div>
            <div className="flex justify-center">
                <div className="field-border">
                    <div className={`${selectedImage === 'radar-menu' ? 'dot-1' : ''}`}></div>
                    <div className={`${selectedImage === 'radio-menu' ? 'dot-2' : ''}`}></div>
                    <div className={`${selectedImage === 'graph-menu' ? 'dot-3' : ''}`}></div>

                    <img className="field-left-image" src="/images/field-left.svg" />

                    <img className="chart-top-left" src="/images/chart-left-top-border.svg" />
                    <span className="inner-text">
                        {selectedImage === 'radar-menu' ? 'Mass Value' :
                            selectedImage === 'radio-menu' ? 'Composition' :
                                selectedImage === 'graph-menu' ? 'Year of Strike' : ''
                        }
                    </span>
                </div>
            </div>
            <div className="flex justify-center">
                <div className='small-screen-box mb-12'>
                    <Outlet />
                </div>
            </div>


            <NewSearchBtn />
            <BackResultsBtn />
            <BorderImages />
        </div>
    );
}
