"use client";

import { useState } from "react";
import { TextField, Button, Paper, Typography, Box, Grid, Alert, IconButton, Container, useTheme } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Componentes de animación con Framer Motion
const MotionBox = motion(Box);
const MotionPaper = motion(Paper);
const MotionTypography = motion(Typography);

// Importamos el mapa de forma dinámica para evitar problemas de SSR
const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
  loading: () => (
    <Box 
      sx={{ 
        height: "24rem", 
        width: "100%", 
        bgcolor: theme => theme.palette.mode === 'dark' ? 'rgba(17, 25, 40, 0.9)' : 'rgb(226, 232, 240)', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 2,
      }}
    >
      <Typography 
        variant="body1" 
        sx={{ 
          color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.6)', 
          textAlign: 'center', 
          px: 2 
        }}
      >
        Cargando mapa...
      </Typography>
    </Box>
  ),
});

export default function Contact() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Variantes de animación
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
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

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario a un servicio como Formspree o similar
    // En este ejemplo solo simulamos el envío
    
    if (!formData.name || !formData.email || !formData.message) {
      setError("Por favor complete todos los campos requeridos");
      return;
    }
    
    // Simulación de envío exitoso
    setSubmitted(true);
    setError("");
    
    // Resetear el formulario después de un tiempo
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 300);
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
          bgcolor: isDarkMode ? 'rgba(15, 23, 42, 0.95)' : '#ffffff',
          border: '1px solid',
          borderColor: isDarkMode ? 'rgba(59, 130, 246, 0.1)' : 'rgba(226, 232, 240, 0.8)',
          boxShadow: isDarkMode 
            ? '0 4px 20px rgba(0, 0, 0, 0.3)' 
            : '0 4px 20px rgba(0, 0, 0, 0.08)'
        }}
      >
        <Grid container>
          <Grid 
            item 
            xs={12} 
            md={5} 
            sx={{ 
              bgcolor: 'primary.main', 
              color: 'white',
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url("/images/contador-header.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative'
            }}
          >
            <MotionBox 
              variants={slideUp}
              sx={{ 
                p: { xs: 4, sm: 5 }, 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                position: 'relative',
                zIndex: 1
              }}
            >
              <Box>
                <MotionTypography 
                  variant="h4" 
                  variants={slideUp}
                  sx={{ 
                    fontWeight: 'bold', 
                    mb: 3,
                    textShadow: '1px 1px 3px rgba(0,0,0,0.5)'
                  }}
                >
                  Información de Contacto
                </MotionTypography>
                <MotionTypography 
                  variant="body1" 
                  variants={slideUp}
                  sx={{ 
                    mb: 4, 
                    opacity: 0.95,
                    textShadow: '1px 1px 2px rgba(0,0,0,0.4)',
                    fontWeight: 500
                  }}
                >
                  Ponte en contacto conmigo para resolver todas tus dudas sobre servicios contables y tributarios.
                </MotionTypography>

                <MotionBox 
                  variants={staggerChildren}
                  sx={{ '& > *:not(:last-child)': { mb: 3 } }}
                >
                  <motion.div variants={slideUp}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                        borderRadius: '50%', 
                        width: 40, 
                        height: 40, 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center' 
                      }}>
                        <PhoneIcon />
                      </Box>
                      <Box>
                        <Typography variant="body2" sx={{ opacity: 0.9 }}>Teléfono</Typography>
                        <Typography variant="body1" sx={{ fontWeight: 600 }}>+57 305 300 4399</Typography>
                      </Box>
                    </Box>
                  </motion.div>
                  
                  <motion.div variants={slideUp}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                        borderRadius: '50%', 
                        width: 40, 
                        height: 40, 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center' 
                      }}>
                        <EmailIcon />
                      </Box>
                      <Box>
                        <Typography variant="body2" sx={{ opacity: 0.9 }}>Email</Typography>
                        <Typography variant="body1" sx={{ fontWeight: 600 }}>alejandraberton@gmail.com</Typography>
                      </Box>
                    </Box>
                  </motion.div>
                  
                  <motion.div variants={slideUp}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                        borderRadius: '50%', 
                        width: 40, 
                        height: 40, 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center' 
                      }}>
                        <LocationOnIcon />
                      </Box>
                      <Box>
                        <Typography variant="body2" sx={{ opacity: 0.9 }}>Dirección</Typography>
                        <Typography variant="body1" sx={{ fontWeight: 600 }}>Medellín, Colombia</Typography>
                      </Box>
                    </Box>
                  </motion.div>
                </MotionBox>
              </Box>

              <MotionBox 
                variants={slideUp}
                sx={{ mt: 5, display: 'flex', gap: 2 }}
              >
                <IconButton 
                  color="inherit" 
                  onClick={() => window.open("https://wa.me/573053004399?text=Hola%20Alejandra%20me%20gustar%C3%ADa%20una%20asesor%C3%ADa%20contigo%20sobre...", "_blank")}
                  sx={{ 
                    bgcolor: 'rgba(255, 255, 255, 0.2)', 
                    transition: 'all 0.3s ease',
                    '&:hover': { 
                      bgcolor: 'rgba(255, 255, 255, 0.3)',
                      transform: 'scale(1.05)',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
                    } 
                  }}
                >
                  <WhatsAppIcon />
                </IconButton>
                <IconButton 
                  color="inherit"
                  onClick={() => window.open("https://www.linkedin.com/in/alejandra-berton/", "_blank")}
                  sx={{ 
                    bgcolor: 'rgba(255, 255, 255, 0.2)', 
                    transition: 'all 0.3s ease',
                    '&:hover': { 
                      bgcolor: 'rgba(255, 255, 255, 0.3)',
                      transform: 'scale(1.05)',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
                    } 
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton 
                  color="inherit"
                  onClick={() => window.location.href = "mailto:alejandraberton@gmail.com"}
                  sx={{ 
                    bgcolor: 'rgba(255, 255, 255, 0.2)', 
                    transition: 'all 0.3s ease',
                    '&:hover': { 
                      bgcolor: 'rgba(255, 255, 255, 0.3)',
                      transform: 'scale(1.05)',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
                    } 
                  }}
                >
                  <EmailIcon />
                </IconButton>
              </MotionBox>
            </MotionBox>
          </Grid>

          <Grid item xs={12} md={7}>
            <MotionBox 
              variants={slideUp}
              sx={{ p: { xs: 4, sm: 5 } }}
            >
              <MotionTypography 
                variant="h4" 
                variants={slideUp}
                sx={{ 
                  fontWeight: 'bold', 
                  mb: 2,
                  color: isDarkMode ? '#f8fafc' : theme.palette.text.primary
                }}
              >
                Envíame un mensaje
              </MotionTypography>
              <MotionTypography 
                variant="body1" 
                variants={slideUp}
                sx={{ 
                  mb: 4,
                  color: isDarkMode ? 'rgba(255, 255, 255, 0.85)' : theme.palette.text.secondary,
                  fontSize: '1.05rem'
                }}
              >
                Completa el formulario y me pondré en contacto contigo a la brevedad.
              </MotionTypography>

              {submitted && (
                <Alert 
                  severity="success" 
                  sx={{ 
                    mb: 3, 
                    borderRadius: 2, 
                    boxShadow: isDarkMode 
                      ? '0 4px 12px rgba(0, 0, 0, 0.2)'
                      : '0 4px 12px rgba(0, 0, 0, 0.05)'
                  }}
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => setSubmitted(false)}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                >
                  Tu mensaje ha sido enviado correctamente. ¡Pronto me pondré en contacto contigo!
                </Alert>
              )}

              {error && (
                <Alert 
                  severity="error" 
                  sx={{ 
                    mb: 3, 
                    borderRadius: 2,
                    boxShadow: isDarkMode 
                      ? '0 4px 12px rgba(0, 0, 0, 0.2)'
                      : '0 4px 12px rgba(0, 0, 0, 0.05)'
                  }}
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => setError("")}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                >
                  {error}
                </Alert>
              )}

              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Nombre"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      variant="outlined"
                      sx={{ 
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '8px',
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      variant="outlined"
                      sx={{ 
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '8px',
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Teléfono"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      variant="outlined"
                      sx={{ 
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '8px',
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Mensaje"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      multiline
                      rows={4}
                      variant="outlined"
                      sx={{ 
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '8px',
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button 
                      type="submit" 
                      variant="contained" 
                      color="primary" 
                      size="large"
                      endIcon={<SendIcon />}
                      sx={{ 
                        width: { xs: '100%', sm: 'auto' },
                        py: 1.2,
                        px: 3,
                        borderRadius: '8px',
                        fontWeight: 600,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)'
                        }
                      }}
                    >
                      Enviar Mensaje
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </MotionBox>
          </Grid>
        </Grid>
      </MotionPaper>
      
      <MotionBox 
        variants={fadeIn}
        sx={{ mt: 8 }}
      >
        <MotionTypography 
          variant="h5" 
          variants={slideUp}
          sx={{ 
            fontWeight: 'bold', 
            mb: 3, 
            textAlign: 'center',
            color: isDarkMode ? '#f8fafc' : theme.palette.text.primary
          }}
        >
          Ubicación
        </MotionTypography>
        <MotionPaper 
          variants={slideUp}
          elevation={isDarkMode ? 3 : 2}
          sx={{ 
            borderRadius: 3, 
            overflow: 'hidden',
            border: isDarkMode ? '1px solid rgba(59, 130, 246, 0.1)' : 'none',
            boxShadow: isDarkMode 
              ? '0 4px 20px rgba(0, 0, 0, 0.3)' 
              : '0 4px 20px rgba(0, 0, 0, 0.08)'
          }}
        >
          <Box sx={{ position: 'relative', height: 450, width: '100%' }}>
            <Map 
              center={[6.2086, -75.5695]} // Coordenadas de El Poblado, Medellín, Colombia
              popupText="Oficina de Alejandra Bertón - El Poblado, Medellín, Colombia"
              zoom={11} // Zoom reducido para mostrar más área del Valle de Aburrá
            />
          </Box>
        </MotionPaper>
      </MotionBox>
    </Container>
  );
}
