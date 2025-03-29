"use client";

import Image from "next/image";
import { Box, Typography, Container, Divider, Paper, Grid, useTheme } from "@mui/material";

export default function About() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Container maxWidth="lg" sx={{ py: 6, px: { xs: 2, sm: 3, lg: 4 } }}>
      <Paper 
        elevation={isDarkMode ? 3 : 2}
        sx={{
          overflow: 'hidden',
          borderRadius: 2,
          backgroundColor: isDarkMode ? 'rgba(15, 23, 42, 0.95)' : '#ffffff',
          border: '1px solid',
          borderColor: isDarkMode ? 'rgba(59, 130, 246, 0.1)' : 'rgba(226, 232, 240, 0.8)',
          boxShadow: isDarkMode 
            ? '0 4px 20px rgba(0, 0, 0, 0.3)' 
            : '0 4px 20px rgba(0, 0, 0, 0.08)'
        }}
      >
        <Box sx={{ position: 'relative', height: { xs: 16*4, sm: 20*4 } }}>
          <Image
            src="/images/contador-header.jpg"
            alt="Servicios contables profesionales"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <Box 
            sx={{ 
              position: 'absolute', 
              inset: 0, 
              background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
              display: 'flex',
              alignItems: 'flex-end'
            }}
          >
            <Box sx={{ p: 3 }}>
              <Typography 
                variant="h4" 
                component="h1" 
                sx={{ 
                  fontWeight: 700, 
                  color: 'white', 
                  mb: 1 
                }}
              >
                Acerca de Mí
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.9)',
                }}
              >
                Servicios profesionales de contaduría pública
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ p: { xs: 3, sm: 4 } }}>
          <Grid container spacing={4} sx={{ mb: 4 }}>
            <Grid item xs={12} md={4}>
              <Box 
                sx={{ 
                  position: 'relative', 
                  width: '100%',
                  height: 16*4, 
                  borderRadius: 2,
                  overflow: 'hidden',
                  boxShadow: isDarkMode 
                    ? '0 4px 12px rgba(0, 0, 0, 0.3)' 
                    : '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}
              >
                <Image
                  src="/alejandrafoto.jpeg"
                  alt="Alejandra Bertón"
                  fill
                  style={{ 
                    objectFit: 'cover', 
                    objectPosition: '50% 30%' 
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography 
                variant="h5" 
                component="h2" 
                sx={{ 
                  fontWeight: 600, 
                  color: isDarkMode ? '#f8fafc' : theme.palette.text.primary,
                  mb: 2 
                }}
              >
                Alejandra Bertón
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: isDarkMode ? 'rgba(255, 255, 255, 0.8)' : theme.palette.text.secondary,
                  mb: 1.5
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: isDarkMode ? 'rgba(255, 255, 255, 0.8)' : theme.palette.text.secondary,
                  mb: 3
                }}
              >
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>

              <Divider 
                sx={{ 
                  my: 2,
                  borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
                }} 
              />
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 500,
                  color: isDarkMode ? '#f8fafc' : theme.palette.text.primary,
                  mb: 1.5 
                }}
              >
                Formación Académica
              </Typography>
              <Box 
                component="ul" 
                sx={{ 
                  listStyleType: 'disc', 
                  pl: 2.5, 
                  color: isDarkMode ? 'rgba(255, 255, 255, 0.8)' : theme.palette.text.secondary,
                  '& > li': { 
                    mb: 1 
                  } 
                }}
              >
                <li>Contadora Pública - Universidad Nacional de Colombia</li>
                <li>Especialización en Derecho Tributario - Universidad de los Andes</li>
                <li>Diplomado en NIIF - Pontificia Universidad Javeriana</li>
              </Box>
            </Grid>
          </Grid>

          <Divider 
            sx={{ 
              my: 3,
              borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
            }} 
          />
          <Typography 
            variant="h5" 
            component="h2" 
            sx={{ 
              fontWeight: 600, 
              color: isDarkMode ? '#f8fafc' : theme.palette.text.primary,
              mb: 2 
            }}
          >
            Experiencia Profesional
          </Typography>
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Paper 
              elevation={0}
              sx={{
                p: 2,
                backgroundColor: isDarkMode ? 'rgba(30, 41, 59, 0.6)' : 'rgba(249, 250, 251, 0.8)',
                borderRadius: 2
              }}
            >
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 500, 
                  color: isDarkMode ? '#f8fafc' : theme.palette.text.primary,
                  mb: 1 
                }}
              >
                Asesora Contable Independiente
              </Typography>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: isDarkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)',
                  mb: 1.5,
                  display: 'block'
                }}
              >
                2018 - Presente
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: isDarkMode ? 'rgba(255, 255, 255, 0.8)' : theme.palette.text.secondary
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </Typography>
            </Paper>
            
            <Paper 
              elevation={0}
              sx={{
                p: 2,
                backgroundColor: isDarkMode ? 'rgba(30, 41, 59, 0.6)' : 'rgba(249, 250, 251, 0.8)',
                borderRadius: 2
              }}
            >
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 500, 
                  color: isDarkMode ? '#f8fafc' : theme.palette.text.primary,
                  mb: 1 
                }}
              >
                Contadora Senior - Empresa ABC
              </Typography>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: isDarkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)',
                  mb: 1.5,
                  display: 'block'
                }}
              >
                2015 - 2018
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: isDarkMode ? 'rgba(255, 255, 255, 0.8)' : theme.palette.text.secondary
                }}
              >
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </Typography>
            </Paper>
            
            <Paper 
              elevation={0}
              sx={{
                p: 2,
                backgroundColor: isDarkMode ? 'rgba(30, 41, 59, 0.6)' : 'rgba(249, 250, 251, 0.8)',
                borderRadius: 2
              }}
            >
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 500, 
                  color: isDarkMode ? '#f8fafc' : theme.palette.text.primary,
                  mb: 1 
                }}
              >
                Asistente Contable - Firma XYZ
              </Typography>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: isDarkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)',
                  mb: 1.5,
                  display: 'block'
                }}
              >
                2012 - 2015
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: isDarkMode ? 'rgba(255, 255, 255, 0.8)' : theme.palette.text.secondary
                }}
              >
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
              </Typography>
            </Paper>
          </Box>
          
          <Divider 
            sx={{ 
              my: 3,
              borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
            }} 
          />
          <Typography 
            variant="h5" 
            component="h2" 
            sx={{ 
              fontWeight: 600, 
              color: isDarkMode ? '#f8fafc' : theme.palette.text.primary,
              mb: 2 
            }}
          >
            Habilidades Profesionales
          </Typography>
          
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Paper 
                elevation={0}
                sx={{
                  p: 2,
                  backgroundColor: isDarkMode ? 'rgba(30, 41, 59, 0.6)' : 'rgba(249, 250, 251, 0.8)',
                  borderRadius: 2,
                  height: '100%'
                }}
              >
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 500, 
                    color: isDarkMode ? '#f8fafc' : theme.palette.text.primary,
                    mb: 1 
                  }}
                >
                  Contabilidad General
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: isDarkMode ? 'rgba(255, 255, 255, 0.8)' : theme.palette.text.secondary
                  }}
                >
                  Preparación y análisis de estados financieros, cierres contables, conciliaciones bancarias.
                </Typography>
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Paper 
                elevation={0}
                sx={{
                  p: 2,
                  backgroundColor: isDarkMode ? 'rgba(30, 41, 59, 0.6)' : 'rgba(249, 250, 251, 0.8)',
                  borderRadius: 2,
                  height: '100%'
                }}
              >
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 500, 
                    color: isDarkMode ? '#f8fafc' : theme.palette.text.primary,
                    mb: 1 
                  }}
                >
                  Asesoría Tributaria
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: isDarkMode ? 'rgba(255, 255, 255, 0.8)' : theme.palette.text.secondary
                  }}
                >
                  Declaraciones de renta de personas naturales y jurídicas, IVA, retención en la fuente, ICA.
                </Typography>
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Paper 
                elevation={0}
                sx={{
                  p: 2,
                  backgroundColor: isDarkMode ? 'rgba(30, 41, 59, 0.6)' : 'rgba(249, 250, 251, 0.8)',
                  borderRadius: 2,
                  height: '100%'
                }}
              >
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 500, 
                    color: isDarkMode ? '#f8fafc' : theme.palette.text.primary,
                    mb: 1 
                  }}
                >
                  Nómina y Seguridad Social
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: isDarkMode ? 'rgba(255, 255, 255, 0.8)' : theme.palette.text.secondary
                  }}
                >
                  Liquidación de nómina, prestaciones sociales, aportes a seguridad social y parafiscales.
                </Typography>
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Paper 
                elevation={0}
                sx={{
                  p: 2,
                  backgroundColor: isDarkMode ? 'rgba(30, 41, 59, 0.6)' : 'rgba(249, 250, 251, 0.8)',
                  borderRadius: 2,
                  height: '100%'
                }}
              >
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 500, 
                    color: isDarkMode ? '#f8fafc' : theme.palette.text.primary,
                    mb: 1 
                  }}
                >
                  Software Contable
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: isDarkMode ? 'rgba(255, 255, 255, 0.8)' : theme.palette.text.secondary
                  }}
                >
                  Manejo avanzado de World Office, Siigo, Helisa, SAP y Excel.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}
