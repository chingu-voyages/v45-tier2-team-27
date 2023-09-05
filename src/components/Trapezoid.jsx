import { useContext } from "react"
import { AuthContext } from "../App"

export default function Trapezoid(){
    const { darkMode } = useContext(AuthContext)

    return(
        <div className={`trapezoid ${darkMode ? "border-white" : "border-black"}`}></div>
    )
}