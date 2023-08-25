import { createContext, useState } from "react";
import './App.css';
import './landing.css';
import './connectingLines.css';
import './trapezoid.css';
import './borderImages.css'
import Landing from './components/Landing';
import { Route, Routes } from 'react-router-dom';
import RadarChart from './components/RadarChart';
import ScatterChart from './components/ScatterChart';
import RadialChartComponent from "./components/RadioChart";
import SearchResults from "./components/SearchResults";
export const AuthContext = createContext();

function App() {
  const [meteoriteData, setMeteoriteData] = useState([]);

  return (
    <AuthContext.Provider value={{ meteoriteData, setMeteoriteData }}>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
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

