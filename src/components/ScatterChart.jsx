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


    const { fakeData } = useContext(AuthContext);
      

    const groupedData = fakeData.reduce((acc, curr) => {
        const year = new Date(curr.year).getFullYear();
        if (!acc[year]) {
            acc[year] = 0;
        }
        acc[year]++;
        return acc;
    }, {});

    const plotData = Object.keys(groupedData).map(year => ({
        year: parseInt(year, 10),
        count: groupedData[year]
    }));


    const [containerWidth, setContainerWidth] = useState(600);
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