import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent=({location})=>{
  
  const [hospitals, setHospitals] = useState([]);
  const [searchLocation, setSearchLocation] = useState("");

  // Fetch hospitals near the given coordinates
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
  <MapContainer center={location} zoom={12} style={{ height: "500px", width: "100%" }}>
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

    {/* Markers for Hospitals */}
    {hospitals.map((hospital, index) => (
      <Marker key={index} position={[hospital.lat, hospital.lon]}>
        <Popup>{hospital.name}</Popup>
      </Marker>
    ))}
  </MapContainer>
);
}

export default MapComponent;