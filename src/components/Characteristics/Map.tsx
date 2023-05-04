import { FC } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "../../styles/MapStyles.scss"
import 'leaflet/dist/leaflet.css';

interface MapProps {
  lat: number;
  lon: number;
}



const Map: FC<MapProps> = ({ lat, lon }) => {


  return (
    <div className="mapWrapper">
      <MapContainer id="mapContainer" center={[lat, lon]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  )
}

export default Map