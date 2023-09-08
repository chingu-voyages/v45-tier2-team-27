import { useContext } from 'react';
import { AuthContext } from '../App';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

export default function Map() {
  const { selectedMeteorite, darkMode } = useContext(AuthContext)

  return (
    <>
      <tr className='map-selected-container'>
        <td className="selected-map-data">{selectedMeteorite.name.toString()}</td>
        <td className="selected-map-data">{selectedMeteorite.year.toString()}</td>
        <td className="selected-map-data">{selectedMeteorite.recclass.toString()}</td>
        <td className="selected-map-data">{selectedMeteorite.mass.toString()}</td> 
      </tr>
       
      <MapContainer
        className="full-height-map"
        center={[selectedMeteorite.geolocation.latitude, selectedMeteorite.geolocation.longitude]}
        zoom={3}
        scrollWheelZoom={true}
        >
        <TileLayer
          url={`${darkMode ? "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" : 'https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}{r}.png'}`}
        />

        {selectedMeteorite && (
          <Marker
            position={[
              selectedMeteorite.geolocation.latitude,
              selectedMeteorite.geolocation.longitude,
            ]}
            icon={new Icon({
              iconUrl: "./images/target.png", 
              iconSize: [20, 20],
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