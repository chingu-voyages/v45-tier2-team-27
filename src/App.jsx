import { createContext, useState, useEffect } from "react";
import "./App.css";
import "./Landing.css";
import "./ConnectingLines.css";
import "./ChartBorder.css";
import "./BigChartBorder.css";
import "./Trapezoid.css";
import "./BorderImages.css";
import "./About.css";
import "./SearchResults.css";
import Landing from "./components/Landing";
import { Route, Routes } from "react-router-dom";
import RadarChart from "./components/RadarChart";
import ScatterChart from "./components/ScatterChart";
import RadialChartComponent from "./components/RadioChart";
import SearchResults from "./components/SearchResults";
import Chart from "./components/Chart";
import BigChart from "./components/BigChart";
import About from "./components/About";
import FetchApi from "./components/FetchApi";

export const AuthContext = createContext();

function useMediaQuery(query) {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

function App() {
  const [meteoriteData, setMeteoriteData] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [recclassList, setRecclassList] = useState([]);
  const [asteroidName, setAsteroidName] = useState("");
  const [fromYear, setFromYear] = useState(null);
  const [toYear, setToYear] = useState(null);
  const [minMass, setMinMass] = useState(null);
  const [maxMass, setMaxMass] = useState(null);
  const [composition, setComposition] = useState("");
  const [asteroidInput, setAsteroidInput] = useState("");
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    darkMode
      ? (document.body.className = "dark-mode")
      : (document.body.className = "light-mode");
  }, [darkMode]);

  return (
    <>
      <AuthContext.Provider
        value={{
          meteoriteData,
          setMeteoriteData,
          darkMode,
          setDarkMode,
          recclassList,
          setRecclassList,
          asteroidName,
          setAsteroidName,
          fromYear,
          setFromYear,
          toYear,
          setToYear,
          minMass,
          setMinMass,
          maxMass,
          setMaxMass,
          composition,
          setComposition,
          asteroidInput,
          setAsteroidInput,
        }}
      >
        <div className={`app-container `}>
          <FetchApi />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route
              path="/chart"
              element={isSmallScreen ? <Chart /> : <BigChart />}
            />
            <Route path="/radar-chart" element={<RadarChart />} />
            <Route path="/scatter-chart" element={<ScatterChart />} />
            <Route path="/radio-chart" element={<RadialChartComponent />} />
            <Route
              path="/search-results"
              element={<SearchResults asteroidInput={asteroidInput} />}
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </AuthContext.Provider>
    </>
  );
}

export default App;
