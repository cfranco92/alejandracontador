"use client";

import { 
  Box, 
  Typography, 
  Container, 
  Paper, 
  Divider, 
  Button, 
  Grid, 
  useTheme,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Breadcrumbs,
  Link
} from "@mui/material";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import BusinessIcon from "@mui/icons-material/Business";
import PersonIcon from "@mui/icons-material/Person";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import BalanceIcon from "@mui/icons-material/Balance";

// Componentes con animación
const MotionContainer = motion(Container);
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionPaper = motion(Paper);
const MotionButton = motion(Button);

// Datos de los servicios
const servicesData = [
  {
    id: 'contabilidad-para-empresas',
    icon: <BusinessIcon sx={{ fontSize: 40 }} />,
    title: "Contabilidad para Empresas",
    subtitle: "Servicios Corporativos",
    description: "Ofrezco servicios completos de contabilidad para empresas de todos los tamaños, desde startups hasta compañías establecidas.",
    longDescription: "La contabilidad empresarial es el pilar fundamental para el éxito financiero de cualquier organización. Mi enfoque combina precisión técnica con una visión estratégica, proporcionando servicios contables que van más allá del simple cumplimiento normativo para convertirse en herramientas de toma de decisiones.\n\nTrabajo con empresas de diversos tamaños y sectores, adaptando mis servicios a sus necesidades específicas y objetivos de crecimiento. Entiendo la importancia de tener información financiera precisa, oportuna y presentada de manera clara para facilitar la gestión empresarial efectiva.",
    benefits: [
      "Cumplimiento normativo garantizado con todas las regulaciones contables",
      "Información financiera exacta y oportuna para toma de decisiones",
      "Optimización de procesos contables para mayor eficiencia",
      "Reducción de costos operativos asociados a la gestión contable",
      "Prevención de errores que podrían generar sanciones o contingencias"
    ],
    services: [
      "Contabilidad financiera y fiscal completa",
      "Preparación de estados financieros mensuales, trimestrales y anuales",
      "Conciliaciones bancarias y control de tesorería",
      "Registros contables y libros oficiales",
      "Informes financieros personalizados para la gerencia",
      "Implementación y mantenimiento de sistemas contables",
      "Asesoría en normativa NIIF/IFRS"
    ],
    color: "#2196f3", // primary
    image: "/images/contabilidad-empresas.jpg"
  },
  {
    id: 'asesoria-para-personas-naturales',
    icon: <PersonIcon sx={{ fontSize: 40 }} />,
    title: "Asesoría para Personas Naturales",
    subtitle: "Personas Naturales",
    description: "Acompaño a personas naturales en el cumplimiento de sus obligaciones tributarias, optimizando su carga fiscal de manera legal.",
    longDescription: "Las finanzas personales requieren atención profesional tanto como las empresariales. Mi servicio de asesoría para personas naturales está diseñado para ayudarle a cumplir sus obligaciones fiscales mientras optimizamos su situación tributaria dentro del marco legal.\n\nEntiendo que cada persona tiene circunstancias financieras únicas, por lo que mis soluciones son siempre personalizadas. Mi objetivo es proporcionar tranquilidad financiera, evitar contingencias con las autoridades fiscales y maximizar los beneficios disponibles en la legislación actual.",
    benefits: [
      "Minimización legal de la carga tributaria mediante deducciones y beneficios",
      "Prevención de sanciones por incumplimientos o errores en declaraciones",
      "Planificación financiera para mejor gestión de recursos personales",
      "Acompañamiento personalizado adaptado a su situación particular",
      "Tranquilidad de contar con un profesional que vela por sus intereses"
    ],
    services: [
      "Elaboración de declaración de renta para personas naturales",
      "Planificación tributaria personalizada",
      "Asesoría en inversiones y tratamiento fiscal",
      "Organización financiera personal y familiar",
      "Gestión de impuestos para profesionales independientes",
      "Consultoría en obligaciones tributarias especiales",
      "Representación ante autoridades fiscales"
    ],
    color: "#9c27b0", // secondary
    image: "/images/asesoria-personas.jpg"
  },
  {
    id: 'consultorias-especializadas',
    icon: <AccountBalanceIcon sx={{ fontSize: 40 }} />,
    title: "Consultorías Especializadas",
    subtitle: "Servicios de Alto Valor",
    description: "Brindo asesorías especializadas en temas complejos de contabilidad, tributación y finanzas para necesidades específicas.",
    longDescription: "Las consultorías especializadas abordan desafíos financieros y contables complejos que requieren experiencia técnica avanzada y un enfoque estratégico. Mi servicio está diseñado para ayudar a organizaciones y personas a navegar situaciones financieras complejas con confianza y precisión.\n\nCada consultoría es única y se adapta completamente a los requerimientos específicos del cliente. Combino mi conocimiento técnico con una visión práctica orientada a resultados, para ofrecer soluciones implementables que generen valor real.",
    benefits: [
      "Resolución de problemas financieros complejos con enfoque especializado",
      "Acceso a experiencia técnica avanzada en temas contables y tributarios",
      "Análisis profundo de situaciones financieras para mejor toma de decisiones",
      "Implementación de mejores prácticas adaptadas a su contexto específico",
      "Valor agregado a través de soluciones innovadoras y estratégicas"
    ],
    services: [
      "Implementación de Normas Internacionales de Información Financiera (NIIF)",
      "Due diligence contable y financiero para fusiones y adquisiciones",
      "Valoración de empresas y análisis financiero avanzado",
      "Reestructuración financiera para optimización de recursos",
      "Peritajes contables y financieros",
      "Desarrollo de modelos financieros a medida",
      "Consultoría en sistemas de información financiera"
    ],
    color: "#f44336", // error
    image: "/images/consultorias-especializadas.jpg"
  },
  {
    id: 'auditoria-y-revision',
    icon: <BalanceIcon sx={{ fontSize: 40 }} />,
    title: "Auditoría y Revisión",
    subtitle: "Control y Verificación",
    description: "Realizo auditorías contables y fiscales para verificar el correcto cumplimiento normativo y la precisión de la información financiera.",
    longDescription: "Los servicios de auditoría y revisión permiten obtener una evaluación independiente y objetiva de la información financiera y los procesos contables de una organización. Más allá de identificar errores, mi enfoque busca agregar valor mediante la identificación de oportunidades de mejora y la mitigación de riesgos.\n\nMi metodología de auditoría combina rigor técnico con practicidad, concentrándose en las áreas de mayor riesgo y relevancia para entregar resultados significativos que contribuyan al fortalecimiento de la organización.",
    benefits: [
      "Identificación y corrección de errores en la información financiera",
      "Mejora de los sistemas de control interno y procesos contables",
      "Cumplimiento verificado con regulaciones contables y fiscales",
      "Mayor credibilidad de la información financiera ante terceros",
      "Detección temprana de riesgos y áreas de vulnerabilidad"
    ],
    services: [
      "Auditoría de estados financieros completa o de componentes específicos",
      "Revisión de procesos contables y controles internos",
      "Auditoría fiscal y tributaria",
      "Desarrollo y evaluación de sistemas de control interno",
      "Informes detallados de hallazgos y recomendaciones",
      "Auditorías especiales para fines específicos",
      "Revisión de cumplimiento normativo"
    ],
    color: "#03a9f4", // info
    image: "/images/auditoria-revision.jpg"
  },
  {
    id: 'gestion-tributaria',
    icon: <ReceiptLongIcon sx={{ fontSize: 40 }} />,
    title: "Gestión Tributaria",
    subtitle: "Impuestos y Obligaciones",
    description: "Manejo eficiente de obligaciones tributarias, maximizando beneficios fiscales conforme a la normativa vigente.",
    longDescription: "La gestión tributaria eficiente es fundamental para cualquier organización o persona, permitiendo cumplir adecuadamente con las obligaciones fiscales mientras se aprovechan los beneficios e incentivos previstos en la legislación. Mi servicio ofrece una administración integral de todos los aspectos tributarios para optimizar la carga impositiva de forma legal y segura.\n\nCon constantes cambios en la normativa fiscal, contar con un asesor especializado marca la diferencia entre simplemente cumplir y hacerlo de manera eficiente. Mi enfoque combina cumplimiento riguroso con planificación estratégica para maximizar resultados.",
    benefits: [
      "Reducción legal de la carga tributaria mediante planificación eficiente",
      "Eliminación de riesgos de sanciones por incumplimientos tributarios",
      "Aprovechamiento óptimo de beneficios e incentivos fiscales disponibles",
      "Previsibilidad en el impacto fiscal de operaciones y transacciones",
      "Representación profesional ante autoridades tributarias"
    ],
    services: [
      "Preparación y presentación de declaraciones de IVA y retenciones",
      "Gestión de impuestos municipales y distritales",
      "Planificación fiscal corporativa",
      "Gestión de devoluciones y compensaciones de impuestos",
      "Asesoría en regulación impositiva y cambios normativos",
      "Representación ante auditorías y fiscalizaciones",
      "Optimización de la estructura tributaria empresarial"
    ],
    color: "#4caf50", // success
    image: "/images/gestion-tributaria.jpg"
  }
];

// Interfaz para la estructura de los servicios
interface ServiceData {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  benefits: string[];
  services: string[];
  color: string;
  image: string;
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const [service, setService] = useState<ServiceData | null>(null);
  const theme = useTheme();
  
  useEffect(() => {
    // Encontrar el servicio correspondiente al slug
    const currentSlug = Array.isArray(slug) ? slug[0] : slug;
    if (currentSlug) {
      const foundService = servicesData.find(s => 
        s.id === currentSlug || 
        s.id === currentSlug.replace(/-/g, '-')
      );
      
      if (foundService) {
        setService(foundService);
      }
    }
  }, [slug]);
  
  if (!service) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4">Servicio no encontrado</Typography>
        <Button 
          href="/portfolio" 
          startIcon={<ArrowBackIcon />}
          sx={{ mt: 2 }}
        >
          Volver a Portafolio
        </Button>
      </Container>
    );
  }
  
  return (
    <MotionContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      maxWidth="lg"
      sx={{ py: 8, px: { xs: 2, sm: 3, lg: 4 } }}
    >
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 4 }}>
          <Link href="/" color="inherit" underline="hover">
            Inicio
          </Link>
          <Link href="/portfolio" color="inherit" underline="hover">
            Portafolio
          </Link>
          <Typography color="text.primary">{service.title}</Typography>
        </Breadcrumbs>
      </MotionBox>
      
      <MotionPaper
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        elevation={3}
        sx={{ 
          borderRadius: 4, 
          overflow: 'hidden',
          mb: 5
        }}
      >
        <Box sx={{ 
          p: { xs: 3, sm: 5 },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'center', md: 'flex-start' },
          gap: 4
        }}>
          <Avatar 
            sx={{ 
              bgcolor: service.color,
              width: { xs: 80, md: 100 },
              height: { xs: 80, md: 100 },
              boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
              mb: { xs: 2, md: 0 }
            }}
          >
            {service.icon}
          </Avatar>
          
          <Box sx={{ flex: 1 }}>
            <MotionTypography
              variant="overline"
              sx={{ 
                color: service.color,
                fontWeight: 600,
                letterSpacing: 1
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {service.subtitle}
            </MotionTypography>
            
            <Box component="h1" sx={{ m: 0, p: 0 }}>
              <MotionTypography
                variant="h3"
                sx={{ 
                  fontWeight: 800,
                  mb: 2,
                  color: theme.palette.text.primary
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                {service.title}
              </MotionTypography>
            </Box>
            
            <MotionTypography
              variant="body1"
              sx={{ 
                color: theme.palette.text.secondary,
                fontWeight: 500,
                fontSize: '1.1rem',
                lineHeight: 1.6,
                mb: 3
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {service.description}
            </MotionTypography>
            
            <Divider sx={{ mb: 3 }} />
            
            <MotionButton
              variant="outlined"
              color="primary"
              size="large"
              href="/contact"
              sx={{ 
                borderRadius: 8,
                px: 3,
                py: 1,
                fontWeight: 600,
                borderWidth: 2,
                '&:hover': {
                  borderWidth: 2
                }
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              Solicitar este servicio
            </MotionButton>
          </Box>
        </Box>
      </MotionPaper>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <MotionPaper
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            elevation={2}
            sx={{ 
              borderRadius: 4, 
              p: { xs: 3, sm: 4 },
              height: '100%'
            }}
          >
            <MotionTypography
              variant="h5"
              sx={{ 
                fontWeight: 700,
                mb: 3,
                color: service.color,
                pb: 1,
                borderBottom: `3px solid ${service.color}`
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Descripción Detallada
            </MotionTypography>
            
            <MotionTypography
              variant="body1"
              sx={{ 
                color: theme.palette.text.primary,
                whiteSpace: 'pre-line',
                lineHeight: 1.8
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {service.longDescription}
            </MotionTypography>
          </MotionPaper>
        </Grid>
        
        <Grid item xs={12} md={5}>
          <MotionPaper
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            elevation={2}
            sx={{ 
              borderRadius: 4, 
              p: { xs: 3, sm: 4 },
              mb: 4
            }}
          >
            <MotionTypography
              variant="h5"
              sx={{ 
                fontWeight: 700,
                mb: 3,
                color: service.color,
                pb: 1,
                borderBottom: `3px solid ${service.color}`
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Beneficios
            </MotionTypography>
            
            <List sx={{ py: 0 }}>
              {service.benefits.map((benefit: string, index: number) => (
                <ListItem 
                  key={index} 
                  disableGutters 
                  sx={{ py: 1 }}
                  component={motion.li}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + (index * 0.1) }}
                >
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <CheckCircleOutlineIcon sx={{ color: service.color }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary={benefit} 
                    primaryTypographyProps={{ 
                      variant: 'body2',
                      sx: { 
                        fontWeight: 500
                      } 
                    }} 
                  />
                </ListItem>
              ))}
            </List>
          </MotionPaper>
          
          <MotionPaper
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            elevation={2}
            sx={{ 
              borderRadius: 4, 
              p: { xs: 3, sm: 4 }
            }}
          >
            <MotionTypography
              variant="h5"
              sx={{ 
                fontWeight: 700,
                mb: 3,
                color: service.color,
                pb: 1,
                borderBottom: `3px solid ${service.color}`
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Servicios Incluidos
            </MotionTypography>
            
            <List sx={{ py: 0 }}>
              {service.services.map((item: string, index: number) => (
                <ListItem 
                  key={index} 
                  disableGutters 
                  sx={{ py: 1 }}
                  component={motion.li}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + (index * 0.1) }}
                >
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <CheckCircleOutlineIcon sx={{ color: service.color }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary={item} 
                    primaryTypographyProps={{ 
                      variant: 'body2',
                      sx: { 
                        fontWeight: 500
                      } 
                    }} 
                  />
                </ListItem>
              ))}
            </List>
          </MotionPaper>
        </Grid>
      </Grid>
      
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        sx={{ 
          mt: 6, 
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Button
          variant="outlined"
          color="primary"
          startIcon={<ArrowBackIcon />}
          href="/portfolio"
          sx={{ 
            borderRadius: 2,
            fontWeight: 600,
            mr: 2
          }}
        >
          Volver a Portafolio
        </Button>
        
        <Button
          variant="contained"
          color="primary"
          href="/contact"
          sx={{ 
            borderRadius: 2,
            fontWeight: 600,
            boxShadow: 3
          }}
        >
          Contactar Ahora
        </Button>
      </MotionBox>
    </MotionContainer>
  );
} 