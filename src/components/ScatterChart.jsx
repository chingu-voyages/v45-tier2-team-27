import React, { PureComponent } from 'react';
import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ZAxis
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
        name: "Acapu",
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

const groupedData = data.reduce((acc, curr) => {
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
    return (
        <div className="flex justify-center items-center">
            <ScatterChart
                width={800}
                height={300}
                margin={{
                    top: 65,
                    right: 60,
                    left: 60,
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
        </div>
    );
}