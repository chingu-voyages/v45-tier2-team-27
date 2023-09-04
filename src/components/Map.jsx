import { useContext } from 'react';
import { AuthContext } from '../App';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


export default function Map() {
  const { selectedMeteorite } = useContext(AuthContext)

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
    url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
  />

      {/* Display a marker and popup when a meteorite is selected */}
      {selectedMeteorite && (
        <Marker
          position={[
            selectedMeteorite.geolocation.latitude,
            selectedMeteorite.geolocation.longitude,
          ]}
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
