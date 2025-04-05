"use client";

import React from 'react';
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

export default function SimpleThemeRegistry({
  children,
  muiOptions,
  window,
  isDarkMode,
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

  // Crear el tema según el modo (claro u oscuro)
  const theme = React.useMemo(() => {
    return createTheme({
      palette: {
        mode: isDarkMode ? "dark" : "light",
        primary: {
          main: isDarkMode ? '#f9f6f3' : '#3c3c3c',
        },
        secondary: {
          main: '#e8c9bb',
          light: '#f0d7cb',
          dark: '#d9b09c',
        },
        background: {
          default: isDarkMode ? '#2a2a2a' : '#f9f6f3',
          paper: isDarkMode ? '#3c3c3c' : '#ffffff',
        },
        text: {
          primary: isDarkMode ? '#f9f6f3' : '#3c3c3c',
          secondary: isDarkMode ? '#d9b09c' : '#8e7c6d',
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
  }, [isDarkMode, muiOptions]);

  // Si no estamos en el cliente, renderizamos una versión simplificada
  if (!isClient) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme {...muiProps} />
      {children}
    </ThemeProvider>
  );
} 