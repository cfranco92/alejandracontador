"use client";

import React, { useState, useRef, useEffect } from 'react';
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
  CardContent,
  Alert,
  useTheme
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PersonIcon from '@mui/icons-material/Person';
import DeleteIcon from '@mui/icons-material/Delete';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Interfaces para los mensajes y props
interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  role?: 'user' | 'assistant'; // Para la API de OpenAI
  hasWhatsAppButton?: boolean; // Para mostrar el botón de WhatsApp
}

interface AIChatProps {
  dialogMode?: boolean;
}

// Número de WhatsApp de Alejandra
const WHATSAPP_NUMBER = '+573053004399'; // Número real de Alejandra

// Componente principal
export default function AIChat({ dialogMode = false }: AIChatProps) {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '¡Hola! Soy tu asistente contable virtual. ¿En qué puedo ayudarte hoy?',
      sender: 'ai',
      timestamp: new Date(),
      role: 'assistant'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
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

  // Función para enviar mensajes a la API
  const sendMessageToAI = async (userMessage: string) => {
    setIsLoading(true);
    setApiError(null);
    
    try {
      // Preparar mensajes para la API en el formato correcto
      const apiMessages = messages
        .filter(msg => msg.role) // Filtramos solo los mensajes con role definido
        .map(msg => ({
          role: msg.role,
          content: msg.text
        }));
      
      // Añadir el mensaje actual del usuario
      apiMessages.push({
        role: 'user',
        content: userMessage
      });
      
      // Llamar a nuestra API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: apiMessages }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Error al comunicarse con el asistente');
      }
      
      // Verificar si el mensaje contiene la clave para mostrar el botón de WhatsApp
      const responseText = data.response;
      const hasWhatsAppButton = responseText.includes('CONTACTAR_WHATSAPP');
      
      // Limpiar el texto de la respuesta eliminando la clave
      const cleanedText = responseText.replace('CONTACTAR_WHATSAPP', '');
      
      // Añadir la respuesta del asistente
      setMessages(prev => [...prev, {
        id: generateId(),
        text: cleanedText,
        sender: 'ai',
        timestamp: new Date(),
        role: 'assistant',
        hasWhatsAppButton
      }]);
    } catch (error) {
      console.error('Error al enviar mensaje:', error);
      setApiError(error instanceof Error ? error.message : 'Error de conexión con el asistente');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = () => {
    if (inputValue.trim() === '') return;
    
    // Añadir el mensaje del usuario
    const newMessage: Message = {
      id: generateId(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
      role: 'user'
    };
    
    setMessages(prev => [...prev, newMessage]);
    const currentInput = inputValue;
    setInputValue('');
    
    // Enviar el mensaje a la IA
    sendMessageToAI(currentInput);
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
        timestamp: new Date(),
        role: 'assistant'
      }
    ]);
    setApiError(null);
  };

  // Función para obtener un resumen de la consulta del usuario y respuestas
  const getConversationSummary = async () => {
    // Filtrar los últimos mensajes (máximo 2 del usuario y 2 del asistente)
    const recentMessages = messages.slice(-5);
    
    const userQueries = recentMessages
      .filter(msg => msg.sender === 'user')
      .slice(-2)
      .map(msg => msg.text);
    
    const aiResponses = recentMessages
      .filter(msg => msg.sender === 'ai')
      .slice(-2)
      .map(msg => msg.text);
    
    // Si no hay mensajes del usuario, usar mensaje predeterminado
    if (userQueries.length === 0) {
      return "Hola Alejandra,\n\nTe contacto desde tu sitio web. Necesito ayuda con un tema contable.\n\nSaludos.";
    }
    
    // Preparar resumen de consulta del usuario
    let userQuery = '';
    if (userQueries.length === 1 && userQueries[0].length <= 150) {
      userQuery = userQueries[0];
    } else {
      // Si hay varios mensajes o mensaje muy largo, resumir
      const lastQuery = userQueries[userQueries.length - 1];
      userQuery = lastQuery.length <= 120 
        ? lastQuery 
        : `${lastQuery.substring(0, 117)}...`;
    }
    
    // Preparar resumen de respuestas de la IA
    let aiSummary = '';
    if (aiResponses.length > 0) {
      // Usar la API para generar un resumen conciso
      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            messages: [
              {
                role: 'system',
                content: 'Eres un asistente de resumen. Resume la siguiente respuesta en máximo 100 caracteres, extrayendo solo puntos clave sin explicaciones.'
              },
              {
                role: 'user',
                content: `Resume esto en una sola frase corta: ${aiResponses[aiResponses.length - 1]}`
              }
            ]
          }),
        });
        
        const data = await response.json();
        
        if (response.ok) {
          aiSummary = data.response || '';
        }
      } catch (error) {
        console.error('Error al resumir respuesta AI:', error);
        // Si falla, tomar primeras palabras de la última respuesta
        const lastResponse = aiResponses[aiResponses.length - 1];
        aiSummary = lastResponse.length <= 100 
          ? lastResponse.split('.')[0] 
          : `${lastResponse.substring(0, 97)}...`;
      }
    }
    
    // Formatear el mensaje completo
    return `Hola Alejandra,

Te contacto desde tu sitio web. Tengo una consulta sobre temas contables.

*Mi pregunta:*
${userQuery}

*El asistente virtual me respondió:*
${aiSummary}

Me gustaría obtener más información o asesoría personalizada sobre este tema.

Saludos cordiales.`;
  };

  // Función para contactar por WhatsApp
  const contactWhatsApp = async () => {
    setIsLoading(true);
    try {
      // Generar mensaje con contexto
      const messageWithContext = await getConversationSummary();
      // Formatear mensaje para WhatsApp
      const whatsappMessage = encodeURIComponent(messageWithContext);
      // Abrir WhatsApp en una nueva pestaña
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`, '_blank');
    } catch (error) {
      console.error('Error al generar mensaje de WhatsApp:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Componente para renderizar el contenido con Markdown bien formateado
  const MarkdownContent: React.FC<{text: string}> = ({ text }) => {
    return (
      <Box className="markdown-wrapper">
        <div className="markdown-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {text}
          </ReactMarkdown>
        </div>
      </Box>
    );
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

      {apiError && (
        <Alert 
          severity="error" 
          sx={{ mb: 2 }}
          onClose={() => setApiError(null)}
        >
          {apiError}
        </Alert>
      )}
      
      <Paper 
        elevation={dialogMode ? 0 : 3}
        sx={{ 
          flex: 1, 
          p: 2, 
          mb: 2, 
          overflow: 'auto',
          bgcolor: 'background.paper',
          ...(dialogMode && { boxShadow: 'none', border: '1px solid', borderColor: 'divider' }),
          // Estilos globales para el markdown en los mensajes
          '& .markdown-content': {
            '& p': { mb: 2 },
            '& ul, & ol': { pl: 3, mb: 2 },
            '& li': { mb: 1 },
            '& h1, & h2, & h3': { 
              color: theme.palette.secondary.main,
              fontWeight: 'bold',
              my: 1 
            },
            '& h1': { fontSize: '1.5rem' },
            '& h2': { fontSize: '1.25rem' },
            '& h3': { fontSize: '1.1rem' },
            '& strong': { 
              fontWeight: 'bold',
              color: theme.palette.secondary.main
            },
            '& em': { 
              fontStyle: 'italic',
              color: theme.palette.info.main
            },
            '& blockquote': {
              borderLeft: `4px solid ${theme.palette.secondary.light}`,
              pl: 2,
              py: 0.5,
              my: 1,
              color: theme.palette.text.secondary,
              fontStyle: 'italic'
            },
            '& code': {
              fontFamily: 'monospace',
              backgroundColor: isDarkMode 
                ? 'rgba(255,255,255,0.1)' 
                : 'rgba(0,0,0,0.05)',
              px: 1,
              py: 0.5,
              borderRadius: 1
            },
            '& a': {
              color: theme.palette.primary.main,
              textDecoration: 'underline'
            },
            '& table': {
              borderCollapse: 'collapse',
              width: '100%',
              mb: 2
            },
            '& th, & td': {
              border: `1px solid ${theme.palette.divider}`,
              p: 1,
              textAlign: 'left'
            },
            '& th': {
              backgroundColor: isDarkMode 
                ? 'rgba(255,255,255,0.1)' 
                : 'rgba(0,0,0,0.05)',
              fontWeight: 'bold'
            },
            '& tr:nth-of-type(even)': {
              backgroundColor: isDarkMode 
                ? 'rgba(255,255,255,0.05)' 
                : 'rgba(0,0,0,0.02)'
            }
          }
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
                maxWidth: {xs: '80%', sm: '70%'},
                bgcolor: message.sender === 'user' ? 'primary.light' : 'background.default',
                color: message.sender === 'user' ? 'primary.contrastText' : 'text.primary',
                borderRadius: message.sender === 'user' ? '16px 16px 0 16px' : '16px 16px 16px 0',
                boxShadow: isDarkMode 
                  ? '0 2px 10px rgba(0, 0, 0, 0.2)' 
                  : '0 2px 5px rgba(0, 0, 0, 0.05)'
              }}
            >
              {message.sender === 'user' ? (
                <Typography variant="body1">{message.text}</Typography>
              ) : (
                <MarkdownContent text={message.text} />
              )}
              
              {/* Botón de WhatsApp si es necesario */}
              {message.hasWhatsAppButton && (
                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-start' }}>
                  <Button
                    variant="contained"
                    onClick={contactWhatsApp}
                    size="small"
                    disabled={isLoading}
                    sx={{ 
                      borderRadius: 8,
                      px: 2.5,
                      py: 1.2,
                      fontSize: '0.9rem', 
                      fontWeight: 'bold',
                      bgcolor: '#25D366',
                      color: '#fff',
                      '&:hover': {
                        bgcolor: '#128C7E',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)'
                      },
                      '&:active': {
                        transform: 'translateY(0)',
                        boxShadow: '0 2px 8px rgba(37, 211, 102, 0.3)'
                      },
                      '&:disabled': {
                        bgcolor: 'rgba(37, 211, 102, 0.6)',
                        color: '#fff'
                      },
                      transition: 'all 0.2s ease-in-out',
                      boxShadow: '0 2px 8px rgba(37, 211, 102, 0.3)'
                    }}
                  >
                    {isLoading ? (
                      <>
                        <CircularProgress 
                          size={18} 
                          thickness={5} 
                          sx={{ color: '#fff', mr: 1.5 }} 
                        />
                        <span>Preparando mensaje...</span>
                      </>
                    ) : (
                      <>
                        <WhatsAppIcon sx={{ mr: 0.5 }} />
                        <span>Contactar a Alejandra</span>
                      </>
                    )}
                  </Button>
                </Box>
              )}
              
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
            <Box 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                p: 2, 
                borderRadius: '16px 16px 16px 0',
                bgcolor: 'background.default',
                boxShadow: isDarkMode 
                  ? '0 2px 10px rgba(0, 0, 0, 0.2)' 
                  : '0 2px 5px rgba(0, 0, 0, 0.05)'
              }}
            >
              <CircularProgress size={20} thickness={5} color="secondary" />
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
          ...(dialogMode && { boxShadow: 'none', border: '1px solid', borderColor: 'divider' }),
          borderRadius: 4
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
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
          variant="standard"
          sx={{ px: 2 }}
          InputProps={{
            disableUnderline: true,
          }}
          disabled={isLoading}
        />
        <IconButton 
          color="primary" 
          onClick={handleSend} 
          disabled={isLoading || inputValue.trim() === ''}
          sx={{
            bgcolor: inputValue.trim() !== '' ? 'primary.main' : 'transparent',
            color: inputValue.trim() !== '' ? 'white' : 'primary.main',
            '&:hover': {
              bgcolor: inputValue.trim() !== '' ? 'primary.dark' : 'rgba(0, 0, 0, 0.04)'
            },
            transition: 'all 0.2s ease-in-out'
          }}
        >
          <SendIcon />
        </IconButton>
      </Paper>
    </Box>
  );
} 