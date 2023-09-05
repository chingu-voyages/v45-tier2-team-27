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
  } = useContext(AuthContext);

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
    <div className="search-container text-center mt-12 ">
      <div className="mx-6 mb-40">
        <h1 className="text-3xl md:text-3xl uppercase py-4">Skyfall</h1>
        <h2 className="uppercase pb-2">You Searched:</h2>
        <div className="search-field flex justify-evenly lg:m-auto">
          <p className="uppercase">
            <q>K</q>
          </p>
          <p className="uppercase">
            {fromYear && toYear ? `${fromYear}-${toYear}` : "Any Year"}
          </p>
          <span>&#8226;</span>
          <p className="uppercase">
            {composition || "Any Composition"}
          </p>
          <span>&#8226;</span>
          <p className="uppercase">
            {minMass && maxMass ? `${minMass}g - ${maxMass}g` : "Any Mass"}
          </p>
        </div>
        
        {mapClicked ?
        <div className="map-container">
        <Map />
        <img
        src="/images/large-black-border.png"
        alt=""
        className="large-black-border absolute bottom-[3.5rem] right-[10.7rem]"
      />
        <button className="back-to-results uppercase" onClick={backToResults}>Back to results</button>
        </div>
        :
          <div className="table-container">
          <table className="w-full border border-1 border-solid border-black lg:m-auto">
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
                  <td className="search-results-data">
                    <button
                      className="uppercase underline text-sky-700"
                      aria-label="View map"
                      onClick={() => handleMapLinkClick(item)}
                    >
                      Map
                    </button>
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
      <DarkMode />
    </div>
  );
}
