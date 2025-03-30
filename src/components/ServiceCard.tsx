"use client";

import { Paper, Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
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
      scale: 1.2, 
      rotate: [0, -5, 5, -5, 5, 0],
      transition: { duration: 0.5 } 
    }
  };

  // Efecto de brillo para el hover
  const glowVariants = {
    hover: {
      boxShadow: isDark 
        ? '0 0 20px 5px rgba(233, 201, 187, 0.3)' 
        : '0 0 20px 5px rgba(233, 201, 187, 0.2)',
      transition: { duration: 0.3 }
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
        perspective: "1000px" 
      }}
    >
      <Paper 
        elevation={isDark ? 2 : 1}
        sx={{
          height: '100%',
          p: 3,
          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          backgroundImage: 'none',
          backgroundColor: isDark ? theme.palette.background.paper : theme.palette.background.paper,
          borderRadius: 3,
          border: '1px solid',
          borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : theme.palette.secondary.light,
          overflow: 'hidden',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: `linear-gradient(135deg, transparent 0%, ${isDark ? 'rgba(233, 201, 187, 0.03)' : 'rgba(233, 201, 187, 0.05)'} 100%)`,
            zIndex: 0
          }
        }}
      >
        <motion.div variants={glowVariants} style={{ height: '100%', position: 'relative', zIndex: 1 }}>
          <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 3,
              }}
            >
              <motion.div variants={iconVariants}>
                <Box
                  sx={{
                    position: "relative",
                    width: 56,
                    height: 56,
                    flexShrink: 0,
                    mr: 2,
                    borderRadius: '16px',
                    overflow: 'hidden',
                    background: isDark ? 'rgba(233, 201, 187, 0.1)' : 'rgba(233, 201, 187, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 1.5,
                    border: '1px solid',
                    borderColor: isDark ? 'rgba(233, 201, 187, 0.2)' : 'rgba(233, 201, 187, 0.3)',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.08)'
                  }}
                >
                  <Image
                    src={icon}
                    alt={title}
                    width={38}
                    height={38}
                    style={{
                      filter: isDark ? 'brightness(0.95) contrast(1.1)' : 'none',
                    }}
                  />
                </Box>
              </motion.div>
              <Typography 
                variant="h6" 
                component="h3" 
                sx={{ 
                  fontWeight: 700,
                  fontSize: '1.15rem',
                  color: isDark ? theme.palette.primary.main : theme.palette.primary.main,
                  position: 'relative',
                  zIndex: 1
                }}
              >
                {title}
              </Typography>
            </Box>
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
                  flexGrow: 1,
                  lineHeight: 1.7,
                  position: 'relative',
                  zIndex: 1
                }}
              >
                {description}
              </Typography>
            </motion.div>
            
            {/* Indicador de hover */}
            <motion.div
              variants={{
                initial: { width: 0, opacity: 0 },
                hover: { 
                  width: '30%', 
                  opacity: 1,
                  transition: { duration: 0.3 } 
                }
              }}
              initial="initial"
              style={{
                height: '2px',
                background: isDark ? theme.palette.secondary.main : theme.palette.secondary.main,
                marginTop: '16px',
                borderRadius: '2px'
              }}
            />
          </Box>
        </motion.div>
      </Paper>
    </motion.div>
  );
} 