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
  <MapContainer center={location} zoom={12} style={{ height: "100%", width: "100%" }}>
    {!location && <p>No location found</p>}
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

    {/* Markers for Hospitals */}
    {hospitals.map((hospital, index) => (
      <Marker key={index} position={[hospital.lat, hospital.lon]}>
        <Popup className="bg-primary-500 text-primary-50">{hospital.name}</Popup>
      </Marker>
    ))}

    {console.log(hospitals)}
  </MapContainer>
);
}

export default MapComponent;