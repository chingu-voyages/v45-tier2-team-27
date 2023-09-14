import { useContext, useState } from 'react';
import { AuthContext } from '../App';
import FetchApi from './FetchApi';
import { Link } from 'react-router-dom';

export default function Globe() {
  const { darkMode, setMapClicked } = useContext(AuthContext);

  const [globeClicked, setGlobeClicked] = useState(false);

  const handleGlobeClick = () => {
    setGlobeClicked(true);
    setMapClicked(true);
  };

  return (
    <div className="globe-border-container">
      <div className="globe-container">
        <img
          className={`${darkMode ? 'dark-globe-img mt-[1.2px] mr-[1.5px]' : 'globe-img'}`}
          src={`${darkMode ? './images/dark-mode-globe.png' : '/images/globe.png'}`}
          alt=""
        />
      </div>
      <div className="globe-gif-container">
        {globeClicked ? (
          // Pass a callback to onDataFetch to set mapClicked and selectedMeteorite
          <FetchApi/>
          
        ) : (
          <Link to="/search-results" onClick={handleGlobeClick}>
            <img
              className={`globe-gif z-50 ${darkMode ? 'border-white' : ''}`}
              src="./images/globe.gif"
              alt=""
            />
          </Link>
        )}
        <img
          className={`globe-border ${darkMode ? 'border-white' : ''}`}
          src={`${darkMode ? '/images/dark-mode-full-globe.png' : '/images/globe-border.png'}`}
          alt=""
        />
      </div>
    </div>
  );
}
