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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.03,
        boxShadow: isDark 
          ? '0 10px 30px -15px rgba(0, 0, 0, 0.5)' 
          : '0 10px 30px -15px rgba(0, 0, 0, 0.2)'
      }}
    >
      <Paper 
        elevation={isDark ? 2 : 1}
        sx={{
          height: '100%',
          p: 3,
          transition: 'all 0.3s ease',
          backgroundImage: 'none',
          backgroundColor: isDark ? 'rgba(17, 25, 40, 0.75)' : theme.palette.background.paper,
          borderRadius: 2,
          border: '1px solid',
          borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(226, 232, 240, 0.8)',
          '&:hover': {
            borderColor: isDark ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.4)',
            boxShadow: isDark 
              ? '0 8px 25px -5px rgba(0, 0, 0, 0.3)' 
              : '0 8px 25px -5px rgba(0, 0, 0, 0.1)',
          }
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: 48,
                height: 48,
                flexShrink: 0,
                mr: 2,
                borderRadius: '12px',
                overflow: 'hidden',
                background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(59, 130, 246, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: 1,
                border: '1px solid',
                borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(59, 130, 246, 0.2)',
              }}
            >
              <Image
                src={icon}
                alt={title}
                width={36}
                height={36}
                style={{
                  filter: isDark ? 'brightness(0.95) contrast(1.1)' : 'none',
                }}
              />
            </Box>
            <Typography 
              variant="h6" 
              component="h3" 
              sx={{ 
                fontWeight: 700,
                fontSize: '1.1rem',
                color: isDark ? theme.palette.primary.light : theme.palette.primary.dark
              }}
            >
              {title}
            </Typography>
          </Box>
          <Typography 
            variant="body2" 
            sx={{ 
              color: isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)',
              flexGrow: 1,
              lineHeight: 1.6,
            }}
          >
            {description}
          </Typography>
        </Box>
      </Paper>
    </motion.div>
  );
} 