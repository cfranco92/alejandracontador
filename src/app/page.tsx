"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Typography, Container, Grid, Box, Button, Paper, Divider, useMediaQuery, useTheme } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import CalculateIcon from '@mui/icons-material/Calculate';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';

import ServiceCard from "@/components/ServiceCard";
import StatsCounter from "@/components/StatsCounter";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const services = [
    {
      title: "Contabilidad Empresarial",
      description: "Gestión contable completa para empresas y pymes, manteniendo tus finanzas organizadas y cumpliendo con los requisitos legales.",
      icon: "/images/accounting-icon-1.png",
      delay: 1,
    },
    {
      title: "Asesoría Tributaria",
      description: "Optimiza tu carga fiscal y mantente al día con tus obligaciones tributarias mediante estrategias legales y efectivas.",
      icon: "/images/tax-icon.png",
      delay: 2,
    },
    {
      title: "Planeación Financiera",
      description: "Desarrolla estrategias financieras para el crecimiento y la estabilidad de tu negocio con proyecciones y análisis profesionales.",
      icon: "/images/accounting-icon-2.png",
      delay: 3,
    },
    {
      title: "Auditorías y Control",
      description: "Revisión y verificación de tus procesos contables para asegurar la precisión y el cumplimiento de normas contables.",
      icon: "/images/accounting-icon-3.png",
      delay: 4,
    },
  ];

  return (
    <Container maxWidth="lg" className="py-8">
      {/* Hero Section con nueva organización para mobile */}
      <Box className="min-h-[80vh] flex flex-col justify-center">
        {isMobile && (
          <Box className="mb-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography 
                variant="h4" 
                component="h1" 
                className="font-bold text-gray-800 dark:text-white mb-2 text-center"
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
                  className="font-bold text-gray-800 dark:text-white mb-4"
                >
                  Servicios Contables y Tributarios Profesionales
                </Typography>
                
                <Typography 
                  variant="h5" 
                  className="text-gray-600 dark:text-gray-300 mb-4"
                >
                  Alejandra Bertón - Contadora Pública
                </Typography>

                <Typography 
                  variant="body1" 
                  className="text-gray-500 dark:text-gray-400 mb-8 max-w-lg"
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
                      size="large"
                      startIcon={<EmailIcon />}
                      sx={{
                        backgroundColor: theme.palette.mode === 'dark' ? '#1e293b' : '#0f172a',
                        color: 'white',
                        px: 3,
                        py: 1.25,
                        '&:hover': {
                          backgroundColor: theme.palette.mode === 'dark' ? '#334155' : '#1e293b',
                        },
                        fontWeight: 600,
                        textTransform: 'none',
                        boxShadow: theme.palette.mode === 'dark' 
                          ? '0 4px 12px rgba(0, 0, 0, 0.3)' 
                          : '0 4px 12px rgba(15, 23, 42, 0.25)'
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
          
          <Grid item xs={12} md={6} className={isMobile ? "mb-4" : ""}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center"
            >
              <Box className="relative w-full max-w-md h-[350px] md:h-[450px]">
                <div className="absolute w-80 h-80 bg-blue-100 dark:bg-blue-900/30 rounded-full -z-10 blur-3xl top-20 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
                <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl z-20">
                  <Image
                    src="/alejandrafoto.jpeg"
                    alt="Alejandra Bertón"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "50% 30%" }}
                    priority
                  />
                </Box>
                <Box className="absolute top-0 right-0 w-28 h-28 md:w-40 md:h-40 animate-float">
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, 0]
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
                        p: { xs: 1.5, md: 2 },
                        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.9)',
                        borderRadius: 2,
                        boxShadow: theme.palette.mode === 'dark' 
                          ? '0 4px 20px rgba(0, 0, 0, 0.5)' 
                          : '0 4px 20px rgba(0, 0, 0, 0.1)',
                        border: '1px solid',
                        borderColor: theme.palette.mode === 'dark' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(226, 232, 240, 0.8)',
                        backdropFilter: 'blur(8px)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                      }}
                    >
                      <CalculateIcon 
                        sx={{ 
                          color: theme.palette.mode === 'dark' ? '#60a5fa' : '#3b82f6', 
                          mb: { xs: 0.5, md: 1 },
                          fontSize: { xs: '1.8rem', md: '2.2rem' }
                        }} 
                      />
                      <Typography 
                        variant="subtitle2" 
                        sx={{
                          fontWeight: 700,
                          color: theme.palette.mode === 'dark' ? '#f8fafc' : theme.palette.text.primary,
                          fontSize: { xs: '0.7rem', md: '0.9rem' },
                          textAlign: 'center'
                        }}
                      >
                        Contabilidad
                      </Typography>
                    </Paper>
                  </motion.div>
                </Box>
                <Box className="absolute bottom-10 left-0 w-28 h-28 md:w-36 md:h-36 animate-float-delayed">
                  <motion.div
                    animate={{ 
                      y: [0, -15, 0],
                      rotate: [0, -3, 0]
                    }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 6,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  >
                    <Paper 
                      elevation={theme.palette.mode === 'dark' ? 3 : 2}
                      sx={{
                        p: { xs: 1.5, md: 2 },
                        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.9)',
                        borderRadius: 2,
                        boxShadow: theme.palette.mode === 'dark' 
                          ? '0 4px 20px rgba(0, 0, 0, 0.5)' 
                          : '0 4px 20px rgba(0, 0, 0, 0.1)',
                        border: '1px solid',
                        borderColor: theme.palette.mode === 'dark' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(226, 232, 240, 0.8)',
                        backdropFilter: 'blur(8px)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                      }}
                    >
                      <ReceiptLongIcon 
                        sx={{ 
                          color: theme.palette.mode === 'dark' ? '#34d399' : '#10b981', 
                          mb: { xs: 0.5, md: 1 },
                          fontSize: { xs: '1.8rem', md: '2.2rem' }
                        }} 
                      />
                      <Typography 
                        variant="subtitle2" 
                        sx={{
                          fontWeight: 700,
                          color: theme.palette.mode === 'dark' ? '#f8fafc' : theme.palette.text.primary,
                          fontSize: { xs: '0.7rem', md: '0.9rem' },
                          textAlign: 'center'
                        }}
                      >
                        Impuestos
                      </Typography>
                    </Paper>
                  </motion.div>
                </Box>
                <Box className="absolute bottom-0 right-16 w-28 h-28 md:w-36 md:h-36 animate-float-slow">
                  <motion.div
                    animate={{ 
                      y: [0, -8, 0],
                      rotate: [0, 2, 0]
                    }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 7,
                      ease: "easeInOut",
                      delay: 2
                    }}
                  >
                    <Paper 
                      elevation={theme.palette.mode === 'dark' ? 3 : 2}
                      sx={{
                        p: { xs: 1.5, md: 2 },
                        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.9)',
                        borderRadius: 2,
                        boxShadow: theme.palette.mode === 'dark' 
                          ? '0 4px 20px rgba(0, 0, 0, 0.5)' 
                          : '0 4px 20px rgba(0, 0, 0, 0.1)',
                        border: '1px solid',
                        borderColor: theme.palette.mode === 'dark' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(226, 232, 240, 0.8)',
                        backdropFilter: 'blur(8px)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                      }}
                    >
                      <AttachMoneyIcon 
                        sx={{ 
                          color: theme.palette.mode === 'dark' ? '#fbbf24' : '#f59e0b',
                          mb: { xs: 0.5, md: 1 },
                          fontSize: { xs: '1.8rem', md: '2.2rem' }
                        }} 
                      />
                      <Typography 
                        variant="subtitle2" 
                        sx={{
                          fontWeight: 700,
                          color: theme.palette.mode === 'dark' ? '#f8fafc' : theme.palette.text.primary,
                          fontSize: { xs: '0.7rem', md: '0.9rem' },
                          textAlign: 'center'
                        }}
                      >
                        Finanzas
                      </Typography>
                    </Paper>
                  </motion.div>
                </Box>
                <Box className="absolute top-20 left-0 w-24 h-24 md:w-32 md:h-32 animate-float-very-slow">
                  <motion.div
                    animate={{ 
                      y: [0, -5, 0],
                      rotate: [0, -2, 0]
                    }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 8,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  >
                    <Paper 
                      elevation={theme.palette.mode === 'dark' ? 3 : 2}
                      sx={{
                        p: { xs: 1.5, md: 2 },
                        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.9)',
                        borderRadius: 2,
                        boxShadow: theme.palette.mode === 'dark' 
                          ? '0 4px 20px rgba(0, 0, 0, 0.5)' 
                          : '0 4px 20px rgba(0, 0, 0, 0.1)',
                        border: '1px solid',
                        borderColor: theme.palette.mode === 'dark' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(226, 232, 240, 0.8)',
                        backdropFilter: 'blur(8px)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                      }}
                    >
                      <MonitorHeartIcon 
                        sx={{ 
                          color: theme.palette.mode === 'dark' ? '#c084fc' : '#a855f7',
                          mb: { xs: 0.5, md: 1 },
                          fontSize: { xs: '1.8rem', md: '2.2rem' }
                        }} 
                      />
                      <Typography 
                        variant="subtitle2" 
                        sx={{
                          fontWeight: 700,
                          color: theme.palette.mode === 'dark' ? '#f8fafc' : theme.palette.text.primary,
                          fontSize: { xs: '0.7rem', md: '0.9rem' },
                          textAlign: 'center'
                        }}
                      >
                        Asesoría
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
                  className="font-medium text-gray-700 dark:text-gray-200 mb-2 text-center"
                >
                  Alejandra Bertón - Contadora Pública
                </Typography>

                <Typography 
                  variant="body2" 
                  className="text-gray-700 dark:text-gray-300 mb-4 text-center"
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
                      size="small"
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
                      size="small"
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
                      size="small"
                      startIcon={<EmailIcon />}
                      sx={{
                        backgroundColor: theme.palette.mode === 'dark' ? '#1e293b' : '#0f172a',
                        color: 'white',
                        px: 3,
                        py: 1.25,
                        '&:hover': {
                          backgroundColor: theme.palette.mode === 'dark' ? '#334155' : '#1e293b',
                        },
                        fontWeight: 600,
                        textTransform: 'none',
                        boxShadow: theme.palette.mode === 'dark' 
                          ? '0 4px 12px rgba(0, 0, 0, 0.3)' 
                          : '0 4px 12px rgba(15, 23, 42, 0.25)'
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
      <StatsCounter />

      {/* Servicios Section */}
      <Box className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Typography 
            variant={isMobile ? "h4" : "h3"} 
            component="h2" 
            className="font-bold text-gray-800 dark:text-white mb-3"
          >
            Mis Servicios
          </Typography>
          <Typography 
            variant="body1" 
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Ofrezco soluciones adaptadas a las necesidades de tu negocio o actividad personal.
          </Typography>
          <Divider className="mt-6 max-w-xs mx-auto bg-blue-100 dark:bg-blue-800" />
        </motion.div>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <ServiceCard {...service} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Llamada a la acción */}
      <CallToAction />
      
      {/* Espacio para el footer */}
      <Box className="h-16"></Box>
    </Container>
  );
}
