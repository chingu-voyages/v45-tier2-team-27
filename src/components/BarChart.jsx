import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
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
        name: "Achiras",
        recclass: "L6",
        mass: "780",
        year: "1902-01-01T00:00:00.000",

    },

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


export default function BarChartComponent() {
    return (
        <div className="flex justify-center items-center">
            <ResponsiveContainer width="100%" height={700}>
                <BarChart
                    data={data}
                    margin={{
                        top: 200,
                        right: 120,
                        left: 120,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Bar dataKey="mass" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
