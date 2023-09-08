import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../App";
import BorderImages from "./BorderImages";
import NewSearchBtn from "./NewSearchBtn";
import Map from "./Map";
import DarkMode from "./DarkMode";

export default function SearchResults() {
  const [mapClicked, setMapClicked] = useState(false);
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
  } = useContext(AuthContext)

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
    
        let newFilteredData = meteoriteData.filter((item) => {
  
          if (parsedSearchCriteria.asteroidName) {
            setAsteroidName(parsedSearchCriteria.asteroidName);
          }
    
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
  }, [meteoriteData, asteroidName, setAsteroidName, composition, fromYear, toYear, minMass, maxMass]);

  return (
    <div className="search-outer-container">
      <div className="search-inner-container text-center mt-16 xl:mx-auto">
        <div className={`${mapClicked ? "map-search-results" : "mx-6 mt-4 mb-40"} `}>
          <h1 className={`${mapClicked ? "uppercase text-3xl md:text-3xl map-title" : "uppercase text-3xl md:text-3xl py-4"}`}>Skyfall</h1>
          <h2 className={`${mapClicked ? "text-left text-xs uppercase pb-1" : "uppercase pb-2 md:text-left"}`}>You Searched:</h2>
          <div className="search-field flex justify-evenly lg:m-auto py-2 mb-2">
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
          
          {mapClicked ?
          <>
            <div className="map-container">
              <img className="overlay" src={`${darkMode ? "/images/dark-globe-fade.png" : "/images/globe-fade.png"}`}></img>
              <Map />
            </div>
            <div onClick={backToResults}>
              <img
                src={`${darkMode ? "/images/white-back-to-results-border.png" : "/images/back-to-results-border.png"}`}
                alt=""
                className=" back-to-results-border"
              />
              <button className="back-to-results" onClick={backToResults}>
                  Back to results
              </button>
            </div >
          </>
          :
          <div className="table-container">
            <table className=" w-full border border-1 border-solid border-black lg:m-auto">
              <thead className="bg-gray-300 sticky top-0">
                <tr>
                  <th className="search-table-header uppercase">Name</th>
                  <th className="search-table-header uppercase underline">
                    <a href="/" aria-label="View year of strike summary ">
                      Year
                    </a>
                  </th>
                  <th className="search-table-header uppercase underline">
                    <a href="/" aria-label="View composition materials summary">
                      Comp
                    </a>
                  </th>
                  <th className="search-table-header uppercase underline">
                    <a href="/" aria-label="View mass value summary">
                      Mass
                    </a>
                  </th>
                  <th></th>
                </tr>
              </thead>
              
              <tbody className="search-results">
                {filteredData.map((item) => (
                  <tr key={item.id}>
                    <td className="search-results-data">{item.name.toString()}</td>

                    <td className="search-results-data">{item.year.toString()}</td>

                    <td className="search-results-data">{item.recclass.toString()}</td>

                    <td className="search-results-data">{item.mass.toString()}</td>

                      <td className="search-results-data ">
                        <a
                          className="uppercase underline text-sky-600 cursor-pointer"
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
          }
        </div>
        <div className={`${mapClicked ? "map-search-btn" : ""}`}> 
          <NewSearchBtn />
        </div>          
        
        <BorderImages />
        <div className={`${mapClicked ? "relative bottom-24 map-icon-container" : "relative bottom-40"}`}>
          <DarkMode />
        </div>
      </div>
    </div>
  );
}
