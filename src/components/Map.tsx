"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Box, Typography, useTheme } from "@mui/material";

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

export default function Map({ center, zoom = 12, popupText = "Ubicación" }: MapProps) {
  const [isMounted, setIsMounted] = useState(false);
  const theme = useTheme();

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
      <Box 
        sx={{ 
          height: "24rem", 
          width: "100%", 
          bgcolor: theme.palette.mode === 'dark' ? 'rgba(17, 25, 40, 0.9)' : 'rgb(226, 232, 240)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}
      >
        <Typography 
          variant="body1" 
          sx={{ 
            color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.6)', 
            textAlign: 'center', 
            px: 2 
          }}
        >
          Cargando mapa...
        </Typography>
      </Box>
    );
  }

  return (
    <MapContainer 
      center={center} 
      zoom={zoom} 
      style={{ height: "100%", width: "100%", minHeight: "400px" }} 
      scrollWheelZoom={true}
      zoomControl={false} // Desactivamos el control de zoom predeterminado para colocarlo en otra posición
      attributionControl={true}
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
      <ZoomControl position="bottomright" /> {/* Colocamos los controles de zoom en la esquina inferior derecha */}
    </MapContainer>
  );
} 