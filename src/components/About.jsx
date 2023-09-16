import BorderImages from "./BorderImages"
import { useContext } from "react"
import { AuthContext } from "../App"
import { Link } from "react-router-dom"
import DarkMode from "./DarkMode"
import AppTitle from "./AppTitle"

export default function About(){
    const { darkMode } = useContext(AuthContext)

    return(
        <div className=" text-center">
            <AppTitle />
            <div className="about-title-container">
                <h1 className="text-xl">Created for Chingu Voyage 45</h1>
                <h2 className="text-lg">by Team 27</h2>
            </div>
            <div>
                <a className="linkedin relative -top-7" href="https://github.com/chingu-voyages/v45-tier2-team-27">GitHub Repo</a>
            </div>
            <div className="team-member-container">
                <h1 className="team-member">Alexandra Akinyemi</h1>
                <p>Developer</p>
                <a className="linkedin" href="https://www.linkedin.com/in/alexandraak">LinkedIn</a>
            </div>
            <div className="team-member-container">
                <h1 className="team-member">Emma Ma</h1>
                <p>Developer</p>
                <a className="linkedin" href="https://www.linkedin.com/in/binmaemma/">LinkedIn</a>
            </div>
            <div className="team-member-container">
                <h1 className="team-member">David Riley</h1>
                <p>Developer</p>
                <a className="linkedin" href="https://www.linkedin.com/in/david-riley-dev/">LinkedIn</a>
            </div>
            <div className="team-member-container">
                <h1 className="team-member">John Foughty</h1>
                <p>UX Research and Design</p>
                <a className="linkedin" href="https://www.linkedin.com/in/john-foughty-8ab43026/">LinkedIn</a>
            </div>
            <div className="team-member-container">
                <h1 className="team-member">Sarah Murphree</h1>
                <p>Voyage Guide</p>
                <a className="linkedin" href="linkedin.com/in/sarah-murphree/">LinkedIn</a>
            </div>
            <div className="team-member-container mb-32">
                <h1>Special Thanks To:</h1>
                <p className="team-member">Jim Medlock at Chingu</p>
            </div>

            <div className="go-back-container">
                <img className={`go-back-border ${darkMode ? "white-border mb-0.5" : ""}`} src={`${darkMode ? "/images/small-white-border.png" : "/images/small-black-border.png"} `} alt="" />
                <Link to="/"><button className="go-back-btn">Go Back</button></Link>
            </div>
            <BorderImages />
            <div className="about-icon-container">
                <DarkMode />
            </div>
        </div>
    )
}