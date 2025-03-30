"use client";

import { IconButton, Tooltip } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@/context/ThemeContext';

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Tooltip title={isDarkMode 
      ? "Cambiar a modo claro (su preferencia quedará guardada)" 
      : "Cambiar a modo oscuro (su preferencia quedará guardada)"
    }>
      <IconButton 
        onClick={toggleTheme} 
        color="inherit"
        aria-label="toggle theme"
      >
        {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Tooltip>
  );
} 