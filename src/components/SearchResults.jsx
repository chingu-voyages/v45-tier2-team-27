import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../App";
import BorderImages from "./BorderImages";
import NewSearchBtn from "./NewSearchBtn";
import Map from "./Map";
import DarkMode from "./DarkMode";
import { Link } from "react-router-dom";

export default function SearchResults() {
  
  const [filteredData, setFilteredData] = useState([])
  const {
    meteoriteData,
    asteroidName,
    setAsteroidName,
    composition,
    fromYear,
    toYear,
    minMass,
    maxMass,
    setSelectedMeteorite,
    asteroidInput,
    darkMode,
    setFilteredMeteoriteData,
    mapClicked,
    setMapClicked,
  } = useContext(AuthContext);

  const handleMapLinkClick = (selectedMeteorite) => {
    setSelectedMeteorite(selectedMeteorite);
    setMapClicked(true);
  };

  const backToResults = () => {
    setMapClicked(false)
  }

  useEffect(() => {
    try {
      const storedSearchCriteria = localStorage.getItem("searchCriteria");
    
      if (storedSearchCriteria) {
        const parsedSearchCriteria = JSON.parse(storedSearchCriteria);
    
        let newFilteredData = []
        if (Array.isArray(meteoriteData)) {
          newFilteredData = meteoriteData.filter((item) => {
        
  
        
          const isYearInRange =
            (!parsedSearchCriteria.fromYear || item.year >= parsedSearchCriteria.fromYear) &&
            (!parsedSearchCriteria.toYear || item.year <= parsedSearchCriteria.toYear);
    
          const isMassInRange =
            (!parsedSearchCriteria.minMass || item.mass >= parsedSearchCriteria.minMass) &&
            (!parsedSearchCriteria.maxMass || item.mass <= parsedSearchCriteria.maxMass);
    
          const isCompositionMatch =
            !parsedSearchCriteria.composition || item.recclass.toLowerCase() === parsedSearchCriteria.composition.toLowerCase();
    
          return  isYearInRange && isMassInRange && isCompositionMatch;
        });
      }
        newFilteredData = newFilteredData.filter((item) => {
          const isMassInRange =
            (!minMass || item.mass >= minMass) && (!maxMass || item.mass <= maxMass);
          const isYearInRange =
            (!fromYear || (item.year >= fromYear && (!toYear || item.year <= toYear)));
            const isAsteroidNameMatch =
            !asteroidName || item.name.toLowerCase().startsWith(asteroidName.toLowerCase());
          const isCompositionMatch =
            !composition || item.recclass.toLowerCase() === composition.toLowerCase();
    
          return (
            isAsteroidNameMatch &&
            isYearInRange &&
            isCompositionMatch &&
            isMassInRange
          );
        });
    
        setFilteredData(newFilteredData);
      }
    } catch (error) {
      console.error("Error retrieving data from localStorage:", error);
    }
  }, [meteoriteData, mapClicked, asteroidName, composition, fromYear, toYear, minMass, maxMass]);

  function handleClick() {
    setFilteredMeteoriteData(filteredData);
  }

  const tableDataBorder = `border-y ${
    darkMode ? "border-white" : "border-black"
  }`;

  return (
    <div className="search-outer-container">
      <div className="search-inner-container text-center mt-16 xl:mx-auto">
        <div
          className={`${
            mapClicked ? "map-search-results" : "w-[90%] mx-auto mt-4 mb-40"
          } `}
        >
          <h1
            className={`${
              mapClicked
                ? "uppercase text-3xl md:text-3xl map-title"
                : "uppercase text-3xl md:text-3xl py-4"
            }`}
          >
            Skyfall
          </h1>
          <h2
            className={`${
              mapClicked
                ? "text-left text-xs uppercase pb-1 ml-1"
                : "uppercase pb-2 md:text-left"
            }`}
          >
            You Searched:
          </h2>
          <div
            className={`search-field ${
              darkMode ? "border-slate-50" : "border-black"
            }`}
          >
            <p className="capitalize font-semibold">
              <q>{asteroidInput}</q>
            </p>
            <span>&bull;</span>
            <p className="font-semibold">
              {fromYear && toYear ? `${fromYear}-${toYear}` : "Any Year"}
            </p>
            <span>&bull;</span>
            <p className="capitalize font-semibold">
              {composition || "Any Composition"}
            </p>
            <span>&bull;</span>
            <p className="font-semibold">
              {minMass && maxMass ? `${minMass}g - ${maxMass}g` : "Any Mass"}
            </p>
          </div>

          {mapClicked ? (
            <>
              <div className="map-container">
                <div className="overlay"></div>
                {/* <img className="overlay" src={`${darkMode ? "/images/dark-globe-fade.png" : "/images/globe-fade.png"}`}></img> */}
                <Map />
              </div>
              <div onClick={backToResults}>
                <img
                  src={`${
                    darkMode
                      ? "/images/white-back-to-results-border.png"
                      : "/images/back-to-results-border.png"
                  }`}
                  alt=""
                  className=" back-to-results-border h-8"
                />
                <button className="back-to-results" onClick={backToResults}>
                  Back to results
                </button>
              </div>
            </>
          ): (
            <div className={`table-container border ${darkMode ? "border-white" : "border-black"}`}>
              <table className=" w-full border search-table-text border-black lg:m-auto">
                <thead
                  className={`sticky top-0 border ${
                    darkMode
                      ? "bg-zinc-600 border-white"
                      : "bg-gray-300 border-black"
                  }`}
                >
                  <tr>
                    <th className="uppercase pl-1">Name</th>
                    <th className="uppercase underline text-center">
                    <Link to="/chart/scatter" onClick={() => handleClick()} aria-label="View year of strike summary ">
                        Year
                      </Link>
                    </th>
                    <th className="uppercase underline text-center">
                    <Link to="/chart/radio" onClick={() => handleClick()} aria-label="View composition materials summary">
                        Comp
                      </Link>
                    </th>
                    <th className="uppercase underline">
                    <Link to="/chart/radar" onClick={() => handleClick()} aria-label="View mass value summary">
                        Mass
                      </Link>
                    </th>
                    <th></th>
                  </tr>
                </thead>

                <tbody className="search-results">
                  {filteredData.map((item) => (
                    <tr key={item.id}>
                      <td className={`${tableDataBorder} text-wrap pl-1`}>
                        {item.name.length > 10 && window.innerWidth < 420 ? (
                          <>
                            {item.name.substring(0, 10)}-
                            <br />
                            {item.name.substring(10)}
                          </>
                        ) : (
                          item.name.toString()
                        )}
                      </td>

                      <td className={`${tableDataBorder} search-year`}>{item.year.toString()}</td>

                      <td className={`${tableDataBorder} search-recclass`}>{item.recclass.toString()}</td>

                      <td className={`${tableDataBorder} search-mass`}>{item.mass.toLocaleString()}</td>

                      <td className={tableDataBorder}>
                        <a
                          className="pr-1 underline text-sky-600 cursor-pointer"
                          aria-label="View map"
                          onClick={() => handleMapLinkClick(item)}
                        >
                          Map
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        <div className={`${mapClicked ? "map-search-btn" : ""}`}> 
          <NewSearchBtn />
        </div>

        <BorderImages />
        <div
          className={`${
            mapClicked
              ? "map-icon-container"
              : "search-icon-container"
          }`}
        >
          <DarkMode />
        </div>
      </div>
    </div>
  );
}
