"use client";

import { Box, IconButton, Container, Typography, Divider, useTheme, useMediaQuery } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Image from "next/image";

export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Box 
      component="footer" 
      sx={{
        marginTop: { xs: 4, md: 8 },
        py: 3,
        backgroundColor: isDarkMode ? 'rgba(15, 23, 42, 0.95)' : '#ffffff',
        boxShadow: isDarkMode 
          ? '0 -1px 6px rgba(0, 0, 0, 0.3)' 
          : '0 -1px 6px rgba(0, 0, 0, 0.1)',
        borderTop: '1px solid',
        borderColor: isDarkMode ? 'rgba(59, 130, 246, 0.1)' : 'rgba(226, 232, 240, 0.8)'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box sx={{ 
            mb: 2, 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' }, 
            alignItems: 'center' 
          }}>
            <Typography 
              variant={isMobile ? "subtitle1" : "h6"} 
              sx={{ 
                fontWeight: 700,
                color: isDarkMode ? '#f8fafc' : theme.palette.text.primary,
                mr: { xs: 0, sm: 1 },
                textAlign: { xs: 'center', sm: 'left' }
              }}
            >
              Alejandra Bertón
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: isDarkMode ? 'rgba(255, 255, 255, 0.8)' : theme.palette.text.secondary,
                textAlign: { xs: 'center', sm: 'left' }
              }}
            >
              {isMobile ? "Contadora Pública" : "· Contadora Pública"}
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <IconButton
              size={isMobile ? "medium" : "large"}
              sx={{
                backgroundColor: '#25D366',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#20c35e',
                  transform: 'scale(1.1)'
                },
                transition: 'all 0.3s'
              }}
              aria-label="WhatsApp"
              onClick={() => window.open("https://wa.me/573053004399?text=Hola%20Alejandra%20me%20gustar%C3%ADa%20una%20asesor%C3%ADa%20contigo%20sobre...", "_blank")}
            >
              <WhatsAppIcon fontSize={isMobile ? "small" : "medium"} />
            </IconButton>
            
            <IconButton
              size={isMobile ? "medium" : "large"}
              sx={{
                backgroundColor: '#0A66C2',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#0958a8',
                  transform: 'scale(1.1)'
                },
                transition: 'all 0.3s'
              }}
              aria-label="LinkedIn"
              onClick={() => window.open("https://www.linkedin.com/in/alejandra-berton/", "_blank")}
            >
              <LinkedInIcon fontSize={isMobile ? "small" : "medium"} />
            </IconButton>
            
            <IconButton
              size={isMobile ? "medium" : "large"}
              sx={{
                backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.8)',
                color: isDarkMode ? '#f8fafc' : 'white',
                '&:hover': {
                  backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.7)',
                  transform: 'scale(1.1)'
                },
                transition: 'all 0.3s'
              }}
              aria-label="Email"
              onClick={() => window.location.href = "mailto:alejandraberton@gmail.com?subject=Consulta profesional&body=Hola Alejandra,%0A%0AMe gustaría una asesoría contable sobre..."}
            >
              <EmailIcon fontSize={isMobile ? "small" : "medium"} />
            </IconButton>
          </Box>
          
          <Divider 
            sx={{ 
              width: '100%', 
              mb: 2,
              backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
            }} 
          />
          
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' }, 
            alignItems: 'center', 
            gap: 1,
            color: isDarkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.5)',
            textAlign: 'center'
          }}>
            <Typography 
              variant="body2" 
              sx={{ 
                fontSize: { xs: '0.75rem', sm: '0.875rem' },
                color: 'inherit'
              }}
            >
              © {new Date().getFullYear()} Alejandra Bertón. Todos los derechos reservados.
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 0.5,
              mt: { xs: 1, sm: 0 },
              ml: { xs: 0, sm: 1 }
            }}>
              <Typography 
                variant="body2" 
                sx={{ 
                  fontSize: '0.75rem',
                  color: 'inherit'
                }}
              >
                Desarrollado con
              </Typography>
              <Box sx={{
                filter: isDarkMode ? 'invert(1)' : 'none',
                opacity: 0.9,
                transition: 'opacity 0.2s',
                '&:hover': {
                  opacity: 1
                }
              }}>
                <Image
                  src="/next.svg"
                  alt="Next.js logo"
                  width={40}
                  height={20}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
} 