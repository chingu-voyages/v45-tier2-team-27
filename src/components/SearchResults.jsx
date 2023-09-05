import { useContext, useState } from "react";
import { AuthContext } from "../App";
import BorderImages from "./BorderImages";
import NewSearchBtn from "./NewSearchBtn";
import Map from "./Map";
import DarkMode from "./DarkMode";

export default function SearchResults() {
  const [mapClicked, setMapClicked] = useState(false);
  const {
    meteoriteData,
    asteroidName,
    composition,
    fromYear,
    toYear,
    minMass,
    maxMass,
    setSelectedMeteorite,
    asteroidInput,
    darkMode
  } = useContext(AuthContext)

  const handleMapLinkClick = (selectedMeteorite) => {
    setSelectedMeteorite(selectedMeteorite);
    setMapClicked(true);
  };

  const backToResults = () => {
    setMapClicked(false)
  }

  const filteredMeteoriteData = meteoriteData.filter((item) => {
    const isMassInRange = (!minMass || item.mass >= minMass) && (!maxMass || item.mass <= maxMass);
    const isYearInRange =
      (!fromYear || (item.year >= fromYear && (!toYear || item.year <= toYear)));
    const isAsteroidNameMatch =
      !asteroidName || item.name.toLowerCase().startsWith(asteroidName.toLowerCase());
    const isCompositionMatch =
      !composition || composition.toLowerCase() === item.recclass.toLowerCase();

    return (
      isAsteroidNameMatch &&
      isYearInRange &&
      isCompositionMatch &&
      isMassInRange
    );
  });

  return (
    <div className="search-outer-container">
      <div className="search-inner-container text-center mt-16 xl:mx-auto">
        <div className="mx-6 mt-4 mb-40">
          <h1 className="uppercase text-3xl md:text-3xl py-4">Skyfall</h1>
          <h2 className="uppercase pb-2 md:text-left">You Searched:</h2>
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
          <div className="map-container">
          <Map />
            <img
              src={`${darkMode ? "/images/white-back-to-results-border.png" : "/images/back-to-results-border.png"}`}
              alt=""
              className=" back-to-results-border"
            />
            <a className="back-to-results bottom-[4.5rem]" onClick={backToResults}>
                Back to results
            </a>
          </div>
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
                {filteredMeteoriteData.map((item) => (
                  <tr key={item.id}>
                    <td className="search-results-data">{item.name}</td>

                    <td className="search-results-data">{item.year}</td>

                    <td className="search-results-data">{item.recclass}</td>

                    <td className="search-results-data">{item.mass}</td>

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
        <NewSearchBtn />
        <BorderImages />
        <div className="results-icon-container absolute bottom-[-2rem] right-0 left-0">
          <DarkMode />
        </div>
      </div>
    </div>
  );
}
