
import ConnectingLines from "./ConnectingLines"
import Globe from "./Globe";
import Trapezoid from "./Trapezoid";

export default function Landing(){

    return(
        <div className="landing-container">
            <h1 className="landing-title">FIREBALL</h1>
            <div className="asteroid-container">
                <div className="asteroid-trap">
                    <Trapezoid />
                </div>  
                <input placeholder="Type Asteroid Name" className="shadow-md" type="text" />
                <div className="upside-down-asteroid-trap">
                    <Trapezoid />
                </div>
            </div>

            <div className="year-trap">
                <Trapezoid />
            </div>
            <select name="year-select" id="year-select" className="year-select ">
                <option value="" disabled selected>Select a Year</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
            </select>
            <div className="upside-down-year-trap">
                <Trapezoid />
            </div>

            <div className="composition-trap">
                <Trapezoid />
            </div>
            <select name="Meteorite-composition" id="meteorite-composition" className="meteorite-composition">
                <option value="" disabled selected>Select a Composition</option>
                <option value="iron">Iron</option>
                <option value="stony">Stony</option>
                <option value="chondrite">Chondrite</option>
            </select>
            <div className="upside-down-composition-trap">
                <Trapezoid />
            </div>

            <div className="mass-trap">
                <Trapezoid />
            </div>
            <select name="Mass Range" id="mass-range" className="mass-range">
                <option value="" disabled selected>Select a Mass Range</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
            <div className="upside-down-mass-trap">
                <Trapezoid />
            </div>

            <div className="landing-btn-container">
                <button className="clear-btn">CLEAR</button>
                <button className="search-btn">SEARCH</button>
            </div>

            <div className="landing-globe-container">
                <Globe />
                <ConnectingLines />
            </div>
        </div>
    )
}