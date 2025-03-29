"use client";

import { motion } from 'framer-motion';
import { Box, Typography, Button, Paper, useMediaQuery, useTheme } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function CallToAction() {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isDarkMode = theme.palette.mode === 'dark';
  const [isClient, setIsClient] = useState(false);

  // Valores predefinidos para las posiciones y animaciones
  const particles = [
    { top: "20%", left: "10%", scaleInitial: 0.7, x1: -30, y1: 20, x2: 30, y2: -20, duration: 15 },
    { top: "80%", left: "20%", scaleInitial: 0.8, x1: 40, y1: -30, x2: -40, y2: 30, duration: 18 },
    { top: "40%", left: "85%", scaleInitial: 0.65, x1: -20, y1: -20, x2: 20, y2: 20, duration: 12 },
    { top: "70%", left: "70%", scaleInitial: 0.9, x1: 10, y1: 30, x2: -10, y2: -30, duration: 20 },
    { top: "30%", left: "40%", scaleInitial: 0.75, x1: 25, y1: -15, x2: -25, y2: 15, duration: 16 },
    { top: "10%", left: "60%", scaleInitial: 0.85, x1: -15, y1: 25, x2: 15, y2: -25, duration: 14 },
  ];

  // Este efecto garantiza que las animaciones solo se ejecuten en el cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Paper 
      elevation={isDarkMode ? 3 : 2} 
      className="p-6 sm:p-8 md:p-12 rounded-xl my-10 overflow-hidden relative"
      sx={{
        background: isDarkMode 
          ? 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)' 
          : 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
        border: isDarkMode ? '1px solid rgba(255,255,255,0.1)' : 'none',
        boxShadow: isDarkMode 
          ? '0 10px 30px -15px rgba(0, 0, 0, 0.5)' 
          : '0 10px 30px -15px rgba(37, 99, 235, 0.5)'
      }}
    >
      {/* Animación de elementos flotantes */}
      <Box className="absolute inset-0 overflow-hidden">
        {isClient && particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-10 h-10 md:w-16 md:h-16 rounded-full"
            initial={{ 
              x: particle.x1, 
              y: particle.y1, 
              scale: particle.scaleInitial
            }}
            animate={{ 
              x: [particle.x1, particle.x2],
              y: [particle.y1, particle.y2]
            }}
            transition={{ 
              repeat: Infinity, 
              repeatType: "reverse", 
              duration: particle.duration,
              ease: "easeInOut"
            }}
            style={{
              top: particle.top,
              left: particle.left,
              backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(4px)',
              border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(255, 255, 255, 0.2)',
            }}
          />
        ))}
      </Box>

      <Box className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Typography 
            variant={isMobile ? "h5" : "h4"} 
            component="h2" 
            className="font-bold mb-4 text-center sm:text-left"
            sx={{ color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}
          >
            ¿Necesitas asesoría contable o tributaria?
          </Typography>
          <Typography 
            variant="body1" 
            className="mb-6 max-w-xl text-center sm:text-left text-sm md:text-base"
            sx={{ color: isDarkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.95)' }}
          >
            Resuelve tus dudas y optimiza tus finanzas con un servicio personalizado. Contáctame hoy mismo para una consulta.
          </Typography>
          
          <Box className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="contained" 
                color="info"
                size={isMobile ? "medium" : "large"}
                endIcon={<ArrowForwardIcon />}
                onClick={() => router.push('/contact')}
                sx={{
                  fontWeight: 600,
                  backgroundColor: 'white',
                  color: isDarkMode ? '#1e40af' : '#2563eb',
                  '&:hover': {
                    backgroundColor: isDarkMode ? '#f8fafc' : '#f0f9ff'
                  },
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}
              >
                Solicitar Consulta
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outlined" 
                color="info"
                size={isMobile ? "medium" : "large"}
                onClick={() => router.push('/portfolio')}
                sx={{
                  fontWeight: 600,
                  borderColor: 'rgba(255, 255, 255, 0.8)',
                  color: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
              >
                Ver Servicios
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </Box>
    </Paper>
  );
} 