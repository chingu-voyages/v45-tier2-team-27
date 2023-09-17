import React, { useState, useEffect } from 'react';
import { useContext } from "react";
import { AuthContext } from "../App";
import {
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
    Tooltip,
    ResponsiveContainer
} from "recharts";


const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="mass">{`Mass: ${payload[0].payload.mass}`}</p>
            </div>
        );
    }

    return null;
};

export default function Radarchart() {

    const [containerWidth, setContainerWidth] = useState(600);
    const [coordinateX, setCoordinateX] = useState(200);
    const [coordinateY, setCoordinateY] = useState(200);
    const { filteredMeteoriteData } = useContext(AuthContext)


    useEffect(() => {

        const updateDimensions = () => {
            const width = window.innerWidth;

            if (width < 1280) {  // breakpoint here
                setContainerWidth(400);
                setCoordinateX(200)
                setCoordinateY(200)
            } else {
                setContainerWidth(600);
                setCoordinateX(300)
                setCoordinateY(250)
            }
        };


        updateDimensions();
        window.addEventListener('resize', updateDimensions);

        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, []);
    return (
        <ResponsiveContainer width="80%" className="radar-chart  mx-auto text-xs">
            <RadarChart

                outerRadius={`${window.innerWidth < 1280 ? (window.innerWidth < 600 ? (window.innerWidth < 450 ? "90" : "120") : "150") : "200"}`}

                width={800}
                height={800}
                data={filteredMeteoriteData}
            >
                <PolarGrid />
                <PolarAngleAxis dataKey="name" />
                <PolarRadiusAxis domain={['auto', 'auto']} />
                <Radar name="Mass" dataKey="mass" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                <Tooltip content={<CustomTooltip />} />
            </RadarChart>
        </ResponsiveContainer>
    );
}


