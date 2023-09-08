import { useContext } from "react"
import { AuthContext } from "../App"


const ConnectingLines = () => {
const { darkMode } = useContext(AuthContext)

  return (
    <div className="connecting-lines-container">
      <div className={`line line-1 ${darkMode ? "border-gray-100" : "border-black"}`}>
        <div className={`dot ${darkMode ? "bg-gray-100" : "bg-black"}`}></div>
        <div className={`circle ${darkMode ? "bg-black" : "bg-gray-100 border-black"}`}></div>
      </div>
      <div className={`line line-2 ${darkMode ? "border-gray-100" : "border-black"}`}>
        <div className={`dot ${darkMode ? "bg-gray-100" : "bg-black"}`}></div>
        <div className={`circle ${darkMode ? "bg-black" : "bg-gray-100 border-black"}`}></div>
      </div>
      <div className={`line line-3 ${darkMode ? "border-gray-100" : "border-black"}`}>
        <div className={`dot ${darkMode ? "bg-gray-100" : "bg-black"}`}></div>
        <div className={`circle ${darkMode ? "bg-black" : "bg-gray-100 border-black"}`}></div>
      </div>
      <div className={`line line-4 ${darkMode ? "border-gray-100" : "border-black"}`}>
        <div className={`dot ${darkMode ? "bg-gray-100" : "bg-black"}`}></div>
        <div className={`circle ${darkMode ? "bg-black" : "bg-gray-100 border-black"}`}></div>
      </div>
      
    </div>
  )
}

export default ConnectingLines
