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
  Chip,
  Rating,
  useTheme,
  Paper,
  Container
} from "@mui/material";
import { useState } from "react";
import BusinessIcon from "@mui/icons-material/Business";
import PersonIcon from "@mui/icons-material/Person";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import BalanceIcon from "@mui/icons-material/Balance";
import Image from "next/image";

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

function a11yProps(index: number) {
  return {
    id: `portfolio-tab-${index}`,
    'aria-controls': `portfolio-tabpanel-${index}`,
  };
}

export default function Portfolio() {
  const [tabValue, setTabValue] = useState(0);
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6, px: { xs: 2, sm: 3, lg: 4 } }}>
      <Paper
        elevation={isDarkMode ? 3 : 2}
        sx={{
          overflow: "hidden",
          borderRadius: 3,
          backgroundColor: isDarkMode ? "rgba(15, 23, 42, 0.95)" : "#ffffff",
          border: "1px solid",
          borderColor: isDarkMode
            ? "rgba(59, 130, 246, 0.1)"
            : "rgba(226, 232, 240, 0.8)",
          boxShadow: isDarkMode
            ? "0 4px 20px rgba(0, 0, 0, 0.3)"
            : "0 4px 20px rgba(0, 0, 0, 0.08)",
        }}
      >
        <Box sx={{ p: { xs: 3, sm: 4, md: 5 } }}>
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

          <Box sx={{ 
            borderBottom: 1, 
            borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.1)' : 'rgba(217, 176, 156, 0.2)',
            mb: 3 
          }}>
            <Tabs 
              value={tabValue} 
              onChange={handleTabChange} 
              aria-label="portfolio tabs"
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
              sx={{ 
                '& .MuiTab-root': { 
                  minWidth: { xs: '100px', sm: '140px' },
                  py: { xs: 1, sm: 1.5 },
                  px: { xs: 1, sm: 2 },
                  color: theme.palette.text.primary,
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                  fontWeight: 500
                },
                '& .Mui-selected': {
                  color: `${theme.palette.secondary.main} !important`,
                  fontWeight: 600
                },
                '& .MuiTabs-indicator': {
                  backgroundColor: theme.palette.secondary.main,
                  height: 3
                }
              }}
            >
              <Tab 
                label="Servicios" 
                icon={<BusinessIcon />} 
                iconPosition="start" 
                sx={{ 
                  '.MuiTab-iconWrapper': { 
                    display: { xs: 'none', sm: 'inline-flex' } 
                  } 
                }}
                {...a11yProps(0)}
              />
              <Tab 
                label="Proyectos" 
                icon={<ReceiptLongIcon />} 
                iconPosition="start" 
                sx={{ 
                  '.MuiTab-iconWrapper': { 
                    display: { xs: 'none', sm: 'inline-flex' } 
                  } 
                }}
                {...a11yProps(1)}
              />
              <Tab 
                label="Testimonios" 
                icon={<PersonIcon />} 
                iconPosition="start" 
                sx={{ 
                  '.MuiTab-iconWrapper': { 
                    display: { xs: 'none', sm: 'inline-flex' } 
                  } 
                }}
                {...a11yProps(2)}
              />
            </Tabs>
          </Box>

          <TabPanel value={tabValue} index={0}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6} lg={4}>
                <Card 
                  sx={{
                    height: '100%', 
                    transition: 'all 0.3s ease',
                    border: '1px solid',
                    borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.1)' : 'rgba(217, 176, 156, 0.2)',
                    boxShadow: theme.palette.mode === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
                    '&:hover': {
                      boxShadow: theme.palette.mode === 'dark' ? '0 8px 25px rgba(0, 0, 0, 0.3)' : '0 8px 25px rgba(0, 0, 0, 0.1)',
                      borderColor: theme.palette.mode === 'dark' ? `rgba(217, 176, 156, 0.3)` : theme.palette.secondary.light
                    },
                    bgcolor: theme.palette.mode === 'dark' ? theme.palette.background.paper : theme.palette.background.default
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
                        <li>Contabilidad mensual y anual</li>
                        <li>Elaboración de estados financieros</li>
                        <li>Análisis financiero y reportes gerenciales</li>
                        <li>Conciliaciones bancarias</li>
                        <li>Preparación y presentación de declaraciones tributarias</li>
                      </Box>
                    </Typography>
                    <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      <Chip 
                        label="Contabilidad" 
                        size="small" 
                        sx={{ 
                          bgcolor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.05)' : 'rgba(217, 176, 156, 0.1)',
                          color: theme.palette.text.primary,
                          borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.2)' : 'rgba(217, 176, 156, 0.3)',
                          border: '1px solid'
                        }} 
                      />
                      <Chip 
                        label="Finanzas" 
                        size="small" 
                        sx={{ 
                          bgcolor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.05)' : 'rgba(217, 176, 156, 0.1)',
                          color: theme.palette.text.primary,
                          borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.2)' : 'rgba(217, 176, 156, 0.3)',
                          border: '1px solid'
                        }} 
                      />
                      <Chip 
                        label="Impuestos" 
                        size="small" 
                        sx={{ 
                          bgcolor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.05)' : 'rgba(217, 176, 156, 0.1)',
                          color: theme.palette.text.primary,
                          borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.2)' : 'rgba(217, 176, 156, 0.3)',
                          border: '1px solid'
                        }} 
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} md={6} lg={4}>
                <Card 
                  sx={{
                    height: '100%', 
                    transition: 'all 0.3s ease',
                    border: '1px solid',
                    borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.1)' : 'rgba(217, 176, 156, 0.2)',
                    boxShadow: theme.palette.mode === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
                    '&:hover': {
                      boxShadow: theme.palette.mode === 'dark' ? '0 8px 25px rgba(0, 0, 0, 0.3)' : '0 8px 25px rgba(0, 0, 0, 0.1)',
                      borderColor: theme.palette.mode === 'dark' ? `rgba(217, 176, 156, 0.3)` : theme.palette.secondary.light
                    },
                    bgcolor: theme.palette.mode === 'dark' ? theme.palette.background.paper : theme.palette.background.default
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
                        <li>Planeación tributaria</li>
                        <li>Asesoría en inversiones y tributación</li>
                        <li>Régimen simple de tributación</li>
                        <li>Respuesta a requerimientos de la DIAN</li>
                      </Box>
                    </Typography>
                    <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      <Chip 
                        label="Consultoría" 
                        size="small" 
                        sx={{ 
                          bgcolor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.05)' : 'rgba(217, 176, 156, 0.1)',
                          color: theme.palette.text.primary,
                          borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.2)' : 'rgba(217, 176, 156, 0.3)',
                          border: '1px solid'
                        }} 
                      />
                      <Chip 
                        label="Auditoría" 
                        size="small" 
                        sx={{ 
                          bgcolor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.05)' : 'rgba(217, 176, 156, 0.1)',
                          color: theme.palette.text.primary,
                          borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.2)' : 'rgba(217, 176, 156, 0.3)',
                          border: '1px solid'
                        }} 
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6} lg={4}>
                <Card 
                  sx={{
                    height: '100%', 
                    transition: 'all 0.3s ease',
                    border: '1px solid',
                    borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.1)' : 'rgba(217, 176, 156, 0.2)',
                    boxShadow: theme.palette.mode === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
                    '&:hover': {
                      boxShadow: theme.palette.mode === 'dark' ? '0 8px 25px rgba(0, 0, 0, 0.3)' : '0 8px 25px rgba(0, 0, 0, 0.1)',
                      borderColor: theme.palette.mode === 'dark' ? `rgba(217, 176, 156, 0.3)` : theme.palette.secondary.light
                    },
                    bgcolor: theme.palette.mode === 'dark' ? theme.palette.background.paper : theme.palette.background.default
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
                    <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      <Chip 
                        label="Consultoría" 
                        size="small" 
                        sx={{ 
                          bgcolor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.05)' : 'rgba(217, 176, 156, 0.1)',
                          color: theme.palette.text.primary,
                          borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.2)' : 'rgba(217, 176, 156, 0.3)',
                          border: '1px solid'
                        }} 
                      />
                      <Chip 
                        label="Auditoría" 
                        size="small" 
                        sx={{ 
                          bgcolor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.05)' : 'rgba(217, 176, 156, 0.1)',
                          color: theme.palette.text.primary,
                          borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.2)' : 'rgba(217, 176, 156, 0.3)',
                          border: '1px solid'
                        }} 
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6} lg={6}>
                <Card 
                  sx={{
                    height: '100%', 
                    transition: 'all 0.3s ease',
                    border: '1px solid',
                    borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.1)' : 'rgba(217, 176, 156, 0.2)',
                    boxShadow: theme.palette.mode === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
                    '&:hover': {
                      boxShadow: theme.palette.mode === 'dark' ? '0 8px 25px rgba(0, 0, 0, 0.3)' : '0 8px 25px rgba(0, 0, 0, 0.1)',
                      borderColor: theme.palette.mode === 'dark' ? `rgba(217, 176, 156, 0.3)` : theme.palette.secondary.light
                    },
                    bgcolor: theme.palette.mode === 'dark' ? theme.palette.background.paper : theme.palette.background.default
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
                      Realizo auditorías contables y financieras para asegurar la integridad de la información y el cumplimiento normativo.
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
                        <li>Auditoría interna y externa</li>
                        <li>Revisión de procesos contables</li>
                        <li>Verificación de cumplimiento normativo</li>
                        <li>Informes de auditoría</li>
                        <li>Recomendaciones para mejora de procesos</li>
                      </Box>
                    </Typography>
                    <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      <Chip 
                        label="Consultoría" 
                        size="small" 
                        sx={{ 
                          bgcolor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.05)' : 'rgba(217, 176, 156, 0.1)',
                          color: theme.palette.text.primary,
                          borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.2)' : 'rgba(217, 176, 156, 0.3)',
                          border: '1px solid'
                        }} 
                      />
                      <Chip 
                        label="Auditoría" 
                        size="small" 
                        sx={{ 
                          bgcolor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.05)' : 'rgba(217, 176, 156, 0.1)',
                          color: theme.palette.text.primary,
                          borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.2)' : 'rgba(217, 176, 156, 0.3)',
                          border: '1px solid'
                        }} 
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6} lg={6}>
                <Card 
                  sx={{
                    height: '100%', 
                    transition: 'all 0.3s ease',
                    border: '1px solid',
                    borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.1)' : 'rgba(217, 176, 156, 0.2)',
                    boxShadow: theme.palette.mode === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
                    '&:hover': {
                      boxShadow: theme.palette.mode === 'dark' ? '0 8px 25px rgba(0, 0, 0, 0.3)' : '0 8px 25px rgba(0, 0, 0, 0.1)',
                      borderColor: theme.palette.mode === 'dark' ? `rgba(217, 176, 156, 0.3)` : theme.palette.secondary.light
                    },
                    bgcolor: theme.palette.mode === 'dark' ? theme.palette.background.paper : theme.palette.background.default
                  }}
                >
                  <CardHeader 
                    avatar={
                      <Avatar sx={{ bgcolor: 'warning.main' }}>
                        <ReceiptLongIcon />
                      </Avatar>
                    }
                    title="Gestión de Impuestos"
                    subheader="Optimización Fiscal"
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
                    <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      <Chip 
                        label="Impuestos" 
                        size="small" 
                        sx={{ 
                          bgcolor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.05)' : 'rgba(217, 176, 156, 0.1)',
                          color: theme.palette.text.primary,
                          borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.2)' : 'rgba(217, 176, 156, 0.3)',
                          border: '1px solid'
                        }} 
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </TabPanel>

          <TabPanel value={tabValue} index={1}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Card 
                  sx={{
                    height: '100%', 
                    transition: 'all 0.3s ease',
                    border: '1px solid',
                    borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.1)' : 'rgba(217, 176, 156, 0.2)',
                    boxShadow: theme.palette.mode === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
                    '&:hover': {
                      boxShadow: theme.palette.mode === 'dark' ? '0 8px 25px rgba(0, 0, 0, 0.3)' : '0 8px 25px rgba(0, 0, 0, 0.1)',
                      borderColor: theme.palette.mode === 'dark' ? `rgba(217, 176, 156, 0.3)` : theme.palette.secondary.light
                    },
                    bgcolor: theme.palette.mode === 'dark' ? theme.palette.background.paper : theme.palette.background.default
                  }}
                >
                  <Box sx={{ position: 'relative', height: '12rem' }}>
                    <Image
                      src="/images/project-accounting.jpg"
                      alt="Proyecto contable"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </Box>
                  <CardContent>
                    <Box sx={{ mb: 1.5, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      <Chip 
                        label="Contabilidad" 
                        size="small" 
                        sx={{ 
                          bgcolor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.05)' : 'rgba(217, 176, 156, 0.1)',
                          color: theme.palette.text.primary,
                          borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.2)' : 'rgba(217, 176, 156, 0.3)',
                          border: '1px solid'
                        }} 
                      />
                      <Chip 
                        label="NIIF" 
                        size="small" 
                        sx={{ 
                          bgcolor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.05)' : 'rgba(217, 176, 156, 0.1)',
                          color: theme.palette.text.primary,
                          borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.2)' : 'rgba(217, 176, 156, 0.3)',
                          border: '1px solid'
                        }} 
                      />
                      <Chip 
                        label="Auditoría" 
                        size="small" 
                        sx={{ 
                          bgcolor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.05)' : 'rgba(217, 176, 156, 0.1)',
                          color: theme.palette.text.primary,
                          borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.2)' : 'rgba(217, 176, 156, 0.3)',
                          border: '1px solid'
                        }} 
                      />
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
              </Grid>

              <Grid item xs={12} md={6}>
                <Card 
                  sx={{
                    height: '100%', 
                    transition: 'all 0.3s ease',
                    border: '1px solid',
                    borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.1)' : 'rgba(217, 176, 156, 0.2)',
                    boxShadow: theme.palette.mode === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
                    '&:hover': {
                      boxShadow: theme.palette.mode === 'dark' ? '0 8px 25px rgba(0, 0, 0, 0.3)' : '0 8px 25px rgba(0, 0, 0, 0.1)',
                      borderColor: theme.palette.mode === 'dark' ? `rgba(217, 176, 156, 0.3)` : theme.palette.secondary.light
                    },
                    bgcolor: theme.palette.mode === 'dark' ? theme.palette.background.paper : theme.palette.background.default
                  }}
                >
                  <Box sx={{ position: 'relative', height: '12rem' }}>
                    <Image
                      src="/images/project-tax.jpg"
                      alt="Proyecto tributario"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </Box>
                  <CardContent>
                    <Box sx={{ mb: 1.5, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      <Chip 
                        label="Tributario" 
                        size="small" 
                        sx={{ 
                          bgcolor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.05)' : 'rgba(217, 176, 156, 0.1)',
                          color: theme.palette.text.primary,
                          borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.2)' : 'rgba(217, 176, 156, 0.3)',
                          border: '1px solid'
                        }} 
                      />
                      <Chip 
                        label="Planeación" 
                        size="small" 
                        sx={{ 
                          bgcolor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.05)' : 'rgba(217, 176, 156, 0.1)',
                          color: theme.palette.text.primary,
                          borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.2)' : 'rgba(217, 176, 156, 0.3)',
                          border: '1px solid'
                        }} 
                      />
                      <Chip 
                        label="Optimización" 
                        size="small" 
                        sx={{ 
                          bgcolor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.05)' : 'rgba(217, 176, 156, 0.1)',
                          color: theme.palette.text.primary,
                          borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.2)' : 'rgba(217, 176, 156, 0.3)',
                          border: '1px solid'
                        }} 
                      />
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
              </Grid>

              <Grid item xs={12} md={6}>
                <Card 
                  sx={{
                    height: '100%', 
                    transition: 'all 0.3s ease',
                    border: '1px solid',
                    borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.1)' : 'rgba(217, 176, 156, 0.2)',
                    boxShadow: theme.palette.mode === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
                    '&:hover': {
                      boxShadow: theme.palette.mode === 'dark' ? '0 8px 25px rgba(0, 0, 0, 0.3)' : '0 8px 25px rgba(0, 0, 0, 0.1)',
                      borderColor: theme.palette.mode === 'dark' ? `rgba(217, 176, 156, 0.3)` : theme.palette.secondary.light
                    },
                    bgcolor: theme.palette.mode === 'dark' ? theme.palette.background.paper : theme.palette.background.default
                  }}
                >
                  <Box sx={{ position: 'relative', height: '12rem' }}>
                    <Image
                      src="/images/project-finance.jpg"
                      alt="Proyecto financiero"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </Box>
                  <CardContent>
                    <Box sx={{ mb: 1.5, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      <Chip 
                        label="Finanzas" 
                        size="small" 
                        sx={{ 
                          bgcolor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.05)' : 'rgba(217, 176, 156, 0.1)',
                          color: theme.palette.text.primary,
                          borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.2)' : 'rgba(217, 176, 156, 0.3)',
                          border: '1px solid'
                        }} 
                      />
                      <Chip 
                        label="Reestructuración" 
                        size="small" 
                        sx={{ 
                          bgcolor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.05)' : 'rgba(217, 176, 156, 0.1)',
                          color: theme.palette.text.primary,
                          borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.2)' : 'rgba(217, 176, 156, 0.3)',
                          border: '1px solid'
                        }} 
                      />
                      <Chip 
                        label="Eficiencia" 
                        size="small" 
                        sx={{ 
                          bgcolor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.05)' : 'rgba(217, 176, 156, 0.1)',
                          color: theme.palette.text.primary,
                          borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.2)' : 'rgba(217, 176, 156, 0.3)',
                          border: '1px solid'
                        }} 
                      />
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
              </Grid>

              <Grid item xs={12} md={6}>
                <Card 
                  sx={{
                    height: '100%', 
                    transition: 'all 0.3s ease',
                    border: '1px solid',
                    borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.1)' : 'rgba(217, 176, 156, 0.2)',
                    boxShadow: theme.palette.mode === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
                    '&:hover': {
                      boxShadow: theme.palette.mode === 'dark' ? '0 8px 25px rgba(0, 0, 0, 0.3)' : '0 8px 25px rgba(0, 0, 0, 0.1)',
                      borderColor: theme.palette.mode === 'dark' ? `rgba(217, 176, 156, 0.3)` : theme.palette.secondary.light
                    },
                    bgcolor: theme.palette.mode === 'dark' ? theme.palette.background.paper : theme.palette.background.default
                  }}
                >
                  <Box sx={{ position: 'relative', height: '12rem' }}>
                    <Image
                      src="/images/project-audit.jpg"
                      alt="Proyecto de auditoría"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </Box>
                  <CardContent>
                    <Box sx={{ mb: 1.5, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      <Chip 
                        label="Due Diligence" 
                        size="small" 
                        sx={{ 
                          bgcolor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.05)' : 'rgba(217, 176, 156, 0.1)',
                          color: theme.palette.text.primary,
                          borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.2)' : 'rgba(217, 176, 156, 0.3)',
                          border: '1px solid'
                        }} 
                      />
                      <Chip 
                        label="Auditoría" 
                        size="small" 
                        sx={{ 
                          bgcolor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.05)' : 'rgba(217, 176, 156, 0.1)',
                          color: theme.palette.text.primary,
                          borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.2)' : 'rgba(217, 176, 156, 0.3)',
                          border: '1px solid'
                        }} 
                      />
                      <Chip 
                        label="Valoración" 
                        size="small" 
                        sx={{ 
                          bgcolor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.05)' : 'rgba(217, 176, 156, 0.1)',
                          color: theme.palette.text.primary,
                          borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.2)' : 'rgba(217, 176, 156, 0.3)',
                          border: '1px solid'
                        }} 
                      />
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
              </Grid>
            </Grid>
          </TabPanel>

          <TabPanel value={tabValue} index={2}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Card 
                  sx={{
                    height: '100%', 
                    transition: 'all 0.3s ease',
                    border: '1px solid',
                    borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.1)' : 'rgba(217, 176, 156, 0.2)',
                    boxShadow: theme.palette.mode === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
                    '&:hover': {
                      boxShadow: theme.palette.mode === 'dark' ? '0 8px 25px rgba(0, 0, 0, 0.3)' : '0 8px 25px rgba(0, 0, 0, 0.1)',
                      borderColor: theme.palette.mode === 'dark' ? `rgba(233, 201, 187, 0.4)` : theme.palette.secondary.main
                    },
                    bgcolor: theme.palette.mode === 'dark' ? theme.palette.background.paper : theme.palette.background.default
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
                      <Avatar sx={{ width: 80, height: 80, mb: 2 }}>JD</Avatar>
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
                      <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
                        <Rating 
                          value={5} 
                          readOnly 
                          size="small" 
                          sx={{ 
                            color: theme.palette.secondary.main,
                            '& .MuiRating-iconEmpty': {
                              color: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.3)' : 'rgba(217, 176, 156, 0.5)'
                            }
                          }}
                        />
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            ml: 1, 
                            fontWeight: 500,
                            color: theme.palette.text.secondary
                          }}
                        >
                          5.0
                        </Typography>
                      </Box>
                    </Box>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        fontStyle: 'italic',
                        color: theme.palette.text.primary
                      }}
                    >
                      &ldquo;La asesoría tributaria de Alejandra fue fundamental para optimizar nuestra estructura fiscal. Su conocimiento profundo y atención al detalle nos ayudó a ahorrar considerablemente en impuestos de manera legal. Altamente recomendada.&rdquo;
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card 
                  sx={{
                    height: '100%', 
                    transition: 'all 0.3s ease',
                    border: '1px solid',
                    borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.2)' : theme.palette.secondary.light,
                    boxShadow: theme.palette.mode === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
                    '&:hover': {
                      boxShadow: theme.palette.mode === 'dark' ? '0 8px 25px rgba(0, 0, 0, 0.3)' : '0 8px 25px rgba(0, 0, 0, 0.1)',
                      borderColor: theme.palette.mode === 'dark' ? `rgba(233, 201, 187, 0.4)` : theme.palette.secondary.main
                    },
                    bgcolor: theme.palette.mode === 'dark' ? theme.palette.background.paper : theme.palette.background.default
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
                      <Avatar sx={{ width: 80, height: 80, mb: 2 }}>MR</Avatar>
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
                      <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
                        <Rating 
                          value={5} 
                          readOnly 
                          size="small" 
                          sx={{ 
                            color: theme.palette.secondary.main,
                            '& .MuiRating-iconEmpty': {
                              color: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.3)' : 'rgba(217, 176, 156, 0.5)'
                            }
                          }}
                        />
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            ml: 1, 
                            fontWeight: 500,
                            color: theme.palette.text.secondary
                          }}
                        >
                          5.0
                        </Typography>
                      </Box>
                    </Box>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        fontStyle: 'italic',
                        color: theme.palette.text.primary
                      }}
                    >
                      &ldquo;Trabajar con Alejandra en la implementación de NIIF fue una experiencia excelente. Su metodología clara y enfoque práctico facilitó enormemente la transición. Ahora tenemos estados financieros confiables y comparables internacionalmente.&rdquo;
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card 
                  sx={{
                    height: '100%', 
                    transition: 'all 0.3s ease',
                    border: '1px solid',
                    borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.2)' : theme.palette.secondary.light,
                    boxShadow: theme.palette.mode === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
                    '&:hover': {
                      boxShadow: theme.palette.mode === 'dark' ? '0 8px 25px rgba(0, 0, 0, 0.3)' : '0 8px 25px rgba(0, 0, 0, 0.1)',
                      borderColor: theme.palette.mode === 'dark' ? `rgba(233, 201, 187, 0.4)` : theme.palette.secondary.main
                    },
                    bgcolor: theme.palette.mode === 'dark' ? theme.palette.background.paper : theme.palette.background.default
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
                      <Avatar sx={{ width: 80, height: 80, mb: 2 }}>CG</Avatar>
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
                      <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
                        <Rating 
                          value={4.5} 
                          precision={0.5} 
                          readOnly 
                          size="small" 
                          sx={{ 
                            color: theme.palette.secondary.main,
                            '& .MuiRating-iconEmpty': {
                              color: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.3)' : 'rgba(217, 176, 156, 0.5)'
                            }
                          }}
                        />
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            ml: 1, 
                            fontWeight: 500,
                            color: theme.palette.text.secondary
                          }}
                        >
                          4.5
                        </Typography>
                      </Box>
                    </Box>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        fontStyle: 'italic',
                        color: theme.palette.text.primary
                      }}
                    >
                      &ldquo;Como emprendedor, necesitaba alguien que me guiara en el mundo contable y tributario. Alejandra no solo me ayudó con la contabilidad de mi startup, sino que me educó para entender mejor las finanzas de mi negocio. Un valor incalculable para mi crecimiento empresarial.&rdquo;
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card 
                  sx={{
                    height: '100%', 
                    transition: 'all 0.3s ease',
                    border: '1px solid',
                    borderColor: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.2)' : theme.palette.secondary.light,
                    boxShadow: theme.palette.mode === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
                    '&:hover': {
                      boxShadow: theme.palette.mode === 'dark' ? '0 8px 25px rgba(0, 0, 0, 0.3)' : '0 8px 25px rgba(0, 0, 0, 0.1)',
                      borderColor: theme.palette.mode === 'dark' ? `rgba(233, 201, 187, 0.4)` : theme.palette.secondary.main
                    },
                    bgcolor: theme.palette.mode === 'dark' ? theme.palette.background.paper : theme.palette.background.default
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
                      <Avatar sx={{ width: 80, height: 80, mb: 2 }}>LM</Avatar>
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
                      <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
                        <Rating 
                          value={5} 
                          readOnly 
                          size="small" 
                          sx={{ 
                            color: theme.palette.secondary.main,
                            '& .MuiRating-iconEmpty': {
                              color: theme.palette.mode === 'dark' ? 'rgba(217, 176, 156, 0.3)' : 'rgba(217, 176, 156, 0.5)'
                            }
                          }}
                        />
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            ml: 1, 
                            fontWeight: 500,
                            color: theme.palette.text.secondary
                          }}
                        >
                          5.0
                        </Typography>
                      </Box>
                    </Box>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        fontStyle: 'italic',
                        color: theme.palette.text.primary
                      }}
                    >
                      &ldquo;La auditoría realizada por Alejandra fue exhaustiva y profesional. Identificó áreas de mejora que no habíamos notado y nos proporcionó recomendaciones accionables que implementamos con excelentes resultados. Su ética profesional y compromiso son admirables.&rdquo;
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
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
    </Container>
  );
}
