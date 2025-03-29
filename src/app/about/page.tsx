"use client";

import Image from "next/image";
import { Box, Typography, Container, Divider, Paper, Grid, useTheme, Chip, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CalculateIcon from '@mui/icons-material/Calculate';
import PeopleIcon from '@mui/icons-material/People';
import ComputerIcon from '@mui/icons-material/Computer';

// Componente de animación con Framer Motion
const MotionBox = motion(Box);
const MotionPaper = motion(Paper);
const MotionTypography = motion(Typography);

export default function About() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  // Variantes de animación
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const slideUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 10 
      }
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6, px: { xs: 2, sm: 3, lg: 4 } }}>
      <MotionPaper 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        elevation={isDarkMode ? 3 : 2}
        sx={{
          overflow: 'hidden',
          borderRadius: 3,
          backgroundColor: isDarkMode ? 'rgba(15, 23, 42, 0.95)' : '#ffffff',
          border: '1px solid',
          borderColor: isDarkMode ? 'rgba(59, 130, 246, 0.1)' : 'rgba(226, 232, 240, 0.8)',
          boxShadow: isDarkMode 
            ? '0 4px 20px rgba(0, 0, 0, 0.3)' 
            : '0 4px 20px rgba(0, 0, 0, 0.08)'
        }}
      >
        <Box sx={{ position: 'relative', height: { xs: 240, sm: 280, md: 320 } }}>
          <Image
            src="/images/contador-header.jpg"
            alt="Servicios contables profesionales"
            fill
            style={{ 
              objectFit: 'cover',
              filter: 'brightness(0.6)' 
            }}
            priority
            quality={90}
          />
          <Box 
            sx={{ 
              position: 'absolute', 
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.6)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              padding: { xs: 3, sm: 4 }
            }}
          >
            <MotionBox 
              variants={slideUp}
              sx={{
                backgroundColor: 'rgba(0,0,0,0.75)',
                padding: { xs: 3, sm: 4 },
                borderRadius: 2,
                width: { xs: '90%', sm: '80%', md: '70%' },
                maxWidth: 800
              }}
            >
              <MotionTypography 
                variant="h3" 
                variants={slideUp}
                sx={{ 
                  fontWeight: 800, 
                  color: 'white', 
                  mb: 2,
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                  fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' }
                }}
              >
                Acerca de Mí
              </MotionTypography>
              <MotionTypography 
                variant="h6" 
                variants={slideUp}
                sx={{ 
                  color: 'rgba(255, 255, 255, 1)',
                  fontWeight: 500,
                  textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                  fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.2rem' }
                }}
              >
                Servicios profesionales de contaduría pública
              </MotionTypography>
            </MotionBox>
          </Box>
        </Box>

        <Box sx={{ p: { xs: 3, sm: 5 } }}>
          <Grid container spacing={5} sx={{ mb: 5 }}>
            <Grid item xs={12} md={4}>
              <MotionBox 
                variants={fadeIn}
                sx={{ 
                  position: 'relative', 
                  width: '100%',
                  height: { xs: 300, sm: 350 }, 
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: isDarkMode 
                    ? '0 4px 12px rgba(0, 0, 0, 0.4)' 
                    : '0 4px 12px rgba(0, 0, 0, 0.15)'
                }}
              >
                <Image
                  src="/alejandrafoto.jpeg"
                  alt="Alejandra Bertón"
                  fill
                  style={{ 
                    objectFit: 'cover', 
                    objectPosition: '50% 25%' 
                  }}
                  quality={95}
                />
              </MotionBox>
              
              <Box sx={{ mt: 2.5, display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                <Chip 
                  label="Contadora Pública" 
                  color="primary" 
                  size="small"
                  sx={{ fontWeight: 500 }} 
                />
                <Chip 
                  label="Analista Contable" 
                  color="secondary" 
                  size="small"
                  sx={{ fontWeight: 500 }} 
                />
                <Chip 
                  label="Analista de Impuestos" 
                  variant="outlined" 
                  size="small"
                  sx={{ fontWeight: 500 }} 
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <MotionTypography 
                variant="h4" 
                variants={slideUp}
                sx={{ 
                  fontWeight: 600, 
                  color: isDarkMode ? '#f8fafc' : theme.palette.text.primary,
                  mb: 2.5 
                }}
              >
                Alejandra Bertón
              </MotionTypography>
              <MotionTypography 
                variant="body1" 
                variants={slideUp}
                sx={{ 
                  color: isDarkMode ? 'rgba(255, 255, 255, 0.85)' : theme.palette.text.secondary,
                  mb: 2,
                  fontSize: '1.05rem',
                  lineHeight: 1.6
                }}
              >
                Contadora Pública con experiencia en gestión contable y asesoría tributaria para profesionales independientes y empresas. Mi enfoque combina precisión técnica con una comunicación clara para que usted entienda completamente su situación financiera.
              </MotionTypography>
              <MotionTypography 
                variant="body1" 
                variants={slideUp}
                sx={{ 
                  color: isDarkMode ? 'rgba(255, 255, 255, 0.85)' : theme.palette.text.secondary,
                  mb: 3,
                  fontSize: '1.05rem',
                  lineHeight: 1.6
                }}
              >
                Especializada en cumplimiento normativo y optimización fiscal para ayudar a mis clientes a tomar decisiones financieras informadas que maximicen su rentabilidad mientras cumplen con todas sus obligaciones tributarias.
              </MotionTypography>

              <Divider 
                sx={{ 
                  my: 3,
                  borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.12)'
                }} 
              />
              <MotionTypography 
                variant="h5" 
                variants={slideUp}
                sx={{ 
                  fontWeight: 600,
                  color: isDarkMode ? '#f8fafc' : theme.palette.text.primary,
                  mb: 2
                }}
              >
                Formación Académica
              </MotionTypography>
              <MotionBox 
                variants={staggerChildren}
                sx={{ 
                  listStyleType: 'none', 
                  pl: 0,
                  color: isDarkMode ? 'rgba(255, 255, 255, 0.85)' : theme.palette.text.secondary,
                  '& > li': { 
                    mb: 2,
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                  } 
                }}
              >
                <motion.li variants={slideUp}>
                  <Avatar sx={{ bgcolor: 'primary.main', mr: 2, width: 35, height: 35 }}>
                    <AccountBalanceIcon sx={{ fontSize: 18 }} />
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                      Contadora Pública
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Corporación Universitaria Americana
                    </Typography>
                  </Box>
                </motion.li>
                <motion.li variants={slideUp}>
                  <Avatar sx={{ bgcolor: 'secondary.main', mr: 2, width: 35, height: 35 }}>
                    <CalculateIcon sx={{ fontSize: 18 }} />
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                      Especialización en Contabilidad y Finanzas
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Corporación Universitaria Americana
                    </Typography>
                  </Box>
                </motion.li>
              </MotionBox>
            </Grid>
          </Grid>

          <Divider 
            sx={{ 
              my: 4,
              borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.12)'
            }} 
          />
          <MotionTypography 
            variant="h5" 
            variants={slideUp}
            sx={{ 
              fontWeight: 600, 
              color: isDarkMode ? '#f8fafc' : theme.palette.text.primary,
              mb: 3 
            }}
          >
            Experiencia Profesional
          </MotionTypography>
          
          <MotionBox 
            variants={staggerChildren}
            sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
          >
            <MotionPaper 
              variants={slideUp}
              elevation={0}
              sx={{
                p: 3,
                backgroundColor: isDarkMode ? 'rgba(30, 41, 59, 0.6)' : 'rgba(249, 250, 251, 0.8)',
                borderRadius: 3,
                borderLeft: '4px solid',
                borderColor: 'primary.main',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: isDarkMode 
                    ? '0 6px 16px rgba(0, 0, 0, 0.4)' 
                    : '0 6px 16px rgba(0, 0, 0, 0.1)'
                }
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 600, 
                    color: isDarkMode ? '#f8fafc' : theme.palette.text.primary,
                  }}
                >
                  Asistente Contable
                </Typography>
                <Chip 
                  label="Ene 2023 - Actualidad" 
                  size="small"
                  color="primary"
                  variant="outlined"
                  sx={{ 
                    fontWeight: 500,
                    ml: 2
                  }}
                />
              </Box>
              <Typography 
                variant="subtitle2" 
                sx={{ 
                  color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'text.secondary',
                  mb: 1
                }}
              >
                ACIDENT • Jornada completa
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: isDarkMode ? 'rgba(255, 255, 255, 0.85)' : theme.palette.text.secondary,
                  mt: 1.5,
                  lineHeight: 1.6
                }}
              >
                Gestión contable, preparación de estados financieros y apoyo en el cumplimiento de obligaciones tributarias. Control y seguimiento de operaciones financieras.
              </Typography>
            </MotionPaper>
            
            <MotionPaper 
              variants={slideUp}
              elevation={0}
              sx={{
                p: 3,
                backgroundColor: isDarkMode ? 'rgba(30, 41, 59, 0.6)' : 'rgba(249, 250, 251, 0.8)',
                borderRadius: 3,
                borderLeft: '4px solid',
                borderColor: 'secondary.main',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: isDarkMode 
                    ? '0 6px 16px rgba(0, 0, 0, 0.4)' 
                    : '0 6px 16px rgba(0, 0, 0, 0.1)'
                }
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 600, 
                    color: isDarkMode ? '#f8fafc' : theme.palette.text.primary,
                  }}
                >
                  Auxiliar Contable
                </Typography>
                <Chip 
                  label="Jun 2023 - Nov 2023" 
                  size="small"
                  color="secondary"
                  variant="outlined"
                  sx={{ 
                    fontWeight: 500,
                    ml: 2
                  }}
                />
              </Box>
              <Typography 
                variant="subtitle2" 
                sx={{ 
                  color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'text.secondary',
                  mb: 1
                }}
              >
                TuPymeContable • Temporal
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: isDarkMode ? 'rgba(255, 255, 255, 0.85)' : theme.palette.text.secondary,
                  mt: 1.5,
                  lineHeight: 1.6
                }}
              >
                Registro de transacciones contables, conciliaciones bancarias, preparación de informes financieros y apoyo en declaraciones tributarias para diversos clientes.
              </Typography>
            </MotionPaper>
            
            <MotionPaper 
              variants={slideUp}
              elevation={0}
              sx={{
                p: 3,
                backgroundColor: isDarkMode ? 'rgba(30, 41, 59, 0.6)' : 'rgba(249, 250, 251, 0.8)',
                borderRadius: 3,
                borderLeft: '4px solid',
                borderColor: 'info.main',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: isDarkMode 
                    ? '0 6px 16px rgba(0, 0, 0, 0.4)' 
                    : '0 6px 16px rgba(0, 0, 0, 0.1)'
                }
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 600, 
                    color: isDarkMode ? '#f8fafc' : theme.palette.text.primary,
                  }}
                >
                  Asistente Contable
                </Typography>
                <Chip 
                  label="Oct 2020 - Mar 2021" 
                  size="small"
                  color="info"
                  variant="outlined"
                  sx={{ 
                    fontWeight: 500,
                    ml: 2
                  }}
                />
              </Box>
              <Typography 
                variant="subtitle2" 
                sx={{ 
                  color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'text.secondary',
                  mb: 1
                }}
              >
                Enecon S.A.S. • Jornada completa
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: isDarkMode ? 'rgba(255, 255, 255, 0.85)' : theme.palette.text.secondary,
                  mt: 1.5,
                  lineHeight: 1.6
                }}
              >
                Elaboración y revisión de estados financieros, análisis de cuentas, conciliaciones bancarias y colaboración en procesos de auditoría interna.
              </Typography>
            </MotionPaper>

            <MotionPaper 
              variants={slideUp}
              elevation={0}
              sx={{
                p: 3,
                backgroundColor: isDarkMode ? 'rgba(30, 41, 59, 0.6)' : 'rgba(249, 250, 251, 0.8)',
                borderRadius: 3,
                borderLeft: '4px solid',
                borderColor: 'success.main',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: isDarkMode 
                    ? '0 6px 16px rgba(0, 0, 0, 0.4)' 
                    : '0 6px 16px rgba(0, 0, 0, 0.1)'
                }
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 600, 
                    color: isDarkMode ? '#f8fafc' : theme.palette.text.primary,
                  }}
                >
                  Auxiliar Contable
                </Typography>
                <Chip 
                  label="Feb 2017 - Nov 2017" 
                  size="small"
                  color="success"
                  variant="outlined"
                  sx={{ 
                    fontWeight: 500,
                    ml: 2
                  }}
                />
              </Box>
              <Typography 
                variant="subtitle2" 
                sx={{ 
                  color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'text.secondary',
                  mb: 1
                }}
              >
                CENSA Medellín • Contrato de prácticas
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: isDarkMode ? 'rgba(255, 255, 255, 0.85)' : theme.palette.text.secondary,
                  mt: 1.5,
                  lineHeight: 1.6
                }}
              >
                Apoyo en procesos contables básicos, registro de transacciones, archivo de documentación y asistencia en la preparación de informes financieros mensuales.
              </Typography>
            </MotionPaper>
          </MotionBox>
          
          <Divider 
            sx={{ 
              my: 4,
              borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.12)'
            }} 
          />
          <MotionTypography 
            variant="h5" 
            variants={slideUp}
            sx={{ 
              fontWeight: 600, 
              color: isDarkMode ? '#f8fafc' : theme.palette.text.primary,
              mb: 3 
            }}
          >
            Habilidades Profesionales
          </MotionTypography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <MotionPaper 
                variants={slideUp}
                elevation={0}
                sx={{
                  p: 3,
                  backgroundColor: isDarkMode ? 'rgba(30, 41, 59, 0.6)' : 'rgba(249, 250, 251, 0.8)',
                  borderRadius: 3,
                  height: '100%',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: isDarkMode 
                      ? '0 8px 24px rgba(0, 0, 0, 0.3)' 
                      : '0 8px 24px rgba(0, 0, 0, 0.08)'
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
                    <CalculateIcon />
                  </Avatar>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 600, 
                      color: isDarkMode ? '#f8fafc' : theme.palette.text.primary,
                    }}
                  >
                    Contabilidad General
                  </Typography>
                </Box>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: isDarkMode ? 'rgba(255, 255, 255, 0.85)' : theme.palette.text.secondary,
                    lineHeight: 1.6
                  }}
                >
                  Preparación de estados financieros, registros contables, conciliaciones bancarias, análisis de cuentas y elaboración de informes financieros.
                </Typography>
              </MotionPaper>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <MotionPaper 
                variants={slideUp}
                elevation={0}
                sx={{
                  p: 3,
                  backgroundColor: isDarkMode ? 'rgba(30, 41, 59, 0.6)' : 'rgba(249, 250, 251, 0.8)',
                  borderRadius: 3,
                  height: '100%',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: isDarkMode 
                      ? '0 8px 24px rgba(0, 0, 0, 0.3)' 
                      : '0 8px 24px rgba(0, 0, 0, 0.08)'
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ bgcolor: 'secondary.main', mr: 2 }}>
                    <AccountBalanceIcon />
                  </Avatar>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 600, 
                      color: isDarkMode ? '#f8fafc' : theme.palette.text.primary,
                    }}
                  >
                    Asesoría Tributaria
                  </Typography>
                </Box>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: isDarkMode ? 'rgba(255, 255, 255, 0.85)' : theme.palette.text.secondary,
                    lineHeight: 1.6
                  }}
                >
                  Declaraciones de renta para personas naturales y jurídicas, IVA, retención en la fuente, ICA y otros impuestos nacionales y municipales.
                </Typography>
              </MotionPaper>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <MotionPaper 
                variants={slideUp}
                elevation={0}
                sx={{
                  p: 3,
                  backgroundColor: isDarkMode ? 'rgba(30, 41, 59, 0.6)' : 'rgba(249, 250, 251, 0.8)',
                  borderRadius: 3,
                  height: '100%',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: isDarkMode 
                      ? '0 8px 24px rgba(0, 0, 0, 0.3)' 
                      : '0 8px 24px rgba(0, 0, 0, 0.08)'
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ bgcolor: 'success.main', mr: 2 }}>
                    <PeopleIcon />
                  </Avatar>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 600, 
                      color: isDarkMode ? '#f8fafc' : theme.palette.text.primary,
                    }}
                  >
                    Nómina y Seguridad Social
                  </Typography>
                </Box>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: isDarkMode ? 'rgba(255, 255, 255, 0.85)' : theme.palette.text.secondary,
                    lineHeight: 1.6
                  }}
                >
                  Cálculo y liquidación de nómina, gestión de prestaciones sociales, aportes a seguridad social y parafiscales según la normativa vigente.
                </Typography>
              </MotionPaper>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <MotionPaper 
                variants={slideUp}
                elevation={0}
                sx={{
                  p: 3,
                  backgroundColor: isDarkMode ? 'rgba(30, 41, 59, 0.6)' : 'rgba(249, 250, 251, 0.8)',
                  borderRadius: 3,
                  height: '100%',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: isDarkMode 
                      ? '0 8px 24px rgba(0, 0, 0, 0.3)' 
                      : '0 8px 24px rgba(0, 0, 0, 0.08)'
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ bgcolor: 'info.main', mr: 2 }}>
                    <ComputerIcon />
                  </Avatar>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 600, 
                      color: isDarkMode ? '#f8fafc' : theme.palette.text.primary,
                    }}
                  >
                    Software Contable
                  </Typography>
                </Box>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: isDarkMode ? 'rgba(255, 255, 255, 0.85)' : theme.palette.text.secondary,
                    lineHeight: 1.6
                  }}
                >
                  Manejo de sistemas contables como Siigo, World Office, SAP y Microsoft Excel avanzado para análisis financiero y reportes contables.
                </Typography>
              </MotionPaper>
            </Grid>
          </Grid>
        </Box>
      </MotionPaper>
    </Container>
  );
}
