"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Box, Typography, useTheme, Paper, IconButton } from "@mui/material";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import { motion } from "framer-motion";

// Componente con motion
const MotionBox = motion(Box);

// Icono personalizado para el marcador
const customIcon = L.divIcon({
  className: "custom-marker-icon",
  html: `<div style="background-color: #1976d2; width: 24px; height: 24px; border-radius: 50%; display: flex; justify-content: center; align-items: center; box-shadow: 0 2px 10px rgba(0,0,0,0.3);">
          <div style="background-color: white; width: 10px; height: 10px; border-radius: 50%;"></div>
        </div>
        <div style="background-color: rgba(25, 118, 210, 0.2); width: 40px; height: 40px; border-radius: 50%; position: absolute; top: -8px; left: -8px; z-index: -1; animation: pulse 1.5s infinite;"></div>`,
  iconSize: [24, 24],
  iconAnchor: [12, 12],
  popupAnchor: [0, -12]
});

// Aplicamos estilos CSS para la animación del marcador
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes pulse {
      0% { transform: scale(0.8); opacity: 0.8; }
      50% { transform: scale(1.2); opacity: 0.4; }
      100% { transform: scale(0.8); opacity: 0.8; }
    }
  `;
  document.head.appendChild(style);
}

// Componente para controlar el mapa programáticamente
function MapController({ center, zoom }: { center: [number, number]; zoom: number }) {
  const map = useMap();
  
  useEffect(() => {
    map.setView(center, zoom);
  }, [map, center, zoom]);
  
  return null;
}

type MapProps = {
  center: [number, number]; // [latitud, longitud]
  zoom?: number;
  popupText?: string;
};

export default function Map({ center, zoom = 12, popupText = "Ubicación" }: MapProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [currentZoom, setCurrentZoom] = useState(zoom);
  const [isExpanded, setIsExpanded] = useState(false);
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  useEffect(() => {
    setIsMounted(true);
    
    // Cleanup para evitar memory leaks
    return () => {
      setIsMounted(false);
    };
  }, []);

  const handleZoomIn = () => {
    setCurrentZoom(prev => Math.min(prev + 1, 18));
  };

  const handleZoomOut = () => {
    setCurrentZoom(prev => Math.max(prev - 1, 5));
  };

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Estilos para los controles personalizados
  const controlStyles = {
    position: 'absolute',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    right: 10,
    bottom: 80,
  };

  // Estilos para los botones de control
  const buttonStyles = {
    backgroundColor: isDarkMode ? 'rgba(33, 43, 54, 0.8)' : 'rgba(255, 255, 255, 0.8)',
    color: isDarkMode ? 'white' : 'rgba(0, 0, 0, 0.7)',
    borderRadius: '50%',
    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
    width: 40,
    height: 40,
    '&:hover': {
      backgroundColor: isDarkMode ? 'rgba(55, 65, 81, 0.9)' : 'rgba(255, 255, 255, 0.95)',
    }
  };

  // Solo renderizamos el mapa en el lado del cliente
  if (!isMounted) {
    return (
      <MotionBox 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        sx={{ 
          height: "24rem", 
          width: "100%", 
          bgcolor: theme.palette.mode === 'dark' ? theme.palette.background.paper : theme.palette.background.default, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          border: '1px solid',
          borderColor: theme.palette.mode === 'dark' 
            ? 'rgba(217, 176, 156, 0.2)' 
            : theme.palette.secondary.light,
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <Typography 
          variant="body1" 
          sx={{ 
            color: theme.palette.text.secondary, 
            textAlign: 'center', 
            px: 2 
          }}
        >
          Cargando mapa...
        </Typography>
      </MotionBox>
    );
  }

  return (
    <MotionBox
      sx={{ 
        position: 'relative', 
        height: isExpanded ? '600px' : '450px', 
        width: '100%',
        transition: 'height 0.3s ease-in-out',
        borderRadius: '8px',
        overflow: 'hidden',
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <MapContainer 
        center={center} 
        zoom={zoom} 
        style={{ height: "100%", width: "100%", minHeight: "400px", borderRadius: "8px" }} 
        scrollWheelZoom={true}
        zoomControl={false}
        attributionControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center} icon={customIcon}>
          <Popup>
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              {popupText}
            </Typography>
          </Popup>
        </Marker>
        <MapController center={center} zoom={currentZoom} />
      </MapContainer>
      
      {/* Controles personalizados */}
      <Box sx={controlStyles}>
        <Paper 
          elevation={3} 
          sx={{ 
            borderRadius: '20px', 
            overflow: 'hidden',
            mb: 1
          }}
        >
          <IconButton 
            sx={buttonStyles} 
            onClick={handleZoomIn}
            aria-label="Acercar mapa"
          >
            <ZoomInIcon fontSize="small" />
          </IconButton>
        </Paper>
        
        <Paper 
          elevation={3} 
          sx={{ 
            borderRadius: '20px', 
            overflow: 'hidden',
            mb: 1
          }}
        >
          <IconButton 
            sx={buttonStyles} 
            onClick={handleZoomOut}
            aria-label="Alejar mapa"
          >
            <ZoomOutIcon fontSize="small" />
          </IconButton>
        </Paper>
        
        <Paper 
          elevation={3} 
          sx={{ 
            borderRadius: '20px', 
            overflow: 'hidden'
          }}
        >
          <IconButton 
            sx={buttonStyles} 
            onClick={handleExpand}
            aria-label={isExpanded ? "Reducir mapa" : "Expandir mapa"}
          >
            <ZoomOutMapIcon fontSize="small" />
          </IconButton>
        </Paper>
      </Box>
    </MotionBox>
  );
} 