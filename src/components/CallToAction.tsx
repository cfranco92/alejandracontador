"use client";

import { motion } from 'framer-motion';
import { Box, Typography, Button, Paper, useMediaQuery, useTheme, Divider, Chip, Avatar } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import SmartToyIcon from '@mui/icons-material/SmartToy';
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

  const beneficios = [
    { icon: <AccessTimeIcon fontSize="small" />, text: "Respuesta en menos de 24h" },
    { icon: <CheckCircleIcon fontSize="small" />, text: "Primera consulta sin costo" },
    { icon: <SupportAgentIcon fontSize="small" />, text: "Atención personalizada" }
  ];

  const testimonios = [
    { 
      nombre: "María González", 
      empresa: "Pyme", 
      texto: "Excelente servicio, resolvió mis dudas tributarias con rapidez y profesionalismo." 
    },
    { 
      nombre: "Carlos Ramírez", 
      empresa: "Emprendedor", 
      texto: "Recomiendo totalmente sus servicios, me ayudó a organizar la contabilidad de mi negocio." 
    }
  ];

  // Este efecto garantiza que las animaciones solo se ejecuten en el cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Paper 
      elevation={isDarkMode ? 3 : 2} 
      className="p-6 sm:p-8 md:p-10 rounded-xl my-6 overflow-hidden relative"
      sx={{
        background: isDarkMode 
          ? `linear-gradient(135deg, ${theme.palette.secondary.dark} 0%, ${theme.palette.secondary.main} 100%)` 
          : `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.light} 100%)`,
        border: isDarkMode ? '1px solid rgba(217, 176, 156, 0.2)' : 'none',
        boxShadow: isDarkMode 
          ? '0 10px 30px -15px rgba(0, 0, 0, 0.5)' 
          : '0 10px 30px -15px rgba(217, 176, 156, 0.5)',
        mt: { xs: 6, md: 8 },
        mb: { xs: 1, md: 2 }
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
              backgroundColor: isDarkMode ? 'rgba(249, 246, 243, 0.08)' : 'rgba(249, 246, 243, 0.15)',
              backdropFilter: 'blur(4px)',
              border: isDarkMode ? '1px solid rgba(249, 246, 243, 0.08)' : '1px solid rgba(249, 246, 243, 0.2)',
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
            className="font-bold mb-3 text-center sm:text-left"
            sx={{ color: isDarkMode ? '#f9f6f3' : '#3c3c3c', textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}
          >
            ¿Necesitas asesoría contable o tributaria?
          </Typography>
          <Typography 
            variant="body1" 
            className="mb-4 max-w-xl text-center sm:text-left text-sm md:text-base"
            sx={{ color: isDarkMode ? 'rgba(249, 246, 243, 0.9)' : 'rgba(60, 60, 60, 0.95)' }}
          >
            Resuelve tus dudas y optimiza tus finanzas con un servicio personalizado. Contáctame hoy mismo para una consulta.
          </Typography>
          
          {/* Elementos de confianza */}
          <Box 
            sx={{ 
              display: 'flex', 
              flexWrap: 'wrap',
              gap: 2,
              mb: 4,
              justifyContent: { xs: 'center', sm: 'flex-start' }
            }}
          >
            {beneficios.map((beneficio, index) => (
              <Chip
                key={index}
                icon={beneficio.icon}
                label={beneficio.text}
                sx={{
                  bgcolor: isDarkMode ? 'rgba(249, 246, 243, 0.1)' : 'rgba(249, 246, 243, 0.4)',
                  color: isDarkMode ? '#f9f6f3' : '#3c3c3c',
                  fontWeight: 500,
                  borderRadius: '16px',
                  '& .MuiChip-icon': {
                    color: isDarkMode ? theme.palette.secondary.light : theme.palette.secondary.dark,
                  }
                }}
              />
            ))}
          </Box>
          
          <Box className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start mb-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="contained" 
                size={isMobile ? "medium" : "large"}
                endIcon={<ArrowForwardIcon />}
                onClick={() => router.push('/contact')}
                sx={{
                  fontWeight: 600,
                  backgroundColor: isDarkMode ? '#f9f6f3' : '#3c3c3c',
                  color: isDarkMode ? '#3c3c3c' : '#f9f6f3',
                  '&:hover': {
                    backgroundColor: isDarkMode ? '#ffffff' : '#2a2a2a'
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
                size={isMobile ? "medium" : "large"}
                onClick={() => router.push('/portfolio')}
                sx={{
                  fontWeight: 600,
                  borderColor: isDarkMode ? 'rgba(249, 246, 243, 0.8)' : 'rgba(60, 60, 60, 0.8)',
                  color: isDarkMode ? '#f9f6f3' : '#3c3c3c',
                  '&:hover': {
                    borderColor: isDarkMode ? '#f9f6f3' : '#3c3c3c',
                    backgroundColor: isDarkMode ? 'rgba(249, 246, 243, 0.1)' : 'rgba(60, 60, 60, 0.1)'
                  }
                }}
              >
                Ver Servicios
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outlined" 
                size={isMobile ? "medium" : "large"}
                startIcon={<SmartToyIcon />}
                onClick={() => {
                  const chatButton = document.querySelector('[aria-label="Abrir Chat"]');
                  if (chatButton) {
                    (chatButton as HTMLElement).click();
                  }
                }}
                sx={{
                  fontWeight: 600,
                  borderColor: isDarkMode ? 'rgba(68, 100, 173, 0.6)' : 'rgba(68, 100, 173, 0.8)',
                  backgroundColor: isDarkMode ? 'rgba(68, 100, 173, 0.1)' : 'rgba(68, 100, 173, 0.08)',
                  color: isDarkMode ? '#a3c9ff' : 'rgba(68, 100, 173, 0.9)',
                  '&:hover': {
                    borderColor: isDarkMode ? '#a3c9ff' : 'rgba(68, 100, 173, 1)',
                    backgroundColor: isDarkMode ? 'rgba(68, 100, 173, 0.15)' : 'rgba(68, 100, 173, 0.12)'
                  },
                  position: 'relative',
                  overflow: 'hidden',
                  '& .MuiSvgIcon-root': {
                    color: isDarkMode ? '#a3c9ff' : 'rgba(68, 100, 173, 0.9)',
                  }
                }}
              >
                Chat IA
              </Button>
            </motion.div>
          </Box>
          
          {/* Testimonios */}
          <Divider 
            sx={{ 
              my: 2, 
              borderColor: isDarkMode ? 'rgba(249, 246, 243, 0.2)' : 'rgba(60, 60, 60, 0.1)',
              width: '100%'
            }} 
          />
          
          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' },
              gap: 2,
              alignItems: 'stretch',
              justifyContent: 'space-between'
            }}
          >
            <Typography 
              variant="subtitle2" 
              sx={{ 
                display: 'flex',
                alignItems: 'center',
                color: isDarkMode ? 'rgba(249, 246, 243, 0.8)' : 'rgba(60, 60, 60, 0.8)',
                fontStyle: 'italic',
                mb: { xs: 0, md: 'auto' },
                fontSize: '0.8rem'
              }}
            >
              <FormatQuoteIcon 
                fontSize="small" 
                sx={{ 
                  mr: 0.5,
                  transform: 'rotate(180deg)',
                  color: isDarkMode ? theme.palette.secondary.light : theme.palette.secondary.dark
                }} 
              />
              Lo que dicen mis clientes:
            </Typography>
            
            <Box 
              sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 1.5,
                flex: 1
              }}
            >
              {testimonios.map((testimonio, index) => (
                <Box 
                  key={index}
                  sx={{
                    flex: 1,
                    backgroundColor: isDarkMode ? 'rgba(249, 246, 243, 0.05)' : 'rgba(249, 246, 243, 0.3)',
                    borderRadius: 2,
                    p: 1.5,
                    position: 'relative',
                    border: '1px solid',
                    borderColor: isDarkMode ? 'rgba(249, 246, 243, 0.1)' : 'rgba(60, 60, 60, 0.05)'
                  }}
                >
                  <Typography 
                    variant="body2"
                    sx={{ 
                      color: isDarkMode ? 'rgba(249, 246, 243, 0.9)' : 'rgba(60, 60, 60, 0.9)',
                      fontStyle: 'italic',
                      fontSize: '0.8rem',
                      mb: 1
                    }}
                  >
                    &ldquo;{testimonio.texto}&rdquo;
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar
                      sx={{ 
                        width: 24, 
                        height: 24,
                        bgcolor: isDarkMode ? theme.palette.secondary.dark : theme.palette.secondary.main,
                        fontSize: '0.75rem',
                        mr: 1
                      }}
                    >
                      {testimonio.nombre.charAt(0)}
                    </Avatar>
                    <Box>
                      <Typography 
                        variant="caption" 
                        sx={{ 
                          fontWeight: 600,
                          color: isDarkMode ? 'rgba(249, 246, 243, 0.9)' : 'rgba(60, 60, 60, 0.9)',
                          display: 'block',
                          lineHeight: 1.2
                        }}
                      >
                        {testimonio.nombre}
                      </Typography>
                      <Typography 
                        variant="caption" 
                        sx={{ 
                          color: isDarkMode ? 'rgba(249, 246, 243, 0.7)' : 'rgba(60, 60, 60, 0.7)',
                          fontSize: '0.65rem',
                          lineHeight: 1.2
                        }}
                      >
                        {testimonio.empresa}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </motion.div>
      </Box>
    </Paper>
  );
} 