import React, { useState } from 'react';
import Radar from './RadarChart'
import Radio from './RadioChart'
import Scatter from './ScatterChart'
import { Outlet, useMatch } from 'react-router-dom';
import { Link } from "react-router-dom";

export default function BigChartBorder() {
    const matchScatter = useMatch("/chart/scatter");
    const matchRadar = useMatch("/chart/radar");
    const matchRadio = useMatch("/chart/radio");

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
                    <p className="uppercase">
                        K
                    </p>
                    <span>&#8226;</span>
                    <p className="uppercase">2000-2010</p>
                    <span>&#8226;</span>
                    <p className="uppercase">composition</p>
                    <span>&#8226;</span>
                    <p className="uppercase">mass value</p>
                </div>

            </div>

            <div className="main-content">
                <img className="overlap-image" src="/images/big-chart-border.png" />
                <div className="black-dot"></div>

                <div className="side-bar flex flex-col justify-around items-center">
                    <Link to={'/chart/radar'}>
                        <img className={`w-16 h-16 ${selectedImage === 'radar-menu' ? 'border-2 border-black' : ''}`}
                            src="/images/radar-menu.svg"
                            alt="" /></Link>
                    <Link to={'/chart/radio'}>
                        <img className={`w-16 h-16 ${selectedImage === 'radio-menu' ? 'border-2 border-black' : ''}`}
                            src="/images/radio-menu.png"
                            alt="" /></Link>

                    <Link to={'/chart/scatter'}>
                        <img className={`w-16 h-16 ${selectedImage === 'graph-menu' ? 'border-2 border-black' : ''}`}
                            src="/images/graph-menu.svg"
                            alt="" /></Link>

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