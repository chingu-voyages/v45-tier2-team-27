import { createContext, useState } from "react";
import './App.css';
import './Landing.css';
import './ConnectingLines.css';
import './trapezoid.css';
import './BorderImages.css'
import './ChartBorder.css'
import './BigChartBorder.css'
import Landing from './components/Landing';
import { Route, Routes } from 'react-router-dom';
import RadarChart from './components/RadarChart';
import ScatterChart from './components/ScatterChart';
import RadialChartComponent from "./components/RadioChart";
import SearchResults from "./components/SearchResults";
import Chart from './components/Chart'
import BigChart from './components/BigChart'
export const AuthContext = createContext();

function App() {
  const [meteoriteData, setMeteoriteData] = useState([]);

  return (
    <AuthContext.Provider value={{ meteoriteData, setMeteoriteData }}>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/big-chart" element={<BigChart />} />
          <Route path="/radar-chart" element={<RadarChart />} />
          <Route path="/scatter-chart" element={<ScatterChart />} />
          <Route path="/radio-chart" element={<RadialChartComponent />} />
          <Route path="/search-results" element={<SearchResults />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;

