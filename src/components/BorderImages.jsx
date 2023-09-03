import { useContext } from "react"
import { AuthContext } from "../App"

export default function BorderImages(){
    const {darkMode} = useContext(AuthContext)
    return(
        <div className="border-container">
            <div className="top-border-container">
                <img className="top-left-border" src={`${darkMode ? "/images/white-top-left-border.png" : "/images/top-left-border.png"}`} alt="" />
                <img className={`top-left-border-img ${darkMode ? "white-top-left-img" : ""}`} src={`${darkMode ? "/images/white-top-left-border-img.png" : "/images/top-left-border-img.png"}`} alt="" />
                <img className="top-right-border" src={`${darkMode ? "/images/white-top-right-border.png" : "/images/top-right-border.png"}`} alt="" />
                <img className={`top-right-border-img ${darkMode ? "white-top-right-img" : ""}`} src={`${darkMode ? "/images/white-top-right-border-img.png" : "/images/top-right-border-img.png"}`} alt="" />
            </div>

            
            <div className="bottom-border-container">
                <img className="bottom-right-border" src={`${darkMode ? "/images/white-bottom-right-border.png" : "/images/bottom-right-border.png"}`} alt="" />
                <img className="bottom-left-border" src={`${darkMode ? "/images/white-bottom-left-border.png" : "/images/bottom-left-border.png"}`} alt="" />
                <img className={`bottom-right-border-img ${darkMode ? "white-bottom-right-img" : ""}`} src={`${darkMode ? "/images/white-bottom-right-border-img.png" : "/images/bottom-right-border-img.png"}`} alt="" />
                <img className={`bottom-left-border-img ${darkMode ? "white-bottom-left-img" : ""}`} src={`${darkMode ? "/images/white-bottom-left-border-img.png" : "/images/bottom-left-border-img.png"}`} alt="" />
            </div>

            <div>
                <img className="desktop-right-border" src={`${darkMode ? "/images/white-desktop-right-border.png" : "/images/desktop-right-border.png"}`} alt="" />
                <img className="desktop-left-border" src={`${darkMode ? "/images/white-desktop-left-border.png" : "/images/desktop-left-border.png"}`} alt="" />
            </div>
            
        </div>
    )
}