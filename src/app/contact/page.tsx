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
    <div className="h-96 w-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
      <Typography variant="body1" className="text-gray-600 dark:text-gray-400 text-center px-4">
        Cargando mapa...
      </Typography>
    </div>
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
    <Box className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Paper elevation={0} className="overflow-hidden rounded-lg bg-white dark:bg-gray-900">
        <Grid container>
          <Grid item xs={12} md={5} className="bg-blue-600 text-white">
            <Box className="p-6 sm:p-10 h-full flex flex-col justify-between">
              <Box>
                <Typography variant="h4" component="h1" className="font-bold mb-6">
                  Información de Contacto
                </Typography>
                <Typography variant="body1" className="mb-8 opacity-90">
                  Ponte en contacto conmigo para resolver todas tus dudas sobre servicios contables y tributarios.
                </Typography>

                <Box className="space-y-4">
                  <Box className="flex items-center gap-4">
                    <PhoneIcon />
                    <Box>
                      <Typography variant="body2" className="opacity-90">Teléfono</Typography>
                      <Typography variant="body1" className="font-medium">+57 305 300 4399</Typography>
                    </Box>
                  </Box>
                  
                  <Box className="flex items-center gap-4">
                    <EmailIcon />
                    <Box>
                      <Typography variant="body2" className="opacity-90">Email</Typography>
                      <Typography variant="body1" className="font-medium">alejandraberton@gmail.com</Typography>
                    </Box>
                  </Box>
                  
                  <Box className="flex items-center gap-4">
                    <LocationOnIcon />
                    <Box>
                      <Typography variant="body2" className="opacity-90">Dirección</Typography>
                      <Typography variant="body1" className="font-medium">Bogotá, Colombia</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box className="mt-8 flex gap-4">
                <IconButton 
                  color="inherit" 
                  onClick={() => window.open("https://wa.me/573053004399?text=Hola%20Alejandra%20me%20gustar%C3%ADa%20una%20asesor%C3%ADa%20contigo%20sobre...", "_blank")}
                  className="bg-white/20 hover:bg-white/30"
                >
                  <WhatsAppIcon />
                </IconButton>
                <IconButton 
                  color="inherit"
                  onClick={() => window.open("https://www.linkedin.com/in/alejandra-berton/", "_blank")}
                  className="bg-white/20 hover:bg-white/30"
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton 
                  color="inherit"
                  onClick={() => window.location.href = "mailto:alejandraberton@gmail.com"}
                  className="bg-white/20 hover:bg-white/30"
                >
                  <EmailIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
            <Box className="p-6 sm:p-10">
              <Typography variant="h4" component="h2" className="font-bold mb-2 text-gray-800 dark:text-white">
                Envíame un mensaje
              </Typography>
              <Typography variant="body1" className="mb-6 text-gray-600 dark:text-gray-300">
                Completa el formulario y me pondré en contacto contigo a la brevedad.
              </Typography>

              {submitted && (
                <Alert 
                  severity="success" 
                  className="mb-4"
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
                  className="mb-4"
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
                      className="w-full sm:w-auto"
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
      
      <Box className="mt-16">
        <Typography variant="h5" component="h3" className="font-bold mb-6 text-center text-gray-800 dark:text-white">
          Ubicación
        </Typography>
        <Paper elevation={3} className="rounded-lg overflow-hidden">
          <div className="relative h-96 w-full">
            <Map 
              center={[4.6486, -74.0589]} // Coordenadas de Bogotá, Colombia
              popupText="Oficina de Alejandra Bertón - Bogotá, Colombia"
              zoom={14}
            />
          </div>
        </Paper>
      </Box>
    </Box>
  );
}
