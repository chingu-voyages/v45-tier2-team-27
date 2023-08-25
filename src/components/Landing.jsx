
import BorderImages from "./BorderImages";
import ConnectingLines from "./ConnectingLines"
import Globe from "./Globe";
import Trapezoid from "./Trapezoid";
import '../landing.css';
export default function Landing(){

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

      const compositions = [
        { value: 'iron', label: 'Iron' },
        { value: 'stony', label: 'Stony' },
        { value: 'chondrite', label: 'Chondrite' },
      ];
    
      const massRanges = [
        { value: 'small', label: 'Small' },
        { value: 'medium', label: 'Medium' },
        { value: 'large', label: 'Large' },
      ];

    return(
        <div className="landing-container">
            <h1 className="landing-title">SKYFALL</h1>
            <div className="asteroid-container">
                <div className="asteroid-input-container">
                    <div className="asteroid-trap">
                        <Trapezoid />
                    </div>  
                    <input className="asteroid-input" type="text" />
                    <div className="upside-down-asteroid-trap">
                        <Trapezoid />
                    </div>
                </div>
                <p className="asteroid-text">Asteroid Name</p>
            </div>


            <div className="year-select-container">
                <div className="year-dropdown-container">
                    <div className="year-trap">
                        <Trapezoid />
                    </div>
                    <select name="year-select" id="year-select" className="year-select hover-show-trap">
                        <option value="" disabled selected></option>
                        {generateYearOptions()}
                    </select>
                    
                    <div className="upside-down-year-trap">
                        <Trapezoid />
                    </div>
                </div>
                <p className="year-dropdown-text">Year of Strike</p>
            </div>
            
            
            <div className="composition-select-container">
                <div className="composition-dropdown-container">
                    <div className="composition-trap">
                        <Trapezoid />
                    </div>
                    <select name="Meteorite-composition" id="meteorite-composition" className="meteorite-composition">
                        <option value="" disabled selected></option>
                        {compositions.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                        ))}
                    </select>
                    <div className="upside-down-composition-trap">
                        <Trapezoid />
                    </div>
                </div>
                <p className="composition-dropdown-text">Meteorite Composition</p>
            </div>
            
            <div className="mass-select-container">
                <div className="mass-dropdown-container">
                    <div className="mass-trap">
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
                    <div className="upside-down-mass-trap">
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
                    <img className="small-black-border" src="/images/small-black-border.png" alt="" />
                    <button className="search-btn">SEARCH</button>
                </div>
                <div className="clear-btn-container">
                    <button className="clear-btn">CLEAR</button>
                    <img className="small-gray-border" src="/images/small-gray-border.png" alt="" />
                </div>
            </div>
            <BorderImages />
        </div>
    )
}