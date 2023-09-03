import { useContext } from "react"
import { AuthContext } from "../App"

export default function Globe(){
    const { darkMode } = useContext(AuthContext)
    return(
        <div className="globe-border-container">
            <div className="globe-container">
                <img className={`${darkMode ? "dark-globe-img" : "globe-img"}`} src={`${darkMode ? "./images/dark-mode-globe.png" : "/images/globe.png"}`} alt="" />
            </div>
            <div className="globe-gif-container">
                <img className={`globe-gif z-50 ${darkMode ? "border-white" : ""}`} src="./images/globe.gif" alt="" />
                <img className={`globe-border ${darkMode ? "border-white" : ""}`} src={`${darkMode ? "/images/dark-mode-full-globe.png" : "/images/globe-border.png"}`} alt="" />      
            </div>
            
        </div>
       
    )

}