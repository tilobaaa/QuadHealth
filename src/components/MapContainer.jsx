import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const center = [6.5244, 3.3792]; // Lagos Coordinates

export default function MapComponent() {
  const [healthcareProviders, setHealthcareProviders] = useState([]);

  useEffect(() => {
    const fetchHealthcareProviders = async () => {
      const query = `[out:json];
        node["amenity"="hospital"](6.4,3.3,6.6,3.5);
        node["amenity"="clinic"](6.4,3.3,6.6,3.5);
        node["amenity"="pharmacy"](6.4,3.3,6.6,3.5);
        out;`;
      const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        const locations = data.elements.map((el) => ({
          id: el.id,
          lat: el.lat,
          lon: el.lon,
          name: el.tags.name || "Unnamed Healthcare Provider",
        }));
        setHealthcareProviders(locations);
      } catch (error) {
        console.error("Error fetching healthcare providers:", error);
      }
    };

    fetchHealthcareProviders();
  }, []);

  return (
    <MapContainer center={center} zoom={12} className="leaflet-container">
      {/* OpenStreetMap Tiles */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />

      {/* Display Healthcare Providers */}
      {healthcareProviders.map((provider) => (
        <Marker key={provider.id} position={[provider.lat, provider.lon]}>
          <Popup>🏥 {provider.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
