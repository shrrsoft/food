"use client";

import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMap, useMapEvents } from "react-leaflet/hooks";
import { Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { use, useEffect, useState } from "react";
import GetUserAddress from "./GetUserAddress";

const Map = () => {
  const icon = L.icon({ iconUrl: "/images/leaflet/marker-icon.png" });
  const [userPosition, setUserPosition] = useState([35.7219, 51.3347]);
  async function getUserAddress() {
    const data =
      await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${userPosition[0]}&lon=${userPosition[1]}&format=json&addressdetails=1&accept-language=fa&extratags=1&namedetails=1&polygon_geojson=1
`);
    console.log(data);
  }
  // useEffect(() => {
  //   GetUserAddress(userPosition[0], userPosition[1]);
  // }, [userPosition]);

  function UserPositionMarker() {
    useMapEvents({
      click(e) {
        setUserPosition([e.latlng.lat, e.latlng.lng]);
      },
    });
    return null;
  }
  return (
    <div className="w-[45%] h-80 mb-20 border overflow-hidden">
      <MapContainer
        center={[35.7219, 51.3347]}
        zoom={11}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <UserPositionMarker />
        <Marker position={userPosition} icon={icon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
export default Map;
