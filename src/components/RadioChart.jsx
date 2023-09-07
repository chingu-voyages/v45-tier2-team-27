import React, { useState, useEffect } from 'react';
import { useContext } from "react";
import { AuthContext } from "../App";
import { RadialBarChart, RadialBar, Legend, Tooltip, Cell, ResponsiveContainer } from 'recharts';

const COLORS = {
    "L5": "#8884d8",
    "H6": "#82ca9d",
    "EH4": "#ffc658",
    "Acapulcoite": "#a4de6c",
    "L6": "#d0ed57",
}


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
    const { fakeData } = useContext(AuthContext);

    const groupedData = fakeData.reduce((acc, curr) => {
        if (!acc[curr.recclass]) {
            acc[curr.recclass] = 0;
        }
        acc[curr.recclass]++;
        return acc;
    }, {});

    const plotData = Object.keys(groupedData).map(recclass => ({
        recclass,
        count: groupedData[recclass]
    }));
    

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
        <ResponsiveContainer width="80%" height={containerWidth}>
            <RadialBarChart
                innerRadius="40%"
                outerRadius="90%"
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
                    {fakeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[entry.recclass]} />
                    ))}
                </RadialBar>
                <Legend
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
                />
                <Tooltip content={<CustomTooltip />} />

            </RadialBarChart>
        </ResponsiveContainer>
    );
}
