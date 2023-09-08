import BorderImages from "./BorderImages";
import NewSearchBtn from "./NewSearchBtn";
import BackResultsBtn from "./BackResultsBtn"
import "../SearchResults.css";
import React, { useState } from 'react';
import Radar from './RadarChart'
import Radio from './RadioChart'
import Scatter from './ScatterChart'
import { Outlet, useMatch } from "react-router-dom";


export default function Chart() {
    const [currentChart, setCurrentChart] = useState('Radar');
    const [selectedImage, setSelectedImage] = useState('radar-menu');

    const renderChart = () => {
        if (currentChart === 'Radar') {
            return <Radar />;
        } else if (currentChart === 'Radio') {
            return <Radio />;
        } else if (currentChart === 'Scatter') {
            return <Scatter />;
        }
    };

    const handleClick = (chartName, imageName) => {
        setCurrentChart(chartName);
        setSelectedImage(imageName);
    };
    return (
        <div className="search-container text-center mt-12 mx-6 h-screen">

            <h2 className="uppercase pb-2 ">You Searched:</h2>

            <div className="flex justify-center flex-col items-center">
                <img className="w-4/5 h-auto" src="/images/search_field.png" alt="" />
                <div className="flex justify-between" style={{ width: '68%', marginTop: '-15px' }}>
                    <p className="uppercase">
                        K
                    </p>
                    <span>&#8226;</span>
                    <p className="uppercase">2000-2010</p>
                    <span>&#8226;</span>
                    <p className="uppercase">Comp</p>
                    <span>&#8226;</span>
                    <p className="uppercase">Mass</p>
                </div>
            </div>



            <div className="flex justify-between justify-between items-center px-20 mt-6 md:hidden">
                <img className={`w-16 h-16 ${selectedImage === 'radar-menu' ? 'border-2 border-black' : ''}`}
                    src="/images/radar-menu.svg" alt=""
                    onClick={() => handleClick('Radar', 'radar-menu')} />
                <img className={`w-16 h-16 ${selectedImage === 'radio-menu' ? 'border-2 border-black' : ''}`}
                    src="/images/radio-menu.png" alt=""
                    onClick={() => handleClick('Radio', 'radio-menu')}
                />
                <img className={`w-16 h-16 ${selectedImage === 'graph-menu' ? 'border-2 border-black' : ''}`}
                    src="/images/graph-menu.svg" alt=""
                    onClick={() => handleClick('Scatter', 'graph-menu')}
                />
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
                <div className='small-screen-box'>
                    <Outlet />
                </div>
            </div>


            <NewSearchBtn />
            <BackResultsBtn />
            <BorderImages />
        </div>
    );
}
