import React, { useState, useEffect } from 'react';
import {
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
    Tooltip,
    ResponsiveContainer
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

    useEffect(() => {
        
        const updateDimensions = () => {
          const width = window.innerWidth;
    
          if (width <= 768) {  // breakpoint here
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
        <ResponsiveContainer width={containerWidth} height="80%">
            <RadarChart
                cx={coordinateX}
                cy={coordinateY}
                outerRadius={100}
                width={600}
                height={700}
                data={data}
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


