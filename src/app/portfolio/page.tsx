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
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import WorkIcon from '@mui/icons-material/Work';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useRouter } from 'next/navigation';

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
  id: string;
}

// Interfaz para las tarjetas de experiencia
interface ExperienceCardProps {
  icon: React.ReactNode;
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  delay: number;
  color?: string;
}

// Interfaz para las tarjetas de testimonios
interface TestimonialCardProps {
  name: string;
  position: string;
  company: string;
  avatar: string;
  testimonial: string;
  rating: number;
  delay: number;
}

// Interfaz para las tarjetas de certificación
interface CertificationCardProps {
  title: string;
  institution: string;
  year: string;
  description: string;
  image?: string;
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
      scale: 1.03,
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

  const router = useRouter();

  // Componente de tarjeta de servicio mejorado
  const ServiceCard = ({ 
    icon, 
    title, 
    subtitle, 
    description, 
    listItems, 
    delay, 
    color = theme.palette.primary.main,
    id
  }: ServiceCardProps) => {
    const handleMoreInfoClick = () => {
      router.push(`/servicios/${id}`);
    };
    
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
            
            <Box sx={{ mb: 2 }}>
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
            
            <Box sx={{ mt: 'auto', pt: 1 }}>
              <MotionButton
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                variant="text"
                color="primary"
                endIcon={<ArrowForwardIcon />}
                onClick={handleMoreInfoClick}
                sx={{
                  fontWeight: 500,
                  color: color,
                  textTransform: 'none',
                  p: 0,
                  cursor: 'pointer'
                }}
              >
                Más información
              </MotionButton>
            </Box>
          </CardContent>
        </Card>
      </MotionGrid>
    );
  };

  // Componente de tarjeta de experiencia
  const ExperienceCard = ({ 
    icon, 
    title, 
    company, 
    period, 
    description, 
    achievements,
    delay, 
    color = theme.palette.primary.main 
  }: ExperienceCardProps) => {
    return (
      <MotionGrid 
        item 
        xs={12} 
        md={6}
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
              <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: color,
                    fontWeight: 600
                  }}
                >
                  {company}
                </Typography>
                
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)',
                  borderRadius: 10,
                  px: 1.5,
                  py: 0.5
                }}>
                  <CalendarTodayIcon sx={{ fontSize: 14, mr: 0.5, color: theme.palette.text.secondary }} />
                  <Typography variant="caption" sx={{ color: theme.palette.text.secondary, fontWeight: 500 }}>
                    {period}
                  </Typography>
                </Box>
              </Box>
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
            
            <Typography 
              variant="subtitle2" 
              sx={{ 
                mb: 1.5,
                color: color,
                fontWeight: 600
              }}
            >
              Logros destacados:
            </Typography>
            
            <Box>
              {achievements.map((item: string, index: number) => (
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
          </CardContent>
        </Card>
      </MotionGrid>
    );
  };

  // Componente de tarjeta de testimonio
  const TestimonialCard = ({
    name,
    position,
    company,
    avatar,
    testimonial,
    rating,
    delay
  }: TestimonialCardProps) => {
    return (
      <MotionGrid 
        item 
        xs={12} 
        md={4}
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
            overflow: 'hidden'
          }}
        >
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
              <Avatar 
                sx={{ 
                  width: 80, 
                  height: 80, 
                  mb: 2, 
                  bgcolor: theme.palette.secondary.main,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                }}
              >
                {avatar}
              </Avatar>
              
              <Typography 
                variant="h6" 
                component="h3" 
                sx={{ 
                  textAlign: 'center',
                  fontWeight: 700,
                  color: theme.palette.primary.main,
                  mb: 0.5
                }}
              >
                {name}
              </Typography>
              
              <Typography 
                variant="body2" 
                sx={{ 
                  textAlign: 'center', 
                  mb: 1,
                  color: theme.palette.text.secondary,
                  fontWeight: 500
                }}
              >
                {position} - {company}
              </Typography>
              
              <Box sx={{ 
                mt: 1, 
                display: 'flex', 
                alignItems: 'center',
                padding: '4px 12px',
                bgcolor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.1)' : 'rgba(217, 176, 156, 0.15)',
                borderRadius: 10,
                border: '1px solid',
                borderColor: theme.palette.secondary.light,
              }}>
                <Box sx={{ 
                  display: 'flex', 
                  mr: 1,
                  color: theme.palette.secondary.main 
                }}>
                  {[...Array(Math.floor(rating))].map((_, i) => (
                    <StarIcon key={i} sx={{ fontSize: '1rem' }} />
                  ))}
                  {rating % 1 > 0 && <StarHalfIcon sx={{ fontSize: '1rem' }} />}
                </Box>
                
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontWeight: 600,
                    color: theme.palette.text.secondary
                  }}
                >
                  {rating.toFixed(1)}
                </Typography>
              </Box>
            </Box>
            
            <Box 
              sx={{ 
                p: 2.5, 
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
                &ldquo;{testimonial}&rdquo;
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </MotionGrid>
    );
  };

  // Componente de tarjeta de certificación
  const CertificationCard = ({
    title,
    institution,
    year,
    description,
    delay,
    color = theme.palette.primary.main
  }: CertificationCardProps) => {
    return (
      <MotionGrid 
        item 
        xs={12} sm={6}
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
            overflow: 'hidden'
          }}
        >
          <Box 
            sx={{
              p: 3,
              background: `linear-gradient(135deg, ${color} 0%, ${theme.palette.secondary.main} 100%)`,
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
              {title}
            </Typography>
            <Box 
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: 0.1,
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
                  color: color,
                  mb: 0.5
                }}
              >
                {institution}
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: theme.palette.text.secondary
                }}
              >
                {year}
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
              {description}
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
    );
  };

  // Datos de los servicios
  const services = [
    {
      id: 'contabilidad-para-empresas',
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
      id: 'asesoria-para-personas-naturales',
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
      id: 'consultorias-especializadas',
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
      id: 'auditoria-y-revision',
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
      id: 'gestion-tributaria',
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

  // Datos de experiencia profesional
  const experiences = [
    {
      icon: <WorkIcon sx={{ fontSize: 30 }} />,
      title: "Gerente Financiera",
      company: "Grupo Empresarial XYZ",
      period: "2019 - Presente",
      description: "Lidero el departamento financiero de un grupo empresarial con operaciones en múltiples sectores, gestionando un equipo de profesionales y reportando directamente a la junta directiva.",
      achievements: [
        "Implementación exitosa de NIIF para todas las empresas del grupo",
        "Reducción del 22% en la carga tributaria mediante planeación fiscal legal",
        "Optimización del flujo de caja y reducción del ciclo de conversión de efectivo",
        "Negociación de financiamiento corporativo con condiciones preferenciales"
      ],
      delay: 0,
      color: theme.palette.primary.main
    },
    {
      icon: <WorkIcon sx={{ fontSize: 30 }} />,
      title: "Consultora Tributaria Senior",
      company: "Deloitte",
      period: "2016 - 2019",
      description: "Asesoré a clientes corporativos en materia tributaria, participando en proyectos de planeación fiscal, due diligence y reestructuración empresarial para optimización de cargas impositivas.",
      achievements: [
        "Liderazgo de proyectos para más de 15 clientes multinacionales",
        "Desarrollo de estrategias de planificación fiscal que generaron ahorros de más de $2M",
        "Participación en procesos de due diligence para adquisiciones corporativas",
        "Capacitación a equipos junior en normativa tributaria compleja"
      ],
      delay: 1,
      color: theme.palette.secondary.main
    },
    {
      icon: <WorkIcon sx={{ fontSize: 30 }} />,
      title: "Auditora Financiera",
      company: "KPMG",
      period: "2013 - 2016",
      description: "Participé en auditorías financieras para empresas de diversos sectores, verificando el cumplimiento de normas contables y evaluando controles internos para la emisión de estados financieros confiables.",
      achievements: [
        "Auditoría de estados financieros para empresas del sector financiero y retail",
        "Identificación de riesgos y mejoras en procesos de control interno",
        "Verificación de cumplimiento normativo en materia contable y fiscal",
        "Implementación de mejoras metodológicas en procesos de auditoría"
      ],
      delay: 2,
      color: theme.palette.error.main
    },
    {
      icon: <WorkIcon sx={{ fontSize: 30 }} />,
      title: "Contadora Junior",
      company: "Empresa Manufacturera ABC",
      period: "2010 - 2013",
      description: "Inicié mi carrera profesional gestionando procesos contables y tributarios para una empresa manufacturera de tamaño mediano, reportando al gerente financiero y apoyando en todas las áreas del ciclo contable.",
      achievements: [
        "Gestión completa del ciclo contable mensual",
        "Preparación de declaraciones tributarias e informes a entidades regulatorias",
        "Participación en el proceso de implementación de un nuevo ERP",
        "Conciliaciones bancarias y control de tesorería"
      ],
      delay: 3,
      color: theme.palette.info.main
    }
  ];

  // Datos de testimonios
  const testimonials = [
    {
      name: "Juan Pérez",
      position: "Gerente General",
      company: "Empresa ABC",
      avatar: "JP",
      testimonial: "La asesoría tributaria de Alejandra fue fundamental para optimizar nuestra estructura fiscal. Su conocimiento profundo y atención al detalle nos ayudó a ahorrar considerablemente en impuestos de manera legal. Altamente recomendada.",
      rating: 5.0,
      delay: 0
    },
    {
      name: "María Rodríguez",
      position: "Directora Financiera",
      company: "XYZ S.A.S",
      avatar: "MR",
      testimonial: "Trabajar con Alejandra en la implementación de NIIF fue una experiencia excelente. Su metodología clara y enfoque práctico facilitó enormemente la transición. Ahora tenemos estados financieros confiables y comparables internacionalmente.",
      rating: 5.0,
      delay: 1
    },
    {
      name: "Carlos Gómez",
      position: "Emprendedor",
      company: "Startup Tech",
      avatar: "CG",
      testimonial: "Como emprendedor, necesitaba alguien que me guiara en el mundo contable y tributario. Alejandra no solo me ayudó con la contabilidad de mi startup, sino que me educó para entender mejor las finanzas de mi negocio.",
      rating: 4.5,
      delay: 2
    },
    {
      name: "Laura Martínez",
      position: "Gerente de Operaciones",
      company: "Constructora 123",
      avatar: "LM",
      testimonial: "La auditoría realizada por Alejandra fue exhaustiva y profesional. Identificó áreas de mejora que no habíamos notado y nos proporcionó recomendaciones accionables que implementamos con excelentes resultados.",
      rating: 5.0,
      delay: 3
    },
    {
      name: "Roberto Sánchez",
      position: "Director General",
      company: "Importadora RS",
      avatar: "RS",
      testimonial: "Alejandra transformó nuestra gestión financiera. Con su ayuda implementamos controles efectivos y obtuvimos una visión clara de nuestra situación fiscal. Su conocimiento y profesionalismo son excepcionales.",
      rating: 5.0,
      delay: 4
    },
    {
      name: "Ana Vargas",
      position: "Propietaria",
      company: "Boutique AV",
      avatar: "AV",
      testimonial: "Como pequeña empresaria, encontrar a Alejandra fue un alivio. Ella organizó mis finanzas, me ayudó con la planificación fiscal y me brindó la tranquilidad de saber que mi contabilidad está en orden y cumplo con todas las normativas.",
      rating: 4.5,
      delay: 5
    }
  ];

  // Datos de certificaciones
  const certifications = [
    {
      title: "Contador Público Certificado",
      institution: "Universidad Nacional de Colombia",
      year: "2010 - 2015",
      description: "Título profesional en Contaduría Pública con honores académicos y distinción por mejor promedio de la promoción.",
      delay: 0,
      color: theme.palette.primary.main
    },
    {
      title: "Especialización en Impuestos",
      institution: "Universidad Externado de Colombia",
      year: "2016 - 2017",
      description: "Especialización en derecho tributario y planeación fiscal. Proyecto final con reconocimiento por su aplicación práctica en casos reales.",
      delay: 1,
      color: theme.palette.info.main
    },
    {
      title: "Certificación en NIIF",
      institution: "Instituto IFRS Internacional",
      year: "2018",
      description: "Certificación internacional en aplicación e implementación de Normas Internacionales de Información Financiera (NIIF/IFRS) para empresas.",
      delay: 2,
      color: theme.palette.error.main
    },
    {
      title: "Auditor Financiero Certificado",
      institution: "Asociación de Auditores Certificados",
      year: "2019",
      description: "Certificación profesional en auditoría financiera y control interno según estándares internacionales. Capacitación en técnicas avanzadas de detección de fraudes y evaluación de riesgos.",
      delay: 3,
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

          <TabPanel value={tabValue} index={1}>
            {/* Contenido de Experiencia */}
            <MotionGrid 
              container 
              spacing={{ xs: 3, sm: 3, md: 4 }}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              sx={{ mx: { xs: -1, sm: 0 } }}
            >
              {experiences.map((experience, index) => (
                <ExperienceCard key={index} {...experience} />
              ))}
            </MotionGrid>
          </TabPanel>
          
          <TabPanel value={tabValue} index={2}>
            {/* Contenido de Testimonios */}
            <MotionGrid 
              container 
              spacing={{ xs: 3, sm: 3, md: 4 }}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              sx={{ mx: { xs: -1, sm: 0 } }}
            >
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </MotionGrid>
          </TabPanel>
          
          <TabPanel value={tabValue} index={3}>
            {/* Contenido de Certificaciones */}
            <MotionGrid 
              container 
              spacing={{ xs: 3, sm: 3, md: 4 }}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              sx={{ mx: { xs: -1, sm: 0 } }}
            >
              {certifications.map((certification, index) => (
                <CertificationCard key={index} {...certification} />
              ))}
            </MotionGrid>
          </TabPanel>
        </MotionBox>
      </Paper>
    </MotionContainer>
  );
}
