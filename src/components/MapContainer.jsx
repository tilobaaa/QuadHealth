import { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapUpdater = ({ location }) => {
  const map = useMap();

  useEffect(() => {
    if (location) {
      map.setView(location, 12); // Update the map's view
    }
  }, [location, map]);

  return null;
};

const MapComponent = ({ location }) => {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    if (!location) return;

    const fetchHospitals = async () => {
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=hospital+near+${location[0]},${location[1]}`;
      const response = await fetch(url);
      const data = await response.json();

      setHospitals(
        data.map((place) => ({
          name: place.display_name,
          lat: parseFloat(place.lat),
          lon: parseFloat(place.lon),
        }))
      );
    };

    fetchHospitals();
  }, [location]);

  return (
    <MapContainer center={location} zoom={12} style={{ height: "100%", width: "100%" }} key={location.toString()}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <MapUpdater location={location} /> {/* This component updates the view */}

      {hospitals.map((hospital, index) => (
        <Marker key={index} position={[hospital.lat, hospital.lon]}>
          <Popup>{hospital.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;