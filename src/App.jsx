import { createContext, useState } from "react"
import './App.css'
import './Landing.css'
import './ConnectingLines.css'
import './trapezoid.css'
import './BorderImages.css'
import Landing from './components/Landing'


export const AuthContext = createContext()

function App() {
  const [meteoriteData, setMeteoriteData] = useState([])

  return (
    <AuthContext.Provider value={{meteoriteData, setMeteoriteData}}>
      <div>
        <Landing />  
      </div>     
    </AuthContext.Provider>
  )
}

export default App
