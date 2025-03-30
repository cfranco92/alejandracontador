"use client";

import { useState, useRef, useEffect } from "react";
import { TextField, Button, Paper, Typography, Box, Grid, Alert, IconButton, Container, useTheme, CircularProgress, Tooltip } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from '@emailjs/browser';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '@/lib/emailjs';

// Componentes de animación con Framer Motion
const MotionBox = motion(Box);
const MotionPaper = motion(Paper);
const MotionTypography = motion(Typography);
const MotionTextField = motion(TextField);
const MotionButton = motion(Button);
const MotionGrid = motion(Grid);

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
  const formRef = useRef<HTMLFormElement>(null);
  
  // Inicializar EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    to_email: "alejandraberton@gmail.com", // Correo destinatario que recibirá el formulario
    subject: "Nuevo mensaje desde sitio web", // Asunto del correo
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [activeField, setActiveField] = useState<string | null>(null);

  // Variantes de animación mejoradas
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  const slideUp = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 80, 
        damping: 12 
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

  const iconHover = {
    rest: { scale: 1, transition: { duration: 0.2 } },
    hover: { scale: 1.15, transition: { duration: 0.2 } }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFocus = (fieldName: string) => {
    setActiveField(fieldName);
  };

  const handleBlur = () => {
    setActiveField(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación
    if (!formData.name || !formData.email || !formData.message) {
      setError("Por favor complete todos los campos requeridos");
      return;
    }
    
    try {
      setIsSubmitting(true);
      setError("");
      
      // Envío del correo utilizando EmailJS
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID, 
        EMAILJS_TEMPLATE_ID, 
        formRef.current!, 
        EMAILJS_PUBLIC_KEY
      );
      
      console.log('EmailJS result:', result);
      
      if (result.text === 'OK') {
        setSubmitted(true);
        // Resetear el formulario
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          to_email: "alejandraberton@gmail.com",
          subject: "Nuevo mensaje desde sitio web",
        });
      } else {
        throw new Error('No se pudo enviar el mensaje');
      }
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      setError("Hubo un problema al enviar tu mensaje. Por favor intenta de nuevo más tarde.");
    } finally {
      setIsSubmitting(false);
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
          bgcolor: isDarkMode ? 'rgba(15, 23, 42, 0.95)' : '#ffffff',
          border: '1px solid',
          borderColor: isDarkMode ? 'rgba(59, 130, 246, 0.1)' : 'rgba(226, 232, 240, 0.8)',
          boxShadow: isDarkMode 
            ? '0 4px 20px rgba(0, 0, 0, 0.3)' 
            : '0 4px 20px rgba(0, 0, 0, 0.08)',
          transition: 'all 0.3s ease-in-out'
        }}
        whileHover="hover"
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
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Efecto de partículas o brillo */}
            <MotionBox
              animate={{ 
                backgroundPosition: ['0% 0%', '100% 100%'] 
              }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "reverse", 
                duration: 15
              }}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 50%), radial-gradient(circle at 70% 60%, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 50%)',
                backgroundSize: '120% 120%',
                zIndex: 0
              }}
            />
            
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
                    mb: 1,
                    textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
                    display: 'inline-block',
                    position: 'relative'
                  }}
                >
                  Información de 
                  <Box 
                    component={motion.span}
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                    sx={{ 
                      height: '2px', 
                      background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)',
                      position: 'absolute',
                      bottom: -5,
                      left: 0,
                      borderRadius: '2px',
                    }}
                  />
                </MotionTypography>

                <MotionTypography 
                  variant="h4" 
                  variants={slideUp}
                  sx={{ 
                    fontWeight: 'bold', 
                    mb: 3,
                    textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
                    bgGradient: 'linear-gradient(90deg, #fff 30%, rgba(255,255,255,0.8) 70%)',
                    backgroundClip: 'text',
                    textFillColor: 'transparent'
                  }}
                >
                  Contacto
                </MotionTypography>

                <MotionTypography 
                  variant="body1" 
                  variants={slideUp}
                  sx={{ 
                    mb: 4, 
                    opacity: 0.95,
                    textShadow: '1px 1px 2px rgba(0,0,0,0.4)',
                    fontWeight: 500,
                    fontSize: '1.05rem',
                    lineHeight: 1.6
                  }}
                >
                  Ponte en contacto conmigo para resolver todas tus dudas sobre servicios contables y tributarios.
                </MotionTypography>

                <MotionBox 
                  variants={staggerChildren}
                  sx={{ '& > *:not(:last-child)': { mb: 3 } }}
                >
                  <motion.div 
                    variants={slideUp}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 2,
                      p: 1.5,
                      borderRadius: 2,
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(5px)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)'
                      }
                    }}>
                      <motion.div 
                        whileHover={iconHover.hover}
                        initial={iconHover.rest}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Box sx={{ 
                          backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                          borderRadius: '50%', 
                          width: 42, 
                          height: 42, 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          transition: 'all 0.3s ease'
                        }}>
                          <PhoneIcon />
                        </Box>
                      </motion.div>
                      <Box>
                        <Typography variant="body2" sx={{ opacity: 0.9, fontSize: '0.875rem' }}>Teléfono</Typography>
                        <Typography variant="body1" sx={{ fontWeight: 600, fontSize: '1rem' }}>+57 305 300 4399</Typography>
                      </Box>
                    </Box>
                  </motion.div>
                  
                  <motion.div 
                    variants={slideUp}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 2,
                      p: 1.5,
                      borderRadius: 2,
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(5px)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)'
                      }
                    }}>
                      <motion.div 
                        whileHover={iconHover.hover}
                        initial={iconHover.rest}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Box sx={{ 
                          backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                          borderRadius: '50%', 
                          width: 42, 
                          height: 42, 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          transition: 'all 0.3s ease'
                        }}>
                          <EmailIcon />
                        </Box>
                      </motion.div>
                      <Box>
                        <Typography variant="body2" sx={{ opacity: 0.9, fontSize: '0.875rem' }}>Email</Typography>
                        <Typography variant="body1" sx={{ fontWeight: 600, fontSize: '1rem' }}>alejandraberton@gmail.com</Typography>
                      </Box>
                    </Box>
                  </motion.div>
                  
                  <motion.div 
                    variants={slideUp}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 2,
                      p: 1.5,
                      borderRadius: 2,
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(5px)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)'
                      }
                    }}>
                      <motion.div 
                        whileHover={iconHover.hover}
                        initial={iconHover.rest}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Box sx={{ 
                          backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                          borderRadius: '50%', 
                          width: 42, 
                          height: 42, 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          transition: 'all 0.3s ease'
                        }}>
                          <LocationOnIcon />
                        </Box>
                      </motion.div>
                      <Box>
                        <Typography variant="body2" sx={{ opacity: 0.9, fontSize: '0.875rem' }}>Dirección</Typography>
                        <Typography variant="body1" sx={{ fontWeight: 600, fontSize: '1rem' }}>Medellín, Colombia</Typography>
                      </Box>
                    </Box>
                  </motion.div>
                </MotionBox>
              </Box>

              <MotionBox 
                variants={slideUp}
                sx={{ 
                  mt: 5, 
                  display: 'flex', 
                  gap: 1.5,
                  justifyContent: 'center'
                }}
              >
                <Tooltip title="WhatsApp" arrow placement="top">
                  <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                    <IconButton 
                      color="inherit" 
                      onClick={() => window.open("https://wa.me/573053004399?text=Hola%20Alejandra%20me%20gustar%C3%ADa%20una%20asesor%C3%ADa%20contigo%20sobre...", "_blank")}
                      sx={{ 
                        bgcolor: 'rgba(255, 255, 255, 0.2)', 
                        transition: 'all 0.3s ease',
                        p: 1.5,
                        '&:hover': { 
                          bgcolor: 'rgba(255, 255, 255, 0.3)',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
                        } 
                      }}
                    >
                      <WhatsAppIcon fontSize="medium" />
                    </IconButton>
                  </motion.div>
                </Tooltip>
                
                <Tooltip title="LinkedIn" arrow placement="top">
                  <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                    <IconButton 
                      color="inherit"
                      onClick={() => window.open("https://www.linkedin.com/in/alejandra-berton/", "_blank")}
                      sx={{ 
                        bgcolor: 'rgba(255, 255, 255, 0.2)', 
                        transition: 'all 0.3s ease',
                        p: 1.5,
                        '&:hover': { 
                          bgcolor: 'rgba(255, 255, 255, 0.3)',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
                        } 
                      }}
                    >
                      <LinkedInIcon fontSize="medium" />
                    </IconButton>
                  </motion.div>
                </Tooltip>
                
                <Tooltip title="Email" arrow placement="top">
                  <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
                    <IconButton 
                      color="inherit"
                      onClick={() => window.location.href = "mailto:alejandraberton@gmail.com"}
                      sx={{ 
                        bgcolor: 'rgba(255, 255, 255, 0.2)', 
                        transition: 'all 0.3s ease',
                        p: 1.5,
                        '&:hover': { 
                          bgcolor: 'rgba(255, 255, 255, 0.3)',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
                        } 
                      }}
                    >
                      <EmailIcon fontSize="medium" />
                    </IconButton>
                  </motion.div>
                </Tooltip>
              </MotionBox>
            </MotionBox>
          </Grid>

          <Grid item xs={12} md={7}>
            <MotionBox 
              variants={slideUp}
              sx={{ 
                p: { xs: 4, sm: 5 },
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Elementos decorativos de fondo */}
              <Box
                component={motion.div}
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 50,
                  repeat: Infinity,
                  ease: "linear"
                }}
                sx={{
                  position: 'absolute',
                  top: '-30%',
                  right: '-20%',
                  width: '50%',
                  height: '50%',
                  borderRadius: '50%',
                  background: isDarkMode 
                    ? 'radial-gradient(circle, rgba(25, 118, 210, 0.05) 0%, rgba(25, 118, 210, 0.02) 70%, rgba(25, 118, 210, 0) 100%)'
                    : 'radial-gradient(circle, rgba(25, 118, 210, 0.04) 0%, rgba(25, 118, 210, 0.02) 70%, rgba(25, 118, 210, 0) 100%)',
                  zIndex: 0,
                  opacity: 0.7
                }}
              />
              
              <Box
                component={motion.div}
                animate={{
                  rotate: [360, 0],
                }}
                transition={{
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear"
                }}
                sx={{
                  position: 'absolute',
                  bottom: '-10%',
                  left: '-10%',
                  width: '40%',
                  height: '40%',
                  borderRadius: '50%',
                  background: isDarkMode 
                    ? 'radial-gradient(circle, rgba(25, 118, 210, 0.05) 0%, rgba(25, 118, 210, 0.02) 70%, rgba(25, 118, 210, 0) 100%)'
                    : 'radial-gradient(circle, rgba(25, 118, 210, 0.04) 0%, rgba(25, 118, 210, 0.02) 70%, rgba(25, 118, 210, 0) 100%)',
                  zIndex: 0,
                  opacity: 0.7
                }}
              />

              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <MotionBox
                  variants={slideUp}
                  sx={{
                    display: 'inline-block',
                    mb: 1,
                    px: 2,
                    py: 0.5,
                    borderRadius: 10,
                    backgroundColor: isDarkMode ? 'rgba(25, 118, 210, 0.1)' : 'rgba(25, 118, 210, 0.05)',
                    border: '1px solid',
                    borderColor: isDarkMode ? 'rgba(25, 118, 210, 0.2)' : 'rgba(25, 118, 210, 0.1)',
                  }}
                >
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: theme.palette.primary.main,
                      fontWeight: 600,
                      fontSize: '0.85rem',
                    }}
                  >
                    ¡Contáctame ahora!
                  </Typography>
                </MotionBox>

                <MotionTypography 
                  variant="h4" 
                  variants={slideUp}
                  sx={{ 
                    fontWeight: 'bold', 
                    mb: 2,
                    color: isDarkMode ? '#f8fafc' : theme.palette.text.primary,
                    position: 'relative',
                    display: 'inline-block'
                  }}
                >
                  Envíame un mensaje
                  <Box 
                    component={motion.span}
                    initial={{ width: 0 }}
                    animate={{ width: '40%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                    sx={{ 
                      height: '3px', 
                      background: 'linear-gradient(90deg, rgba(25,118,210,0) 0%, rgba(25,118,210,1) 50%, rgba(25,118,210,0) 100%)',
                      position: 'absolute',
                      bottom: -5,
                      left: 0,
                      borderRadius: '2px',
                    }}
                  />
                </MotionTypography>

                <MotionTypography 
                  variant="body1" 
                  variants={slideUp}
                  sx={{ 
                    mb: 4,
                    color: isDarkMode ? 'rgba(255, 255, 255, 0.85)' : theme.palette.text.secondary,
                    fontSize: '1.05rem',
                    maxWidth: '90%',
                    lineHeight: 1.6
                  }}
                >
                  Completa el formulario y me pondré en contacto contigo a la brevedad.
                </MotionTypography>

                <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Alert 
                      severity="success" 
                      sx={{ 
                        mb: 3, 
                        borderRadius: 2, 
                        boxShadow: isDarkMode 
                          ? '0 4px 12px rgba(0, 0, 0, 0.2)'
                          : '0 4px 12px rgba(0, 0, 0, 0.05)',
                        '& .MuiAlert-icon': {
                          alignItems: 'center'
                        }
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
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>¡Mensaje enviado con éxito!</Typography>
                        <Typography variant="body2">Tu mensaje ha sido enviado correctamente. ¡Pronto me pondré en contacto contigo!</Typography>
                      </Box>
                    </Alert>
                  </motion.div>
                )}
                </AnimatePresence>

                <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Alert 
                      severity="error" 
                      sx={{ 
                        mb: 3, 
                        borderRadius: 2,
                        boxShadow: isDarkMode 
                          ? '0 4px 12px rgba(0, 0, 0, 0.2)'
                          : '0 4px 12px rgba(0, 0, 0, 0.05)',
                        '& .MuiAlert-icon': {
                          alignItems: 'center'
                        }
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
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>Error</Typography>
                        <Typography variant="body2">{error}</Typography>
                      </Box>
                    </Alert>
                  </motion.div>
                )}
                </AnimatePresence>

                <form ref={formRef} onSubmit={handleSubmit}>
                  <MotionGrid container spacing={3} variants={staggerChildren}>
                    {/* Campos ocultos para EmailJS */}
                    <input type="hidden" name="to_email" value={formData.to_email} />
                    <input type="hidden" name="subject" value={formData.subject} />
                    
                    <MotionGrid item xs={12} variants={slideUp}>
                      <MotionTextField
                        required
                        fullWidth
                        label="Nombre"
                        name="from_name" // Nombre compatible con EmailJS
                        value={formData.name}
                        onChange={(e) => handleChange({ ...e, target: { ...e.target, name: 'name' } })}
                        variant="outlined"
                        onFocus={() => handleFocus('name')}
                        onBlur={handleBlur}
                        animate={activeField === 'name' ? { scale: 1.02 } : { scale: 1 }}
                        transition={{ duration: 0.2 }}
                        sx={{ 
                          '& .MuiOutlinedInput-root': {
                            borderRadius: '12px',
                            transition: 'all 0.3s ease',
                            backgroundColor: isDarkMode ? 'rgba(26, 32, 44, 0.4)' : 'rgba(249, 250, 251, 0.8)'
                          },
                          '& .MuiOutlinedInput-notchedOutline': {
                            transition: 'all 0.3s ease',
                            borderWidth: '1px'
                          },
                          '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: theme.palette.primary.main
                          },
                          '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderWidth: '2px'
                          },
                          '& .MuiInputLabel-root': {
                            transition: 'all 0.3s ease'
                          }
                        }}
                        InputProps={{
                          sx: {
                            '&.Mui-focused': {
                              boxShadow: '0 0 0 3px rgba(25, 118, 210, 0.2)'
                            }
                          }
                        }}
                      />
                    </MotionGrid>
                    <MotionGrid item xs={12} sm={6} variants={slideUp}>
                      <MotionTextField
                        required
                        fullWidth
                        label="Email"
                        name="reply_to" // Email compatible con EmailJS
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange({ ...e, target: { ...e.target, name: 'email' } })}
                        variant="outlined"
                        onFocus={() => handleFocus('email')}
                        onBlur={handleBlur}
                        animate={activeField === 'email' ? { scale: 1.02 } : { scale: 1 }}
                        transition={{ duration: 0.2 }}
                        sx={{ 
                          '& .MuiOutlinedInput-root': {
                            borderRadius: '12px',
                            transition: 'all 0.3s ease',
                            backgroundColor: isDarkMode ? 'rgba(26, 32, 44, 0.4)' : 'rgba(249, 250, 251, 0.8)'
                          },
                          '& .MuiOutlinedInput-notchedOutline': {
                            transition: 'all 0.3s ease',
                            borderWidth: '1px'
                          },
                          '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: theme.palette.primary.main
                          },
                          '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderWidth: '2px'
                          }
                        }}
                        InputProps={{
                          sx: {
                            '&.Mui-focused': {
                              boxShadow: '0 0 0 3px rgba(25, 118, 210, 0.2)'
                            }
                          }
                        }}
                      />
                    </MotionGrid>
                    <MotionGrid item xs={12} sm={6} variants={slideUp}>
                      <MotionTextField
                        fullWidth
                        label="Teléfono"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        variant="outlined"
                        onFocus={() => handleFocus('phone')}
                        onBlur={handleBlur}
                        animate={activeField === 'phone' ? { scale: 1.02 } : { scale: 1 }}
                        transition={{ duration: 0.2 }}
                        sx={{ 
                          '& .MuiOutlinedInput-root': {
                            borderRadius: '12px',
                            transition: 'all 0.3s ease',
                            backgroundColor: isDarkMode ? 'rgba(26, 32, 44, 0.4)' : 'rgba(249, 250, 251, 0.8)'
                          },
                          '& .MuiOutlinedInput-notchedOutline': {
                            transition: 'all 0.3s ease',
                            borderWidth: '1px'
                          },
                          '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: theme.palette.primary.main
                          },
                          '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderWidth: '2px'
                          }
                        }}
                        InputProps={{
                          sx: {
                            '&.Mui-focused': {
                              boxShadow: '0 0 0 3px rgba(25, 118, 210, 0.2)'
                            }
                          }
                        }}
                      />
                    </MotionGrid>
                    <MotionGrid item xs={12} variants={slideUp}>
                      <MotionTextField
                        required
                        fullWidth
                        label="Mensaje"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        multiline
                        rows={4}
                        variant="outlined"
                        onFocus={() => handleFocus('message')}
                        onBlur={handleBlur}
                        animate={activeField === 'message' ? { scale: 1.02 } : { scale: 1 }}
                        transition={{ duration: 0.2 }}
                        sx={{ 
                          '& .MuiOutlinedInput-root': {
                            borderRadius: '12px',
                            transition: 'all 0.3s ease',
                            backgroundColor: isDarkMode ? 'rgba(26, 32, 44, 0.4)' : 'rgba(249, 250, 251, 0.8)'
                          },
                          '& .MuiOutlinedInput-notchedOutline': {
                            transition: 'all 0.3s ease',
                            borderWidth: '1px'
                          },
                          '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: theme.palette.primary.main
                          },
                          '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderWidth: '2px'
                          }
                        }}
                        InputProps={{
                          sx: {
                            '&.Mui-focused': {
                              boxShadow: '0 0 0 3px rgba(25, 118, 210, 0.2)'
                            }
                          }
                        }}
                      />
                    </MotionGrid>
                    <MotionGrid item xs={12} variants={slideUp}>
                      <MotionButton 
                        type="submit" 
                        variant="contained" 
                        color="primary" 
                        size="large"
                        endIcon={isSubmitting ? null : <SendIcon />}
                        disabled={isSubmitting}
                        whileHover={!isSubmitting ? { scale: 1.03, y: -3 } : {}}
                        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                        sx={{ 
                          width: { xs: '100%', sm: 'auto' },
                          py: 1.5,
                          px: 4,
                          borderRadius: '12px',
                          fontWeight: 600,
                          transition: 'all 0.3s ease',
                          position: 'relative',
                          overflow: 'hidden',
                          backgroundImage: 'linear-gradient(135deg, #1976d2, #42a5f5)',
                          '&:before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: '-100%',
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)',
                            transition: 'all 0.8s ease'
                          },
                          '&:hover': {
                            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                            backgroundPosition: 'right center',
                            '&:before': {
                              left: '100%'
                            }
                          }
                        }}
                      >
                        {isSubmitting ? (
                          <CircularProgress size={24} color="inherit" />
                        ) : (
                          'Enviar Mensaje'
                        )}
                      </MotionButton>
                    </MotionGrid>
                  </MotionGrid>
                </form>
              </Box>
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
            color: isDarkMode ? '#f8fafc' : theme.palette.text.primary,
            position: 'relative',
            display: 'inline-block',
            left: '50%',
            transform: 'translateX(-50%)'
          }}
        >
          Ubicación
          <Box 
            component={motion.span}
            initial={{ width: 0 }}
            animate={{ width: '50%' }}
            transition={{ duration: 1, delay: 0.5 }}
            sx={{ 
              height: '3px', 
              background: 'linear-gradient(90deg, rgba(25,118,210,0) 0%, rgba(25,118,210,1) 50%, rgba(25,118,210,0) 100%)',
              position: 'absolute',
              bottom: -8,
              left: '25%',
              borderRadius: '2px',
            }}
          />
        </MotionTypography>

        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: 4
          }}
        >
          <Box
            sx={{
              maxWidth: '700px',
              textAlign: 'center',
              px: 2
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)',
                fontSize: '1.05rem',
                lineHeight: 1.6
              }}
            >
              Estoy ubicada en Medellín, Colombia, brindando servicios contables y tributarios en toda el área metropolitana. Disponible para atender tus necesidades de manera virtual o presencial.
            </Typography>
          </Box>
        </MotionBox>

        <MotionPaper 
          variants={slideUp}
          elevation={isDarkMode ? 3 : 2}
          sx={{ 
            borderRadius: 3, 
            overflow: 'hidden',
            border: isDarkMode ? '1px solid rgba(59, 130, 246, 0.1)' : 'none',
            boxShadow: isDarkMode 
              ? '0 4px 20px rgba(0, 0, 0, 0.3)' 
              : '0 4px 20px rgba(0, 0, 0, 0.08)',
            transition: 'transform 0.3s ease',
            position: 'relative'
          }}
          initial="rest"
          whileHover="hover"
        >
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            sx={{
              position: 'absolute',
              top: 16,
              left: 16,
              zIndex: 1000,
              backgroundColor: isDarkMode ? 'rgba(15, 23, 42, 0.85)' : 'rgba(255, 255, 255, 0.9)',
              borderRadius: 2,
              p: 2,
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              backdropFilter: 'blur(8px)',
              border: '1px solid',
              borderColor: isDarkMode ? 'rgba(59, 130, 246, 0.2)' : 'rgba(226, 232, 240, 0.8)',
              maxWidth: { xs: 'calc(100% - 32px)', sm: '300px' },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
              <Box 
                sx={{ 
                  backgroundColor: theme.palette.primary.main,
                  color: 'white',
                  borderRadius: '50%', 
                  width: 38, 
                  height: 38, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  mr: 2
                }}
              >
                <LocationOnIcon />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1.1rem' }}>
                Mi ubicación
              </Typography>
            </Box>
            <Typography 
              variant="body2" 
              sx={{ 
                mb: 1, 
                color: isDarkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)',
                lineHeight: 1.5
              }}
            >
              Medellín, Colombia - Área de El Poblado
            </Typography>
            <Box 
              component={motion.div}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                variant="outlined" 
                size="small" 
                sx={{ 
                  borderRadius: '8px',
                  textTransform: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  py: 0.5
                }}
                onClick={() => window.open("https://maps.google.com/?q=6.2086,-75.5695", "_blank")}
              >
                Ver en Google Maps
              </Button>
            </Box>
          </Box>

          <Box sx={{ position: 'relative', height: 450, width: '100%' }}>
            <Map 
              center={[6.2086, -75.5695]} // Coordenadas de El Poblado, Medellín, Colombia
              popupText="Alejandra Bertón - Medellín, Colombia"
              zoom={14} // Zoom ajustado para mostrar el área de El Poblado
            />
          </Box>
        </MotionPaper>
      </MotionBox>
    </Container>
  );
}
