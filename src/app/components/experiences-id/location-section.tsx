"use client";

import { Divider } from "keep-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet"

import "leaflet/dist/leaflet.css";
export const LocationSection = () => {
    const position = [40.7128, -74.006] as [number, number];
    const customIcon = new Icon({
        iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
        shadowSize: [41, 41],
    })
  return (
    <div className="pr-5">
      <div className="flex flex-col gap-3 py-5">
        <h6 className="text-heading-6 font-medium">Where will you go</h6>
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={true}
          className="w-full h-64"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker 
            position={position}
            icon={customIcon}
            >
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
        <p className="text-body-2">
          My workshop is around here; i&apos;ll see you there.
        </p>
      </div>
      <Divider />
    </div>
  );
};
