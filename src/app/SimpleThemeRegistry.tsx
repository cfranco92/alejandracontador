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
      main: '#3c3c3c',
    },
    secondary: {
      main: '#e8c9bb',
    },
    background: {
      default: '#f9f6f3',
      paper: '#ffffff',
    },
    text: {
      primary: '#3c3c3c',
      secondary: '#8e7c6d',
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
      main: '#f9f6f3',
      dark: '#e0e0e0',
      light: '#ffffff',
      contrastText: '#2a2a2a',
    },
    secondary: {
      main: '#e8c9bb',
      dark: '#d9b09c',
      light: '#f0d8ce',
      contrastText: '#2a2a2a',
    },
    background: {
      default: '#2a2a2a',
      paper: '#3c3c3c',
    },
    text: {
      primary: '#f9f6f3',
      secondary: '#d9b09c',
    },
    divider: 'rgba(233, 201, 187, 0.2)',
    action: {
      active: '#ffffff',
      hover: 'rgba(233, 201, 187, 0.08)',
      selected: 'rgba(233, 201, 187, 0.16)',
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(233, 201, 187, 0.12)',
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
          backgroundColor: '#3c3c3c',
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
          color: '#f9f6f3',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#2a2a2a',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#3c3c3c',
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        title: {
          color: '#f9f6f3',
        },
        subheader: {
          color: 'rgba(233, 201, 187, 0.8)',
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
          color: '#f9f6f3',
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