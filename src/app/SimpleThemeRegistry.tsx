"use client";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ReactNode, useEffect, useState } from 'react';

// Props interface para SimpleThemeRegistry
interface SimpleThemeRegistryProps {
  children: ReactNode;
  // Props opcionales que se pasarán a MUI
  window?: () => Window;
  muiOptions?: Record<string, unknown>;
  isDarkMode?: boolean;
}

// Crear temas estáticos para evitar problemas de serialización
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#171717',
    },
    secondary: {
      main: '#6366f1',
    },
    background: {
      default: '#ffffff',
      paper: '#f7f7f7',
    },
    text: {
      primary: '#171717',
      secondary: '#4b5563',
    },
  },
  typography: {
    fontFamily: 'var(--font-geist-sans)',
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#f5f5f5',
      dark: '#e0e0e0',
      light: '#ffffff',
      contrastText: '#121212',
    },
    secondary: {
      main: '#818cf8',
      dark: '#6366f1',
      light: '#a5b4fc',
      contrastText: '#ffffff',
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    text: {
      primary: '#f5f5f5',
      secondary: '#d1d5db',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    action: {
      active: '#ffffff',
      hover: 'rgba(255, 255, 255, 0.08)',
      selected: 'rgba(255, 255, 255, 0.16)',
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
    },
  },
  typography: {
    fontFamily: 'var(--font-geist-sans)',
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          backgroundImage: 'none',
          backgroundColor: 'rgba(17, 24, 39, 0.85)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 600,
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#f5f5f5',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#0f172a',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(15, 23, 42, 0.95)',
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        title: {
          color: '#f8fafc',
        },
        subheader: {
          color: 'rgba(255, 255, 255, 0.7)',
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          '&:last-child': {
            paddingBottom: '16px',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          color: '#f8fafc',
        },
      },
    },
  },
});

export default function SimpleThemeRegistry({ 
  children, 
  window,
  muiOptions = {},
  isDarkMode = false
}: SimpleThemeRegistryProps) {
  // Cliente está disponible solo después del montaje
  const [isClient, setIsClient] = useState(false);
  
  // Asegurarnos de que solo se ejecute en el cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Props para pasar a MUI ThemeProvider y CssBaseline
  const muiProps = {
    window,
    ...muiOptions
  };

  // Si no estamos en el cliente, renderizamos una versión simplificada
  if (!isClient) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline enableColorScheme {...muiProps} />
      {children}
    </ThemeProvider>
  );
} 