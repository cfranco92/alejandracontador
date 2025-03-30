"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode | ((context: ThemeContextType) => ReactNode);
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [userHasSetTheme, setUserHasSetTheme] = useState(false);

  // Función para verificar si es hora de activar el modo oscuro automáticamente
  const shouldActivateDarkMode = () => {
    const currentHour = new Date().getHours();
    return currentHour >= 19 || currentHour < 6; // Entre 7pm y 6am
  };

  useEffect(() => {
    setIsClient(true);
    const savedTheme = localStorage.getItem('theme');
    const userSetThemeManually = localStorage.getItem('userSetTheme') === 'true';
    
    if (savedTheme && userSetThemeManually) {
      // El usuario ha configurado manualmente el tema, respetamos su elección
      setUserHasSetTheme(true);
      setIsDarkMode(savedTheme === 'dark');
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else {
      // No hay preferencia manual, usar la hora del día para determinar el tema
      const shouldBeDark = shouldActivateDarkMode();
      setIsDarkMode(shouldBeDark);
      if (shouldBeDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      localStorage.setItem('userSetTheme', 'false');
    }
  }, []);

  // Efecto para actualizar el tema basado en la hora si el usuario no ha establecido una preferencia
  useEffect(() => {
    if (!userHasSetTheme && isClient) {
      // Verificar cada minuto si debe cambiar el tema automáticamente
      const interval = setInterval(() => {
        const shouldBeDark = shouldActivateDarkMode();
        if (shouldBeDark !== isDarkMode) {
          setIsDarkMode(shouldBeDark);
          if (shouldBeDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
          } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
          }
        }
      }, 60000); // Verificar cada minuto
      
      return () => clearInterval(interval);
    }
  }, [isDarkMode, userHasSetTheme, isClient]);

  const toggleTheme = () => {
    setUserHasSetTheme(true);
    localStorage.setItem('userSetTheme', 'true');
    
    setIsDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newMode;
    });
  };

  // No renderizamos nada hasta que estemos en el cliente para evitar errores de hidratación
  if (!isClient) {
    return <>{typeof children === 'function' ? children({ isDarkMode, toggleTheme }) : children}</>;
  }

  const contextValue: ThemeContextType = { isDarkMode, toggleTheme };

  return (
    <ThemeContext.Provider value={contextValue}>
      {typeof children === 'function' ? children(contextValue) : children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 