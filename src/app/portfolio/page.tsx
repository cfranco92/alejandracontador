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
  Rating
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
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default function Portfolio() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Box className="mb-12 text-center">
        <Typography variant="h3" component="h1" className="font-bold mb-4 text-gray-800 dark:text-white">
          Mi Portafolio Profesional
        </Typography>
        <Typography variant="subtitle1" className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Conozca mi experiencia profesional y los servicios que ofrezco como Contadora Pública especializada en asesoría tributaria y financiera.
        </Typography>
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="mb-6">
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
              px: { xs: 1, sm: 2 }
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
                borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(226, 232, 240, 0.8)',
                boxShadow: theme => theme.palette.mode === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
                '&:hover': {
                  boxShadow: theme => theme.palette.mode === 'dark' ? '0 8px 25px rgba(0, 0, 0, 0.3)' : '0 8px 25px rgba(0, 0, 0, 0.1)',
                  borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.4)'
                },
                bgcolor: theme => theme.palette.mode === 'dark' ? 'rgba(17, 25, 40, 0.8)' : theme.palette.background.paper
              }}
            >
              <CardHeader 
                avatar={
                  <Avatar sx={{ bgcolor: 'primary.main' }}>
                    <BusinessIcon />
                  </Avatar>
                }
                title="Contabilidad para Empresas"
                subheader="Servicios Corporativos"
                titleTypographyProps={{ 
                  sx: { 
                    fontWeight: 600,
                    color: theme => theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark
                  }
                }}
                subheaderTypographyProps={{
                  sx: { color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)' }
                }}
              />
              <CardContent>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    mb: 2,
                    color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)'
                  }}
                >
                  Ofrezco servicios completos de contabilidad para empresas de todos los tamaños, desde startups hasta compañías establecidas.
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body2" component="div">
                  <Box component="ul" sx={{ 
                    listStyleType: 'disc', 
                    pl: 2.5, 
                    '& > li': { 
                      mt: 1,
                      color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)'
                    } 
                  }}>
                    <li>Contabilidad mensual y anual</li>
                    <li>Elaboración de estados financieros</li>
                    <li>Análisis financiero y reportes gerenciales</li>
                    <li>Conciliaciones bancarias</li>
                    <li>Preparación y presentación de declaraciones tributarias</li>
                  </Box>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Card 
              sx={{
                height: '100%', 
                transition: 'all 0.3s ease',
                border: '1px solid',
                borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(226, 232, 240, 0.8)',
                boxShadow: theme => theme.palette.mode === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
                '&:hover': {
                  boxShadow: theme => theme.palette.mode === 'dark' ? '0 8px 25px rgba(0, 0, 0, 0.3)' : '0 8px 25px rgba(0, 0, 0, 0.1)',
                  borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.4)'
                },
                bgcolor: theme => theme.palette.mode === 'dark' ? 'rgba(17, 25, 40, 0.8)' : theme.palette.background.paper
              }}
            >
              <CardHeader 
                avatar={
                  <Avatar sx={{ bgcolor: 'secondary.main' }}>
                    <PersonIcon />
                  </Avatar>
                }
                title="Asesoría Tributaria Personal"
                subheader="Personas Naturales"
                titleTypographyProps={{ 
                  sx: { 
                    fontWeight: 600,
                    color: theme => theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.dark
                  }
                }}
                subheaderTypographyProps={{
                  sx: { color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)' }
                }}
              />
              <CardContent>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    mb: 2,
                    color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)'
                  }}
                >
                  Acompaño a personas naturales en el cumplimiento de sus obligaciones tributarias, optimizando su carga fiscal de manera legal.
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body2" component="div">
                  <Box component="ul" sx={{ 
                    listStyleType: 'disc', 
                    pl: 2.5, 
                    '& > li': { 
                      mt: 1,
                      color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)'
                    } 
                  }}>
                    <li>Declaración de renta personas naturales</li>
                    <li>Planeación tributaria</li>
                    <li>Asesoría en inversiones y tributación</li>
                    <li>Régimen simple de tributación</li>
                    <li>Respuesta a requerimientos de la DIAN</li>
                  </Box>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Card 
              sx={{
                height: '100%', 
                transition: 'all 0.3s ease',
                border: '1px solid',
                borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(226, 232, 240, 0.8)',
                boxShadow: theme => theme.palette.mode === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
                '&:hover': {
                  boxShadow: theme => theme.palette.mode === 'dark' ? '0 8px 25px rgba(0, 0, 0, 0.3)' : '0 8px 25px rgba(0, 0, 0, 0.1)',
                  borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.4)'
                },
                bgcolor: theme => theme.palette.mode === 'dark' ? 'rgba(17, 25, 40, 0.8)' : theme.palette.background.paper
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
                    color: theme => theme.palette.mode === 'dark' ? theme.palette.error.light : theme.palette.error.dark
                  }
                }}
                subheaderTypographyProps={{
                  sx: { color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)' }
                }}
              />
              <CardContent>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    mb: 2,
                    color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)'
                  }}
                >
                  Brindo asesorías especializadas en temas complejos de contabilidad, tributación y finanzas para necesidades específicas.
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body2" component="div">
                  <Box component="ul" sx={{ 
                    listStyleType: 'disc', 
                    pl: 2.5, 
                    '& > li': { 
                      mt: 1,
                      color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)'
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
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <Card 
              sx={{
                height: '100%', 
                transition: 'all 0.3s ease',
                border: '1px solid',
                borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(226, 232, 240, 0.8)',
                boxShadow: theme => theme.palette.mode === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
                '&:hover': {
                  boxShadow: theme => theme.palette.mode === 'dark' ? '0 8px 25px rgba(0, 0, 0, 0.3)' : '0 8px 25px rgba(0, 0, 0, 0.1)',
                  borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.4)'
                },
                bgcolor: theme => theme.palette.mode === 'dark' ? 'rgba(17, 25, 40, 0.8)' : theme.palette.background.paper
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
                    color: theme => theme.palette.mode === 'dark' ? theme.palette.info.light : theme.palette.info.dark
                  }
                }}
                subheaderTypographyProps={{
                  sx: { color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)' }
                }}
              />
              <CardContent>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    mb: 2,
                    color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)'
                  }}
                >
                  Realizo auditorías contables y financieras para asegurar la integridad de la información y el cumplimiento normativo.
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body2" component="div">
                  <Box component="ul" sx={{ 
                    listStyleType: 'disc', 
                    pl: 2.5, 
                    '& > li': { 
                      mt: 1,
                      color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)'
                    } 
                  }}>
                    <li>Auditoría interna y externa</li>
                    <li>Revisión de procesos contables</li>
                    <li>Verificación de cumplimiento normativo</li>
                    <li>Informes de auditoría</li>
                    <li>Recomendaciones para mejora de procesos</li>
                  </Box>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <Card 
              sx={{
                height: '100%', 
                transition: 'all 0.3s ease',
                border: '1px solid',
                borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(226, 232, 240, 0.8)',
                boxShadow: theme => theme.palette.mode === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
                '&:hover': {
                  boxShadow: theme => theme.palette.mode === 'dark' ? '0 8px 25px rgba(0, 0, 0, 0.3)' : '0 8px 25px rgba(0, 0, 0, 0.1)',
                  borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.4)'
                },
                bgcolor: theme => theme.palette.mode === 'dark' ? 'rgba(17, 25, 40, 0.8)' : theme.palette.background.paper
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
                    color: theme => theme.palette.mode === 'dark' ? theme.palette.warning.light : theme.palette.warning.dark
                  }
                }}
                subheaderTypographyProps={{
                  sx: { color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)' }
                }}
              />
              <CardContent>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    mb: 2,
                    color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)'
                  }}
                >
                  Manejo eficiente de obligaciones tributarias, maximizando beneficios fiscales conforme a la normativa vigente.
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body2" component="div">
                  <Box component="ul" sx={{ 
                    listStyleType: 'disc', 
                    pl: 2.5, 
                    '& > li': { 
                      mt: 1,
                      color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)'
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
                borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(226, 232, 240, 0.8)',
                boxShadow: theme => theme.palette.mode === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
                '&:hover': {
                  boxShadow: theme => theme.palette.mode === 'dark' ? '0 8px 25px rgba(0, 0, 0, 0.3)' : '0 8px 25px rgba(0, 0, 0, 0.1)',
                  borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.4)'
                },
                bgcolor: theme => theme.palette.mode === 'dark' ? 'rgba(17, 25, 40, 0.8)' : theme.palette.background.paper
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
                  <Chip size="small" label="Contabilidad" color="primary" />
                  <Chip size="small" label="NIIF" />
                  <Chip size="small" label="Auditoría" />
                </Box>
                <Typography 
                  variant="h5" 
                  component="h2" 
                  sx={{ 
                    mb: 1.5,
                    fontWeight: 600,
                    color: theme => theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark
                  }}
                >
                  Implementación NIIF para PYMES
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    mb: 1.5,
                    color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)'
                  }}
                >
                  Lideré la implementación de Normas Internacionales de Información Financiera (NIIF) para una empresa mediana del sector manufacturero.
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)'
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
                borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(226, 232, 240, 0.8)',
                boxShadow: theme => theme.palette.mode === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
                '&:hover': {
                  boxShadow: theme => theme.palette.mode === 'dark' ? '0 8px 25px rgba(0, 0, 0, 0.3)' : '0 8px 25px rgba(0, 0, 0, 0.1)',
                  borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.4)'
                },
                bgcolor: theme => theme.palette.mode === 'dark' ? 'rgba(17, 25, 40, 0.8)' : theme.palette.background.paper
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
                  <Chip size="small" label="Tributario" color="secondary" />
                  <Chip size="small" label="Planeación" />
                  <Chip size="small" label="Optimización" />
                </Box>
                <Typography 
                  variant="h5" 
                  component="h2" 
                  sx={{ 
                    mb: 1.5,
                    fontWeight: 600,
                    color: theme => theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.dark
                  }}
                >
                  Restructuración Tributaria Empresarial
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    mb: 1.5,
                    color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)'
                  }}
                >
                  Diseñé e implementé una estrategia de planeación tributaria para un grupo empresarial, optimizando la carga impositiva legalmente.
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)'
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
                borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(226, 232, 240, 0.8)',
                boxShadow: theme => theme.palette.mode === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
                '&:hover': {
                  boxShadow: theme => theme.palette.mode === 'dark' ? '0 8px 25px rgba(0, 0, 0, 0.3)' : '0 8px 25px rgba(0, 0, 0, 0.1)',
                  borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.4)'
                },
                bgcolor: theme => theme.palette.mode === 'dark' ? 'rgba(17, 25, 40, 0.8)' : theme.palette.background.paper
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
                  <Chip size="small" label="Finanzas" color="error" />
                  <Chip size="small" label="Reestructuración" />
                  <Chip size="small" label="Eficiencia" />
                </Box>
                <Typography 
                  variant="h5" 
                  component="h2" 
                  sx={{ 
                    mb: 1.5,
                    fontWeight: 600,
                    color: theme => theme.palette.mode === 'dark' ? theme.palette.error.light : theme.palette.error.dark
                  }}
                >
                  Reestructuración Financiera
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    mb: 1.5,
                    color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)'
                  }}
                >
                  Desarrollé un plan de reestructuración financiera para una empresa en dificultades, incluyendo refinanciación de deuda y optimización de capital de trabajo.
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)'
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
                borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(226, 232, 240, 0.8)',
                boxShadow: theme => theme.palette.mode === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
                '&:hover': {
                  boxShadow: theme => theme.palette.mode === 'dark' ? '0 8px 25px rgba(0, 0, 0, 0.3)' : '0 8px 25px rgba(0, 0, 0, 0.1)',
                  borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.4)'
                },
                bgcolor: theme => theme.palette.mode === 'dark' ? 'rgba(17, 25, 40, 0.8)' : theme.palette.background.paper
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
                  <Chip size="small" label="Due Diligence" color="info" />
                  <Chip size="small" label="Auditoría" />
                  <Chip size="small" label="Valoración" />
                </Box>
                <Typography 
                  variant="h5" 
                  component="h2" 
                  sx={{ 
                    mb: 1.5,
                    fontWeight: 600,
                    color: theme => theme.palette.mode === 'dark' ? theme.palette.info.light : theme.palette.info.dark
                  }}
                >
                  Due Diligence para Adquisición
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    mb: 1.5,
                    color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)'
                  }}
                >
                  Realicé un proceso completo de due diligence contable y financiero para una empresa que planeaba adquirir un competidor del mercado.
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)'
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
                borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(226, 232, 240, 0.8)',
                boxShadow: theme => theme.palette.mode === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
                '&:hover': {
                  boxShadow: theme => theme.palette.mode === 'dark' ? '0 8px 25px rgba(0, 0, 0, 0.3)' : '0 8px 25px rgba(0, 0, 0, 0.1)',
                  borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.4)'
                },
                bgcolor: theme => theme.palette.mode === 'dark' ? 'rgba(17, 25, 40, 0.8)' : theme.palette.background.paper
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
                      color: theme => theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark
                    }}
                  >
                    Juan Pérez
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      textAlign: 'center', 
                      mb: 1,
                      color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)'
                    }}
                  >
                    Gerente General - Empresa ABC
                  </Typography>
                  <Rating value={5} readOnly />
                </Box>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    fontStyle: 'italic',
                    color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)'
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
                borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(226, 232, 240, 0.8)',
                boxShadow: theme => theme.palette.mode === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
                '&:hover': {
                  boxShadow: theme => theme.palette.mode === 'dark' ? '0 8px 25px rgba(0, 0, 0, 0.3)' : '0 8px 25px rgba(0, 0, 0, 0.1)',
                  borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.4)'
                },
                bgcolor: theme => theme.palette.mode === 'dark' ? 'rgba(17, 25, 40, 0.8)' : theme.palette.background.paper
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
                      color: theme => theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.dark
                    }}
                  >
                    María Rodríguez
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      textAlign: 'center', 
                      mb: 1,
                      color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)'
                    }}
                  >
                    Directora Financiera - XYZ S.A.S
                  </Typography>
                  <Rating value={5} readOnly />
                </Box>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    fontStyle: 'italic',
                    color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)'
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
                borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(226, 232, 240, 0.8)',
                boxShadow: theme => theme.palette.mode === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
                '&:hover': {
                  boxShadow: theme => theme.palette.mode === 'dark' ? '0 8px 25px rgba(0, 0, 0, 0.3)' : '0 8px 25px rgba(0, 0, 0, 0.1)',
                  borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.4)'
                },
                bgcolor: theme => theme.palette.mode === 'dark' ? 'rgba(17, 25, 40, 0.8)' : theme.palette.background.paper
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
                      color: theme => theme.palette.mode === 'dark' ? theme.palette.warning.light : theme.palette.warning.dark
                    }}
                  >
                    Carlos Gómez
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      textAlign: 'center', 
                      mb: 1,
                      color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)'
                    }}
                  >
                    Emprendedor
                  </Typography>
                  <Rating value={4.5} precision={0.5} readOnly />
                </Box>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    fontStyle: 'italic',
                    color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)'
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
                borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(226, 232, 240, 0.8)',
                boxShadow: theme => theme.palette.mode === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
                '&:hover': {
                  boxShadow: theme => theme.palette.mode === 'dark' ? '0 8px 25px rgba(0, 0, 0, 0.3)' : '0 8px 25px rgba(0, 0, 0, 0.1)',
                  borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.4)'
                },
                bgcolor: theme => theme.palette.mode === 'dark' ? 'rgba(17, 25, 40, 0.8)' : theme.palette.background.paper
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
                      color: theme => theme.palette.mode === 'dark' ? theme.palette.success.light : theme.palette.success.dark
                    }}
                  >
                    Laura Martínez
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      textAlign: 'center', 
                      mb: 1,
                      color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)'
                    }}
                  >
                    Gerente de Operaciones - Constructora 123
                  </Typography>
                  <Rating value={5} readOnly />
                </Box>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    fontStyle: 'italic',
                    color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)'
                  }}
                >
                  &ldquo;La auditoría realizada por Alejandra fue exhaustiva y profesional. Identificó áreas de mejora que no habíamos notado y nos proporcionó recomendaciones accionables que implementamos con excelentes resultados. Su ética profesional y compromiso son admirables.&rdquo;
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Button 
          variant="contained" 
          color="primary" 
          size="large"
          href="/contact"
          sx={{ px: 4 }}
        >
          Solicitar una Consulta
        </Button>
      </Box>
    </Box>
  );
}
