import React, { useState, useEffect } from 'react';
import { useContext } from "react";
import { AuthContext } from "../App";
import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ZAxis,
    ResponsiveContainer
}
    from "recharts";


const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="year">{`Year: ${payload[0].payload.year}`}</p>
                <p className="count">{`Meteorites: ${payload[0].payload.count}`}</p>
            </div>
        );
    }

    return null;
};


export default function Scatterchart() {

    const { filteredMeteoriteData } = useContext(AuthContext)
    const [plotData, setPlotData] = useState([]);
    const [containerWidth, setContainerWidth] = useState(600);



    useEffect(() => {

        if (!Array.isArray(filteredMeteoriteData) || filteredMeteoriteData.length === 0) {
            console.log('Invalid or empty filteredMeteoriteData');
            return;
        }
        const groupedData = filteredMeteoriteData.reduce((acc, curr) => {
            if (!curr.year) {
                console.log('Year not found in current item', curr);
                return acc;
            }
            console.log("Current year raw value:", curr.year);
            const year = parseInt(curr.year, 10);
            console.log("Parsed year:", year);

            return {
                ...acc,
                [year]: (acc[year] || 0) + 1,
            };
        }, {});

    

        const newPlotData = Object.keys(groupedData).map(year => ({
            year: parseInt(year, 10),
            count: groupedData[year]
        }));

        console.log("New plot data: ", newPlotData);

        setPlotData(prevPlotData => {
            if (JSON.stringify(prevPlotData) !== JSON.stringify(newPlotData)) {
                return newPlotData;
            }
            return prevPlotData;
        });



    }, [filteredMeteoriteData]);




    useEffect(() => {

        const updateDimensions = () => {
            const width = window.innerWidth;

            if (width <= 768) {  // breakpoint here
                setContainerWidth(400);
            } else {
                setContainerWidth(600);
            }
        };


        updateDimensions();
        window.addEventListener('resize', updateDimensions);

        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, []);



    return (
        <ResponsiveContainer width={containerWidth} height="80%">
            <ScatterChart
                margin={{
                    top: 65,
                    right: 50,
                    left: 10,
                    bottom: -20
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" name="Year" />
                <YAxis dataKey="count" name="Meteorite Count" />

                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Scatter
                    name="Meteorites"
                    data={plotData}
                    fill="#8884d8"
                />
            </ScatterChart>
        </ResponsiveContainer>

    );
}