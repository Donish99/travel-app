import React from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
const CountryMap = ({ position }) => {
  return (
    <MapContainer
      style={{ height: 500, width: "100%" }}
      center={position}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}></Marker>
    </MapContainer>
  );
};

export default CountryMap;
