"use client";

import React from "react";
import { 
  Container, 
  Typography, 
  Box, 
  Paper, 
  Chip,
  Button, 
  Divider,
  useTheme,
  Avatar,
  Grid
} from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Datos de ejemplo para los artículos del blog (los mismos que en la página principal)
const blogPosts = [
  {
    id: 1,
    title: "Reforma Tributaria en Colombia 2023: Lo que debes saber",
    excerpt: "Analizamos los puntos clave de la última reforma tributaria en Colombia y cómo afecta a empresas y personas naturales.",
    content: `
      <p>La última reforma tributaria en Colombia introduce cambios significativos que afectan tanto a empresas como a personas naturales. Esta reforma busca aumentar la recaudación fiscal para financiar programas sociales y reducir el déficit fiscal.</p>
      
      <h2>Principales cambios para personas naturales</h2>
      <p>Uno de los cambios más relevantes es la modificación en las tarifas del impuesto de renta para personas naturales. Se establece una nueva tabla progresiva con tarifas que van desde el 0% hasta el 39% para los ingresos más altos. Además, se reducen algunos beneficios tributarios y deducciones que antes estaban disponibles.</p>
      
      <p>Las personas con ingresos mensuales superiores a 10 millones de pesos verán un aumento en su carga tributaria. También se modifican las reglas para las rentas exentas y se limitan algunas deducciones especiales.</p>
      
      <h2>Impacto en las empresas</h2>
      <p>Para las empresas, la tasa general del impuesto de renta se mantiene en el 35%, pero se eliminan varios beneficios y exenciones que antes permitían reducir la base gravable. Las empresas del sector financiero tendrán una sobretasa temporal del 3% durante los próximos tres años.</p>
      
      <p>Se introducen también nuevos requisitos para la deducibilidad de gastos y se fortalecen las normas anti-evasión, lo que obligará a muchas empresas a revisar sus estructuras fiscales y de cumplimiento.</p>
      
      <h2>Cambios en el IVA y otros impuestos</h2>
      <p>Si bien la tarifa general del IVA se mantiene en el 19%, se amplía la base de productos y servicios gravados. Algunos bienes que antes estaban excluidos o exentos ahora estarán gravados, lo que impactará el costo de vida de los colombianos.</p>
      
      <p>Se crea también un impuesto al patrimonio permanente para las personas naturales con patrimonios superiores a 3.000 millones de pesos, con tarifas progresivas.</p>
      
      <h2>Recomendaciones para contribuyentes</h2>
      <p>Ante estos cambios, es fundamental que tanto empresas como personas naturales realicen una planeación tributaria adecuada. Algunas recomendaciones incluyen:</p>
      
      <ul>
        <li>Revisar y actualizar la estructura de ingresos y gastos</li>
        <li>Identificar nuevas oportunidades de deducciones legítimas</li>
        <li>Planificar el flujo de caja considerando las nuevas cargas tributarias</li>
        <li>Consultar con un asesor tributario para optimizar la situación fiscal</li>
      </ul>
      
      <p>La implementación de esta reforma requerirá adaptación y una cuidadosa planeación financiera. Como siempre, es recomendable contar con asesoría profesional para navegar estos cambios y cumplir adecuadamente con las obligaciones tributarias.</p>
    `,
    author: "Alejandra Bertón",
    authorRole: "Contadora Pública",
    authorBio: "Especialista en derecho tributario con más de 10 años de experiencia asesorando empresas en Colombia.",
    date: "15 de mayo de 2023",
    imageUrl: "/images/blog/reforma-tributaria.jpg",
    categories: ["Impuestos", "Legislación"],
    featured: true,
    relatedPosts: [2, 4, 6]
  },
  {
    id: 2,
    title: "Consejos para la declaración de renta de personas naturales",
    excerpt: "Guía práctica con los mejores consejos para preparar correctamente tu declaración de renta y evitar sanciones.",
    content: `
      <p>Preparar la declaración de renta puede ser un proceso estresante para muchas personas. Sin embargo, con la planificación adecuada y siguiendo algunos consejos prácticos, puedes completar este proceso de manera eficiente y evitar errores costosos.</p>
      
      <h2>Organiza tu información financiera</h2>
      <p>El primer paso para una declaración de renta exitosa es tener toda tu información financiera organizada. Esto incluye:</p>
      
      <ul>
        <li>Certificados de ingresos laborales (certificado de retención en la fuente)</li>
        <li>Extractos bancarios del año fiscal</li>
        <li>Certificados de inversiones y dividendos</li>
        <li>Facturas de gastos deducibles</li>
        <li>Certificados de aportes a pensión y salud</li>
        <li>Información sobre propiedades y otros activos</li>
      </ul>
      
      <p>Mantener estos documentos organizados durante todo el año te ahorrará tiempo y estrés cuando llegue el momento de presentar tu declaración.</p>
      
      <h2>Conoce las deducciones a las que tienes derecho</h2>
      <p>Muchas personas pagan más impuestos de lo necesario porque desconocen las deducciones a las que tienen derecho. Algunas deducciones comunes incluyen:</p>
      
      <ul>
        <li>Intereses de créditos hipotecarios</li>
        <li>Aportes voluntarios a fondos de pensiones</li>
        <li>Gastos educativos</li>
        <li>Pagos por salud prepagada</li>
        <li>Donaciones a entidades sin ánimo de lucro</li>
      </ul>
      
      <p>Consultar con un contador puede ayudarte a identificar todas las deducciones aplicables a tu caso particular.</p>
      
      <h2>No dejes todo para el último momento</h2>
      <p>Uno de los errores más comunes es esperar hasta la fecha límite para comenzar a preparar la declaración. Esto aumenta la probabilidad de cometer errores y puede resultar en sanciones por presentación tardía.</p>
      
      <p>Comienza a preparar tu declaración con al menos un mes de anticipación. Esto te dará tiempo para resolver cualquier discrepancia en la información y consultar con profesionales si es necesario.</p>
      
      <h2>Utiliza las herramientas tecnológicas disponibles</h2>
      <p>La DIAN proporciona herramientas en línea para facilitar el proceso de declaración. Familiarízate con estas plataformas y aprovecha sus funcionalidades para simplificar el proceso.</p>
      
      <p>También existen software y aplicaciones que pueden ayudarte a organizar tus finanzas personales durante todo el año, lo que facilitará la preparación de tu declaración cuando llegue el momento.</p>
      
      <h2>Consulta con un profesional</h2>
      <p>Si tu situación financiera es compleja o tienes dudas sobre aspectos específicos de tu declaración, no dudes en consultar con un contador público o asesor tributario. El costo de este servicio suele ser menor que las posibles sanciones por errores en la declaración.</p>
      
      <p>Siguiendo estos consejos, podrás enfrentar la temporada de declaración de renta con mayor tranquilidad y eficiencia, cumpliendo con tus obligaciones tributarias de manera óptima.</p>
    `,
    author: "Alejandra Bertón",
    authorRole: "Contadora Pública",
    authorBio: "Especialista en tributación personal y empresarial con enfoque en optimización fiscal legal.",
    date: "10 de abril de 2023",
    imageUrl: "/images/blog/declaracion-renta.jpg",
    categories: ["Impuestos", "Personas Naturales"],
    featured: false,
    relatedPosts: [1, 5, 6]
  },
  {
    id: 3,
    title: "Novedades en las NIIF para pequeñas y medianas empresas",
    excerpt: "Descubre las últimas actualizaciones en las Normas Internacionales de Información Financiera y cómo implementarlas en tu PYME.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.",
    author: "Carlos Gómez",
    authorRole: "Consultor Financiero",
    authorBio: "Experto en implementación de NIIF en pequeñas y medianas empresas del sector manufacturero y de servicios.",
    date: "5 de marzo de 2023",
    imageUrl: "/images/blog/niif-pymes.jpg",
    categories: ["NIIF", "PYMES"],
    featured: false,
    relatedPosts: [1, 4, 5]
  },
  {
    id: 4,
    title: "Beneficios tributarios para emprendedores en 2023",
    excerpt: "Conoce todos los beneficios fiscales disponibles para nuevos emprendimientos y cómo puedes aprovecharlos.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.",
    author: "Alejandra Bertón",
    authorRole: "Contadora Pública",
    authorBio: "Especialista en estructuración tributaria para startups y emprendimientos de base tecnológica.",
    date: "20 de febrero de 2023",
    imageUrl: "/images/blog/beneficios-tributarios.jpg",
    categories: ["Impuestos", "Emprendimiento"],
    featured: true,
    relatedPosts: [1, 2, 6]
  },
  {
    id: 5,
    title: "Guía completa sobre el régimen simple de tributación",
    excerpt: "Todo lo que necesitas saber sobre el Régimen Simple: quiénes pueden acogerse, beneficios y obligaciones.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.",
    author: "María Rodríguez",
    authorRole: "Asesora Tributaria",
    authorBio: "Consultora especializada en regímenes tributarios especiales y planeación fiscal para pequeñas empresas.",
    date: "15 de enero de 2023",
    imageUrl: "/images/blog/regimen-simple.jpg",
    categories: ["Impuestos", "Régimen Simple"],
    featured: false,
    relatedPosts: [2, 4, 6]
  },
  {
    id: 6,
    title: "Calendario tributario 2023: Fechas clave para tu empresa",
    excerpt: "Mantente al día con todas las fechas importantes del calendario tributario colombiano para evitar multas y sanciones.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.",
    author: "Alejandra Bertón",
    authorRole: "Contadora Pública",
    authorBio: "Experta en cumplimiento tributario y prevención de sanciones por extemporaneidad o inexactitud.",
    date: "5 de enero de 2023",
    imageUrl: "/images/blog/calendario-tributario.jpg",
    categories: ["Impuestos", "Calendario Tributario"],
    featured: false,
    relatedPosts: [1, 2, 5]
  }
];

// Componente para artículos relacionados
function RelatedPostCard({ post }: { post: typeof blogPosts[0] }) {
  const theme = useTheme();
  
  return (
    <Paper 
      elevation={1} 
      component={motion.div}
      whileHover={{ 
        y: -5,
        boxShadow: theme.palette.mode === 'dark' 
          ? '0 8px 20px -8px rgba(0, 0, 0, 0.4)' 
          : '0 8px 20px -10px rgba(0, 0, 0, 0.25)' 
      }}
      sx={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        borderRadius: '8px',
      }}
    >
      <Box sx={{ position: 'relative', paddingTop: '56.25%', width: '100%' }}>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bgcolor: 'grey.300',
          }}
        >
          {/* Futura integración con Image de Next.js - por ahora placeholder */}
          <Box 
            sx={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              bgcolor: theme.palette.primary.main,
              opacity: 0.7,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="subtitle1" color="white" align="center" sx={{ p: 2 }}>
              {post.title.split(' ').slice(0, 2).join(' ')}
            </Typography>
          </Box>
        </Box>
      </Box>
      
      <Box sx={{ p: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography 
          variant="subtitle1" 
          component="h3" 
          sx={{ 
            mb: 1, 
            fontWeight: 600,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {post.title}
        </Typography>
        
        <Typography 
          variant="body2" 
          color="text.secondary" 
          sx={{ 
            mb: 'auto',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {post.excerpt}
        </Typography>
        
        <Button 
          component={Link}
          href={`/blog/${post.id}`}
          variant="text" 
          color="primary"
          sx={{ mt: 1, alignSelf: 'flex-start' }}
        >
          Leer artículo
        </Button>
      </Box>
    </Paper>
  );
}

export default function BlogPost() {
  const theme = useTheme();
  const params = useParams();
  const postId = Number(params.id);
  
  // Buscar el artículo según el ID
  const post = blogPosts.find(post => post.id === postId);
  
  // Si no se encuentra el artículo, mostrar mensaje
  if (!post) {
    return (
      <Container maxWidth="md" sx={{ 
        mt: { xs: 4, sm: 8 }, 
        mb: { xs: 8, sm: 12 },
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <Typography variant="h4" gutterBottom>
          Artículo no encontrado
        </Typography>
        <Typography variant="body1" paragraph>
          El artículo que buscas no existe o ha sido eliminado.
        </Typography>
        <Button 
          component={Link}
          href="/blog"
          variant="contained" 
          color="primary"
          startIcon={<ArrowBackIcon />}
        >
          Volver al blog
        </Button>
      </Container>
    );
  }
  
  // Obtener artículos relacionados
  const relatedPosts = post.relatedPosts
    ? post.relatedPosts.map(id => blogPosts.find(p => p.id === id)).filter(Boolean)
    : [];
  
  return (
    <Container maxWidth="lg" sx={{ 
      mt: { xs: 4, sm: 8 }, 
      mb: { xs: 8, sm: 12 }
    }}>
      {/* Botón de regreso al blog */}
      <Box sx={{ mb: 4 }}>
        <Button 
          component={Link}
          href="/blog"
          variant="text" 
          color="primary"
          startIcon={<ArrowBackIcon />}
        >
          Volver al blog
        </Button>
      </Box>
      
      <Grid container spacing={4}>
        {/* Contenido principal del artículo */}
        <Grid item xs={12} md={8}>
          <Paper
            elevation={2}
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: '12px',
              overflow: 'hidden',
            }}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Cabecera del artículo */}
            <Box sx={{ mb: 4 }}>
              {/* Categorías */}
              <Box sx={{ mb: 2 }}>
                {post.categories.map(category => (
                  <Chip 
                    key={category} 
                    label={category} 
                    size="small" 
                    color="secondary" 
                    sx={{ mr: 1, mb: 1 }} 
                  />
                ))}
              </Box>
              
              {/* Título */}
              <Typography 
                variant="h3" 
                component="h1" 
                sx={{ 
                  mb: 2,
                  fontWeight: 700,
                  fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.5rem' }
                }}
              >
                {post.title}
              </Typography>
              
              {/* Extracto */}
              <Typography 
                variant="h6" 
                component="p" 
                color="text.secondary"
                sx={{ mb: 3 }}
              >
                {post.excerpt}
              </Typography>
              
              {/* Metadata: autor y fecha */}
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center',
                flexWrap: 'wrap',
                mb: 3
              }}>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  mr: 3,
                  mb: { xs: 1, sm: 0 } 
                }}>
                  <PersonIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                  <Typography variant="body2" color="text.secondary">
                    {post.author}
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <CalendarTodayIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                  <Typography variant="body2" color="text.secondary">
                    {post.date}
                  </Typography>
                </Box>
              </Box>
              
              {/* Imagen destacada */}
              <Box 
                sx={{ 
                  position: 'relative',
                  width: '100%',
                  height: '300px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  bgcolor: 'grey.300',
                  mb: 4
                }}
              >
                {/* Futura integración con Image de Next.js - por ahora placeholder */}
                <Box 
                  sx={{ 
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    bgcolor: theme.palette.primary.main,
                    opacity: 0.7,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography variant="h4" color="white" align="center" sx={{ p: 2 }}>
                    Imagen: {post.title.split(' ').slice(0, 3).join(' ')}
                  </Typography>
                </Box>
              </Box>
            </Box>
            
            {/* Contenido del artículo */}
            <Box 
              className="blog-content"
              sx={{ 
                '& p': { mb: 2, lineHeight: 1.7 },
                '& h2': { mt: 4, mb: 2, fontWeight: 600 },
                '& ul, & ol': { mb: 2, pl: 4 },
                '& li': { mb: 1 },
              }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Sección del autor */}
            <Box sx={{ mt: 6, mb: 4 }}>
              <Divider sx={{ mb: 4 }} />
              
              <Box sx={{ 
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: { xs: 'flex-start', sm: 'center' },
                gap: 2
              }}>
                <Avatar 
                  sx={{ 
                    width: 80, 
                    height: 80,
                    bgcolor: theme.palette.primary.main
                  }}
                >
                  {post.author.split(' ').map(name => name[0]).join('')}
                </Avatar>
                
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {post.author}
                  </Typography>
                  
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {post.authorRole}
                  </Typography>
                  
                  <Typography variant="body2">
                    {post.authorBio}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Grid>
        
        {/* Barra lateral */}
        <Grid item xs={12} md={4}>
          {/* Sección de artículos relacionados */}
          {relatedPosts.length > 0 && (
            <Box sx={{ mb: 4 }}>
              <Typography 
                variant="h5" 
                component="h2" 
                sx={{ mb: 3, fontWeight: 600 }}
              >
                Artículos relacionados
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {relatedPosts.map((relatedPost, index) => (
                  relatedPost && (
                    <Box 
                      key={relatedPost.id}
                      component={motion.div}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <RelatedPostCard post={relatedPost} />
                    </Box>
                  )
                ))}
              </Box>
            </Box>
          )}
          
          {/* Menú de categorías */}
          <Paper 
            elevation={1} 
            sx={{ p: 3, borderRadius: '8px', mb: 4 }}
          >
            <Typography 
              variant="h5" 
              component="h2" 
              sx={{ mb: 2, fontWeight: 600 }}
            >
              Categorías
            </Typography>
            
            <Box sx={{ 
              display: 'flex',
              flexDirection: 'column',
              gap: 1
            }}>
              {Array.from(new Set(blogPosts.flatMap(p => p.categories))).map(category => (
                <Button 
                  key={category} 
                  variant="text" 
                  component={Link}
                  href={`/blog?category=${category}`}
                  sx={{ 
                    justifyContent: 'flex-start',
                    textTransform: 'none',
                    fontWeight: 'normal'
                  }}
                >
                  {category}
                </Button>
              ))}
            </Box>
          </Paper>
          
          {/* Call to Action */}
          <Paper 
            elevation={2} 
            sx={{ 
              p: 3, 
              borderRadius: '8px',
              bgcolor: theme.palette.mode === 'dark' 
                ? 'primary.dark' 
                : 'primary.light',
            }}
          >
            <Typography 
              variant="h5" 
              component="h2" 
              sx={{ 
                mb: 2, 
                fontWeight: 600,
                color: theme.palette.mode === 'dark' 
                  ? 'white' 
                  : 'primary.contrastText'
              }}
            >
              ¿Necesitas asesoría contable?
            </Typography>
            
            <Typography 
              variant="body1"
              sx={{ 
                mb: 3,
                color: theme.palette.mode === 'dark' 
                  ? 'rgba(255, 255, 255, 0.8)' 
                  : 'primary.contrastText'
              }}
            >
              Contáctanos para recibir asesoría profesional en temas contables, tributarios y financieros.
            </Typography>
            
            <Button 
              variant="contained"
              component={Link}
              href="/contact"
              sx={{ 
                bgcolor: theme.palette.mode === 'dark' 
                  ? 'white' 
                  : 'primary.main',
                color: theme.palette.mode === 'dark' 
                  ? 'primary.main' 
                  : 'white',
                '&:hover': {
                  bgcolor: theme.palette.mode === 'dark' 
                    ? 'rgba(255, 255, 255, 0.9)' 
                    : 'primary.dark',
                }
              }}
              fullWidth
            >
              Contactar ahora
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
} 