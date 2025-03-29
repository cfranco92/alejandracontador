"use client";

import { useState } from "react";
import { TextField, Button, Paper, Typography, Box, Grid, Alert, IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import dynamic from "next/dynamic";

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
        justifyContent: 'center' 
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

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
    <Box sx={{ maxWidth: '6xl', mx: 'auto', py: 12, px: { xs: 2, sm: 3, lg: 4 } }}>
      <Paper 
        elevation={0} 
        sx={{ 
          overflow: 'hidden', 
          borderRadius: 2,
          bgcolor: theme => theme.palette.mode === 'dark' ? 'rgba(17, 25, 40, 0.9)' : '#ffffff',
          border: '1px solid',
          borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(226, 232, 240, 0.8)'
        }}
      >
        <Grid container>
          <Grid item xs={12} md={5} sx={{ bgcolor: 'primary.main', color: 'white' }}>
            <Box sx={{ p: { xs: 3, sm: 5 }, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Box>
                <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 3 }}>
                  Información de Contacto
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
                  Ponte en contacto conmigo para resolver todas tus dudas sobre servicios contables y tributarios.
                </Typography>

                <Box sx={{ '& > *:not(:last-child)': { mb: 2 } }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <PhoneIcon />
                    <Box>
                      <Typography variant="body2" sx={{ opacity: 0.9 }}>Teléfono</Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>+57 305 300 4399</Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <EmailIcon />
                    <Box>
                      <Typography variant="body2" sx={{ opacity: 0.9 }}>Email</Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>alejandraberton@gmail.com</Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <LocationOnIcon />
                    <Box>
                      <Typography variant="body2" sx={{ opacity: 0.9 }}>Dirección</Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>Medellín, Colombia</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
                <IconButton 
                  color="inherit" 
                  onClick={() => window.open("https://wa.me/573053004399?text=Hola%20Alejandra%20me%20gustar%C3%ADa%20una%20asesor%C3%ADa%20contigo%20sobre...", "_blank")}
                  sx={{ 
                    bgcolor: 'rgba(255, 255, 255, 0.2)', 
                    '&:hover': { 
                      bgcolor: 'rgba(255, 255, 255, 0.3)',
                      transform: 'scale(1.05)'
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
                    '&:hover': { 
                      bgcolor: 'rgba(255, 255, 255, 0.3)',
                      transform: 'scale(1.05)'
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
                    '&:hover': { 
                      bgcolor: 'rgba(255, 255, 255, 0.3)',
                      transform: 'scale(1.05)'
                    } 
                  }}
                >
                  <EmailIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
            <Box sx={{ p: { xs: 3, sm: 5 } }}>
              <Typography 
                variant="h4" 
                component="h2" 
                sx={{ 
                  fontWeight: 'bold', 
                  mb: 1,
                  color: theme => theme.palette.mode === 'dark' ? '#f8fafc' : 'text.primary'
                }}
              >
                Envíame un mensaje
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 3,
                  color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'text.secondary'
                }}
              >
                Completa el formulario y me pondré en contacto contigo a la brevedad.
              </Typography>

              {submitted && (
                <Alert 
                  severity="success" 
                  sx={{ mb: 2 }}
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
                  sx={{ mb: 2 }}
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
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button 
                      type="submit" 
                      variant="contained" 
                      color="primary" 
                      size="large"
                      endIcon={<SendIcon />}
                      sx={{ width: { xs: '100%', sm: 'auto' } }}
                    >
                      Enviar Mensaje
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      
      <Box sx={{ mt: 8 }}>
        <Typography 
          variant="h5" 
          component="h3" 
          sx={{ 
            fontWeight: 'bold', 
            mb: 3, 
            textAlign: 'center',
            color: theme => theme.palette.mode === 'dark' ? '#f8fafc' : 'text.primary'
          }}
        >
          Ubicación
        </Typography>
        <Paper 
          elevation={3} 
          sx={{ 
            borderRadius: 2, 
            overflow: 'hidden',
            border: theme => theme.palette.mode === 'dark' ? '1px solid rgba(59, 130, 246, 0.1)' : 'none'
          }}
        >
          <Box sx={{ position: 'relative', height: 450, width: '100%' }}>
            <Map 
              center={[6.2086, -75.5695]} // Coordenadas de El Poblado, Medellín, Colombia
              popupText="Oficina de Alejandra Bertón - El Poblado, Medellín, Colombia"
              zoom={11} // Zoom reducido para mostrar más área del Valle de Aburrá
            />
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
