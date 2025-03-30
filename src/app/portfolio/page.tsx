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
  Container,
  Chip
} from "@mui/material";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import BusinessIcon from "@mui/icons-material/Business";
import PersonIcon from "@mui/icons-material/Person";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import BalanceIcon from "@mui/icons-material/Balance";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const MotionContainer = motion(Container);
const MotionGrid = motion(Grid);
const MotionBox = motion(Box);
const MotionButton = motion(Button);

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

// Interfaz para las propiedades de ServiceCard
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  listItems: string[];
  delay: number;
  color?: string;
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
  
  // Referencias para efectos de scroll
  const headerRef = useRef(null);
  const tabsRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const isTabsInView = useInView(tabsRef, { once: true });

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.15,
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0] // easeCubic
      }
    }),
    hover: {
      y: -8,
      boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.15)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };
  
  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  const tabsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };
  
  const lineVariants = {
    hidden: { width: "0%" },
    visible: { 
      width: "70px",
      transition: { 
        duration: 0.8,
        delay: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Componente de tarjeta de servicio mejorado
  const ServiceCard = ({ 
    icon, 
    title, 
    subtitle, 
    description, 
    listItems, 
    delay, 
    color = theme.palette.primary.main 
  }: ServiceCardProps) => {
    return (
      <MotionGrid 
        item 
        xs={12} sm={6} md={4}
        variants={cardVariants}
        custom={delay}
        whileHover="hover"
        sx={{ px: { xs: 1, sm: 2 }, mb: { xs: 4, sm: 3 } }}
      >
        <Card 
          sx={{
            height: '100%', 
            transition: 'all 0.3s ease',
            border: '1px solid',
            borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.06)',
            boxShadow: theme.palette.mode === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
            bgcolor: theme.palette.mode === 'dark' ? theme.palette.background.paper : '#ffffff',
            borderRadius: 3,
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          {/* Elemento decorativo superior */}
          <Box 
            sx={{ 
              height: '8px', 
              width: '100%', 
              bgcolor: color,
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 1
            }} 
          />
          
          <CardHeader 
            avatar={
              <Avatar 
                sx={{ 
                  bgcolor: color,
                  width: 56,
                  height: 56,
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.1) rotate(5deg)'
                  }
                }}
              >
                {icon}
              </Avatar>
            }
            title={
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: theme.palette.text.primary,
                  mb: 0.5,
                  fontSize: { xs: '1.25rem', md: '1.35rem' }
                }}
              >
                {title}
              </Typography>
            }
            subheader={
              <Typography
                variant="subtitle2"
                sx={{
                  color: color,
                  fontWeight: 500
                }}
              >
                {subtitle}
              </Typography>
            }
            sx={{ pb: 0 }}
          />
          
          <CardContent>
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 2.5,
                color: theme.palette.text.primary,
                fontSize: '0.95rem',
                lineHeight: 1.6
              }}
            >
              {description}
            </Typography>
            
            <Divider sx={{ 
              my: 2,
              borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.06)'
            }} />
            
            <Box>
              {listItems.map((item: string, index: number) => (
                <Box 
                  key={index}
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    mb: 1.5,
                    '&:last-child': {
                      mb: 0
                    }
                  }}
                >
                  <CheckCircleOutlineIcon 
                    sx={{ 
                      fontSize: 20, 
                      mr: 1.5, 
                      color: color,
                      flexShrink: 0
                    }} 
                  />
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: theme.palette.text.primary,
                      fontWeight: 400
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
            
            <MotionButton
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              variant="text"
              color="primary"
              endIcon={<ArrowForwardIcon />}
              sx={{
                mt: 3,
                fontWeight: 500,
                color: color,
                textTransform: 'none',
                p: 0
              }}
            >
              Más información
            </MotionButton>
          </CardContent>
        </Card>
      </MotionGrid>
    );
  };

  // Datos de los servicios
  const services = [
    {
      icon: <BusinessIcon sx={{ fontSize: 30 }} />,
      title: "Contabilidad para Empresas",
      subtitle: "Servicios Corporativos",
      description: "Ofrezco servicios completos de contabilidad para empresas de todos los tamaños, desde startups hasta compañías establecidas.",
      listItems: [
        "Contabilidad financiera y fiscal",
        "Preparación de estados financieros",
        "Conciliaciones bancarias",
        "Registros contables",
        "Informes financieros mensuales"
      ],
      delay: 0,
      color: theme.palette.primary.main
    },
    {
      icon: <PersonIcon sx={{ fontSize: 30 }} />,
      title: "Asesoría para Personas Naturales",
      subtitle: "Personas Naturales",
      description: "Acompaño a personas naturales en el cumplimiento de sus obligaciones tributarias, optimizando su carga fiscal de manera legal.",
      listItems: [
        "Declaración de renta personas naturales",
        "Planeación tributaria personal",
        "Asesoría en inversiones",
        "Organización financiera personal",
        "Impuestos para independientes"
      ],
      delay: 1,
      color: theme.palette.secondary.main
    },
    {
      icon: <AccountBalanceIcon sx={{ fontSize: 30 }} />,
      title: "Consultorías Especializadas",
      subtitle: "Servicios de Alto Valor",
      description: "Brindo asesorías especializadas en temas complejos de contabilidad, tributación y finanzas para necesidades específicas.",
      listItems: [
        "Implementación de NIIF",
        "Due diligence contable y financiero",
        "Valoración de empresas",
        "Reestructuración financiera",
        "Peritajes contables"
      ],
      delay: 2,
      color: theme.palette.error.main
    },
    {
      icon: <BalanceIcon sx={{ fontSize: 30 }} />,
      title: "Auditoría y Revisión",
      subtitle: "Control y Verificación",
      description: "Realizo auditorías contables y fiscales para verificar el correcto cumplimiento normativo y la precisión de la información financiera.",
      listItems: [
        "Auditoría de estados financieros",
        "Revisión de procesos contables",
        "Auditoría fiscal y tributaria",
        "Control interno",
        "Informes de hallazgos y recomendaciones"
      ],
      delay: 3,
      color: theme.palette.info.main
    },
    {
      icon: <ReceiptLongIcon sx={{ fontSize: 30 }} />,
      title: "Gestión Tributaria",
      subtitle: "Impuestos y Obligaciones",
      description: "Manejo eficiente de obligaciones tributarias, maximizando beneficios fiscales conforme a la normativa vigente.",
      listItems: [
        "Declaraciones de IVA y retenciones",
        "Impuestos municipales y distritales",
        "Planeación fiscal corporativa",
        "Gestión de devoluciones de impuestos",
        "Asesoría en regulación impositiva"
      ],
      delay: 4,
      color: theme.palette.success.main
    }
  ];

  return (
    <MotionContainer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      maxWidth="lg" 
      sx={{ 
        py: 8, 
        px: { xs: 1, sm: 3, lg: 4 } 
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
        <MotionBox 
          ref={headerRef}
          variants={headerVariants}
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
          sx={{ p: { xs: 2, sm: 4, md: 5 } }}
        >
          <Box sx={{ mb: 8, textAlign: 'center' }}>
            <Typography 
              variant="h2" 
              component="h1" 
              sx={{ 
                fontWeight: 800, 
                mb: 3, 
                color: theme.palette.primary.main,
                fontSize: { xs: '2.25rem', sm: '2.75rem', md: '3.5rem' },
                letterSpacing: '-0.025em',
                lineHeight: 1.2
              }}
            >
              Mi Portafolio
            </Typography>
            
            <MotionBox
              variants={lineVariants}
              initial="hidden"
              animate={isHeaderInView ? "visible" : "hidden"}
              sx={{
                height: '4px',
                bgcolor: theme.palette.secondary.main,
                mx: 'auto',
                mb: 4,
                borderRadius: '2px'
              }}
            />
            
            <Typography 
              variant="h5" 
              sx={{ 
                color: theme.palette.text.secondary, 
                maxWidth: '800px', 
                mx: 'auto',
                mb: 4,
                fontSize: { xs: '1.1rem', sm: '1.25rem' },
                lineHeight: 1.6,
                fontWeight: 400
              }}
            >
              Conozca mi experiencia y los servicios que ofrezco como Contadora Pública especializada en asesoría tributaria y financiera.
            </Typography>
            
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              sx={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                justifyContent: 'center',
                gap: 2,
                mb: 2
              }}
            >
              <Chip 
                label="Contabilidad" 
                size="medium"
                color="primary" 
                sx={{ fontWeight: 500, px: 1 }}
              />
              <Chip 
                label="Tributación" 
                size="medium"
                color="secondary" 
                sx={{ fontWeight: 500, px: 1 }}
              />
              <Chip 
                label="Finanzas" 
                size="medium"
                color="success" 
                sx={{ fontWeight: 500, px: 1 }}
              />
              <Chip 
                label="NIIF" 
                size="medium"
                color="error" 
                sx={{ fontWeight: 500, px: 1 }}
              />
              <Chip 
                label="Auditoría" 
                size="medium"
                color="info" 
                sx={{ fontWeight: 500, px: 1 }}
              />
            </MotionBox>
          </Box>
          
          <MotionBox
            ref={tabsRef}
            variants={tabsVariants}
            initial="hidden"
            animate={isTabsInView ? "visible" : "hidden"}
          >
            <Box 
              sx={{ 
                borderBottom: 1, 
                borderColor: 'divider', 
                mb: 4,
                display: 'flex',
                justifyContent: 'center'
              }}
            >
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
                    fontSize: { xs: '0.95rem', sm: '1.1rem' },
                    minWidth: { xs: 'auto', sm: 120 },
                    py: 2.5,
                    px: 3
                  }
                }}
              >
                <Tab label="Servicios" id="portfolio-tab-0" aria-controls="portfolio-tabpanel-0" />
                <Tab label="Experiencia" id="portfolio-tab-1" aria-controls="portfolio-tabpanel-1" />
                <Tab label="Testimonios" id="portfolio-tab-2" aria-controls="portfolio-tabpanel-2" />
                <Tab label="Certificaciones" id="portfolio-tab-3" aria-controls="portfolio-tabpanel-3" />
              </Tabs>
            </Box>
          </MotionBox>

          <TabPanel value={tabValue} index={0}>
            <MotionGrid 
              container 
              spacing={{ xs: 3, sm: 3, md: 4 }}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              sx={{ mx: { xs: -1, sm: 0 } }}
            >
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </MotionGrid>
          </TabPanel>

          {/* Mantener el resto de las pestañas */}
          <TabPanel value={tabValue} index={1}>
            {/* Contenido de Experiencia */}
            <Typography variant="body1">Contenido de experiencia en desarrollo...</Typography>
          </TabPanel>
          
          <TabPanel value={tabValue} index={2}>
            {/* Contenido de Testimonios */}
            <Typography variant="body1">Contenido de testimonios en desarrollo...</Typography>
          </TabPanel>
          
          <TabPanel value={tabValue} index={3}>
            {/* Contenido de Certificaciones */}
            <Typography variant="body1">Contenido de certificaciones en desarrollo...</Typography>
          </TabPanel>
        </MotionBox>
      </Paper>
    </MotionContainer>
  );
}
