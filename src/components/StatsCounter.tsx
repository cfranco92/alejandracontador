"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Box, Typography, Grid, useMediaQuery, useTheme } from '@mui/material';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import GroupsIcon from '@mui/icons-material/Groups';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WorkIcon from '@mui/icons-material/Work';

export default function StatsCounter() {
  const [startCounting, setStartCounting] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isDarkMode = theme.palette.mode === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('stats-section');
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isVisible && !startCounting) {
          setStartCounting(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on first render
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [startCounting]);

  const stats = [
    { 
      value: 98, 
      label: 'Clientes Satisfechos', 
      suffix: '%',
      icon: <EqualizerIcon 
        sx={{ 
          fontSize: isMobile ? 'medium' : 'large',
          color: isDarkMode ? '#60a5fa' : '#3b82f6'
        }} 
      />
    },
    { 
      value: 120, 
      label: 'Clientes Atendidos', 
      suffix: '+',
      icon: <GroupsIcon 
        sx={{ 
          fontSize: isMobile ? 'medium' : 'large',
          color: isDarkMode ? '#34d399' : '#10b981'
        }} 
      /> 
    },
    { 
      value: 8, 
      label: 'Años de Experiencia', 
      suffix: '+',
      icon: <AccessTimeIcon 
        sx={{ 
          fontSize: isMobile ? 'medium' : 'large',
          color: isDarkMode ? '#fbbf24' : '#f59e0b'
        }} 
      /> 
    },
    { 
      value: 50, 
      label: 'Proyectos Completados', 
      suffix: '+',
      icon: <WorkIcon 
        sx={{ 
          fontSize: isMobile ? 'medium' : 'large',
          color: isDarkMode ? '#c084fc' : '#a855f7'
        }} 
      /> 
    }
  ];

  return (
    <Box 
      id="stats-section" 
      sx={{
        py: { xs: 4, md: 5 },
        px: 2,
        bgcolor: isDarkMode ? 'rgba(15, 23, 42, 0.95)' : 'rgba(249, 250, 251, 0.95)',
        borderRadius: 4,
        my: { xs: 3, md: 4 },
        boxShadow: isDarkMode 
          ? '0 4px 20px rgba(0, 0, 0, 0.25)' 
          : '0 4px 20px rgba(0, 0, 0, 0.05)',
        border: '1px solid',
        borderColor: isDarkMode ? 'rgba(59, 130, 246, 0.1)' : 'rgba(226, 232, 240, 0.8)'
      }}
    >
      <Grid container spacing={3} justifyContent="center">
        {stats.map((stat, index) => (
          <Grid item xs={6} md={3} key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={startCounting ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <Box sx={{ mb: { xs: 0.5, md: 1 } }}>{stat.icon}</Box>
              <Typography 
                variant={isMobile ? "h5" : "h4"} 
                component="div" 
                sx={{
                  fontWeight: 700,
                  color: isDarkMode ? '#f8fafc' : theme.palette.text.primary,
                }}
              >
                {startCounting ? (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    suffix={stat.suffix}
                    useEasing={true}
                  />
                ) : (
                  `0${stat.suffix}`
                )}
              </Typography>
              <Typography 
                variant="body2" 
                sx={{
                  textAlign: 'center',
                  color: isDarkMode ? 'rgba(255, 255, 255, 0.8)' : theme.palette.text.secondary,
                  fontSize: { xs: '0.75rem', sm: '0.875rem' }
                }}
              >
                {stat.label}
              </Typography>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
} 