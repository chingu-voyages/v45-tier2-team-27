import React from 'react';
import { RadialBarChart, RadialBar, Legend, Tooltip, Cell } from 'recharts';

const data = [
    {
        name: "Aachen",
        recclass: "L5",
        mass: "21",
        year: "1880-01-01T00:00:00.000",

    },
    {
        name: "Aachen",
        recclass: "L5",
        mass: "21",
        year: "1880-01-01T00:00:00.000",

    },
    {
        name: "Aarhus",
        recclass: "H6",
        mass: "720",
        year: "1951-01-01T00:00:00.000",

    },
    {
        name: "Abee",
        recclass: "EH4",
        mass: "107000",
        year: "1952-01-01T00:00:00.000",

    },
    {
        name: "Acapulco",
        recclass: "Acapulcoite",
        mass: "1914",
        year: "1976-01-01T00:00:00.000",

    },
    {
        name: "Achiras",
        recclass: "L6",
        mass: "780",
        year: "1902-01-01T00:00:00.000",

    },

];
const COLORS = {
    "L5": "#8884d8",
    "H6": "#82ca9d",
    "EH4": "#ffc658",
    "Acapulcoite": "#a4de6c",
    "L6": "#d0ed57",
};

const groupedData = data.reduce((acc, curr) => {
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
    return (
        <RadialBarChart
            width={730}
            height={250}
            innerRadius="10%"
            outerRadius="80%"
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
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[entry.recclass]} />
                ))}
            </RadialBar>
            <Legend
                iconSize={10}
                layout="vertical"
                verticalAlign="middle"
                align="right"
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
    );
}
