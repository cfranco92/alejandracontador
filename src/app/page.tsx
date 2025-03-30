"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Typography, Container, Grid, Box, Button, Paper, useMediaQuery, useTheme } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import CalculateIcon from '@mui/icons-material/Calculate';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';

import ServiceCard from "@/components/ServiceCard";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const services = [
    {
      title: "Contabilidad Empresarial",
      description: "Gestión contable completa para empresas y pymes, manteniendo tus finanzas organizadas y cumpliendo con los requisitos legales.",
      icon: <CalculateIcon style={{ fontSize: 40, color: theme.palette.secondary.main }} />,
      delay: 1,
    },
    {
      title: "Asesoría Tributaria",
      description: "Optimiza tu carga fiscal y mantente al día con tus obligaciones tributarias mediante estrategias legales y efectivas.",
      icon: <ReceiptLongIcon style={{ fontSize: 40, color: theme.palette.secondary.main }} />,
      delay: 2,
    },
    {
      title: "Planeación Financiera",
      description: "Desarrolla estrategias financieras para el crecimiento y la estabilidad de tu negocio con proyecciones y análisis profesionales.",
      icon: <AttachMoneyIcon style={{ fontSize: 40, color: theme.palette.secondary.main }} />,
      delay: 3,
    },
    {
      title: "Auditorías y Control",
      description: "Revisión y verificación de tus procesos contables para asegurar la precisión y el cumplimiento de normas contables.",
      icon: <MonitorHeartIcon style={{ fontSize: 40, color: theme.palette.secondary.main }} />,
      delay: 4,
    },
  ];

  return (
    <Container maxWidth="lg" className="py-8">
      {/* Hero Section con nueva organización para mobile */}
      <Box className="min-h-[80vh] flex flex-col justify-center">
        {isMobile && (
          <Box className="mb-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography 
                variant="h4" 
                component="h1" 
                sx={{
                  fontWeight: 700,
                  color: theme.palette.primary.main,
                  textAlign: 'center',
                  mb: 1,
                  fontSize: { xs: '1.75rem', sm: '2.125rem' }
                }}
              >
                Servicios Contables y Tributarios
              </Typography>
            </motion.div>
          </Box>
        )}
        
        <Grid container spacing={4} alignItems="center" direction={isMobile ? "column" : "row"}>
          {!isMobile && (
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography 
                  variant="h2" 
                  component="h1" 
                  sx={{
                    fontWeight: 700,
                    color: theme.palette.primary.main,
                    mb: 4
                  }}
                >
                  Servicios Contables y Tributarios
                </Typography>
                
                <Typography 
                  variant="h5" 
                  sx={{
                    color: theme.palette.text.secondary,
                    mb: 4
                  }}
                >
                  Alejandra Bertón - Contadora Pública
                </Typography>

                <Typography 
                  variant="body1" 
                  sx={{
                    color: theme.palette.mode === 'dark' ? 'rgba(249, 246, 243, 0.8)' : 'rgba(60, 60, 60, 0.7)',
                    mb: 8,
                    maxWidth: '90%'
                  }}
                >
                  Soluciones contables y tributarias personalizadas para empresas y personas naturales. 
                  Optimiza tus finanzas y cumple con tus obligaciones fiscales de manera eficiente.
                </Typography>

                <Box className="flex flex-wrap gap-4 mb-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      startIcon={<WhatsAppIcon />}
                      sx={{
                        backgroundColor: '#25D366',
                        color: 'white',
                        px: 3,
                        py: 1.25,
                        '&:hover': {
                          backgroundColor: '#22c55e',
                        },
                        fontWeight: 600,
                        textTransform: 'none',
                        boxShadow: theme.palette.mode === 'dark' 
                          ? '0 4px 12px rgba(0, 0, 0, 0.3)' 
                          : '0 4px 12px rgba(34, 197, 94, 0.25)',
                        height: '48px'
                      }}
                      onClick={() =>
                        window.open(
                          "https://wa.me/573053004399?text=Hola%20Alejandra%20me%20gustar%C3%ADa%20una%20asesor%C3%ADa%20contigo%20sobre...",
                          "_blank"
                        )
                      }
                    >
                      WhatsApp
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      startIcon={<LinkedInIcon />}
                      sx={{
                        backgroundColor: '#0A66C2',
                        color: 'white',
                        px: 3,
                        py: 1.25,
                        '&:hover': {
                          backgroundColor: '#0a5cb8',
                        },
                        fontWeight: 600,
                        textTransform: 'none',
                        boxShadow: theme.palette.mode === 'dark' 
                          ? '0 4px 12px rgba(0, 0, 0, 0.3)' 
                          : '0 4px 12px rgba(10, 102, 194, 0.25)',
                        height: '48px'
                      }}
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/alejandra-berton/",
                          "_blank"
                        )
                      }
                    >
                      LinkedIn
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      startIcon={<EmailIcon />}
                      sx={{
                        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.paper : theme.palette.primary.main,
                        color: theme.palette.mode === 'dark' ? theme.palette.primary.main : theme.palette.background.default,
                        px: 3,
                        py: 1.25,
                        '&:hover': {
                          backgroundColor: theme.palette.mode === 'dark' ? '#f9f6f3' : '#2a2a2a',
                        },
                        fontWeight: 600,
                        textTransform: 'none',
                        boxShadow: theme.palette.mode === 'dark' 
                          ? '0 4px 12px rgba(0, 0, 0, 0.3)' 
                          : '0 4px 12px rgba(15, 23, 42, 0.25)',
                        mb: { xs: 3, sm: 0 },
                        height: '48px'
                      }}
                      onClick={() =>
                        (window.location.href =
                          "mailto:alejandraberton@gmail.com?subject=Consulta profesional&body=Hola Alejandra,%0A%0AMe gustaría una asesoría contable sobre...")
                      }
                    >
                      Email
                    </Button>
                  </motion.div>
                </Box>
              </motion.div>
            </Grid>
          )}
          
          <Grid item xs={12} md={6} className={isMobile ? "mb-8" : ""}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center"
            >
              <Box className="relative w-full max-w-md h-[360px]">
                {/* Fondo circular difuminado con colores de marca */}
                <div className="absolute w-64 h-64 rounded-full -z-10 blur-3xl top-20 left-1/2 transform -translate-x-1/2 opacity-50"
                  style={{ 
                    background: `radial-gradient(circle, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.main} 100%)` 
                  }}
                ></div>
                
                {/* Foto central - versión móvil ligeramente más pequeña */}
                <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full overflow-hidden border-4 shadow-xl z-20"
                  sx={{ 
                    borderColor: theme.palette.secondary.main,
                    boxShadow: `0 0 20px 5px ${theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.3)' : 'rgba(217, 176, 156, 0.2)'}`
                  }}
                >
                  <Image
                    src="/alejandrafoto.jpeg"
                    alt="Alejandra Bertón"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "50% 30%" }}
                    priority
                  />
                </Box>

                {/* Card de Contabilidad - Posición superior */}
                <Box className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 animate-float">
                  <motion.div
                    animate={{ 
                      y: [0, -8, 0],
                      rotate: [0, 2, 0]
                    }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 5,
                      ease: "easeInOut" 
                    }}
                  >
                    <Paper 
                      elevation={theme.palette.mode === 'dark' ? 3 : 2}
                      sx={{
                        p: 1.5,
                        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.paper : '#ffffff',
                        borderRadius: 3,
                        boxShadow: theme.palette.mode === 'dark' 
                          ? '0 4px 20px rgba(0, 0, 0, 0.5)' 
                          : '0 4px 20px rgba(0, 0, 0, 0.1)',
                        border: '1px solid',
                        borderColor: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
                        backdropFilter: 'blur(8px)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%'
                      }}
                    >
                      <Box 
                        sx={{ 
                          backgroundColor: theme.palette.mode === 'dark' ? 'rgba(233, 201, 187, 0.1)' : 'rgba(233, 201, 187, 0.2)',
                          borderRadius: '50%',
                          padding: 0.75,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 0.5
                        }}
                      >
                        <CalculateIcon 
                          sx={{ 
                            color: theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.secondary.dark, 
                            fontSize: '1.5rem'
                          }} 
                        />
                      </Box>
                      <Typography 
                        variant="subtitle2" 
                        sx={{
                          fontWeight: 700,
                          color: theme.palette.primary.main,
                          fontSize: '0.75rem',
                          textAlign: 'center'
                        }}
                      >
                        Contabilidad
                      </Typography>
                    </Paper>
                  </motion.div>
                </Box>

                {/* Card de Asesoría - Posición izquierda */}
                <Box className="absolute top-1/2 left-16 -translate-y-1/2 w-24 h-24 animate-float-delayed">
                  <motion.div
                    animate={{ 
                      y: [0, -6, 0],
                      rotate: [0, -1, 0]
                    }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 6,
                      ease: "easeInOut",
                      delay: 0.7
                    }}
                  >
                    <Paper 
                      elevation={theme.palette.mode === 'dark' ? 3 : 2}
                      sx={{
                        p: 1.5,
                        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.paper : '#ffffff',
                        borderRadius: 3,
                        boxShadow: theme.palette.mode === 'dark' 
                          ? '0 4px 20px rgba(0, 0, 0, 0.5)' 
                          : '0 4px 20px rgba(0, 0, 0, 0.1)',
                        border: '1px solid',
                        borderColor: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
                        backdropFilter: 'blur(8px)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%'
                      }}
                    >
                      <Box 
                        sx={{ 
                          backgroundColor: theme.palette.mode === 'dark' ? 'rgba(233, 201, 187, 0.1)' : 'rgba(233, 201, 187, 0.2)',
                          borderRadius: '50%',
                          padding: 0.75,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 0.5
                        }}
                      >
                        <MonitorHeartIcon 
                          sx={{ 
                            color: theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.secondary.dark, 
                            fontSize: '1.5rem'
                          }} 
                        />
                      </Box>
                      <Typography 
                        variant="subtitle2" 
                        sx={{
                          fontWeight: 700,
                          color: theme.palette.primary.main,
                          fontSize: '0.75rem',
                          textAlign: 'center'
                        }}
                      >
                        Asesoría
                      </Typography>
                    </Paper>
                  </motion.div>
                </Box>

                {/* Card de Impuestos - Posición derecha */}
                <Box className="absolute top-1/2 right-16 -translate-y-1/2 w-24 h-24 animate-float-slow">
                  <motion.div
                    animate={{ 
                      y: [0, -8, 0],
                      rotate: [0, 2, 0]
                    }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 7,
                      ease: "easeInOut",
                      delay: 1.5
                    }}
                  >
                    <Paper 
                      elevation={theme.palette.mode === 'dark' ? 3 : 2}
                      sx={{
                        p: 1.5,
                        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.paper : '#ffffff',
                        borderRadius: 3,
                        boxShadow: theme.palette.mode === 'dark' 
                          ? '0 4px 20px rgba(0, 0, 0, 0.5)' 
                          : '0 4px 20px rgba(0, 0, 0, 0.1)',
                        border: '1px solid',
                        borderColor: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
                        backdropFilter: 'blur(8px)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%'
                      }}
                    >
                      <Box 
                        sx={{ 
                          backgroundColor: theme.palette.mode === 'dark' ? 'rgba(233, 201, 187, 0.1)' : 'rgba(233, 201, 187, 0.2)',
                          borderRadius: '50%',
                          padding: 0.75,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 0.5
                        }}
                      >
                        <ReceiptLongIcon 
                          sx={{ 
                            color: theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.secondary.dark, 
                            fontSize: '1.5rem'
                          }} 
                        />
                      </Box>
                      <Typography 
                        variant="subtitle2" 
                        sx={{
                          fontWeight: 700,
                          color: theme.palette.primary.main,
                          fontSize: '0.75rem',
                          textAlign: 'center'
                        }}
                      >
                        Impuestos
                      </Typography>
                    </Paper>
                  </motion.div>
                </Box>

                {/* Card de Finanzas - Posición inferior */}
                <Box className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-24 animate-float-very-slow">
                  <motion.div
                    animate={{ 
                      y: [0, -6, 0],
                      rotate: [0, -1, 0]
                    }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 5.5,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  >
                    <Paper 
                      elevation={theme.palette.mode === 'dark' ? 3 : 2}
                      sx={{
                        p: 1.5,
                        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.paper : '#ffffff',
                        borderRadius: 3,
                        boxShadow: theme.palette.mode === 'dark' 
                          ? '0 4px 20px rgba(0, 0, 0, 0.5)' 
                          : '0 4px 20px rgba(0, 0, 0, 0.1)',
                        border: '1px solid',
                        borderColor: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
                        backdropFilter: 'blur(8px)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%'
                      }}
                    >
                      <Box 
                        sx={{ 
                          backgroundColor: theme.palette.mode === 'dark' ? 'rgba(233, 201, 187, 0.1)' : 'rgba(233, 201, 187, 0.2)',
                          borderRadius: '50%',
                          padding: 0.75,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 0.5
                        }}
                      >
                        <AttachMoneyIcon 
                          sx={{ 
                            color: theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.secondary.dark, 
                            fontSize: '1.5rem'
                          }} 
                        />
                      </Box>
                      <Typography 
                        variant="subtitle2" 
                        sx={{
                          fontWeight: 700,
                          color: theme.palette.primary.main,
                          fontSize: '0.75rem',
                          textAlign: 'center'
                        }}
                      >
                        Finanzas
                      </Typography>
                    </Paper>
                  </motion.div>
                </Box>
              </Box>
            </motion.div>
          </Grid>
          
          {isMobile && (
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Typography 
                  variant="subtitle1" 
                  sx={{
                    fontWeight: 600,
                    color: theme.palette.primary.main,
                    textAlign: 'center',
                    mb: 1
                  }}
                >
                  Alejandra Bertón - Contadora Pública
                </Typography>

                <Typography 
                  variant="body2" 
                  sx={{
                    color: theme.palette.text.secondary,
                    textAlign: 'center',
                    mb: 3,
                    mx: 'auto',
                    maxWidth: '90%'
                  }}
                >
                  Soluciones contables y tributarias personalizadas para empresas y personas naturales. 
                  Optimiza tus finanzas y cumple con tus obligaciones fiscales.
                </Typography>

                <Box className="flex flex-wrap gap-2 justify-center mb-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="contained"
                      size="medium"
                      startIcon={<WhatsAppIcon />}
                      sx={{
                        backgroundColor: '#25D366',
                        color: 'white',
                        px: 2.5,
                        py: 1,
                        '&:hover': {
                          backgroundColor: '#22c55e',
                        },
                        fontWeight: 600,
                        textTransform: 'none',
                        boxShadow: theme.palette.mode === 'dark' 
                          ? '0 4px 12px rgba(0, 0, 0, 0.3)' 
                          : '0 4px 12px rgba(34, 197, 94, 0.25)'
                      }}
                      onClick={() =>
                        window.open(
                          "https://wa.me/573053004399?text=Hola%20Alejandra%20me%20gustar%C3%ADa%20una%20asesor%C3%ADa%20contigo%20sobre...",
                          "_blank"
                        )
                      }
                    >
                      WhatsApp
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="contained"
                      size="medium"
                      startIcon={<LinkedInIcon />}
                      sx={{
                        backgroundColor: '#0A66C2',
                        color: 'white',
                        px: 2.5,
                        py: 1,
                        '&:hover': {
                          backgroundColor: '#0a5cb8',
                        },
                        fontWeight: 600,
                        textTransform: 'none',
                        boxShadow: theme.palette.mode === 'dark' 
                          ? '0 4px 12px rgba(0, 0, 0, 0.3)' 
                          : '0 4px 12px rgba(10, 102, 194, 0.25)'
                      }}
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/alejandra-berton/",
                          "_blank"
                        )
                      }
                    >
                      LinkedIn
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="contained"
                      size="medium"
                      startIcon={<EmailIcon />}
                      sx={{
                        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.paper : theme.palette.primary.main,
                        color: theme.palette.mode === 'dark' ? theme.palette.primary.main : theme.palette.background.default,
                        px: 2.5,
                        py: 1,
                        '&:hover': {
                          backgroundColor: theme.palette.mode === 'dark' ? '#f9f6f3' : '#2a2a2a',
                        },
                        fontWeight: 600,
                        textTransform: 'none',
                        boxShadow: theme.palette.mode === 'dark' 
                          ? '0 4px 12px rgba(0, 0, 0, 0.3)' 
                          : '0 4px 12px rgba(15, 23, 42, 0.25)',
                        mb: { xs: 3, sm: 0 }
                      }}
                      onClick={() =>
                        (window.location.href =
                          "mailto:alejandraberton@gmail.com?subject=Consulta profesional&body=Hola Alejandra,%0A%0AMe gustaría una asesoría contable sobre...")
                      }
                    >
                      Email
                    </Button>
                  </motion.div>
                </Box>
              </motion.div>
            </Grid>
          )}
        </Grid>
      </Box>

      {/* Estadísticas animadas */}
      

      {/* Servicios Section - Cambio a fondo blanco con ajustes para que llegue a los bordes */}
      <Box 
        className="py-12"
        sx={{
          backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.default : '#ffffff',
          width: '100vw',
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          mt: -4,
          mb: 4,
          pt: 8
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Typography 
                variant={isMobile ? "h4" : "h3"} 
                component="h2" 
                sx={{
                  fontWeight: 700,
                  color: theme.palette.primary.main,
                  mb: 3,
                  position: 'relative',
                  display: 'inline-block'
                }}
              >
                Mis Servicios
                <Box 
                  sx={{
                    position: 'absolute',
                    bottom: -8,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '60px',
                    height: '3px',
                    backgroundColor: theme.palette.secondary.main,
                    borderRadius: '3px'
                  }}
                />
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography 
                variant="body1" 
                sx={{
                  color: theme.palette.text.secondary,
                  maxWidth: '650px',
                  mx: 'auto',
                  mb: 3
                }}
              >
                Ofrezco soluciones adaptadas a las necesidades de tu negocio o actividad personal.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Box 
                sx={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  gap: 1.5, 
                  mb: 4 
                }}
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      repeatType: 'reverse',
                      delay: i * 0.3
                    }}
                  >
                    <Box 
                      sx={{
                        width: i === 1 ? 40 : 25,
                        height: 5,
                        borderRadius: '10px',
                        backgroundColor: theme.palette.secondary.main,
                        opacity: i === 1 ? 1 : 0.6
                      }}
                    />
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </motion.div>
        </Container>

        <Container maxWidth="lg">
          <Box sx={{ position: 'relative', overflow: 'hidden' }}>
            {/* Elementos decorativos animados */}
            <Box sx={{ position: 'absolute', top: -10, left: -100, zIndex: 0, opacity: 0.5, pointerEvents: 'none' }}>
              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
              >
                <Box 
                  sx={{ 
                    width: 150,
                    height: 150,
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${theme.palette.secondary.light} 0%, transparent 70%)`,
                    filter: 'blur(20px)'
                  }}
                />
              </motion.div>
            </Box>
            
            <Box sx={{ position: 'absolute', bottom: -50, right: -80, zIndex: 0, opacity: 0.4, pointerEvents: 'none' }}>
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 7, 
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: 1
                }}
              >
                <Box 
                  sx={{ 
                    width: 180,
                    height: 180,
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${theme.palette.secondary.light} 0%, transparent 70%)`,
                    filter: 'blur(25px)'
                  }}
                />
              </motion.div>
            </Box>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Grid 
                container 
                spacing={4}
                sx={{ position: 'relative', zIndex: 1 }}
              >
                {services.map((service, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <ServiceCard {...service} />
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* Llamada a la acción */}
      <CallToAction />
      
      {/* Espacio para el footer */}
      <Box className="h-16"></Box>
    </Container>
  );
}
