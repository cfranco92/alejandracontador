"use client";

import { Paper, Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string | ReactNode;
  delay?: number;
}

export default function ServiceCard({ title, description, icon, delay = 0 }: ServiceCardProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  // Variantes para la animación de aparición
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: 5
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: { 
        type: "spring", 
        stiffness: 80,
        damping: 15,
        delay: delay * 0.2 
      }
    }
  };

  // Variantes para la animación del icono
  const iconVariants = {
    hover: { 
      scale: 1.1,
      rotate: [0, 5, 0],
      transition: { duration: 0.4, times: [0, 0.5, 1] } 
    }
  };

  // Efecto de brillo para el hover
  const glowVariants = {
    hover: {
      boxShadow: isDark 
        ? '0 0 25px 8px rgba(233, 201, 187, 0.35)' 
        : '0 0 25px 8px rgba(233, 201, 187, 0.25)',
      transition: { duration: 0.4 }
    }
  };

  // Renderizar icono de acuerdo al tipo recibido
  const renderIcon = () => {
    if (typeof icon === 'string') {
      return (
        <Image
          src={icon}
          alt={title}
          width={40}
          height={40}
          style={{
            filter: isDark ? 'brightness(0.95) contrast(1.1)' : 'none',
            objectFit: 'contain'
          }}
        />
      );
    } else {
      return icon;
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardVariants}
      whileHover="hover"
      style={{ 
        transformStyle: "preserve-3d",
        perspective: "1000px",
        height: "100%"
      }}
    >
      <Paper 
        elevation={isDark ? 3 : 1}
        sx={{
          height: '100%',
          p: { xs: 2.5, md: 3 },
          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          backgroundImage: 'none',
          backgroundColor: isDark 
            ? 'rgba(30, 30, 30, 0.85)' 
            : 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(8px)',
          borderRadius: 3,
          border: '1px solid',
          borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : theme.palette.secondary.light,
          overflow: 'hidden',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: `linear-gradient(135deg, transparent 0%, ${isDark ? 'rgba(233, 201, 187, 0.05)' : 'rgba(233, 201, 187, 0.08)'} 100%)`,
            zIndex: 0
          }
        }}
      >
        <motion.div variants={glowVariants} style={{ height: '100%', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <motion.div variants={iconVariants}>
              <Box
                sx={{
                  position: "relative",
                  width: 60,
                  height: 60,
                  flexShrink: 0,
                  mr: 2,
                  borderRadius: '16px',
                  overflow: 'hidden',
                  background: isDark ? 'rgba(233, 201, 187, 0.12)' : 'rgba(233, 201, 187, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 1.5,
                  border: '1px solid',
                  borderColor: isDark ? 'rgba(233, 201, 187, 0.25)' : 'rgba(233, 201, 187, 0.4)',
                  boxShadow: isDark 
                    ? '0 4px 10px rgba(0, 0, 0, 0.15)' 
                    : '0 4px 10px rgba(0, 0, 0, 0.1)'
                }}
              >
                {renderIcon()}
              </Box>
            </motion.div>
            <Typography 
              variant="h6" 
              component="h3" 
              sx={{ 
                fontWeight: 700,
                fontSize: { xs: '1.05rem', md: '1.15rem' },
                color: isDark ? theme.palette.primary.main : theme.palette.primary.main,
                position: 'relative',
                zIndex: 1,
                textShadow: isDark ? '0px 1px 2px rgba(0, 0, 0, 0.3)' : 'none'
              }}
            >
              {title}
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <motion.div
              variants={{
                hover: { y: 0, opacity: 1, transition: { delay: 0.1, duration: 0.2 } }
              }}
              initial={{ opacity: 0.9 }}
            >
              <Typography 
                variant="body2" 
                sx={{ 
                  color: isDark ? theme.palette.text.secondary : theme.palette.text.secondary,
                  lineHeight: 1.7,
                  position: 'relative',
                  zIndex: 1,
                  mb: 2
                }}
              >
                {description}
              </Typography>
            </motion.div>
          </Box>
          
          {/* Indicador de hover - siempre al final de la tarjeta */}
          <Box sx={{ mt: 'auto' }}>
            <motion.div
              variants={{
                initial: { width: 0, opacity: 0 },
                hover: { 
                  width: '40%', 
                  opacity: 1,
                  transition: { duration: 0.4 } 
                }
              }}
              initial="initial"
              style={{
                height: '3px',
                background: isDark ? theme.palette.secondary.main : theme.palette.secondary.main,
                borderRadius: '3px'
              }}
            />
          </Box>
        </motion.div>
      </Paper>
    </motion.div>
  );
} 