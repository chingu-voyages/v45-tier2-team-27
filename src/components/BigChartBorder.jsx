import React, { useState } from 'react';
import Radar from './RadarChart'
import Radio from './RadioChart'
import Scatter from './ScatterChart'
import { Outlet, useMatch } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../App";
import DarkMode from './DarkMode';

export default function BigChartBorder() {
    const matchScatter = useMatch("/chart/scatter");
    const matchRadar = useMatch("/chart/radar");
    const matchRadio = useMatch("/chart/radio");
    const [hoveredImage, setHoveredImage] = useState(null)
    const {

        composition,
        fromYear,
        toYear,
        minMass,
        maxMass,
        asteroidInput,
        darkMode
      } = useContext(AuthContext);

      const handleImageHover = (image) => {
        setHoveredImage(image);
      };
    
      const handleImageLeave = () => {
        setHoveredImage(null);
      };

    let selectedImage = '';
    if (matchRadar) {
        selectedImage = 'radar-menu';
    } else if (matchRadio) {
        selectedImage = 'radio-menu';
    } else if (matchScatter) {
        selectedImage = 'graph-menu';
    }


    return (
        <div>
            <p className="uppercase text-xs ml-20">YOU SEARCHED:</p>
            <img className='' src="/images/big-chart-title.png" />
            <div className="title-border">
                <div className="flex justify-around p-3 mx-10" >
                    <p className="capitalize font-semibold">
                        <q>{asteroidInput}</q>
                    </p>
                    <span>&bull;</span>
                    <p className="font-semibold">
                        {fromYear && toYear ? `${fromYear}-${toYear}` : "Any Year"}
                    </p>
                    <span>&bull;</span>
                    <p className="capitalize font-semibold">
                        {composition || "Any Composition"}
                    </p>
                    <span>&bull;</span>
                    <p className="font-semibold">
                        {minMass && maxMass ? `${minMass}g - ${maxMass}g` : "Any Mass"}
                    </p>
                </div>

            </div>

            <div className="main-content">
                <img className="overlap-image" src="/images/big-chart-border.png" />
                <div className="black-dot"></div>

                <div className="side-bar flex flex-col justify-around items-center">
            <Link to={'/chart/radar'}>
                <div
                    className={`sidebar-item ${selectedImage === 'radar-menu' ? 'active' : ''}`}
                    onMouseEnter={() => handleImageHover('radar-menu')}
                    onMouseLeave={handleImageLeave}
                >
                    <img className={`w-16 h-16 ${selectedImage === 'radar-menu' ? 'border-2 border-black' : ''}`}
                        src="/images/radar-menu.svg"
                        alt=""
                    />
                    <div className="sidebar-tooltip">Mass</div>
                </div>
            </Link>
            <Link to={'/chart/radio'}>
                <div
                    className={`sidebar-item ${selectedImage === 'radio-menu' ? 'active' : ''}`}
                    onMouseEnter={() => handleImageHover('radio-menu')}
                    onMouseLeave={handleImageLeave}
                >
                    <img className={`w-16 h-16 rounded-full ${selectedImage === 'radio-menu' ? 'border-2 border-black' : ''}`}
                        src="/images/radio-menu.png"
                        alt=""
                    />
                    <div className="sidebar-tooltip">Composition</div>
                </div>
            </Link>
            <Link to={'/chart/scatter'}>
                <div
                    className={`sidebar-item ${selectedImage === 'graph-menu' ? 'active' : ''}`}
                    onMouseEnter={() => handleImageHover('graph-menu')}
                    onMouseLeave={handleImageLeave}
                >
                    <img className={`w-16 h-16 ${selectedImage === 'graph-menu' ? 'border-2 border-black' : ''}`}
                        src={`${darkMode ? "/images/white-scatter-chart.png" : "/images/graph-menu.svg"}`}
                        alt=""
                    />
                    <div className="sidebar-tooltip">Year</div>
                </div>
            </Link>
        </div>

                <div className="vertical-line">
                    <div className={`${selectedImage === 'radar-menu' ? 'empty-dot-1' : ''}`}></div>
                    <div className={`${selectedImage === 'radio-menu' ? 'empty-dot-2' : ''}`}></div>
                    <div className={`${selectedImage === 'graph-menu' ? 'empty-dot-3' : ''}`}></div>
                </div>


                <Outlet />


                <div className="bottom-black-dot"></div>

            </div>



            <div className='box'>

            </div>
        </div>
    )
}