"use client";

import { Box, IconButton, Container, Typography, Divider, useTheme, useMediaQuery } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

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
        backgroundColor: isDarkMode ? theme.palette.background.paper : theme.palette.background.paper,
        boxShadow: isDarkMode 
          ? '0 -1px 6px rgba(0, 0, 0, 0.3)' 
          : '0 -1px 6px rgba(0, 0, 0, 0.1)',
        borderTop: '1px solid',
        borderColor: isDarkMode ? 'rgba(217, 176, 156, 0.2)' : theme.palette.secondary.light,
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw'
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
                color: isDarkMode ? theme.palette.primary.main : theme.palette.primary.main,
                mr: { xs: 0, sm: 1 },
                textAlign: { xs: 'center', sm: 'left' }
              }}
            >
              Alejandra Bertón
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: isDarkMode ? theme.palette.text.secondary : theme.palette.text.secondary,
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
                backgroundColor: isDarkMode ? theme.palette.secondary.main : theme.palette.secondary.main,
                color: isDarkMode ? theme.palette.primary.contrastText : theme.palette.primary.contrastText,
                '&:hover': {
                  backgroundColor: isDarkMode ? theme.palette.secondary.dark : theme.palette.secondary.dark,
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
              backgroundColor: isDarkMode ? 'rgba(217, 176, 156, 0.2)' : 'rgba(217, 176, 156, 0.3)'
            }} 
          />
          
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' }, 
            alignItems: 'center', 
            justifyContent: 'center',
            color: isDarkMode ? theme.palette.text.secondary : theme.palette.text.secondary,
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
          </Box>
        </Box>
      </Container>
    </Box>
  );
} 