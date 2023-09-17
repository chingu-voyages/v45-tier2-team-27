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

import { useContext} from "react";
import App, { AuthContext } from "../App";
import DarkMode from "./DarkMode";
import AppTitle from "./AppTitle";

export default function Chart() {
    const matchScatter = useMatch("/chart/scatter");
    const matchRadar = useMatch("/chart/radar");
    const matchRadio = useMatch("/chart/radio");
    const [hoveredImage, setHoveredImage] = useState(null)

    const handleImageHover = (image) => {
        setHoveredImage(image);
      };
    
      const handleImageLeave = () => {
        setHoveredImage(null);
      };

    const {
        composition,
        fromYear,
        toYear,
        minMass,
        maxMass,
        asteroidInput,
        darkMode
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
      <>
        <AppTitle />
        <div className="chart-container search-container text-center mt-12 ">

        <div className="search-container text-center">


            <h2 className="uppercase pb-2 ">You Searched:</h2>

            <div className="flex justify-center flex-col items-center">
                <img className={`w-4/5 h-auto z-10 `} src="/images/search_field.png" alt="" />
                <div className={`flex justify-between z-20 ${darkMode ? "text-black mb-3" : ""}`} style={{ width: '68%', marginTop: darkMode ? '-25px' : '-15px' }}>
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



            <div className="chart-button-container">
            <Link to={'/chart/radar'}>
                    <div
                        className={`menu-item ${selectedImage === 'radar-menu' ? 'active' : ''}`}
                        onMouseEnter={() => handleImageHover('radar-menu')}
                        onMouseLeave={handleImageLeave}
                    >
                        <img className={`first-btn w-16 h-16 ${selectedImage === 'radar-menu' ? 'border-2 border-black' : ''}`}
                            src="/images/radar-menu.svg" alt=""
                        />
                        {hoveredImage === 'radar-menu' && <div className="tooltip absolute text-sm">Mass</div>}
                    </div>
                </Link>
                <Link to={'/chart/radio'}>
                    <div
                        className={`menu-item ${selectedImage === 'radio-menu' ? 'active' : ''}`}
                        onMouseEnter={() => handleImageHover('radio-menu')}
                        onMouseLeave={handleImageLeave}
                    >
                        <img className={`second-btn w-16 h-16 rounded-full ${selectedImage === 'radio-menu' ? 'border-2 border-black' : ''}`}
                            src="/images/radio-menu.png" alt=""
                        />
                        {hoveredImage === 'radio-menu' && <div className="tooltip absolute text-sm">Composition</div>}
                    </div>
                </Link>
                <Link to={'/chart/scatter'}>
                    <div
                        className={`menu-item ${selectedImage === 'graph-menu' ? 'active' : ''}`}
                        onMouseEnter={() => handleImageHover('graph-menu')}
                        onMouseLeave={handleImageLeave}
                    >
                        <img className={`third-btn w-16 h-16 ${selectedImage === 'graph-menu' ? 'border-2 border-black' : ''}`}
                            src={`${darkMode ? "/images/white-scatter-chart.png":"/images/graph-menu.svg" }`} alt=""
                        />
                        {hoveredImage === 'graph-menu' && <div className="tooltip absolute text-sm">Year</div>}
                    </div>
                </Link>
            </div>
            <div className="w-[90%] mx-auto">
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
                <div className='small-screen-box w-[90%] mb-12'>
                    <Outlet />
                </div>
            </div>
            <div className=" chart-icon-container ">
                <DarkMode />
            </div>            
            <div className="chart-new-search">
                <NewSearchBtn />
            </div>
            
            <div className="chart-back-to-results mb-[-2rem]">
                <BackResultsBtn />
            </div>
            <div className="chart-border-container">
                <BorderImages />
            </div> 
        </div>  
    </>   
    );
}
