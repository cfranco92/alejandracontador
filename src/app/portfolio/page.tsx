"use client";

import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardHeader, 
  Avatar, 
  Tabs, 
  Tab, 
  Divider,
  Button,
  useTheme,
  Paper,
  Container
} from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";
import BusinessIcon from "@mui/icons-material/Business";
import PersonIcon from "@mui/icons-material/Person";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import BalanceIcon from "@mui/icons-material/Balance";

const MotionContainer = motion(Container);
const MotionGrid = motion(Grid);

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`portfolio-tabpanel-${index}`}
      aria-labelledby={`portfolio-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function Portfolio() {
  const [tabValue, setTabValue] = useState(0);
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.02,
      boxShadow: isDarkMode 
        ? '0 8px 25px rgba(0, 0, 0, 0.4)' 
        : '0 8px 25px rgba(0, 0, 0, 0.12)',
      borderColor: theme.palette.secondary.main
    }
  };

  return (
    <MotionContainer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      maxWidth="lg" 
      sx={{ 
        py: 6, 
        px: { xs: 2, sm: 3, lg: 4 } 
      }}
    >
      <Paper
        elevation={isDarkMode ? 0 : 0}
        sx={{
          overflow: "hidden",
          borderRadius: 3,
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        <Box sx={{ p: { xs: 3, sm: 4, md: 5 } }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ mb: 6, textAlign: 'center' }}>
              <Typography 
                variant="h3" 
                component="h1" 
                sx={{ 
                  fontWeight: 700, 
                  mb: 2, 
                  color: theme.palette.primary.main,
                  textShadow: theme.palette.mode === 'dark' ? '0 2px 4px rgba(0,0,0,0.5)' : 'none',
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
                }}
              >
                Mi Portafolio Profesional
              </Typography>
              <Typography 
                variant="subtitle1" 
                sx={{ 
                  color: theme.palette.text.secondary, 
                  maxWidth: '3xl', 
                  mx: 'auto',
                  mb: 2,
                  fontSize: { xs: '1rem', sm: '1.1rem' }
                }}
              >
                Conozca mi experiencia profesional y los servicios que ofrezco como Contadora Pública especializada en asesoría tributaria y financiera.
              </Typography>
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
              <Tabs 
                value={tabValue} 
                onChange={handleTabChange} 
                aria-label="portfolio tabs"
                variant="scrollable"
                scrollButtons="auto"
                textColor="primary"
                indicatorColor="primary"
                sx={{
                  '& .MuiTab-root': {
                    fontWeight: 600,
                    textTransform: 'none',
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    minWidth: { xs: 'auto', sm: 100 },
                    py: 2
                  }
                }}
              >
                <Tab label="Servicios" id="portfolio-tab-0" aria-controls="portfolio-tabpanel-0" />
                <Tab label="Experiencia" id="portfolio-tab-1" aria-controls="portfolio-tabpanel-1" />
                <Tab label="Testimonios" id="portfolio-tab-2" aria-controls="portfolio-tabpanel-2" />
                <Tab label="Certificaciones" id="portfolio-tab-3" aria-controls="portfolio-tabpanel-3" />
              </Tabs>
            </Box>
          </motion.div>

          <TabPanel value={tabValue} index={0}>
            <MotionGrid 
              container 
              spacing={4}
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              animate="visible"
            >
              <MotionGrid 
                item 
                xs={12} 
                md={6} 
                lg={4}
                variants={cardVariants}
                custom={0}
                whileHover="hover"
              >
                <Card 
                  sx={{
                    height: '100%', 
                    transition: 'all 0.3s ease',
                    border: '1px solid',
                    borderColor: theme.palette.secondary.light,
                    boxShadow: theme.palette.mode === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
                    '&:hover': {
                      boxShadow: theme.palette.mode === 'dark' ? '0 8px 25px rgba(0, 0, 0, 0.3)' : '0 8px 25px rgba(0, 0, 0, 0.1)',
                      borderColor: theme.palette.secondary.main
                    },
                    bgcolor: theme.palette.mode === 'dark' ? theme.palette.background.paper : '#ffffff',
                    borderRadius: 2
                  }}
                >
                  <CardHeader 
                    avatar={
                      <Avatar sx={{ bgcolor: theme.palette.secondary.main }}>
                        <BusinessIcon sx={{ color: theme.palette.primary.main }} />
                      </Avatar>
                    }
                    title="Contabilidad para Empresas"
                    subheader="Servicios Corporativos"
                    titleTypographyProps={{ 
                      sx: { 
                        fontWeight: 600,
                        color: theme.palette.primary.main
                      }
                    }}
                    subheaderTypographyProps={{
                      sx: { color: theme.palette.text.secondary }
                    }}
                  />
                  <CardContent>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        mb: 2,
                        color: theme.palette.text.primary
                      }}
                    >
                      Ofrezco servicios completos de contabilidad para empresas de todos los tamaños, desde startups hasta compañías establecidas.
                    </Typography>
                    <Divider sx={{ 
                      my: 2,
                      borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.1)' : 'rgba(217, 176, 156, 0.2)'  
                    }} />
                    <Typography variant="body2" component="div">
                      <Box component="ul" sx={{ 
                        listStyleType: 'disc', 
                        pl: 2.5, 
                        '& > li': { 
                          mt: 1,
                          color: theme.palette.text.primary
                        } 
                      }}>
                        <li>Contabilidad financiera y fiscal</li>
                        <li>Preparación de estados financieros</li>
                        <li>Conciliaciones bancarias</li>
                        <li>Registros contables</li>
                        <li>Informes financieros mensuales</li>
                      </Box>
                    </Typography>
                  </CardContent>
                </Card>
              </MotionGrid>

              <MotionGrid 
                item 
                xs={12} 
                md={6} 
                lg={4}
                variants={cardVariants}
                custom={1}
                whileHover="hover"
              >
                <Card 
                  sx={{
                    height: '100%', 
                    transition: 'all 0.3s ease',
                    border: '1px solid',
                    borderColor: theme.palette.secondary.light,
                    boxShadow: theme.palette.mode === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
                    '&:hover': {
                      boxShadow: theme.palette.mode === 'dark' ? '0 8px 25px rgba(0, 0, 0, 0.3)' : '0 8px 25px rgba(0, 0, 0, 0.1)',
                      borderColor: theme.palette.secondary.main
                    },
                    bgcolor: theme.palette.mode === 'dark' ? theme.palette.background.paper : '#ffffff',
                    borderRadius: 2
                  }}
                >
                  <CardHeader 
                    avatar={
                      <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
                        <PersonIcon />
                      </Avatar>
                    }
                    title="Asesoría para Personas Naturales"
                    subheader="Personas Naturales"
                    titleTypographyProps={{ 
                      sx: { 
                        fontWeight: 600,
                        color: theme.palette.primary.light
                      }
                    }}
                    subheaderTypographyProps={{
                      sx: { color: theme.palette.text.secondary }
                    }}
                  />
                  <CardContent>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        mb: 2,
                        color: theme.palette.text.primary
                      }}
                    >
                      Acompaño a personas naturales en el cumplimiento de sus obligaciones tributarias, optimizando su carga fiscal de manera legal.
                    </Typography>
                    <Divider sx={{ 
                      my: 2,
                      borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.1)' : 'rgba(217, 176, 156, 0.2)'  
                    }} />
                    <Typography variant="body2" component="div">
                      <Box component="ul" sx={{ 
                        listStyleType: 'disc', 
                        pl: 2.5, 
                        '& > li': { 
                          mt: 1,
                          color: theme.palette.text.primary
                        } 
                      }}>
                        <li>Declaración de renta personas naturales</li>
                        <li>Planeación tributaria personal</li>
                        <li>Asesoría en inversiones</li>
                        <li>Organización financiera personal</li>
                        <li>Impuestos para independientes</li>
                      </Box>
                    </Typography>
                  </CardContent>
                </Card>
              </MotionGrid>

              <MotionGrid 
                item 
                xs={12} 
                md={6} 
                lg={4}
                variants={cardVariants}
                custom={2}
                whileHover="hover"
              >
                <Card 
                  sx={{
                    height: '100%', 
                    transition: 'all 0.3s ease',
                    border: '1px solid',
                    borderColor: theme.palette.secondary.light,
                    boxShadow: theme.palette.mode === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
                    '&:hover': {
                      boxShadow: theme.palette.mode === 'dark' ? '0 8px 25px rgba(0, 0, 0, 0.3)' : '0 8px 25px rgba(0, 0, 0, 0.1)',
                      borderColor: theme.palette.secondary.main
                    },
                    bgcolor: theme.palette.mode === 'dark' ? theme.palette.background.paper : '#ffffff',
                    borderRadius: 2
                  }}
                >
                  <CardHeader 
                    avatar={
                      <Avatar sx={{ bgcolor: 'error.main' }}>
                        <AccountBalanceIcon />
                      </Avatar>
                    }
                    title="Consultorías Especializadas"
                    subheader="Servicios de Alto Valor"
                    titleTypographyProps={{ 
                      sx: { 
                        fontWeight: 600,
                        color: theme.palette.error.light
                      }
                    }}
                    subheaderTypographyProps={{
                      sx: { color: theme.palette.text.secondary }
                    }}
                  />
                  <CardContent>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        mb: 2,
                        color: theme.palette.text.primary
                      }}
                    >
                      Brindo asesorías especializadas en temas complejos de contabilidad, tributación y finanzas para necesidades específicas.
                    </Typography>
                    <Divider sx={{ 
                      my: 2,
                      borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.1)' : 'rgba(217, 176, 156, 0.2)'  
                    }} />
                    <Typography variant="body2" component="div">
                      <Box component="ul" sx={{ 
                        listStyleType: 'disc', 
                        pl: 2.5, 
                        '& > li': { 
                          mt: 1,
                          color: theme.palette.text.primary
                        } 
                      }}>
                        <li>Implementación de NIIF</li>
                        <li>Due diligence contable y financiero</li>
                        <li>Valoración de empresas</li>
                        <li>Reestructuración financiera</li>
                        <li>Peritajes contables</li>
                      </Box>
                    </Typography>
                  </CardContent>
                </Card>
              </MotionGrid>

              <MotionGrid 
                item 
                xs={12} 
                md={6} 
                lg={6}
                variants={cardVariants}
                custom={3}
                whileHover="hover"
              >
                <Card 
                  sx={{
                    height: '100%', 
                    transition: 'all 0.3s ease',
                    border: '1px solid',
                    borderColor: theme.palette.secondary.light,
                    boxShadow: theme.palette.mode === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
                    '&:hover': {
                      boxShadow: theme.palette.mode === 'dark' ? '0 8px 25px rgba(0, 0, 0, 0.3)' : '0 8px 25px rgba(0, 0, 0, 0.1)',
                      borderColor: theme.palette.secondary.main
                    },
                    bgcolor: theme.palette.mode === 'dark' ? theme.palette.background.paper : '#ffffff',
                    borderRadius: 2
                  }}
                >
                  <CardHeader 
                    avatar={
                      <Avatar sx={{ bgcolor: 'info.main' }}>
                        <BalanceIcon />
                      </Avatar>
                    }
                    title="Auditoría y Revisión"
                    subheader="Control y Verificación"
                    titleTypographyProps={{ 
                      sx: { 
                        fontWeight: 600,
                        color: theme.palette.info.light
                      }
                    }}
                    subheaderTypographyProps={{
                      sx: { color: theme.palette.text.secondary }
                    }}
                  />
                  <CardContent>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        mb: 2,
                        color: theme.palette.text.primary
                      }}
                    >
                      Realizo auditorías contables y fiscales para verificar el correcto cumplimiento normativo y la precisión de la información financiera.
                    </Typography>
                    <Divider sx={{ 
                      my: 2,
                      borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.1)' : 'rgba(217, 176, 156, 0.2)'  
                    }} />
                    <Typography variant="body2" component="div">
                      <Box component="ul" sx={{ 
                        listStyleType: 'disc', 
                        pl: 2.5, 
                        '& > li': { 
                          mt: 1,
                          color: theme.palette.text.primary
                        } 
                      }}>
                        <li>Auditoría de estados financieros</li>
                        <li>Revisión de procesos contables</li>
                        <li>Auditoría fiscal y tributaria</li>
                        <li>Control interno</li>
                        <li>Informes de hallazgos y recomendaciones</li>
                      </Box>
                    </Typography>
                  </CardContent>
                </Card>
              </MotionGrid>

              <MotionGrid 
                item 
                xs={12} 
                md={6} 
                lg={6}
                variants={cardVariants}
                custom={4}
                whileHover="hover"
              >
                <Card 
                  sx={{
                    height: '100%', 
                    transition: 'all 0.3s ease',
                    border: '1px solid',
                    borderColor: theme.palette.secondary.light,
                    boxShadow: theme.palette.mode === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
                    '&:hover': {
                      boxShadow: theme.palette.mode === 'dark' ? '0 8px 25px rgba(0, 0, 0, 0.3)' : '0 8px 25px rgba(0, 0, 0, 0.1)',
                      borderColor: theme.palette.secondary.main
                    },
                    bgcolor: theme.palette.mode === 'dark' ? theme.palette.background.paper : '#ffffff',
                    borderRadius: 2
                  }}
                >
                  <CardHeader 
                    avatar={
                      <Avatar sx={{ bgcolor: 'warning.main' }}>
                        <ReceiptLongIcon />
                      </Avatar>
                    }
                    title="Gestión Tributaria"
                    subheader="Impuestos y Obligaciones"
                    titleTypographyProps={{ 
                      sx: { 
                        fontWeight: 600,
                        color: theme.palette.warning.light
                      }
                    }}
                    subheaderTypographyProps={{
                      sx: { color: theme.palette.text.secondary }
                    }}
                  />
                  <CardContent>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        mb: 2,
                        color: theme.palette.text.primary
                      }}
                    >
                      Manejo eficiente de obligaciones tributarias, maximizando beneficios fiscales conforme a la normativa vigente.
                    </Typography>
                    <Divider sx={{ 
                      my: 2,
                      borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.1)' : 'rgba(217, 176, 156, 0.2)'  
                    }} />
                    <Typography variant="body2" component="div">
                      <Box component="ul" sx={{ 
                        listStyleType: 'disc', 
                        pl: 2.5, 
                        '& > li': { 
                          mt: 1,
                          color: theme.palette.text.primary
                        } 
                      }}>
                        <li>Declaraciones de IVA y retenciones</li>
                        <li>Impuestos municipales y distritales</li>
                        <li>Planeación fiscal corporativa</li>
                        <li>Gestión de devoluciones de impuestos</li>
                        <li>Asesoría en regulación impositiva</li>
                      </Box>
                    </Typography>
                  </CardContent>
                </Card>
              </MotionGrid>
            </MotionGrid>
          </TabPanel>

          <TabPanel value={tabValue} index={1}>
            <MotionGrid 
              container 
              spacing={4}
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              animate="visible"
            >
              <MotionGrid 
                item 
                xs={12} 
                md={6}
                variants={cardVariants}
                custom={0}
                whileHover="hover"
              >
                <Card 
                  sx={{
                    height: '100%', 
                    transition: 'all 0.3s ease',
                    border: '1px solid',
                    borderColor: theme.palette.secondary.light,
                    boxShadow: theme.palette.mode === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
                    '&:hover': {
                      boxShadow: theme.palette.mode === 'dark' ? '0 8px 25px rgba(0, 0, 0, 0.3)' : '0 8px 25px rgba(0, 0, 0, 0.1)',
                      borderColor: theme.palette.secondary.main
                    },
                    bgcolor: theme.palette.mode === 'dark' ? theme.palette.background.paper : '#ffffff',
                    borderRadius: 2,
                    overflow: 'hidden'
                  }}
                >
                  <Box sx={{ position: 'relative', height: '12rem', bgcolor: 'rgba(233, 201, 187, 0.1)' }}>
                    <Box 
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Avatar 
                        sx={{ 
                          width: 80, 
                          height: 80,
                          bgcolor: theme.palette.primary.main,
                          boxShadow: '0 4px 10px rgba(0,0,0,0.15)'
                        }}
                      >
                        <BusinessIcon sx={{ fontSize: 40 }} />
                      </Avatar>
                    </Box>
                  </Box>
                  <CardContent>
                    <Box sx={{ mb: 1.5, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      <Typography
                        variant="caption"
                        sx={{
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 1,
                          bgcolor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.1)' : 'rgba(217, 176, 156, 0.15)',
                          color: theme.palette.text.secondary,
                          border: '1px solid',
                          borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.2)' : 'rgba(217, 176, 156, 0.3)',
                          fontSize: '0.75rem',
                          fontWeight: 500
                        }}
                      >
                        Contabilidad
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 1,
                          bgcolor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.1)' : 'rgba(217, 176, 156, 0.15)',
                          color: theme.palette.text.secondary,
                          border: '1px solid',
                          borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.2)' : 'rgba(217, 176, 156, 0.3)',
                          fontSize: '0.75rem',
                          fontWeight: 500
                        }}
                      >
                        NIIF
                      </Typography>
                    </Box>
                    <Typography 
                      variant="h5" 
                      component="h2" 
                      sx={{ 
                        mb: 1.5,
                        fontWeight: 600,
                        color: theme.palette.primary.main
                      }}
                    >
                      Implementación NIIF para PYMES
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        mb: 1.5,
                        color: theme.palette.text.primary
                      }}
                    >
                      Lideré la implementación de Normas Internacionales de Información Financiera (NIIF) para una empresa mediana del sector manufacturero.
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: theme.palette.text.primary
                      }}
                    >
                      <Box component="span" sx={{ fontWeight: 700 }}>Resultado:</Box> Cumplimiento normativo completo y mejora en la calidad de la información financiera para la toma de decisiones.
                    </Typography>
                  </CardContent>
                </Card>
              </MotionGrid>

              <MotionGrid 
                item 
                xs={12} 
                md={6}
                variants={cardVariants}
                custom={1}
                whileHover="hover"
              >
                <Card 
                  sx={{
                    height: '100%', 
                    transition: 'all 0.3s ease',
                    border: '1px solid',
                    borderColor: theme.palette.secondary.light,
                    boxShadow: theme.palette.mode === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
                    '&:hover': {
                      boxShadow: theme.palette.mode === 'dark' ? '0 8px 25px rgba(0, 0, 0, 0.3)' : '0 8px 25px rgba(0, 0, 0, 0.1)',
                      borderColor: theme.palette.secondary.main
                    },
                    bgcolor: theme.palette.mode === 'dark' ? theme.palette.background.paper : '#ffffff',
                    borderRadius: 2,
                    overflow: 'hidden'
                  }}
                >
                  <Box sx={{ position: 'relative', height: '12rem', bgcolor: 'rgba(233, 201, 187, 0.1)' }}>
                    <Box 
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Avatar 
                        sx={{ 
                          width: 80, 
                          height: 80,
                          bgcolor: theme.palette.secondary.main,
                          boxShadow: '0 4px 10px rgba(0,0,0,0.15)'
                        }}
                      >
                        <ReceiptLongIcon sx={{ fontSize: 40 }} />
                      </Avatar>
                    </Box>
                  </Box>
                  <CardContent>
                    <Box sx={{ mb: 1.5, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      <Typography
                        variant="caption"
                        sx={{
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 1,
                          bgcolor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.1)' : 'rgba(217, 176, 156, 0.15)',
                          color: theme.palette.text.secondary,
                          border: '1px solid',
                          borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.2)' : 'rgba(217, 176, 156, 0.3)',
                          fontSize: '0.75rem',
                          fontWeight: 500
                        }}
                      >
                        Tributario
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 1,
                          bgcolor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.1)' : 'rgba(217, 176, 156, 0.15)',
                          color: theme.palette.text.secondary,
                          border: '1px solid',
                          borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.2)' : 'rgba(217, 176, 156, 0.3)',
                          fontSize: '0.75rem',
                          fontWeight: 500
                        }}
                      >
                        Planeación
                      </Typography>
                    </Box>
                    <Typography 
                      variant="h5" 
                      component="h2" 
                      sx={{ 
                        mb: 1.5,
                        fontWeight: 600,
                        color: theme.palette.secondary.main
                      }}
                    >
                      Restructuración Tributaria Empresarial
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        mb: 1.5,
                        color: theme.palette.text.primary
                      }}
                    >
                      Diseñé e implementé una estrategia de planeación tributaria para un grupo empresarial, optimizando la carga impositiva legalmente.
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: theme.palette.text.primary
                      }}
                    >
                      <Box component="span" sx={{ fontWeight: 700 }}>Resultado:</Box> Reducción del 22% en la carga tributaria anual sin incurrir en riesgos fiscales.
                    </Typography>
                  </CardContent>
                </Card>
              </MotionGrid>

              <MotionGrid 
                item 
                xs={12} 
                md={6}
                variants={cardVariants}
                custom={2}
                whileHover="hover"
              >
                <Card 
                  sx={{
                    height: '100%', 
                    transition: 'all 0.3s ease',
                    border: '1px solid',
                    borderColor: theme.palette.secondary.light,
                    boxShadow: theme.palette.mode === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
                    '&:hover': {
                      boxShadow: theme.palette.mode === 'dark' ? '0 8px 25px rgba(0, 0, 0, 0.3)' : '0 8px 25px rgba(0, 0, 0, 0.1)',
                      borderColor: theme.palette.secondary.main
                    },
                    bgcolor: theme.palette.mode === 'dark' ? theme.palette.background.paper : '#ffffff',
                    borderRadius: 2,
                    overflow: 'hidden'
                  }}
                >
                  <Box sx={{ position: 'relative', height: '12rem', bgcolor: 'rgba(233, 201, 187, 0.1)' }}>
                    <Box 
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Avatar 
                        sx={{ 
                          width: 80, 
                          height: 80,
                          bgcolor: theme.palette.error.main,
                          boxShadow: '0 4px 10px rgba(0,0,0,0.15)'
                        }}
                      >
                        <AccountBalanceIcon sx={{ fontSize: 40 }} />
                      </Avatar>
                    </Box>
                  </Box>
                  <CardContent>
                    <Box sx={{ mb: 1.5, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      <Typography
                        variant="caption"
                        sx={{
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 1,
                          bgcolor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.1)' : 'rgba(217, 176, 156, 0.15)',
                          color: theme.palette.text.secondary,
                          border: '1px solid',
                          borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.2)' : 'rgba(217, 176, 156, 0.3)',
                          fontSize: '0.75rem',
                          fontWeight: 500
                        }}
                      >
                        Finanzas
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 1,
                          bgcolor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.1)' : 'rgba(217, 176, 156, 0.15)',
                          color: theme.palette.text.secondary,
                          border: '1px solid',
                          borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.2)' : 'rgba(217, 176, 156, 0.3)',
                          fontSize: '0.75rem',
                          fontWeight: 500
                        }}
                      >
                        Reestructuración
                      </Typography>
                    </Box>
                    <Typography 
                      variant="h5" 
                      component="h2" 
                      sx={{ 
                        mb: 1.5,
                        fontWeight: 600,
                        color: theme.palette.error.main
                      }}
                    >
                      Reestructuración Financiera
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        mb: 1.5,
                        color: theme.palette.text.primary
                      }}
                    >
                      Desarrollé un plan de reestructuración financiera para una empresa en dificultades, incluyendo refinanciación de deuda y optimización de capital de trabajo.
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: theme.palette.text.primary
                      }}
                    >
                      <Box component="span" sx={{ fontWeight: 700 }}>Resultado:</Box> Recuperación de la liquidez y mejora en los indicadores financieros clave en menos de 12 meses.
                    </Typography>
                  </CardContent>
                </Card>
              </MotionGrid>

              <MotionGrid 
                item 
                xs={12} 
                md={6}
                variants={cardVariants}
                custom={3}
                whileHover="hover"
              >
                <Card 
                  sx={{
                    height: '100%', 
                    transition: 'all 0.3s ease',
                    border: '1px solid',
                    borderColor: theme.palette.secondary.light,
                    boxShadow: theme.palette.mode === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
                    '&:hover': {
                      boxShadow: theme.palette.mode === 'dark' ? '0 8px 25px rgba(0, 0, 0, 0.3)' : '0 8px 25px rgba(0, 0, 0, 0.1)',
                      borderColor: theme.palette.secondary.main
                    },
                    bgcolor: theme.palette.mode === 'dark' ? theme.palette.background.paper : '#ffffff',
                    borderRadius: 2,
                    overflow: 'hidden'
                  }}
                >
                  <Box sx={{ position: 'relative', height: '12rem', bgcolor: 'rgba(233, 201, 187, 0.1)' }}>
                    <Box 
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Avatar 
                        sx={{ 
                          width: 80, 
                          height: 80,
                          bgcolor: theme.palette.info.main,
                          boxShadow: '0 4px 10px rgba(0,0,0,0.15)'
                        }}
                      >
                        <BalanceIcon sx={{ fontSize: 40 }} />
                      </Avatar>
                    </Box>
                  </Box>
                  <CardContent>
                    <Box sx={{ mb: 1.5, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      <Typography
                        variant="caption"
                        sx={{
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 1,
                          bgcolor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.1)' : 'rgba(217, 176, 156, 0.15)',
                          color: theme.palette.text.secondary,
                          border: '1px solid',
                          borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.2)' : 'rgba(217, 176, 156, 0.3)',
                          fontSize: '0.75rem',
                          fontWeight: 500
                        }}
                      >
                        Due Diligence
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 1,
                          bgcolor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.1)' : 'rgba(217, 176, 156, 0.15)',
                          color: theme.palette.text.secondary,
                          border: '1px solid',
                          borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.2)' : 'rgba(217, 176, 156, 0.3)',
                          fontSize: '0.75rem',
                          fontWeight: 500
                        }}
                      >
                        Auditoría
                      </Typography>
                    </Box>
                    <Typography 
                      variant="h5" 
                      component="h2" 
                      sx={{ 
                        mb: 1.5,
                        fontWeight: 600,
                        color: theme.palette.info.main
                      }}
                    >
                      Due Diligence para Adquisición
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        mb: 1.5,
                        color: theme.palette.text.primary
                      }}
                    >
                      Realicé un proceso completo de due diligence contable y financiero para una empresa que planeaba adquirir un competidor del mercado.
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: theme.palette.text.primary
                      }}
                    >
                      <Box component="span" sx={{ fontWeight: 700 }}>Resultado:</Box> Identificación de riesgos clave y oportunidades de sinergia que permitieron una negociación favorable.
                    </Typography>
                  </CardContent>
                </Card>
              </MotionGrid>
            </MotionGrid>
          </TabPanel>

          <TabPanel value={tabValue} index={2}>
            <MotionGrid 
              container 
              spacing={4}
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              animate="visible"
            >
              <MotionGrid 
                item 
                xs={12} 
                md={6}
                variants={cardVariants}
                custom={0}
                whileHover="hover"
              >
                <Card 
                  sx={{
                    height: '100%', 
                    transition: 'all 0.3s ease',
                    border: '1px solid',
                    borderColor: theme.palette.secondary.light,
                    boxShadow: theme.palette.mode === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
                    '&:hover': {
                      boxShadow: theme.palette.mode === 'dark' ? '0 8px 25px rgba(0, 0, 0, 0.3)' : '0 8px 25px rgba(0, 0, 0, 0.1)',
                      borderColor: theme.palette.secondary.main
                    },
                    bgcolor: theme.palette.mode === 'dark' ? theme.palette.background.paper : '#ffffff',
                    borderRadius: 2
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
                      <Avatar sx={{ width: 80, height: 80, mb: 2, bgcolor: theme.palette.primary.main }}>JP</Avatar>
                      <Typography 
                        variant="h6" 
                        component="h3" 
                        sx={{ 
                          textAlign: 'center',
                          fontWeight: 600,
                          color: theme.palette.primary.main
                        }}
                      >
                        Juan Pérez
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          textAlign: 'center', 
                          mb: 1,
                          color: theme.palette.text.secondary
                        }}
                      >
                        Gerente General - Empresa ABC
                      </Typography>
                      <Box sx={{ 
                        mt: 1, 
                        display: 'flex', 
                        alignItems: 'center',
                        padding: '4px 12px',
                        bgcolor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.1)' : 'rgba(217, 176, 156, 0.15)',
                        borderRadius: 10,
                        border: '1px solid',
                        borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.2)' : theme.palette.secondary.light,
                      }}>
                        <Box sx={{ 
                          display: 'flex', 
                          mr: 1,
                          color: theme.palette.secondary.main 
                        }}>
                          {[...Array(5)].map((_, i) => (
                            <Box 
                              key={i} 
                              component="span" 
                              sx={{ 
                                fontSize: '1rem',
                                lineHeight: 1
                              }}
                            >
                              ★
                            </Box>
                          ))}
                        </Box>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            fontWeight: 600,
                            color: theme.palette.text.secondary
                          }}
                        >
                          5.0
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Box 
                      sx={{ 
                        p: 2, 
                        bgcolor: theme.palette.mode === 'dark' ? 'rgba(15, 23, 42, 0.3)' : 'rgba(245, 245, 245, 0.6)',
                        borderRadius: 2,
                        position: 'relative',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: -10,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 0,
                          height: 0,
                          borderLeft: '10px solid transparent',
                          borderRight: '10px solid transparent',
                          borderBottom: theme.palette.mode === 'dark' 
                            ? '10px solid rgba(15, 23, 42, 0.3)'
                            : '10px solid rgba(245, 245, 245, 0.6)',
                        }
                      }}
                    >
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          fontStyle: 'italic',
                          color: theme.palette.text.primary,
                          lineHeight: 1.6
                        }}
                      >
                        &ldquo;La asesoría tributaria de Alejandra fue fundamental para optimizar nuestra estructura fiscal. Su conocimiento profundo y atención al detalle nos ayudó a ahorrar considerablemente en impuestos de manera legal. Altamente recomendada.&rdquo;
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </MotionGrid>

              <MotionGrid 
                item 
                xs={12} 
                md={6}
                variants={cardVariants}
                custom={1}
                whileHover="hover"
              >
                <Card 
                  sx={{
                    height: '100%', 
                    transition: 'all 0.3s ease',
                    border: '1px solid',
                    borderColor: theme.palette.secondary.light,
                    boxShadow: theme.palette.mode === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
                    '&:hover': {
                      boxShadow: theme.palette.mode === 'dark' ? '0 8px 25px rgba(0, 0, 0, 0.3)' : '0 8px 25px rgba(0, 0, 0, 0.1)',
                      borderColor: theme.palette.secondary.main
                    },
                    bgcolor: theme.palette.mode === 'dark' ? theme.palette.background.paper : '#ffffff',
                    borderRadius: 2
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
                      <Avatar sx={{ width: 80, height: 80, mb: 2, bgcolor: theme.palette.secondary.main }}>MR</Avatar>
                      <Typography 
                        variant="h6" 
                        component="h3" 
                        sx={{ 
                          textAlign: 'center',
                          fontWeight: 600,
                          color: theme.palette.secondary.main
                        }}
                      >
                        María Rodríguez
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          textAlign: 'center', 
                          mb: 1,
                          color: theme.palette.text.secondary
                        }}
                      >
                        Directora Financiera - XYZ S.A.S
                      </Typography>
                      <Box sx={{ 
                        mt: 1, 
                        display: 'flex', 
                        alignItems: 'center',
                        padding: '4px 12px',
                        bgcolor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.1)' : 'rgba(217, 176, 156, 0.15)',
                        borderRadius: 10,
                        border: '1px solid',
                        borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.2)' : theme.palette.secondary.light,
                      }}>
                        <Box sx={{ 
                          display: 'flex', 
                          mr: 1,
                          color: theme.palette.secondary.main 
                        }}>
                          {[...Array(5)].map((_, i) => (
                            <Box 
                              key={i} 
                              component="span" 
                              sx={{ 
                                fontSize: '1rem',
                                lineHeight: 1
                              }}
                            >
                              ★
                            </Box>
                          ))}
                        </Box>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            fontWeight: 600,
                            color: theme.palette.text.secondary
                          }}
                        >
                          5.0
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Box 
                      sx={{ 
                        p: 2, 
                        bgcolor: theme.palette.mode === 'dark' ? 'rgba(15, 23, 42, 0.3)' : 'rgba(245, 245, 245, 0.6)',
                        borderRadius: 2,
                        position: 'relative',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: -10,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 0,
                          height: 0,
                          borderLeft: '10px solid transparent',
                          borderRight: '10px solid transparent',
                          borderBottom: theme.palette.mode === 'dark' 
                            ? '10px solid rgba(15, 23, 42, 0.3)'
                            : '10px solid rgba(245, 245, 245, 0.6)',
                        }
                      }}
                    >
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          fontStyle: 'italic',
                          color: theme.palette.text.primary,
                          lineHeight: 1.6
                        }}
                      >
                        &ldquo;Trabajar con Alejandra en la implementación de NIIF fue una experiencia excelente. Su metodología clara y enfoque práctico facilitó enormemente la transición. Ahora tenemos estados financieros confiables y comparables internacionalmente.&rdquo;
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </MotionGrid>

              <MotionGrid 
                item 
                xs={12} 
                md={6}
                variants={cardVariants}
                custom={2}
                whileHover="hover"
              >
                <Card 
                  sx={{
                    height: '100%', 
                    transition: 'all 0.3s ease',
                    border: '1px solid',
                    borderColor: theme.palette.secondary.light,
                    boxShadow: theme.palette.mode === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
                    '&:hover': {
                      boxShadow: theme.palette.mode === 'dark' ? '0 8px 25px rgba(0, 0, 0, 0.3)' : '0 8px 25px rgba(0, 0, 0, 0.1)',
                      borderColor: theme.palette.secondary.main
                    },
                    bgcolor: theme.palette.mode === 'dark' ? theme.palette.background.paper : '#ffffff',
                    borderRadius: 2
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
                      <Avatar sx={{ width: 80, height: 80, mb: 2, bgcolor: theme.palette.warning.main }}>CG</Avatar>
                      <Typography 
                        variant="h6" 
                        component="h3" 
                        sx={{ 
                          textAlign: 'center',
                          fontWeight: 600,
                          color: theme.palette.warning.main
                        }}
                      >
                        Carlos Gómez
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          textAlign: 'center', 
                          mb: 1,
                          color: theme.palette.text.secondary
                        }}
                      >
                        Emprendedor
                      </Typography>
                      <Box sx={{ 
                        mt: 1, 
                        display: 'flex', 
                        alignItems: 'center',
                        padding: '4px 12px',
                        bgcolor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.1)' : 'rgba(217, 176, 156, 0.15)',
                        borderRadius: 10,
                        border: '1px solid',
                        borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.2)' : theme.palette.secondary.light,
                      }}>
                        <Box sx={{ 
                          display: 'flex', 
                          mr: 1,
                          color: theme.palette.secondary.main 
                        }}>
                          {[...Array(4)].map((_, i) => (
                            <Box 
                              key={i} 
                              component="span" 
                              sx={{ 
                                fontSize: '1rem',
                                lineHeight: 1
                              }}
                            >
                              ★
                            </Box>
                          ))}
                          <Box 
                            component="span" 
                            sx={{ 
                              fontSize: '1rem',
                              lineHeight: 1,
                              position: 'relative'
                            }}
                          >
                            ☆
                            <Box 
                              component="span" 
                              sx={{ 
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                width: '50%',
                                overflow: 'hidden',
                                color: theme.palette.secondary.main
                              }}
                            >
                              ★
                            </Box>
                          </Box>
                        </Box>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            fontWeight: 600,
                            color: theme.palette.text.secondary
                          }}
                        >
                          4.5
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Box 
                      sx={{ 
                        p: 2, 
                        bgcolor: theme.palette.mode === 'dark' ? 'rgba(15, 23, 42, 0.3)' : 'rgba(245, 245, 245, 0.6)',
                        borderRadius: 2,
                        position: 'relative',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: -10,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 0,
                          height: 0,
                          borderLeft: '10px solid transparent',
                          borderRight: '10px solid transparent',
                          borderBottom: theme.palette.mode === 'dark' 
                            ? '10px solid rgba(15, 23, 42, 0.3)'
                            : '10px solid rgba(245, 245, 245, 0.6)',
                        }
                      }}
                    >
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          fontStyle: 'italic',
                          color: theme.palette.text.primary,
                          lineHeight: 1.6
                        }}
                      >
                        &ldquo;Como emprendedor, necesitaba alguien que me guiara en el mundo contable y tributario. Alejandra no solo me ayudó con la contabilidad de mi startup, sino que me educó para entender mejor las finanzas de mi negocio.&rdquo;
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </MotionGrid>

              <MotionGrid 
                item 
                xs={12} 
                md={6}
                variants={cardVariants}
                custom={3}
                whileHover="hover"
              >
                <Card 
                  sx={{
                    height: '100%', 
                    transition: 'all 0.3s ease',
                    border: '1px solid',
                    borderColor: theme.palette.secondary.light,
                    boxShadow: theme.palette.mode === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
                    '&:hover': {
                      boxShadow: theme.palette.mode === 'dark' ? '0 8px 25px rgba(0, 0, 0, 0.3)' : '0 8px 25px rgba(0, 0, 0, 0.1)',
                      borderColor: theme.palette.secondary.main
                    },
                    bgcolor: theme.palette.mode === 'dark' ? theme.palette.background.paper : '#ffffff',
                    borderRadius: 2
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
                      <Avatar sx={{ width: 80, height: 80, mb: 2, bgcolor: theme.palette.success.main }}>LM</Avatar>
                      <Typography 
                        variant="h6" 
                        component="h3" 
                        sx={{ 
                          textAlign: 'center',
                          fontWeight: 600,
                          color: theme.palette.success.main
                        }}
                      >
                        Laura Martínez
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          textAlign: 'center', 
                          mb: 1,
                          color: theme.palette.text.secondary
                        }}
                      >
                        Gerente de Operaciones - Constructora 123
                      </Typography>
                      <Box sx={{ 
                        mt: 1, 
                        display: 'flex', 
                        alignItems: 'center',
                        padding: '4px 12px',
                        bgcolor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.1)' : 'rgba(217, 176, 156, 0.15)',
                        borderRadius: 10,
                        border: '1px solid',
                        borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.2)' : theme.palette.secondary.light,
                      }}>
                        <Box sx={{ 
                          display: 'flex', 
                          mr: 1,
                          color: theme.palette.secondary.main 
                        }}>
                          {[...Array(5)].map((_, i) => (
                            <Box 
                              key={i} 
                              component="span" 
                              sx={{ 
                                fontSize: '1rem',
                                lineHeight: 1
                              }}
                            >
                              ★
                            </Box>
                          ))}
                        </Box>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            fontWeight: 600,
                            color: theme.palette.text.secondary
                          }}
                        >
                          5.0
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Box 
                      sx={{ 
                        p: 2, 
                        bgcolor: theme.palette.mode === 'dark' ? 'rgba(15, 23, 42, 0.3)' : 'rgba(245, 245, 245, 0.6)',
                        borderRadius: 2,
                        position: 'relative',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: -10,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 0,
                          height: 0,
                          borderLeft: '10px solid transparent',
                          borderRight: '10px solid transparent',
                          borderBottom: theme.palette.mode === 'dark' 
                            ? '10px solid rgba(15, 23, 42, 0.3)'
                            : '10px solid rgba(245, 245, 245, 0.6)',
                        }
                      }}
                    >
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          fontStyle: 'italic',
                          color: theme.palette.text.primary,
                          lineHeight: 1.6
                        }}
                      >
                        &ldquo;La auditoría realizada por Alejandra fue exhaustiva y profesional. Identificó áreas de mejora que no habíamos notado y nos proporcionó recomendaciones accionables que implementamos con excelentes resultados.&rdquo;
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </MotionGrid>
            </MotionGrid>
          </TabPanel>

          <TabPanel value={tabValue} index={3}>
            <MotionGrid 
              container 
              spacing={4}
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              animate="visible"
            >
              <MotionGrid 
                item 
                xs={12} 
                md={6} 
                lg={4}
                variants={cardVariants}
                custom={0}
                whileHover="hover"
              >
                <Card 
                  sx={{
                    height: '100%', 
                    transition: 'all 0.3s ease',
                    border: '1px solid',
                    borderColor: theme.palette.secondary.light,
                    boxShadow: theme.palette.mode === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
                    '&:hover': {
                      boxShadow: theme.palette.mode === 'dark' ? '0 8px 25px rgba(0, 0, 0, 0.3)' : '0 8px 25px rgba(0, 0, 0, 0.1)',
                      borderColor: theme.palette.secondary.main
                    },
                    bgcolor: theme.palette.mode === 'dark' ? theme.palette.background.paper : '#ffffff',
                    borderRadius: 2,
                    overflow: 'hidden'
                  }}
                >
                  <Box 
                    sx={{
                      p: 3,
                      background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      position: 'relative'
                    }}
                  >
                    <Typography 
                      variant="h5" 
                      component="h3" 
                      sx={{ 
                        fontWeight: 700,
                        textAlign: 'center',
                        textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                        zIndex: 1
                      }}
                    >
                      Contador Público Certificado
                    </Typography>
                    <Box 
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        opacity: 0.1,
                        backgroundImage: 'url("/images/certificate-pattern.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }}
                    />
                  </Box>
                  <CardContent>
                    <Box sx={{ textAlign: 'center', mb: 2 }}>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          fontWeight: 600,
                          color: theme.palette.primary.main,
                          mb: 0.5
                        }}
                      >
                        Universidad Nacional de Colombia
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: theme.palette.text.secondary
                        }}
                      >
                        2010 - 2015
                      </Typography>
                    </Box>
                    
                    <Divider sx={{ my: 2 }} />
                    
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: theme.palette.text.primary,
                        mb: 2
                      }}
                    >
                      Título profesional en Contaduría Pública con honores académicos y distinción por mejor promedio de la promoción.
                    </Typography>
                    
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      mt: 2,
                      pt: 1,
                      borderTop: '1px dashed',
                      borderColor: 'rgba(217, 176, 156, 0.3)'
                    }}>
                      <Button 
                        variant="outlined" 
                        color="secondary" 
                        size="small"
                        sx={{
                          borderRadius: 5,
                          textTransform: 'none',
                          px: 2,
                          fontSize: '0.85rem'
                        }}
                      >
                        Ver Diploma
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </MotionGrid>
              
              <MotionGrid 
                item 
                xs={12} 
                md={6} 
                lg={4}
                variants={cardVariants}
                custom={1}
                whileHover="hover"
              >
                <Card 
                  sx={{
                    height: '100%', 
                    transition: 'all 0.3s ease',
                    border: '1px solid',
                    borderColor: theme.palette.secondary.light,
                    boxShadow: theme.palette.mode === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
                    '&:hover': {
                      boxShadow: theme.palette.mode === 'dark' ? '0 8px 25px rgba(0, 0, 0, 0.3)' : '0 8px 25px rgba(0, 0, 0, 0.1)',
                      borderColor: theme.palette.secondary.main
                    },
                    bgcolor: theme.palette.mode === 'dark' ? theme.palette.background.paper : '#ffffff',
                    borderRadius: 2,
                    overflow: 'hidden'
                  }}
                >
                  <Box 
                    sx={{
                      p: 3,
                      background: `linear-gradient(135deg, ${theme.palette.info.main} 0%, ${theme.palette.secondary.main} 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      position: 'relative'
                    }}
                  >
                    <Typography 
                      variant="h5" 
                      component="h3" 
                      sx={{ 
                        fontWeight: 700,
                        textAlign: 'center',
                        textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                        zIndex: 1
                      }}
                    >
                      Especialización en Impuestos
                    </Typography>
                    <Box 
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        opacity: 0.1,
                        backgroundImage: 'url("/images/certificate-pattern.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }}
                    />
                  </Box>
                  <CardContent>
                    <Box sx={{ textAlign: 'center', mb: 2 }}>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          fontWeight: 600,
                          color: theme.palette.info.main,
                          mb: 0.5
                        }}
                      >
                        Universidad Externado de Colombia
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: theme.palette.text.secondary
                        }}
                      >
                        2016 - 2017
                      </Typography>
                    </Box>
                    
                    <Divider sx={{ my: 2 }} />
                    
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: theme.palette.text.primary,
                        mb: 2
                      }}
                    >
                      Especialización en derecho tributario y planeación fiscal. Proyecto final con reconocimiento por su aplicación práctica en casos reales.
                    </Typography>
                    
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      mt: 2,
                      pt: 1,
                      borderTop: '1px dashed',
                      borderColor: 'rgba(217, 176, 156, 0.3)'
                    }}>
                      <Button 
                        variant="outlined" 
                        color="secondary" 
                        size="small"
                        sx={{
                          borderRadius: 5,
                          textTransform: 'none',
                          px: 2,
                          fontSize: '0.85rem'
                        }}
                      >
                        Ver Diploma
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </MotionGrid>
              
              <MotionGrid 
                item 
                xs={12} 
                md={6} 
                lg={4}
                variants={cardVariants}
                custom={2}
                whileHover="hover"
              >
                <Card 
                  sx={{
                    height: '100%', 
                    transition: 'all 0.3s ease',
                    border: '1px solid',
                    borderColor: theme.palette.secondary.light,
                    boxShadow: theme.palette.mode === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
                    '&:hover': {
                      boxShadow: theme.palette.mode === 'dark' ? '0 8px 25px rgba(0, 0, 0, 0.3)' : '0 8px 25px rgba(0, 0, 0, 0.1)',
                      borderColor: theme.palette.secondary.main
                    },
                    bgcolor: theme.palette.mode === 'dark' ? theme.palette.background.paper : '#ffffff',
                    borderRadius: 2,
                    overflow: 'hidden'
                  }}
                >
                  <Box 
                    sx={{
                      p: 3,
                      background: `linear-gradient(135deg, ${theme.palette.error.main} 0%, ${theme.palette.warning.main} 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      position: 'relative'
                    }}
                  >
                    <Typography 
                      variant="h5" 
                      component="h3" 
                      sx={{ 
                        fontWeight: 700,
                        textAlign: 'center',
                        textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                        zIndex: 1
                      }}
                    >
                      Certificación en NIIF
                    </Typography>
                    <Box 
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        opacity: 0.1,
                        backgroundImage: 'url("/images/certificate-pattern.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }}
                    />
                  </Box>
                  <CardContent>
                    <Box sx={{ textAlign: 'center', mb: 2 }}>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          fontWeight: 600,
                          color: theme.palette.warning.main,
                          mb: 0.5
                        }}
                      >
                        Instituto IFRS Internacional
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: theme.palette.text.secondary
                        }}
                      >
                        2018
                      </Typography>
                    </Box>
                    
                    <Divider sx={{ my: 2 }} />
                    
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: theme.palette.text.primary,
                        mb: 2
                      }}
                    >
                      Certificación internacional en aplicación e implementación de Normas Internacionales de Información Financiera (NIIF/IFRS) para empresas.
                    </Typography>
                    
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      mt: 2,
                      pt: 1,
                      borderTop: '1px dashed',
                      borderColor: 'rgba(217, 176, 156, 0.3)'
                    }}>
                      <Button 
                        variant="outlined" 
                        color="secondary" 
                        size="small"
                        sx={{
                          borderRadius: 5,
                          textTransform: 'none',
                          px: 2,
                          fontSize: '0.85rem'
                        }}
                      >
                        Ver Certificado
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </MotionGrid>
              
              <MotionGrid 
                item 
                xs={12} 
                md={6} 
                lg={6}
                variants={cardVariants}
                custom={3}
                whileHover="hover"
              >
                <Card 
                  sx={{
                    height: '100%', 
                    transition: 'all 0.3s ease',
                    border: '1px solid',
                    borderColor: theme.palette.secondary.light,
                    boxShadow: theme.palette.mode === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
                    '&:hover': {
                      boxShadow: theme.palette.mode === 'dark' ? '0 8px 25px rgba(0, 0, 0, 0.3)' : '0 8px 25px rgba(0, 0, 0, 0.1)',
                      borderColor: theme.palette.secondary.main
                    },
                    bgcolor: theme.palette.mode === 'dark' ? theme.palette.background.paper : '#ffffff',
                    borderRadius: 2,
                    overflow: 'hidden'
                  }}
                >
                  <Box 
                    sx={{
                      p: 3,
                      background: `linear-gradient(135deg, ${theme.palette.success.main} 0%, ${theme.palette.primary.main} 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      position: 'relative'
                    }}
                  >
                    <Typography 
                      variant="h5" 
                      component="h3" 
                      sx={{ 
                        fontWeight: 700,
                        textAlign: 'center',
                        textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                        zIndex: 1
                      }}
                    >
                      Auditor Financiero Certificado
                    </Typography>
                    <Box 
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        opacity: 0.1,
                        backgroundImage: 'url("/images/certificate-pattern.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }}
                    />
                  </Box>
                  <CardContent>
                    <Box sx={{ textAlign: 'center', mb: 2 }}>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          fontWeight: 600,
                          color: theme.palette.success.main,
                          mb: 0.5
                        }}
                      >
                        Asociación de Auditores Certificados
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: theme.palette.text.secondary
                        }}
                      >
                        2019
                      </Typography>
                    </Box>
                    
                    <Divider sx={{ my: 2 }} />
                    
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: theme.palette.text.primary,
                        mb: 2
                      }}
                    >
                      Certificación profesional en auditoría financiera y control interno según estándares internacionales. Capacitación en técnicas avanzadas de detección de fraudes y evaluación de riesgos.
                    </Typography>
                    
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      mt: 2,
                      pt: 1,
                      borderTop: '1px dashed',
                      borderColor: 'rgba(217, 176, 156, 0.3)'
                    }}>
                      <Button 
                        variant="outlined" 
                        color="secondary" 
                        size="small"
                        sx={{
                          borderRadius: 5,
                          textTransform: 'none',
                          px: 2,
                          fontSize: '0.85rem'
                        }}
                      >
                        Ver Certificado
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </MotionGrid>
              
              <MotionGrid 
                item 
                xs={12} 
                md={6} 
                lg={6}
                variants={cardVariants}
                custom={4}
                whileHover="hover"
              >
                <Card 
                  sx={{
                    height: '100%', 
                    transition: 'all 0.3s ease',
                    border: '1px solid',
                    borderColor: theme.palette.secondary.light,
                    boxShadow: theme.palette.mode === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
                    '&:hover': {
                      boxShadow: theme.palette.mode === 'dark' ? '0 8px 25px rgba(0, 0, 0, 0.3)' : '0 8px 25px rgba(0, 0, 0, 0.1)',
                      borderColor: theme.palette.secondary.main
                    },
                    bgcolor: theme.palette.mode === 'dark' ? theme.palette.background.paper : '#ffffff',
                    borderRadius: 2,
                    overflow: 'hidden'
                  }}
                >
                  <Box 
                    sx={{
                      p: 3,
                      background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.info.main} 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      position: 'relative'
                    }}
                  >
                    <Typography 
                      variant="h5" 
                      component="h3" 
                      sx={{ 
                        fontWeight: 700,
                        textAlign: 'center',
                        textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                        zIndex: 1
                      }}
                    >
                      Diplomado en Finanzas Corporativas
                    </Typography>
                    <Box 
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        opacity: 0.1,
                        backgroundImage: 'url("/images/certificate-pattern.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }}
                    />
                  </Box>
                  <CardContent>
                    <Box sx={{ textAlign: 'center', mb: 2 }}>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          fontWeight: 600,
                          color: theme.palette.secondary.main,
                          mb: 0.5
                        }}
                      >
                        Universidad de los Andes
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: theme.palette.text.secondary
                        }}
                      >
                        2020
                      </Typography>
                    </Box>
                    
                    <Divider sx={{ my: 2 }} />
                    
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: theme.palette.text.primary,
                        mb: 2
                      }}
                    >
                      Formación avanzada en valoración de empresas, fusiones y adquisiciones, gestión de riesgo financiero y análisis de inversiones. Incluye módulo especializado en modelaje financiero y tableros de control.
                    </Typography>
                    
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      mt: 2,
                      pt: 1,
                      borderTop: '1px dashed',
                      borderColor: 'rgba(217, 176, 156, 0.3)'
                    }}>
                      <Button 
                        variant="outlined" 
                        color="secondary" 
                        size="small"
                        sx={{
                          borderRadius: 5,
                          textTransform: 'none',
                          px: 2,
                          fontSize: '0.85rem'
                        }}
                      >
                        Ver Diploma
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </MotionGrid>
            </MotionGrid>
          </TabPanel>
        </Box>
      </Paper>

      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Button 
          href="/contacto" 
          variant="contained" 
          color="primary" 
          size="large"
          sx={{ 
            px: 4, 
            py: 1.5, 
            fontWeight: 600, 
            fontSize: { xs: '1rem', sm: '1.1rem' },
            boxShadow: theme.palette.mode === 'dark' ? '0 4px 12px rgba(0, 0, 0, 0.3)' : '0 4px 12px rgba(0, 0, 0, 0.1)',
            '&:hover': {
              boxShadow: theme.palette.mode === 'dark' ? '0 6px 16px rgba(0, 0, 0, 0.4)' : '0 6px 16px rgba(0, 0, 0, 0.15)'
            }
          }}
        >
          Contactar para un Proyecto
        </Button>
      </Box>
    </MotionContainer>
  );
}
