import React, { useState, useEffect } from 'react';
import { useContext } from "react";
import { AuthContext } from "../App";
import { RadialBarChart, RadialBar, Legend, Tooltip, Cell, ResponsiveContainer } from 'recharts';


const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="recclass">{`Recclass: ${payload[0].payload.recclass}`}</p>
            </div>
        );
    }

    return null;
};
export default function RadioChart() {
    const [containerWidth, setContainerWidth] = useState(600);
    const { filteredMeteoriteData } = useContext(AuthContext)

    const colorArray = ["#000000", "#404040", "#808080", "#bfbfbf", "#d0ed57"];
    const COLORS = {};

    const groupedData = filteredMeteoriteData.reduce((acc, curr) => {
        if (!acc[curr.recclass]) {
            acc[curr.recclass] = 0;
        }
        acc[curr.recclass]++;
        return acc;
    }, {});

    let i = 0;
    for (const recclass in groupedData) {
        COLORS[recclass] = colorArray[i % colorArray.length];
        i++;
    }
    const showLegend = Object.keys(groupedData).length <= 5;

    const plotData = Object.keys(groupedData).map(recclass => ({
        recclass,
        count: groupedData[recclass]
    }));


    useEffect(() => {

        const updateDimensions = () => {
            const width = window.innerWidth;

            if (width < 1280) {  // breakpoint here
                setContainerWidth(400);
            } else {
                if (!showLegend) {
                    setContainerWidth(800);
                } else {
                    setContainerWidth(600);
                }
            }
        };


        updateDimensions();
        window.addEventListener('resize', updateDimensions);

        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, []);
    return (
        <ResponsiveContainer  className={`mx-auto radio-chart`} >
            <RadialBarChart
                innerRadius="50%"
                outerRadius="100%"
                data={plotData}
                startAngle={180}
                endAngle={0}
            >
                <RadialBar
                    minAngle={15}
                    label={{ fill: '#666', position: 'insideStart' }}
                    background
                    clockWise={true}
                    dataKey="count"
                >
                    {filteredMeteoriteData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[entry.recclass]} />
                    ))}
                </RadialBar>
                {showLegend && (<Legend
                    iconSize={10}
                    layout="vertical"
                    verticalAlign="bottom"
                    align="center"
                    payload={
                        Object.keys(COLORS).map(recclass => ({
                            value: recclass,
                            type: 'square',
                            color: COLORS[recclass]
                        }))
                    }
                />)}
                <Tooltip content={<CustomTooltip />} />

            </RadialBarChart>
        </ResponsiveContainer>
    );
}
