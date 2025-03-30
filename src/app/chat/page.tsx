"use client";

import { Container, Typography, Paper, Box, useTheme } from '@mui/material';
import AIChat from '@/components/AIChat';
import { motion } from 'framer-motion';

// Metadatos estáticos para la página de chat
export const metadata = {
  title: 'Asistente Contable Virtual | Alejandra Bertón',
  description: 'Resuelve tus dudas contables y fiscales al instante con nuestro chatbot de IA. Consulta sobre impuestos, facturación y más.',
  alternates: {
    canonical: '/chat',
  },
};

const MotionPaper = motion(Paper);
const MotionBox = motion(Box);

export default function ChatPage() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        sx={{ mb: 4, textAlign: 'center' }}
      >
        <Typography 
          variant="h2" 
          component="h1" 
          sx={{ 
            fontWeight: 'bold',
            mb: 2,
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            background: isDarkMode 
              ? 'linear-gradient(90deg, #f8fafc 0%, #e2e8f0 100%)' 
              : 'linear-gradient(90deg, #1e293b 0%, #334155 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: isDarkMode ? '0px 2px 5px rgba(0, 0, 0, 0.5)' : 'none',
          }}
        >
          Asistente Contable Virtual
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            color: isDarkMode ? 'rgba(255, 255, 255, 0.8)' : 'text.secondary',
            maxWidth: '800px',
            mx: 'auto',
            mb: 4
          }}
        >
          Consulta tus dudas sobre contabilidad, impuestos y finanzas. Recibe respuestas inmediatas
          basadas en la experiencia profesional de Alejandra Bertón.
        </Typography>
      </MotionBox>

      <MotionPaper
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        elevation={isDarkMode ? 4 : 2}
        sx={{ 
          borderRadius: 3,
          overflow: 'hidden',
          border: '1px solid',
          borderColor: isDarkMode ? 'rgba(59, 130, 246, 0.1)' : 'rgba(226, 232, 240, 0.8)',
          boxShadow: isDarkMode 
            ? '0 4px 20px rgba(0, 0, 0, 0.3)' 
            : '0 4px 20px rgba(0, 0, 0, 0.08)'
        }}
      >
        <AIChat />
      </MotionPaper>

      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        sx={{ 
          mt: 4, 
          textAlign: 'center',
          color: isDarkMode ? 'rgba(255, 255, 255, 0.6)' : 'text.secondary',
          fontSize: '0.9rem'
        }}
      >
        <Typography variant="body2">
          Este asistente utiliza inteligencia artificial (GPT-4) para generar respuestas automáticas.
          Para consultas específicas o asesoramiento formal, por favor contacta directamente con Alejandra.
        </Typography>
      </MotionBox>
    </Container>
  );
} 