import { useContext } from 'react';
import { AuthContext } from '../App';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { Link } from 'react-router-dom';

export default function Map() {
  const { meteoriteData, setAsteroidName, setMapClicked, selectedMeteorite, darkMode } = useContext(AuthContext);
  const accessToken = "MhCiF40Pt9B9rSKGgGWRSLlUT2Ij0owLz0kxDO5Fpoby0tQmCj248rymqzaw6Prx";

  const targetMeteorite = selectedMeteorite || (meteoriteData.length > 0 ? meteoriteData : null);

  if (!targetMeteorite) {
    return null; 
  }

  const searchMeteorite = (name) => {
    setAsteroidName(name); 
    setMapClicked(false);
  };

  return (
    <>
    <table className='w-full mt-0 pt-0'>
      <tbody>
        <tr className='map-selected-container'>
          <td className="selected-map-data">{targetMeteorite.name?.toString()}</td>
          <td className="selected-map-data">{targetMeteorite.year?.toString()}</td>
          <td className="selected-map-data">{targetMeteorite.recclass?.toString()}</td>
          <td className="selected-map-data">{targetMeteorite.mass?.toString()}</td> 
        </tr>
      </tbody>
    </table>   
      <MapContainer
        className="full-height-map"
        center={[targetMeteorite.geolocation?.latitude || 0, targetMeteorite.geolocation?.longitude || 0]}
        zoom={3}
        scrollWheelZoom={true}
      >
        <TileLayer
          url={`${darkMode ? `https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=${accessToken}` : `https://{s}.tile.jawg.io/jawg-light/{z}/{x}/{y}{r}.png?access-token=${accessToken}`}`}
        />

        {Array.isArray(targetMeteorite) ? (
          targetMeteorite.map((meteorite) => (
            <Marker
              key={meteorite.id}
              position={[meteorite.geolocation?.latitude || 0, meteorite.geolocation?.longitude || 0]}
              icon={new Icon({
                iconUrl: "./images/target.png", 
                iconSize: [20, 20],
              })}
            >
              <Popup>
                Meteorite Name: {meteorite.name}
                <br />
                Latitude: {meteorite.geolocation?.latitude || 0}
                <br />
                Longitude: {meteorite.geolocation?.longitude || 0}
                <br />
                Composition: {meteorite.recclass || 0}
                <br />
                Mass: {meteorite.mass.toLocaleString()|| 0}
                <br />
                <Link
                  to="/search-results"
                  onClick={() => searchMeteorite(meteorite.name)}
                >
                  Search
                </Link>
              </Popup>
            </Marker>
          ))
        ) : ( 
        <Marker
          key={targetMeteorite.id}
          position={[targetMeteorite.geolocation?.latitude || 0, targetMeteorite.geolocation?.longitude || 0]}
          icon={new Icon({
            iconUrl: "./images/target.png", 
            iconSize: [20, 20],
          })}
        >
          <Popup>
            targetMeteorite Name: {targetMeteorite.name}
            <br />
            Latitude: {targetMeteorite.geolocation?.latitude || 0}
            <br />
            Longitude: {targetMeteorite.geolocation?.longitude || 0}
            <br />
            Composition: {targetMeteorite.recclass || 0}
            <br />
            Mass: {targetMeteorite.mass.toLocaleString()|| 0}
            <br />
            <Link
              to="/search-results"
              onClick={() => searchMeteorite(targetMeteorite.name)}
            >
              Search
            </Link>
          </Popup>
        </Marker>
      )}
      </MapContainer>
    </>
  );
}
