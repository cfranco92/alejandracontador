"use client";

import React from "react";
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
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import BookmarkIcon from '@mui/icons-material/Bookmark';

// Datos de ejemplo para los artículos del blog
const blogPosts = [
  {
    id: 1,
    title: "Reforma Tributaria en Colombia 2023: Lo que debes saber",
    excerpt: "Analizamos los puntos clave de la última reforma tributaria en Colombia y cómo afecta a empresas y personas naturales.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.",
    author: "Alejandra Bertón",
    date: "15 de mayo de 2023",
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
    date: "10 de abril de 2023",
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
    date: "5 de marzo de 2023",
    imageUrl: "/images/blog/niif-pymes.jpg",
    categories: ["NIIF", "PYMES"],
    featured: false
  },
  {
    id: 4,
    title: "Beneficios tributarios para emprendedores en 2023",
    excerpt: "Conoce todos los beneficios fiscales disponibles para nuevos emprendimientos y cómo puedes aprovecharlos.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.",
    author: "Alejandra Bertón",
    date: "20 de febrero de 2023",
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
    date: "15 de enero de 2023",
    imageUrl: "/images/blog/regimen-simple.jpg",
    categories: ["Impuestos", "Régimen Simple"],
    featured: false
  },
  {
    id: 6,
    title: "Calendario tributario 2023: Fechas clave para tu empresa",
    excerpt: "Mantente al día con todas las fechas importantes del calendario tributario colombiano para evitar multas y sanciones.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.",
    author: "Alejandra Bertón",
    date: "5 de enero de 2023",
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
          ? '0 10px 30px -10px rgba(0, 0, 0, 0.5)' 
          : '0 10px 30px -12px rgba(0, 0, 0, 0.3)' 
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        borderRadius: '12px',
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
            <Typography variant="h6" color="white" align="center">
              {post.title.split(' ').slice(0, 2).join(' ')}
            </Typography>
          </Box>
        </Box>
      </Box>
      
      <Box sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ mb: 1 }}>
          {post.categories.map((category: string) => (
            <Chip 
              key={category} 
              label={category} 
              size="small" 
              color="secondary" 
              sx={{ mr: 1, mb: 1 }} 
            />
          ))}
        </Box>
        
        <Typography 
          variant="h5" 
          component="h2" 
          sx={{ 
            mb: 2, 
            fontWeight: 600,
            fontSize: { xs: '1.2rem', md: '1.4rem' }
          }}
        >
          {post.title}
        </Typography>
        
        <Typography 
          variant="body1" 
          color="text.secondary" 
          sx={{ 
            mb: 2,
            flexGrow: 1 
          }}
        >
          {post.excerpt}
        </Typography>
        
        <Divider sx={{ mb: 2 }} />
        
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            mb: { xs: 1, sm: 0 } 
          }}>
            <PersonIcon fontSize="small" sx={{ mr: 0.5, color: 'text.secondary' }} />
            <Typography variant="body2" color="text.secondary">
              {post.author}
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CalendarTodayIcon fontSize="small" sx={{ mr: 0.5, color: 'text.secondary' }} />
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
          sx={{ mt: 2 }}
        >
          Leer más
        </Button>
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
          ? '0 8px 20px -8px rgba(0, 0, 0, 0.4)' 
          : '0 8px 20px -10px rgba(0, 0, 0, 0.25)' 
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{ 
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        overflow: 'hidden',
        borderRadius: '8px',
        mb: 3,
        height: { sm: '200px' }
      }}
    >
      <Box 
        sx={{ 
          position: 'relative',
          width: { xs: '100%', sm: '35%' }, 
          height: { xs: '200px', sm: '100%' },
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
          <Typography variant="h6" color="white" align="center" sx={{ p: 2 }}>
            {post.title.split(' ').slice(0, 2).join(' ')}
          </Typography>
        </Box>
      </Box>
      
      <Box sx={{ 
        p: 3, 
        flexGrow: 1, 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between'
      }}>
        <Box>
          <Box sx={{ mb: 1 }}>
            {post.categories.map((category: string) => (
              <Chip 
                key={category} 
                label={category} 
                size="small" 
                color="secondary" 
                sx={{ mr: 1, mb: 1 }} 
              />
            ))}
          </Box>
          
          <Typography 
            variant="h6" 
            component="h2" 
            sx={{ mb: 1, fontWeight: 600 }}
          >
            {post.title}
          </Typography>
          
          <Typography 
            variant="body2" 
            color="text.secondary" 
            sx={{ mb: 2 }}
          >
            {post.excerpt}
          </Typography>
        </Box>
        
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            mb: { xs: 1, sm: 0 } 
          }}>
            <PersonIcon fontSize="small" sx={{ mr: 0.5, color: 'text.secondary' }} />
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
        
        <Button 
          component={Link}
          href={`/blog/${post.id}`}
          variant="outlined" 
          color="primary"
          sx={{ mt: 2, alignSelf: 'flex-start' }}
        >
          Leer más
        </Button>
      </Box>
    </Paper>
  );
}

export default function Blog() {
  const theme = useTheme();
  
  // Filtrar artículos destacados y regulares
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);
  
  // Categorías únicas para el filtro
  const allCategories = Array.from(
    new Set(blogPosts.flatMap(post => post.categories))
  );
  
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
            variant="filled" 
            sx={{ mr: 1, mb: 1 }} 
          />
          {allCategories.map(category => (
            <Chip 
              key={category} 
              label={category} 
              variant="outlined" 
              color="primary" 
              sx={{ mr: 1, mb: 1 }} 
            />
          ))}
        </Box>
      </Box>
      
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
          Artículos Recientes
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
      </Box>
    </Container>
  );
} 