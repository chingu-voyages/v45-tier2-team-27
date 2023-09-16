import { useContext } from "react"
import { AuthContext } from "../App"


export default function AppTitle(){
    const { darkMode } = useContext(AuthContext)

    return(
        <div>
            <img className="mx-auto landing-title" src={`${darkMode ? "/images/skyfall-logo-white.png" : "/images/skyfall-logo.png"}`} alt="" />
        </div>
    )
}