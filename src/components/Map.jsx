import { useContext } from 'react';
import { AuthContext } from '../App';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

export default function Map() {
  const { selectedMeteorite, darkMode } = useContext(AuthContext)

  return (
    <>
    <h1 className='text-2xl border'>
      Geolocation Coordinates
    </h1>
<MapContainer
  className="full-height-map"
  center={[selectedMeteorite.geolocation.latitude, selectedMeteorite.geolocation.longitude]}
  zoom={3}
  scrollWheelZoom={true}
  >
  <TileLayer
    url={`${darkMode ? "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" : 'https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}{r}.png'}`}
  />

      {/* Display a marker and popup when a meteorite is selected */}
      {selectedMeteorite && (
        <Marker
          position={[
            selectedMeteorite.geolocation.latitude,
            selectedMeteorite.geolocation.longitude,
          ]}
          icon={new Icon({
            iconUrl: "./images/target.png", // Replace with the path to your custom marker icon
            iconSize: [20, 20], // Set the size of your custom marker icon
            
          })}
        >
          <Popup>
            Meteorite Location: {selectedMeteorite.name}
          <br />
            Latitude: {selectedMeteorite.geolocation.latitude}
          <br />
            Longitude: {selectedMeteorite.geolocation.longitude}
          </Popup>
        </Marker>
      )}
    </MapContainer>
    </>
  );
  
}
