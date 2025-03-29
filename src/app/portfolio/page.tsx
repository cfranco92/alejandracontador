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
          centered
        >
          <Tab label="Servicios" icon={<BusinessIcon />} iconPosition="start" />
          <Tab label="Proyectos" icon={<ReceiptLongIcon />} iconPosition="start" />
          <Tab label="Testimonios" icon={<PersonIcon />} iconPosition="start" />
        </Tabs>
      </Box>

      <TabPanel value={tabValue} index={0}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={4}>
            <Card className="h-full transition-all hover:shadow-lg">
              <CardHeader 
                avatar={
                  <Avatar sx={{ bgcolor: 'primary.main' }}>
                    <BusinessIcon />
                  </Avatar>
                }
                title="Contabilidad para Empresas"
                subheader="Servicios Corporativos"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary" className="mb-4">
                  Ofrezco servicios completos de contabilidad para empresas de todos los tamaños, desde startups hasta compañías establecidas.
                </Typography>
                <Divider className="my-4" />
                <Typography variant="body2" component="div">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Contabilidad mensual y anual</li>
                    <li>Elaboración de estados financieros</li>
                    <li>Análisis financiero y reportes gerenciales</li>
                    <li>Conciliaciones bancarias</li>
                    <li>Preparación y presentación de declaraciones tributarias</li>
                  </ul>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Card className="h-full transition-all hover:shadow-lg">
              <CardHeader 
                avatar={
                  <Avatar sx={{ bgcolor: 'secondary.main' }}>
                    <PersonIcon />
                  </Avatar>
                }
                title="Asesoría Tributaria Personal"
                subheader="Personas Naturales"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary" className="mb-4">
                  Acompaño a personas naturales en el cumplimiento de sus obligaciones tributarias, optimizando su carga fiscal de manera legal.
                </Typography>
                <Divider className="my-4" />
                <Typography variant="body2" component="div">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Declaración de renta personas naturales</li>
                    <li>Planeación tributaria</li>
                    <li>Asesoría en inversiones y tributación</li>
                    <li>Régimen simple de tributación</li>
                    <li>Respuesta a requerimientos de la DIAN</li>
                  </ul>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Card className="h-full transition-all hover:shadow-lg">
              <CardHeader 
                avatar={
                  <Avatar sx={{ bgcolor: 'error.main' }}>
                    <AccountBalanceIcon />
                  </Avatar>
                }
                title="Consultorías Especializadas"
                subheader="Servicios de Alto Valor"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary" className="mb-4">
                  Brindo asesorías especializadas en temas complejos de contabilidad, tributación y finanzas para necesidades específicas.
                </Typography>
                <Divider className="my-4" />
                <Typography variant="body2" component="div">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Implementación de NIIF</li>
                    <li>Due diligence contable y financiero</li>
                    <li>Valoración de empresas</li>
                    <li>Reestructuración financiera</li>
                    <li>Peritajes contables</li>
                  </ul>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <Card className="h-full transition-all hover:shadow-lg">
              <CardHeader 
                avatar={
                  <Avatar sx={{ bgcolor: 'info.main' }}>
                    <BalanceIcon />
                  </Avatar>
                }
                title="Auditoría y Revisión"
                subheader="Control y Verificación"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary" className="mb-4">
                  Realizo auditorías contables y financieras para asegurar la integridad de la información y el cumplimiento normativo.
                </Typography>
                <Divider className="my-4" />
                <Typography variant="body2" component="div">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Auditoría interna y externa</li>
                    <li>Revisión de procesos contables</li>
                    <li>Verificación de cumplimiento normativo</li>
                    <li>Informes de auditoría</li>
                    <li>Recomendaciones para mejora de procesos</li>
                  </ul>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <Card className="h-full transition-all hover:shadow-lg">
              <CardHeader 
                avatar={
                  <Avatar sx={{ bgcolor: 'success.main' }}>
                    <ReceiptLongIcon />
                  </Avatar>
                }
                title="Nómina y RRHH"
                subheader="Gestión de Personal"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary" className="mb-4">
                  Manejo integral de la nómina y aspectos relacionados con recursos humanos desde la perspectiva contable y fiscal.
                </Typography>
                <Divider className="my-4" />
                <Typography variant="body2" component="div">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Liquidación de nómina</li>
                    <li>Cálculo de prestaciones sociales</li>
                    <li>Liquidación y pago de seguridad social</li>
                    <li>Liquidación de contratos</li>
                    <li>Informes de costos laborales</li>
                  </ul>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card className="h-full transition-all hover:shadow-lg">
              <div className="relative h-48">
                <Image
                  src="/images/project-accounting.jpg"
                  alt="Proyecto contable"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent>
                <Box className="mb-2 flex gap-2 flex-wrap">
                  <Chip size="small" label="Contabilidad" color="primary" />
                  <Chip size="small" label="NIIF" />
                  <Chip size="small" label="Auditoría" />
                </Box>
                <Typography variant="h5" component="h2" className="mb-2">
                  Implementación NIIF para PYMES
                </Typography>
                <Typography variant="body2" color="text.secondary" className="mb-3">
                  Lideré la implementación de Normas Internacionales de Información Financiera (NIIF) para una empresa mediana del sector manufacturero.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Resultado:</strong> Cumplimiento normativo completo y mejora en la calidad de la información financiera para la toma de decisiones.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card className="h-full transition-all hover:shadow-lg">
              <div className="relative h-48">
                <Image
                  src="/images/project-tax.jpg"
                  alt="Proyecto tributario"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent>
                <Box className="mb-2 flex gap-2 flex-wrap">
                  <Chip size="small" label="Tributario" color="secondary" />
                  <Chip size="small" label="Planeación" />
                  <Chip size="small" label="Optimización" />
                </Box>
                <Typography variant="h5" component="h2" className="mb-2">
                  Restructuración Tributaria Empresarial
                </Typography>
                <Typography variant="body2" color="text.secondary" className="mb-3">
                  Diseñé e implementé una estrategia de planeación tributaria para un grupo empresarial, optimizando la carga impositiva legalmente.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Resultado:</strong> Reducción del 22% en la carga tributaria anual sin incurrir en riesgos fiscales.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card className="h-full transition-all hover:shadow-lg">
              <div className="relative h-48">
                <Image
                  src="/images/project-finance.jpg"
                  alt="Proyecto financiero"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent>
                <Box className="mb-2 flex gap-2 flex-wrap">
                  <Chip size="small" label="Finanzas" color="error" />
                  <Chip size="small" label="Reestructuración" />
                  <Chip size="small" label="Eficiencia" />
                </Box>
                <Typography variant="h5" component="h2" className="mb-2">
                  Reestructuración Financiera
                </Typography>
                <Typography variant="body2" color="text.secondary" className="mb-3">
                  Desarrollé un plan de reestructuración financiera para una empresa en dificultades, incluyendo refinanciación de deuda y optimización de capital de trabajo.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Resultado:</strong> Recuperación de la liquidez y mejora en los indicadores financieros clave en menos de 12 meses.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card className="h-full transition-all hover:shadow-lg">
              <div className="relative h-48">
                <Image
                  src="/images/project-audit.jpg"
                  alt="Proyecto de auditoría"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent>
                <Box className="mb-2 flex gap-2 flex-wrap">
                  <Chip size="small" label="Due Diligence" color="info" />
                  <Chip size="small" label="Auditoría" />
                  <Chip size="small" label="Valoración" />
                </Box>
                <Typography variant="h5" component="h2" className="mb-2">
                  Due Diligence para Adquisición
                </Typography>
                <Typography variant="body2" color="text.secondary" className="mb-3">
                  Realicé un proceso completo de due diligence contable y financiero para una empresa que planeaba adquirir un competidor del mercado.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Resultado:</strong> Identificación de riesgos clave y oportunidades de sinergia que permitieron una negociación favorable.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={2}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card className="h-full transition-all hover:shadow-lg">
              <CardContent>
                <Box className="flex flex-col items-center mb-4">
                  <Avatar sx={{ width: 80, height: 80, mb: 2 }}>JD</Avatar>
                  <Typography variant="h6" component="h3" className="text-center">
                    Juan Pérez
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className="text-center mb-2">
                    Gerente General - Empresa ABC
                  </Typography>
                  <Rating value={5} readOnly />
                </Box>
                <Typography variant="body1" className="italic text-gray-600 dark:text-gray-300">
                  &ldquo;La asesoría tributaria de Alejandra fue fundamental para optimizar nuestra estructura fiscal. Su conocimiento profundo y atención al detalle nos ayudó a ahorrar considerablemente en impuestos de manera legal. Altamente recomendada.&rdquo;
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card className="h-full transition-all hover:shadow-lg">
              <CardContent>
                <Box className="flex flex-col items-center mb-4">
                  <Avatar sx={{ width: 80, height: 80, mb: 2 }}>MR</Avatar>
                  <Typography variant="h6" component="h3" className="text-center">
                    María Rodríguez
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className="text-center mb-2">
                    Directora Financiera - XYZ S.A.S
                  </Typography>
                  <Rating value={5} readOnly />
                </Box>
                <Typography variant="body1" className="italic text-gray-600 dark:text-gray-300">
                  &ldquo;Trabajar con Alejandra en la implementación de NIIF fue una experiencia excelente. Su metodología clara y enfoque práctico facilitó enormemente la transición. Ahora tenemos estados financieros confiables y comparables internacionalmente.&rdquo;
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card className="h-full transition-all hover:shadow-lg">
              <CardContent>
                <Box className="flex flex-col items-center mb-4">
                  <Avatar sx={{ width: 80, height: 80, mb: 2 }}>CG</Avatar>
                  <Typography variant="h6" component="h3" className="text-center">
                    Carlos Gómez
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className="text-center mb-2">
                    Emprendedor
                  </Typography>
                  <Rating value={4.5} precision={0.5} readOnly />
                </Box>
                <Typography variant="body1" className="italic text-gray-600 dark:text-gray-300">
                  &ldquo;Como emprendedor, necesitaba alguien que me guiara en el mundo contable y tributario. Alejandra no solo me ayudó con la contabilidad de mi startup, sino que me educó para entender mejor las finanzas de mi negocio. Un valor incalculable para mi crecimiento empresarial.&rdquo;
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card className="h-full transition-all hover:shadow-lg">
              <CardContent>
                <Box className="flex flex-col items-center mb-4">
                  <Avatar sx={{ width: 80, height: 80, mb: 2 }}>LM</Avatar>
                  <Typography variant="h6" component="h3" className="text-center">
                    Laura Martínez
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className="text-center mb-2">
                    Gerente de Operaciones - Constructora 123
                  </Typography>
                  <Rating value={5} readOnly />
                </Box>
                <Typography variant="body1" className="italic text-gray-600 dark:text-gray-300">
                  &ldquo;La auditoría realizada por Alejandra fue exhaustiva y profesional. Identificó áreas de mejora que no habíamos notado y nos proporcionó recomendaciones accionables que implementamos con excelentes resultados. Su ética profesional y compromiso son admirables.&rdquo;
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </TabPanel>

      <Box className="mt-12 text-center">
        <Button 
          variant="contained" 
          color="primary" 
          size="large"
          href="/contact"
          className="px-8"
        >
          Solicitar una Consulta
        </Button>
      </Box>
    </Box>
  );
}
