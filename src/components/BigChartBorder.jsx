import React, { useState } from 'react';
import Radar from './RadarChart'
import Radio from './RadioChart'
import Scatter from './ScatterChart'

export default function BigChartBorder() {
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
                    <img className={`w-16 h-16 ${selectedImage === 'radar-menu' ? 'border-2 border-black' : ''}`}
                        src="/images/radar-menu.svg"
                        onClick={() => handleClick('Radar', 'radar-menu')}
                        alt="" />
                    <img className={`w-16 h-16 ${selectedImage === 'radio-menu' ? 'border-2 border-black' : ''}`}
                        src="/images/radio-menu.png"
                        onClick={() => handleClick('Radio', 'radio-menu')}
                        alt="" />
                    <img className={`w-16 h-16 ${selectedImage === 'graph-menu' ? 'border-2 border-black' : ''}`}
                        src="/images/graph-menu.svg"
                        onClick={() => handleClick('Scatter', 'graph-menu')}
                        alt="" />
                </div>

                <div className="vertical-line"></div>

                <div className="chart">
                    {renderChart()}
                </div>

                <div className="bottom-black-dot"></div>

            </div>



            <div className='box'>

            </div>
        </div>
    )
}