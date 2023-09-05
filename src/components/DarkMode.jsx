import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../App"

export default function DarkMode(){
    const { darkMode, setDarkMode } = useContext(AuthContext)

    const handleDarkModeToggle = () => {
        setDarkMode(!darkMode)
      }

    return(
        <div className="icon-container">
            <img onClick={handleDarkModeToggle} className="dark-mode-icon" src={`${darkMode ? "/images/dark-dark-mode-icon.png" : "/images/dark-mode-icon.png"}`} alt="" />
            <Link to="/about"><img className="about-icon" src={`${darkMode ? "/images/white-about-icon.png" : "/images/about-icon.png"}`} alt="" /></Link>
        </div>
    )
}