import React, { PureComponent } from 'react';
import {
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
    Tooltip
} from "recharts";

const data = [
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
        name: "Achiras",
        recclass: "L6",
        mass: "780",
        year: "1902-01-01T00:00:00.000",

    },
    {
        name: "A",
        recclass: "L6",
        mass: "78",
        year: "1902-01-01T00:00:00.000",
    }

];



const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="recclass">{`Recclass: ${payload[0].payload.recclass}`}</p>
                <p className="mass">{`Mass: ${payload[0].payload.mass}`}</p>
                <p className="year">{`Year: ${payload[0].payload.year}`}</p>
            </div>
        );
    }

    return null;
};

export default function Radarchart() {
    return (
        <div className="flex justify-center items-center">
            <RadarChart
                cx={300}
                cy={250}
                outerRadius={150}
                width={600}
                height={500}
                data={data}
            >
                <PolarGrid />
                <PolarAngleAxis dataKey="name" />
                <PolarRadiusAxis domain={['auto', 'auto']} />
                <Radar name="Mass" dataKey="mass" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                <Tooltip content={<CustomTooltip />} />
            </RadarChart>
        </div>
    );
}


