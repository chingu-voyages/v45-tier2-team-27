import { createContext, useState, useEffect } from "react";
import './App.css';
import './Landing.css';
import './ConnectingLines.css';
import './Trapezoid.css';
import './BorderImages.css';
import './About.css';
import "./DesktopBorder.css";
import "./SearchResults.css"
import Landing from './components/Landing';
import { Route, Routes } from 'react-router-dom';
import RadarChart from './components/RadarChart';
import ScatterChart from './components/ScatterChart';
import RadialChartComponent from "./components/RadioChart";
import SearchResults from "./components/SearchResults";
import About from "./components/About";

export const AuthContext = createContext();

function App() {
  const [meteoriteData, setMeteoriteData] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    darkMode ? 
    document.body.className = 'dark-mode' 
    : document.body.className = 'light-mode' 
  }, [darkMode])

  return (
    <>
    <AuthContext.Provider value={{ meteoriteData, setMeteoriteData, darkMode, setDarkMode }}>
      <div className={`app-container `}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/radar-chart" element={<RadarChart />} />
          <Route path="/scatter-chart" element={<ScatterChart />} />
          <Route path="/radio-chart" element={<RadialChartComponent />} />
          <Route path="/search-results" element={<SearchResults />} />
          <Route path="/about" element={<About />} />
        </Routes>
        </div>   
    </AuthContext.Provider>
    </>
  );
}

export default App;

