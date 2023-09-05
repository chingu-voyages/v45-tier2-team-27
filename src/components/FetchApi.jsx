import { useEffect, useContext, useState } from 'react'
import { AuthContext } from "../App"


export default function FetchApi() {
  const { 
    setMeteoriteData, 
    setRecclassList, 
    asteroidName,
    composition, 
    fromYear,
    toYear,
    minMass,
    maxMass,
    } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchMeteoriteData = async () => {
      try {
        setLoading(true)
        let apiUrl = `https://data.nasa.gov/resource/gh4g-9sfh.json`
        
        const queryParams = []

        if (asteroidName) {
          queryParams.push(`name=${encodeURIComponent(asteroidName)}`)
        }

        if (fromYear && toYear) {
          queryParams.push(`year=${fromYear}-${toYear}`)
        }

        if (minMass && maxMass) {
          queryParams.push(`mass=${minMass}-${maxMass}`)
        }

        if (composition) {
          queryParams.push(`composition=${encodeURIComponent(composition)}`)
        }

        if (queryParams.length > 0) {
          apiUrl += `?${queryParams.join('&')}`
        }

        const response = await fetch(apiUrl)

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const responseData = await response.json()

        const parsedData = responseData.map((meteorite) => ({
          ...meteorite,
          year: parseInt(meteorite.year), 
          mass: parseFloat(meteorite.mass),
          lat: parseFloat(meteorite.reclat), 
          lng: parseFloat(meteorite.reclong)
        }))

        setMeteoriteData(parsedData)
       
        const recclassTypes = Array.from(
          new Set(parsedData.map((meteorite) => meteorite.recclass))
        )
        setRecclassList(recclassTypes)

        setLoading(false)
      } catch (error) {
        console.error('Error fetching meteorite data:', error)
      }
    }
    fetchMeteoriteData()
  }, [])

    return(
        <div>
          {loading ?? 
            <h1>loading...</h1>
          }
        </div>
    )
}





   