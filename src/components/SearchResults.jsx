import { useContext, useState } from "react";
import { AuthContext } from "../App";
import BorderImages from "./BorderImages";
import NewSearchBtn from "./NewSearchBtn";
import Map from "./Map";
import DarkMode from "./DarkMode";
import { Link } from "react-router-dom";

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
    darkMode,
    setFilteredMeteoriteData,
  } = useContext(AuthContext);

  const handleMapLinkClick = (selectedMeteorite) => {
    setSelectedMeteorite(selectedMeteorite);
    setMapClicked(true);
  };

  const backToResults = () => {
    setMapClicked(false);
  };

  const filteredMeteoriteData = meteoriteData.filter((item) => {
    const isMassInRange =
      (!minMass || item.mass >= minMass) && (!maxMass || item.mass <= maxMass);
    const isYearInRange =
      !fromYear || (item.year >= fromYear && (!toYear || item.year <= toYear));
    const isAsteroidNameMatch =
      !asteroidName ||
      item.name.toLowerCase().startsWith(asteroidName.toLowerCase());
    const isCompositionMatch =
      !composition || composition.toLowerCase() === item.recclass.toLowerCase();

    return (
      isAsteroidNameMatch &&
      isYearInRange &&
      isCompositionMatch &&
      isMassInRange
    );
  });

  function handleClick(filteredMeteoriteData) {
    setFilteredMeteoriteData(filteredMeteoriteData);
  }

  const tableDataBorder = `border-y ${
    darkMode ? "border-white" : "border-black"
  }`;

  return (
    <div className="search-outer-container">
      <div className="search-inner-container text-center mt-16 xl:mx-auto">
        <div
          className={`${
            mapClicked ? "map-search-results" : "mx-6 mt-4 mb-40"
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
                ? "text-left text-xs uppercase pb-1"
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
                  className=" back-to-results-border"
                />
                <button className="back-to-results" onClick={backToResults}>
                  Back to results
                </button>
              </div>
            </>
          ): (
            <div className="table-container">
              <table className=" w-full border border border-black lg:m-auto">
                <thead
                  className={`sticky top-0 border ${
                    darkMode
                      ? "bg-zinc-600 border-white"
                      : "bg-gray-300 border-black"
                  }`}
                >
                  <tr>
                    <th className="uppercase">Name</th>
                    <th className="uppercase underline">
                      <a href="/" aria-label="View year of strike summary ">
                        Year
                      </a>
                    </th>
                    <th className="uppercase underline">
                      <a
                        href="/"
                        aria-label="View composition materials summary"
                      >
                        Comp
                      </a>
                    </th>
                    <th className="uppercase underline">
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
                      <td className={tableDataBorder}>
                        {item.name.toString()}
                      </td>

                      <td className={tableDataBorder}>{item.year.toString()}</td>

                      <td className={tableDataBorder}>{item.recclass.toString()}</td>

                      <td className={tableDataBorder}>{item.mass.toString()}</td>

                      <td className={tableDataBorder}>
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
          )}
        </div>
        <div className={`${mapClicked ? "map-search-btn" : ""}`}> 
          <NewSearchBtn />
        </div>
        <BorderImages />
        <div
          className={`${
            mapClicked
              ? "relative bottom-24 map-icon-container"
              : "relative bottom-40"
          }`}
        >
          <DarkMode />
        </div>
      </div>
    </div>
  );
}
