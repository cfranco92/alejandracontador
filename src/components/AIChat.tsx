"use client";

import { useState, useRef, useEffect } from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  Paper, 
  Typography, 
  Avatar, 
  CircularProgress, 
  IconButton,
  Card,
  CardContent
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PersonIcon from '@mui/icons-material/Person';
import DeleteIcon from '@mui/icons-material/Delete';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

interface AIChatProps {
  dialogMode?: boolean;
}

export default function AIChat({ dialogMode = false }: AIChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '¡Hola! Soy tu asistente contable virtual. ¿En qué puedo ayudarte hoy?',
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Función para generar un ID único
  const generateId = () => Math.random().toString(36).substring(2, 9);

  // Scroll automático al último mensaje
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Esta función simula el envío de mensajes a la API de IA
  // En el futuro, aquí se conectará a un endpoint real
  const sendMessageToAI = async (userMessage: string) => {
    setIsLoading(true);
    
    // Simular un retraso en la respuesta
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // En una implementación real, aquí se enviaría userMessage al backend
    console.log(`Mensaje enviado al backend: ${userMessage}`);
    
    // Respuestas predefinidas para la simulación
    const demoResponses = [
      "Para consultas sobre declaración de renta, necesitaré más información sobre tus ingresos y deducciones.",
      "Las facturas electrónicas son obligatorias para la mayoría de los contribuyentes desde 2022.",
      "El plazo para presentar la declaración de IVA depende de tu número de NIT.",
      "Puedo ayudarte a entender cómo funciona la retención en la fuente en Colombia.",
      "Para empresas pequeñas, recomiendo llevar la contabilidad en un software especializado.",
      "Los gastos de representación tienen un tratamiento fiscal específico que debes conocer."
    ];
    
    const randomResponse = demoResponses[Math.floor(Math.random() * demoResponses.length)];
    
    // Añadir la respuesta de la IA
    setMessages(prev => [...prev, {
      id: generateId(),
      text: randomResponse,
      sender: 'ai',
      timestamp: new Date()
    }]);
    
    setIsLoading(false);
  };

  const handleSend = () => {
    if (inputValue.trim() === '') return;
    
    // Añadir el mensaje del usuario
    const newMessage: Message = {
      id: generateId(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newMessage]);
    setInputValue('');
    
    // Enviar el mensaje a la IA
    sendMessageToAI(inputValue);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: generateId(),
        text: '¡Hola de nuevo! ¿En qué puedo ayudarte hoy?',
        sender: 'ai',
        timestamp: new Date()
      }
    ]);
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: dialogMode ? '100%' : '80vh',
      maxWidth: dialogMode ? '100%' : '1000px',
      width: '100%',
      mx: dialogMode ? 0 : 'auto',
      mt: dialogMode ? 0 : 2,
      p: dialogMode ? 2 : 0
    }}>
      {!dialogMode && (
        <Card sx={{ mb: 2, p: 2 }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <SmartToyIcon color="primary" fontSize="large" />
              <Typography variant="h5" component="h1">
                Asistente Contable Virtual
              </Typography>
            </Box>
            <Typography variant="body1" color="text.secondary">
              Este asistente puede responder preguntas sobre contabilidad, impuestos y finanzas personales.
              Obtén respuestas rápidas a tus consultas más comunes.
            </Typography>
          </CardContent>
        </Card>
      )}
      
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'flex-end', 
        mb: 2 
      }}>
        <Button 
          variant="outlined" 
          startIcon={<DeleteIcon />} 
          onClick={clearChat}
          size="small"
        >
          Limpiar chat
        </Button>
      </Box>
      
      <Paper 
        elevation={dialogMode ? 0 : 3}
        sx={{ 
          flex: 1, 
          p: 2, 
          mb: 2, 
          overflow: 'auto',
          bgcolor: 'background.paper',
          ...(dialogMode && { boxShadow: 'none', border: '1px solid', borderColor: 'divider' })
        }}
      >
        {messages.map((message) => (
          <Box 
            key={message.id}
            sx={{
              display: 'flex',
              flexDirection: message.sender === 'user' ? 'row-reverse' : 'row',
              mb: 2,
              gap: 1
            }}
          >
            <Avatar 
              sx={{ 
                bgcolor: message.sender === 'user' ? 'primary.main' : 'secondary.main',
                alignSelf: 'flex-start'
              }}
            >
              {message.sender === 'user' ? <PersonIcon /> : <SmartToyIcon />}
            </Avatar>
            <Paper 
              sx={{ 
                p: 2, 
                maxWidth: '70%',
                bgcolor: message.sender === 'user' ? 'primary.light' : 'background.default',
                color: message.sender === 'user' ? 'primary.contrastText' : 'text.primary',
                borderRadius: message.sender === 'user' ? '16px 16px 0 16px' : '16px 16px 16px 0'
              }}
            >
              <Typography variant="body1">{message.text}</Typography>
              <Typography variant="caption" display="block" sx={{ mt: 1, opacity: 0.7 }}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </Typography>
            </Paper>
          </Box>
        ))}
        
        {isLoading && (
          <Box sx={{ display: 'flex', my: 2 }}>
            <Avatar sx={{ bgcolor: 'secondary.main', mr: 1 }}>
              <SmartToyIcon />
            </Avatar>
            <Box sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
              <CircularProgress size={20} thickness={5} />
              <Typography variant="body2" sx={{ ml: 2 }}>Escribiendo...</Typography>
            </Box>
          </Box>
        )}
        
        <div ref={messagesEndRef} />
      </Paper>
      
      <Paper
        component="form"
        elevation={dialogMode ? 0 : 3}
        sx={{ 
          p: 1,
          display: 'flex',
          alignItems: 'center',
          bgcolor: 'background.paper',
          ...(dialogMode && { boxShadow: 'none', border: '1px solid', borderColor: 'divider' })
        }}
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
      >
        <TextField
          fullWidth
          multiline
          maxRows={4}
          placeholder="Escribe tu pregunta aquí..."
          variant="outlined"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
          sx={{ mr: 1 }}
        />
        <IconButton 
          color="primary" 
          onClick={handleSend}
          disabled={isLoading || inputValue.trim() === ''}
          sx={{ p: 2 }}
        >
          <SendIcon />
        </IconButton>
      </Paper>
    </Box>
  );
} 