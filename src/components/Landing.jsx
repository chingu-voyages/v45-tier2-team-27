import { useContext } from "react";
import BorderImages from "./BorderImages";
import ConnectingLines from "./ConnectingLines";
import Globe from "./Globe";
import Trapezoid from "./Trapezoid";
import { AuthContext } from "../App";
import { Link } from "react-router-dom";

export default function Landing() {
  const {
    darkMode,
    setDarkMode,
    recclassList,
    asteroidName,
    setAsteroidName,
    composition,
    setComposition,
    fromYear,
    setFromYear,
    toYear,
    setToYear,
    minMass,
    setMinMass,
    maxMass,
    setMaxMass,
    setAsteroidInput,
  } = useContext(AuthContext);

  const handleAsteroidNameChange = (e) => {
    setAsteroidInput(e.target.value);
    setAsteroidName(e.target.value);
  };

  const handleCompositionChange = (e) => {
    setComposition(e.target.value);
  };

  const handleYearRangeChange = (e) => {
    const input = e.target.value;
    const [fromYearInput, toYearInput] = input
      .split("-")
      .map((year) => year.trim());

    const fromYearValue = parseInt(fromYearInput);
    const toYearValue = parseInt(toYearInput);

    if (!isNaN(fromYearValue) && !isNaN(toYearValue)) {
      setFromYear(fromYearValue);
      setToYear(toYearValue);
    }
  };

  const handleMassRangeChange = (e) => {
    const input = e.target.value;
    console.log("select mass", input);
    const [minMassInput, maxMassInput] = input
      .split("-")
      .map((mass) => mass.trim());

    const minMassValue = parseInt(minMassInput);
    const maxMassValue = parseInt(maxMassInput);

    if (!isNaN(minMassValue) && !isNaN(maxMassValue)) {
      setMinMass(minMassValue);
      setMaxMass(maxMassValue);
    }
  };

  const handleSearch = () => {
    const searchCriteria = {};

    if (asteroidName) {
      searchCriteria.asteroidName = new RegExp(asteroidName, "i");
    }

    if (composition) {
      searchCriteria.composition = composition;
    }

    if (fromYear || toYear) {
      searchCriteria.fromYear = fromYear || "";
      searchCriteria.toYear = toYear || "";
    }

    if (minMass || maxMass) {
      searchCriteria.minMass = minMass || "";
      searchCriteria.maxMass = maxMass || "";
    }
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleClear = () => {
    const inputFields = document.querySelectorAll(".asteroid-input");
    inputFields.forEach((input) => (input.value = ""));

    const selects = document.querySelectorAll("select");
    selects.forEach((select) => (select.selectedIndex = 0));
  };

  const yearRanges = [
    { min: 1900, max: 1909, label: "1900 - 1909" },
    { min: 1910, max: 1919, label: "1910 - 1919" },
    { min: 1920, max: 1929, label: "1920 - 1929" },
    { min: 1930, max: 1939, label: "1930 - 1939" },
    { min: 1940, max: 1949, label: "1940 - 1949" },
    { min: 1950, max: 1959, label: "1950 - 1959" },
    { min: 1960, max: 1969, label: "1960 - 1969" },
    { min: 1970, max: 1979, label: "1970 - 1979" },
    { min: 1980, max: 1989, label: "1980 - 1989" },
    { min: 1990, max: 1999, label: "1990 - 1999" },
    { min: 2000, max: 2009, label: "2000 - 2009" },
    { min: 2010, max: 2019, label: "2010 - 2019" },
    { min: 2020, max: 2023, label: "2020 - 2023" },
  ];

  const massRanges = [
    { min: 0, max: 24, label: "0 - 25" },
    { min: 26, max: 50, label: "26 - 50" },
    { min: 51, max: 99, label: "51 - 100" },
    { min: 101, max: 499, label: "101 - 500" },
    { min: 501, max: 999, label: "501 - 1000" },
    { min: 1001, max: 4999, label: "1001 - 5000" },
    { min: 5001, max: 9999, label: "5001 - 10000" },
    { min: 10001, max: 49999, label: "10001 - 50000" },
    { min: 50001, max: 99999, label: "50001 - 100000" },
    { min: 100001, max: 499999, label: "100001 - 500000" },
    { min: 500001, max: 999999, label: "500001 - 999999" },
    { min: 1000000, max: Infinity, label: "1000000+" },
  ];

  return (
    <>
      <div className={`landing-container `}>
        <h1 className="landing-title">SKYFALL</h1>
        <div className="asteroid-container">
          <div className="asteroid-input-container">
            <div
              className={`asteroid-trap ${
                darkMode ? "dark-mode-trap" : "light-mode"
              }`}
            >
              <Trapezoid />
            </div>
            <input
              className="asteroid-input"
              type="text"
              onChange={handleAsteroidNameChange}
            />
            <div
              className={`upside-down-asteroid-trap ${
                darkMode ? "dark-mode-trap" : "light-mode-trap"
              }`}
            >
              <Trapezoid />
            </div>
          </div>
          <p className="asteroid-text">Asteroid Name</p>
        </div>

        <div className="year-select-container">
          <div className="year-dropdown-container">
            <div
              className={`year-trap ${
                darkMode ? "dark-mode-trap" : "light-mode"
              }`}
            >
              <Trapezoid />
            </div>
            <select
              name="year-select"
              id="year-select"
              className="year-select hover-show-trap"
              onChange={handleYearRangeChange}
            >
              <option value="" disabled selected></option>
              {yearRanges.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <div
              className={`upside-down-year-trap ${
                darkMode ? "dark-mode-trap" : "light-mode"
              }`}
            >
              <Trapezoid />
            </div>
          </div>
          <p className="year-dropdown-text">Year of Strike</p>
        </div>

        <div className="composition-select-container">
          <div className="composition-dropdown-container">
            <div
              className={`composition-trap ${
                darkMode ? "dark-mode-trap" : "light-mode"
              }`}
            >
              <Trapezoid />
            </div>
            <select
              name="Meteorite-composition"
              id="meteorite-composition"
              className="meteorite-composition"
              onChange={handleCompositionChange}
            >
              <option value="" disabled selected></option>
              {recclassList.map((recclass, index) => (
                <option key={index} value={recclass}>
                  {recclass}
                </option>
              ))}
            </select>
            <div
              className={`upside-down-composition-trap ${
                darkMode ? "dark-mode-trap" : "light-mode"
              }`}
            >
              <Trapezoid />
            </div>
          </div>
          <p className="composition-dropdown-text">Meteorite Composition</p>
        </div>

        <div className="mass-select-container">
          <div className="mass-dropdown-container">
            <div
              className={`mass-trap ${
                darkMode ? "dark-mode-trap" : "light-mode"
              }`}
            >
              <Trapezoid />
            </div>
            <select
              name="Mass Range"
              id="mass-range"
              className="mass-range"
              onClick={handleMassRangeChange}
            >
              <option value="" disabled selected></option>
              {massRanges.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div
              className={`upside-down-mass-trap ${
                darkMode ? "dark-mode-trap" : "light-mode"
              }`}
            >
              <Trapezoid />
            </div>
          </div>
          <p className="mass-dropdown-text">Mass Range</p>
        </div>

        <div className="landing-globe-container">
          <Globe />
          <ConnectingLines />
        </div>

        <div className="landing-btn-container">
          <div className="search-btn-container">
            <img
              className="small-black-border"
              src={`${
                darkMode
                  ? "/images/small-white-border.png"
                  : "/images/small-black-border.png"
              } `}
              alt=""
            />
            <button
              className={`search-btn ${darkMode ? "" : "right-[4.2rem]"}`}
              onClick={handleSearch}
            >
              <Link to="/search-results">SEARCH</Link>
            </button>
          </div>
          <div className="clear-btn-container">
            <button onClick={handleClear} className="clear-btn">
              CLEAR
            </button>
            <img
              className="small-gray-border"
              src="/images/small-gray-border.png"
              alt=""
            />
          </div>
          <div className="icon-container">
            <img
              onClick={handleDarkModeToggle}
              className="dark-mode-icon"
              src={`${
                darkMode
                  ? "/images/dark-dark-mode-icon.png"
                  : "/images/dark-mode-icon.png"
              }`}
              alt=""
            />
            <Link to="/about">
              <img
                className="about-icon"
                src={`${
                  darkMode
                    ? "/images/white-about-icon.png"
                    : "/images/about-icon.png"
                }`}
                alt=""
              />
            </Link>
          </div>
        </div>
        <BorderImages />
      </div>
    </>
  );
}
