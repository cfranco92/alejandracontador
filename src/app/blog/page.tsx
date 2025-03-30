"use client";

import React, { useState, useEffect } from "react";
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Paper, 
  Chip,
  Button, 
  Divider,
  useTheme
} from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Datos de ejemplo para los artículos del blog
const blogPosts = [
  {
    id: 1,
    title: "Reforma Tributaria en Colombia 2024: Lo que debes saber",
    excerpt: "Analizamos los puntos clave de la última reforma tributaria en Colombia y cómo afecta a empresas y personas naturales.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.",
    author: "Alejandra Bertón",
    date: "15 de mayo de 2024",
    imageUrl: "/images/blog/reforma-tributaria.jpg",
    categories: ["Impuestos", "Legislación"],
    featured: true
  },
  {
    id: 2,
    title: "Consejos para la declaración de renta de personas naturales",
    excerpt: "Guía práctica con los mejores consejos para preparar correctamente tu declaración de renta y evitar sanciones.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.",
    author: "Alejandra Bertón",
    date: "10 de abril de 2024",
    imageUrl: "/images/blog/declaracion-renta.jpg",
    categories: ["Impuestos", "Personas Naturales"],
    featured: false
  },
  {
    id: 3,
    title: "Novedades en las NIIF para pequeñas y medianas empresas",
    excerpt: "Descubre las últimas actualizaciones en las Normas Internacionales de Información Financiera y cómo implementarlas en tu PYME.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.",
    author: "Carlos Gómez",
    date: "5 de marzo de 2024",
    imageUrl: "/images/blog/niif-pymes.jpg",
    categories: ["NIIF", "PYMES"],
    featured: false
  },
  {
    id: 4,
    title: "Beneficios tributarios para emprendedores en 2024",
    excerpt: "Conoce todos los beneficios fiscales disponibles para nuevos emprendimientos y cómo puedes aprovecharlos.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.",
    author: "Alejandra Bertón",
    date: "20 de febrero de 2024",
    imageUrl: "/images/blog/beneficios-tributarios.jpg",
    categories: ["Impuestos", "Emprendimiento"],
    featured: true
  },
  {
    id: 5,
    title: "Guía completa sobre el régimen simple de tributación",
    excerpt: "Todo lo que necesitas saber sobre el Régimen Simple: quiénes pueden acogerse, beneficios y obligaciones.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.",
    author: "María Rodríguez",
    date: "15 de enero de 2024",
    imageUrl: "/images/blog/regimen-simple.jpg",
    categories: ["Impuestos", "Régimen Simple"],
    featured: false
  },
  {
    id: 6,
    title: "Calendario tributario 2024: Fechas clave para tu empresa",
    excerpt: "Mantente al día con todas las fechas importantes del calendario tributario colombiano para evitar multas y sanciones.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.",
    author: "Alejandra Bertón",
    date: "5 de enero de 2024",
    imageUrl: "/images/blog/calendario-tributario.jpg",
    categories: ["Impuestos", "Calendario Tributario"],
    featured: false
  }
];

// Definición del tipo de post para evitar 'any'
type BlogPost = typeof blogPosts[0];

// Componente para las tarjetas de artículos destacados
function FeaturedPostCard({ post }: { post: BlogPost }) {
  const theme = useTheme();
  
  return (
    <Paper 
      elevation={3} 
      component={motion.div}
      whileHover={{ 
        y: -5,
        boxShadow: theme.palette.mode === 'dark' 
          ? '0 12px 30px -10px rgba(0, 0, 0, 0.6)' 
          : '0 12px 30px -12px rgba(0, 0, 0, 0.35)' 
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        borderRadius: '16px',
        border: '1px solid',
        borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.06)'
      }}
    >
      <Box sx={{ position: 'relative', paddingTop: '62%', width: '100%' }}>
        <Link
          href={`/blog/${post.id}`}
          style={{ textDecoration: 'none' }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${post.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transition: 'transform 0.5s ease',
              '&:hover': {
                transform: 'scale(1.05)'
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.7) 100%)',
                zIndex: 1
              }
            }}
          />
        </Link>
        
        <Typography 
          variant="h5" 
          color="white" 
          align="left"
          component={Link}
          href={`/blog/${post.id}`}
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            p: 3,
            zIndex: 2,
            textShadow: '1px 1px 3px rgba(0,0,0,0.7)',
            fontWeight: 700,
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline'
            }
          }}
        >
          {post.title}
        </Typography>
        
        <Box sx={{ 
          position: 'absolute', 
          top: 16, 
          right: 16, 
          zIndex: 2,
          display: 'flex',
          gap: 1,
          flexWrap: 'wrap',
          justifyContent: 'flex-end'
        }}>
          {post.categories.map((category: string) => (
            <Chip 
              key={category} 
              label={category} 
              size="small" 
              color="secondary" 
              sx={{ 
                fontWeight: 500,
                backdropFilter: 'blur(4px)',
                backgroundColor: 'rgba(255,255,255,0.15)',
                mb: 1
              }} 
              component={Link}
              href={`/blog?category=${encodeURIComponent(category)}`}
              clickable
            />
          ))}
        </Box>
      </Box>
      
      <Box sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography 
          variant="body1" 
          color="text.secondary" 
          sx={{ 
            mb: 3,
            flexGrow: 1,
            fontSize: '0.95rem',
            lineHeight: 1.6
          }}
        >
          {post.excerpt}
        </Typography>
        
        <Box sx={{ pt: 2, borderTop: '1px solid', borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.06)' }}>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            mb: 2
          }}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center'
            }}>
              <PersonIcon fontSize="small" sx={{ mr: 0.5, color: 'text.secondary' }} />
              <Typography variant="body2" color="text.secondary" fontWeight={500}>
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
          
          <Button 
            component={Link}
            href={`/blog/${post.id}`}
            variant="contained" 
            color="primary"
            fullWidth
            endIcon={<ArrowForwardIcon />}
            sx={{ 
              fontWeight: 500,
              borderRadius: '6px',
              textTransform: 'none',
              py: 1,
              boxShadow: theme.palette.mode === 'dark' ? '0px 3px 8px rgba(0, 0, 0, 0.3)' : '0px 3px 8px rgba(0, 0, 0, 0.1)'
            }}
          >
            Leer más
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}

// Componente para las tarjetas de artículos normales
function PostCard({ post }: { post: BlogPost }) {
  const theme = useTheme();
  
  return (
    <Paper 
      elevation={2} 
      component={motion.div}
      whileHover={{ 
        y: -5,
        boxShadow: theme.palette.mode === 'dark' 
          ? '0 10px 25px -8px rgba(0, 0, 0, 0.5)' 
          : '0 10px 25px -10px rgba(0, 0, 0, 0.3)' 
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{ 
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        overflow: 'hidden',
        borderRadius: '12px',
        mb: 4,
        height: { xs: 'auto', sm: '220px' },
        border: '1px solid',
        borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.06)'
      }}
    >
      {/* Imagen del artículo */}
      <Link 
        href={`/blog/${post.id}`}
        style={{ textDecoration: 'none', display: 'block', position: 'relative' }}
      >
        <Box 
          sx={{ 
            position: 'relative',
            width: { xs: '100%', sm: '280px' }, 
            height: { xs: '200px', sm: '100%' },
            overflow: 'hidden'
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${post.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transition: 'all 0.5s ease',
              '&:hover': {
                transform: 'scale(1.05)'
              }
            }}
          />
          <Box 
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
              height: '50%',
              pointerEvents: 'none'
            }}
          />
        </Box>
      </Link>
      
      {/* Contenido del artículo */}
      <Box sx={{ 
        p: 3, 
        flexGrow: 1, 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        {/* Categorías */}
        <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {post.categories.map((category: string) => (
            <Chip 
              key={category} 
              label={category} 
              size="small" 
              variant="outlined"
              color="primary" 
              sx={{ 
                mr: 1, 
                mb: 1, 
                borderRadius: '4px',
                fontWeight: 500,
                border: '1px solid',
                borderColor: theme.palette.primary.main
              }} 
              component={Link}
              href={`/blog?category=${encodeURIComponent(category)}`}
              clickable
            />
          ))}
        </Box>
        
        {/* Título */}
        <Link 
          href={`/blog/${post.id}`}
          style={{ 
            textDecoration: 'none', 
            color: 'inherit',
            display: 'block'
          }}
        >
          <Typography 
            variant="h5" 
            component="h3"
            sx={{ 
              mb: 2, 
              fontWeight: 700,
              fontSize: { xs: '1.25rem', md: '1.35rem' },
              lineHeight: 1.3,
              color: theme.palette.text.primary,
              transition: 'color 0.2s ease',
              '&:hover': {
                color: theme.palette.primary.main
              }
            }}
          >
            {post.title}
          </Typography>
        </Link>
        
        {/* Extracto */}
        <Typography 
          variant="body1" 
          color="text.secondary" 
          sx={{ 
            mb: 2,
            fontSize: '0.95rem',
            lineHeight: 1.6,
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical'
          }}
        >
          {post.excerpt}
        </Typography>
        
        <Box sx={{ mt: 'auto', pt: 2, borderTop: '1px solid', borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.06)' }}>
          {/* Metadatos: autor y fecha */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            mb: 2
          }}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center'
            }}>
              <PersonIcon fontSize="small" sx={{ mr: 0.5, color: 'text.secondary' }} />
              <Typography variant="body2" color="text.secondary" fontWeight={500}>
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
          
          {/* Botón Leer más */}
          <Button 
            component={Link}
            href={`/blog/${post.id}`}
            variant="contained" 
            color="primary"
            endIcon={<ArrowForwardIcon />}
            sx={{ 
              fontWeight: 500,
              borderRadius: '6px',
              textTransform: 'none',
              py: 1,
              px: 3,
              width: { xs: '100%', sm: 'auto' },
              boxShadow: theme.palette.mode === 'dark' ? '0px 3px 8px rgba(0, 0, 0, 0.3)' : '0px 3px 8px rgba(0, 0, 0, 0.1)'
            }}
          >
            Leer más
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}

export default function Blog() {
  const theme = useTheme();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Obtener la categoría de los parámetros de URL al cargar la página
  useEffect(() => {
    const category = searchParams.get('category');
    setSelectedCategory(category);
  }, [searchParams]);
  
  // Función para manejar el cambio de categoría
  const handleCategoryChange = (category: string | null) => {
    if (category) {
      router.push(`/blog?category=${encodeURIComponent(category)}`);
    } else {
      router.push('/blog');
    }
    setSelectedCategory(category);
  };
  
  // Categorías únicas para el filtro
  const allCategories = Array.from(
    new Set(blogPosts.flatMap(post => post.categories))
  );
  
  // Filtrar posts según la categoría seleccionada
  const filteredPosts = selectedCategory 
    ? blogPosts.filter(post => post.categories.includes(selectedCategory))
    : blogPosts;
    
  // Filtrar artículos destacados y regulares
  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);
  
  return (
    <Container maxWidth="lg" sx={{ 
      mt: { xs: 4, sm: 8 }, 
      mb: { xs: 8, sm: 12 },
      color: theme.palette.text.primary
    }}>
      {/* Encabezado del Blog */}
      <Box 
        component={motion.div}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        sx={{ 
          mb: { xs: 4, md: 8 }, 
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <Typography 
          variant="h2" 
          component="h1" 
          sx={{ 
            mb: 2,
            fontWeight: 700,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
          }}
        >
          Blog de Contaduría
        </Typography>
        
        <Typography 
          variant="h5" 
          component="p" 
          color="text.secondary"
          sx={{ 
            mb: 4,
            maxWidth: '800px',
            mx: 'auto',
            fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' }
          }}
        >
          Artículos especializados en contabilidad, impuestos y finanzas para profesionales y empresas colombianas.
        </Typography>
        
        <Divider sx={{ mb: 4 }} />
        
        {/* Filtro de categorías */}
        <Box sx={{ 
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 1,
          mb: 4
        }}>
          <Chip 
            label="Todos" 
            color="primary" 
            variant={selectedCategory === null ? "filled" : "outlined"}
            sx={{ mr: 1, mb: 1 }} 
            onClick={() => handleCategoryChange(null)}
            clickable
          />
          {allCategories.map(category => (
            <Chip 
              key={category} 
              label={category} 
              variant={selectedCategory === category ? "filled" : "outlined"}
              color="primary" 
              sx={{ mr: 1, mb: 1 }} 
              onClick={() => handleCategoryChange(category)}
              clickable
            />
          ))}
        </Box>
      </Box>
      
      {filteredPosts.length === 0 ? (
        <Box sx={{ 
          textAlign: 'center', 
          py: 8,
          backgroundColor: 'rgba(0,0,0,0.02)',
          borderRadius: 2
        }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            No se encontraron artículos para esta categoría
          </Typography>
          <Button 
            variant="contained" 
            color="primary"
            onClick={() => handleCategoryChange(null)}
          >
            Ver todos los artículos
          </Button>
        </Box>
      ) : (
        <>
          {/* Sección de artículos destacados */}
          {featuredPosts.length > 0 && (
            <Box sx={{ mb: 8 }}>
              <Box sx={{ 
                display: 'flex',
                alignItems: 'center',
                mb: 3
              }}>
                <BookmarkIcon color="primary" sx={{ mr: 1 }} />
                <Typography 
                  variant="h4" 
                  component="h2" 
                  sx={{ fontWeight: 600 }}
                >
                  Destacados
                </Typography>
              </Box>
              
              <Grid container spacing={3}>
                {featuredPosts.map((post, index) => (
                  <Grid 
                    item 
                    xs={12} 
                    md={6} 
                    key={post.id}
                    component={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <FeaturedPostCard post={post} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
          
          {/* Sección de artículos recientes */}
          <Box>
            <Typography 
              variant="h4" 
              component="h2" 
              sx={{ mb: 3, fontWeight: 600 }}
            >
              {selectedCategory ? `Artículos sobre ${selectedCategory}` : 'Artículos Recientes'}
            </Typography>
            
            <Box>
              {regularPosts.map((post, index) => (
                <Box 
                  key={post.id}
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <PostCard post={post} />
                </Box>
              ))}
            </Box>
            
            {/* Paginación */}
            {regularPosts.length > 3 && (
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                mt: 4
              }}>
                <Button 
                  variant="contained" 
                  color="primary"
                >
                  Cargar más artículos
                </Button>
              </Box>
            )}
          </Box>
        </>
      )}
    </Container>
  );
} 