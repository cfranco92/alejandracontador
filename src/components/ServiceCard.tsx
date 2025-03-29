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
          backgroundColor: isDark ? theme.palette.background.paper : theme.palette.background.paper,
          borderRadius: 2,
          border: '1px solid',
          borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : theme.palette.secondary.light,
          '&:hover': {
            borderColor: isDark ? theme.palette.secondary.main : theme.palette.secondary.main,
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
                background: isDark ? 'rgba(233, 201, 187, 0.1)' : 'rgba(233, 201, 187, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: 1,
                border: '1px solid',
                borderColor: isDark ? 'rgba(233, 201, 187, 0.2)' : 'rgba(233, 201, 187, 0.3)',
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
                color: isDark ? theme.palette.primary.main : theme.palette.primary.main
              }}
            >
              {title}
            </Typography>
          </Box>
          <Typography 
            variant="body2" 
            sx={{ 
              color: isDark ? theme.palette.text.secondary : theme.palette.text.secondary,
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