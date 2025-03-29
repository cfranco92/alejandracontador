"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Corregir el problema con los iconos de Leaflet en Next.js
const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = defaultIcon;

type MapProps = {
  center: [number, number]; // [latitud, longitud]
  zoom?: number;
  popupText?: string;
};

export default function Map({ center, zoom = 16, popupText = "Ubicación" }: MapProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Cleanup para evitar memory leaks
    return () => {
      setIsMounted(false);
    };
  }, []);

  // Solo renderizamos el mapa en el lado del cliente
  if (!isMounted) {
    return (
      <div className="h-96 w-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
        <p className="text-gray-600 dark:text-gray-400 text-center px-4">
          Cargando mapa...
        </p>
      </div>
    );
  }

  return (
    <MapContainer 
      center={center} 
      zoom={zoom} 
      style={{ height: "100%", width: "100%", minHeight: "400px" }} 
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center}>
        <Popup>
          {popupText}
        </Popup>
      </Marker>
    </MapContainer>
  );
} 