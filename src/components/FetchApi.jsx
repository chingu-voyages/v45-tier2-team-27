import { useEffect, useContext } from 'react';
import { AuthContext } from "../App";

export default function FetchApi() {
  const { setMeteoriteData, setRecclassList } = useContext(AuthContext);
  

  useEffect(() => {
    const fetchMeteoriteData = async () => {
      try {
        let apiUrl = `https://data.nasa.gov/resource/gh4g-9sfh.json`

        const response = await fetch(apiUrl, {});
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
        setMeteoriteData(responseData);
       
        const recclassTypes = Array.from(new Set(responseData.map(meteorite => meteorite.recclass)));
        setRecclassList(recclassTypes);

      } catch (error) {
        console.error('Error fetching meteorite data:', error);
      }
    };
    fetchMeteoriteData();
  }, []);

   

 

    return(
        <div>
            {/* {meteoriteData?.map((meteorite, id) => (
                <div key={id}>
                    {meteorite.name}
                </div>
            ))}         */}
        </div>
    )
}

// name,
// mass,
// recclass (meteorite composition),
// fall,
// year,
// reclat,
// reclong,
// geolocation,

