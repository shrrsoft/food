"use client";

import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMapEvents } from "react-leaflet/hooks";
import { Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useContext, useEffect, useState } from "react";
import { Api_Key } from "./Api-key-nehsan";
import { userContext } from "@/context/UserContext";

const Map = () => {
  const { setUserAdress } = useContext(userContext);
  const icon = L.icon({ iconUrl: "/images/leaflet/marker-icon.png" });
  const [userPosition, setUserPosition] = useState([35.7219, 51.3347]);
  async function GetUserAddress() {
    const data = await fetch(
      `https://api.neshan.org/v5/reverse?lat=${userPosition[0]}&lng=${userPosition[1]}`,
      {
        headers: { "Api-Key": Api_Key },
      },
      { mode: "no-cors" }
    );
    const address = await data.json();
    setUserAdress(address.formatted_address);
  }
  useEffect(() => {
    GetUserAddress();
  }, [userPosition]);

  function UserPositionMarker() {
    useMapEvents({
      click(e) {
        setUserPosition([e.latlng.lat, e.latlng.lng]);
      },
    });
    return null;
  }
  return (
    <div className="mx-auto h-80 md:mb-20 w-[30rem] max-w-[90%] border overflow-hidden">
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
          <Popup>آدرس مشتری</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
export default Map;
