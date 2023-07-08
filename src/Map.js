import { MapContainer, TileLayer } from 'react-leaflet';
import React, { useState } from 'react';
import getMarkerIcon from './utils/markerUtils';
import './styles.css';

const Map = () => {
    const [locations, setLocations] = useState([]);
    return (
        <MapContainer center={[51.505, -0.09]} zoom={13} className="map-container">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
          />
    
          {locations.map((location) => (
            <Marker
              key={location.id}
              position={[location.latitude, location.longitude]}
              icon={getMarkerIcon(location.type)}
              className="marker"
            />
          ))}
        </MapContainer>
      );
    };

export default Map;
