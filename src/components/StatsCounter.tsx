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
          color: isDarkMode ? theme.palette.secondary.main : theme.palette.secondary.dark
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
          color: isDarkMode ? theme.palette.secondary.main : theme.palette.secondary.dark
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
          color: isDarkMode ? theme.palette.secondary.main : theme.palette.secondary.dark
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
          color: isDarkMode ? theme.palette.secondary.main : theme.palette.secondary.dark
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
        bgcolor: isDarkMode ? "rgba(60, 60, 60, 0.95)" : "#f9f6f3",
        borderRadius: 3,
        my: { xs: 3, md: 4 },
        boxShadow: isDarkMode 
          ? '0 4px 20px rgba(0, 0, 0, 0.3)' 
          : '0 4px 20px rgba(0, 0, 0, 0.08)',
        border: '1px solid',
        borderColor: isDarkMode 
          ? 'rgba(217, 176, 156, 0.1)' 
          : 'rgba(232, 201, 187, 0.3)'
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
              <Box 
                sx={{ 
                  mb: { xs: 0.5, md: 1 },
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: { xs: 40, md: 50 },
                  height: { xs: 40, md: 50 },
                  borderRadius: '50%',
                  backgroundColor: isDarkMode ? 'rgba(217, 176, 156, 0.15)' : 'rgba(217, 176, 156, 0.2)',
                  p: 1
                }}
              >
                {stat.icon}
              </Box>
              <Typography 
                variant={isMobile ? "h5" : "h4"} 
                component="div" 
                sx={{
                  fontWeight: 700,
                  color: theme.palette.primary.main,
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
                  color: theme.palette.text.secondary,
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