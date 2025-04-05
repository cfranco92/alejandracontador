"use client";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ReactNode, useMemo, useState, useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function ThemeRegistry({ children }: { children: ReactNode }) {
  // Detectar la preferencia del sistema
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<'light' | 'dark'>(prefersDarkMode ? 'dark' : 'light');
  
  // Actualizar el modo si cambia la preferencia del sistema
  useEffect(() => {
    setMode(prefersDarkMode ? 'dark' : 'light');
  }, [prefersDarkMode]);
  
  // Crear el tema basado en el modo actual
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                // Paleta para modo claro usando colores Vandiere
                primary: {
                  main: '#3c3c3c', // Gris oscuro
                },
                secondary: {
                  main: '#e8c9bb', // Rosa pálido
                  light: '#f0d7cb',
                  dark: '#d9b09c', // Marrón/dorado
                },
                background: {
                  default: '#f9f6f3', // Crema/beige claro
                  paper: '#ffffff',
                },
                text: {
                  primary: '#3c3c3c', // Gris oscuro
                  secondary: '#8e7c6d',
                },
              }
            : {
                // Paleta para modo oscuro que complementa colores Vandiere
                primary: {
                  main: '#f9f6f3', // Crema/beige claro
                },
                secondary: {
                  main: '#e8c9bb', // Rosa pálido
                  dark: '#d9b09c', // Marrón/dorado
                  light: '#f0d8ce',
                },
                background: {
                  default: '#2a2a2a',
                  paper: '#3c3c3c', // Gris oscuro
                },
                text: {
                  primary: '#f9f6f3', // Crema/beige claro
                  secondary: '#d9b09c', // Marrón/dorado
                },
              }),
        },
        typography: {
          fontFamily: 'var(--font-geist-sans)',
        },
        // Simplificar componentes para evitar conflictos con serialización de funciones
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                lineHeight: 'inherit',
              },
            },
          },
        },
      }),
    [mode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  );
} 