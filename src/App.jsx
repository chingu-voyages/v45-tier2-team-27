import { createContext, useState } from "react";
import './App.css';
import '/src/landing.css';
import '/src/connectingLines.css';
import '/src/trapezoid.css';
import '/src/borderImages.css'
import Landing from './components/Landing';
import { Route, Routes } from 'react-router-dom';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import RadialChartComponent from "./components/RadioChart";

export const AuthContext = createContext();

function App() {
  const [meteoriteData, setMeteoriteData] = useState([]);

  return (
    <AuthContext.Provider value={{ meteoriteData, setMeteoriteData }}>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/linechart" element={<LineChart />} />
          <Route path="/barchart" element={<BarChart />} />
          <Route path="/radiochart" element={<RadialChartComponent />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;

