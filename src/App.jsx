import { createContext, useState } from "react";
import './App.css';
import './Landing.css';
import './ConnectingLines.css';
import './trapezoid.css';
import './BorderImages.css'
import Landing from './components/Landing';
import { Route, Routes } from 'react-router-dom';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
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
          <Route path="/linechart" element={<LineChart />} />
          <Route path="/barchart" element={<BarChart />} />
          <Route path="/radiochart" element={<RadialChartComponent />} />
          <Route path="/search-results" element={<SearchResults />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;

