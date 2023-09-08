import BorderImages from "./BorderImages"
import { useContext } from "react"
import { AuthContext } from "../App"
import { Link } from "react-router-dom"

export default function About(){
    const { darkMode } = useContext(AuthContext)
    return(
        <div className="w-[100%] h-[100%] mb-20 text-center">
            <h1 className="landing-title mt-20 mb-6">SKYFALL</h1>
            <div className="about-title-container">
                <h1 className="text-xl">Created for Chingu Voyage 45</h1>
                <h2 className="text-lg mb-[-16px]">by Team 27</h2>
            </div>
            <div className="team-member-container">
                <h1 className="team-member">Alexandra Akinyemi</h1>
                <p>Programmer</p>
            </div>
            <div className="team-member-container">
                <h1 className="team-member">Emma Ma</h1>
                <p>Programmer</p>
            </div>
            <div className="team-member-container">
                <h1 className="team-member">David Riley</h1>
                <p>Programmer</p>
            </div>
            <div className="team-member-container">
                <h1 className="team-member">John Foughty</h1>
                <p>UX/UI Designer</p>
            </div>
            <div className="team-member-container">
                <h1 className="team-member">Sarah Murphree</h1>
                <p>Voyage Guide</p>
            </div>
            <div className="team-member-container mb-12">
                <h1>Special Thanks To:</h1>
                <p className="team-member">Jim Medlock at Chingu</p>
            </div>
            <div className="go-back-container">
                <img className={`go-back-border ${darkMode ? "white-border mb-0.5" : ""}`} src={`${darkMode ? "/images/small-white-border.png" : "/images/small-black-border.png"} `} alt="" />
                <Link to="/"><button className="go-back-btn">Go Back</button></Link>
            </div>

            <BorderImages />
        </div>
    )
}