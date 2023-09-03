import { useContext } from "react"
import BorderImages from "./BorderImages";
import ConnectingLines from "./ConnectingLines"
import Globe from "./Globe";
import Trapezoid from "./Trapezoid";
import { AuthContext } from "../App"
import { Link } from "react-router-dom";

export default function Landing(){
    const {darkMode, setDarkMode, recclassList} = useContext(AuthContext);

    const handleDarkModeToggle = () => {
        setDarkMode(!darkMode);
      };

    const handleClear = () => {
    // Clear input fields and selects
    const inputFields = document.querySelectorAll('.asteroid-input');
    inputFields.forEach(input => (input.value = ''));
    
    const selects = document.querySelectorAll('select');
    selects.forEach(select => (select.selectedIndex = 0));
    };

    const generateYearOptions = () => {
        const currentYear = new Date().getFullYear();
        const startYear = 1900;
        const yearOptions = [];
      
        for (let year = currentYear; year >= startYear; year -= 10) {
          yearOptions.push(
            <option key={year} value={year}>
              {Math.max(year - 9, startYear)} - {year}
            </option>
          );
        }
      
        return yearOptions;
      };

      const massRanges = [
        { min: 0, max: 24, label: '0 - 25' },
        { min: 25, max: 50, label: '26 - 50' },
        { min: 50, max: 99, label: '51 - 100' },
        { min: 100, max: 499, label: '101 - 500' },
        { min: 500, max: 999, label: '501 - 1000' },
        { min: 1000, max: 4999, label: '1001 - 5000' },
        { min: 5000, max: 9999, label: '5001 - 10000' },
        { min: 10000, max: 49999, label: '10001 - 50000' },
        { min: 50000, max: 99999, label: '50001 - 100000' },
        { min: 100000, max: 499999, label: '100001 - 500000' },
        { min: 500000, max: 999999, label: '500001 - 999999' },
        { min: 1000000, max: Infinity, label: '1000000+' },
      ];

    return(
        <>
        
        
        <div className={`landing-container `}>
            <h1 className="landing-title">SKYFALL</h1>
            <div className="asteroid-container">
                <div className="asteroid-input-container">
                    <div className={`asteroid-trap ${darkMode ? 'dark-mode-trap' : 'light-mode'}`}>
                        <Trapezoid />
                    </div>  
                    <input className="asteroid-input" type="text" />
                    <div className={`upside-down-asteroid-trap ${darkMode ? 'dark-mode-trap' : 'light-mode-trap'}`}>
                        <Trapezoid />
                    </div>
                </div>
                <p className="asteroid-text">Asteroid Name</p>
            </div>


            <div className="year-select-container">
                <div className="year-dropdown-container">
                    <div className={`year-trap ${darkMode ? 'dark-mode-trap' : 'light-mode'}`}>
                        <Trapezoid />
                    </div>
                    <select name="year-select" id="year-select" className="year-select hover-show-trap">
                        <option value="" disabled selected></option>
                        {generateYearOptions()}
                    </select>
                    
                    <div className={`upside-down-year-trap ${darkMode ? 'dark-mode-trap' : 'light-mode'}`}>
                        <Trapezoid />
                    </div>
                </div>
                <p className="year-dropdown-text">Year of Strike</p>
            </div>
            
            
            <div className="composition-select-container">
                <div className="composition-dropdown-container">
                    <div className={`composition-trap ${darkMode ? 'dark-mode-trap' : 'light-mode'}`}>
                        <Trapezoid />
                    </div>
                    <select name="Meteorite-composition" id="meteorite-composition" className="meteorite-composition">
                        <option value="" disabled selected></option>
                        {recclassList.map((recclass, index) => (
                        <option key={index} value={recclass}>
                            {recclass}
                        </option>
                        ))}
                    </select>
                    <div className={`upside-down-composition-trap ${darkMode ? 'dark-mode-trap' : 'light-mode'}`}>
                        <Trapezoid />
                    </div>
                </div>
                <p className="composition-dropdown-text">Meteorite Composition</p>
            </div>
            
            <div className="mass-select-container">
                <div className="mass-dropdown-container">
                    <div className={`mass-trap ${darkMode ? 'dark-mode-trap' : 'light-mode'}`}>
                        <Trapezoid />
                    </div>
                    <select name="Mass Range" id="mass-range" className="mass-range">
                        <option value="" disabled selected></option>
                        {massRanges.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                        ))}
                    </select>
                    <div className={`upside-down-mass-trap ${darkMode ? 'dark-mode-trap' : 'light-mode'}`}>
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
                    <img className="small-black-border" src={`${darkMode ? "/images/small-white-border.png" : "/images/small-black-border.png"} `} alt="" />
                    <button className={`search-btn ${darkMode ? "" : "right-[4.2rem]"}`}><Link to="/search-results">SEARCH</Link></button>
                </div>
                <div className="clear-btn-container">
                    <button onClick={handleClear} className="clear-btn">CLEAR</button>
                    <img className="small-gray-border" src="/images/small-gray-border.png" alt="" />
                </div>
                <div className="icon-container">
                    <img onClick={handleDarkModeToggle} className="dark-mode-icon" src={`${darkMode ? "/images/dark-dark-mode-icon.png" : "/images/dark-mode-icon.png"}`} alt="" />
                    <Link to="/about"><img className="about-icon" src={`${darkMode ? "/images/white-about-icon.png" : "/images/about-icon.png"}`} alt="" /></Link>
                </div>
            </div>
            <BorderImages />
        </div>
        
        </>
    )
}