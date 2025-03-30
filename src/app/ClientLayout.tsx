"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SimpleThemeRegistry from "./SimpleThemeRegistry";
import * as React from "react";
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import { Inter } from 'next/font/google';
import dynamic from "next/dynamic";
import { ThemeProvider } from "@/context/ThemeContext";

// Importar el Footer de forma dinámica para evitar problemas de Server Side Rendering
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
// Importar el ChatButton de forma dinámica para evitar problemas de Server Side Rendering
const DynamicChatButton = dynamic(() => import("@/components/ChatButton"), { ssr: false });
// Importar el ThemeToggle de forma dinámica para evitar problemas de SSR
const DynamicThemeToggle = dynamic(() => import("@/components/ThemeToggle"), { ssr: false });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ['latin'] });

const drawerWidth = 240;
const navItems: { name: string; path: string }[] = [
  { name: "Inicio", path: "/" },
  { name: "Acerca de", path: "/about" },
  { name: "Portafolio", path: "/portfolio" },
  { name: "Contacto", path: "/contact" },
];

// AppContent component
function AppContent({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Detectar cuando el componente está montado en el cliente
  useEffect(() => {
    setMounted(true);
    // Verificar el modo oscuro al montar
    const isDark = document.documentElement.classList.contains('dark');
    setDarkMode(isDark);

    // Escuchar cambios en la clase 'dark' del documentElement
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isDarkNow = document.documentElement.classList.contains('dark');
          setDarkMode(isDarkNow);
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const getWindow = (): Window | undefined => {
    return typeof window !== "undefined" ? window : undefined;
  };

  const muiOptions = {
    // Add options here if needed
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
          Alejandra Bertón
        </Link>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              component={Link}
              href={item.path}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const getContainer = () => {
    const win = getWindow();
    return win ? () => win.document.body : undefined;
  };

  // Si no estamos montados aún (en el servidor o la primera renderización del cliente)
  // renderizamos un placeholder
  if (!mounted) {
    return (
      <SimpleThemeRegistry 
        window={() => getWindow() as Window}
        muiOptions={muiOptions}
        isDarkMode={false}
      >
        <AppBar component="nav">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
            >
              <Link
                href="/"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Alejandra Bertón
              </Link>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  sx={{ color: "#fff" }}
                  component={Link}
                  href={item.path}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ ml: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box
          component="main"
          sx={{
            p: 3,
            minHeight: "100vh",
            pt: { xs: 8, sm: 9 },
            display: "flex",
            flexDirection: "column"
          }}
        >
          {children}
        </Box>
      </SimpleThemeRegistry>
    );
  }

  return (
    <SimpleThemeRegistry 
      window={() => getWindow() as Window}
      muiOptions={muiOptions}
      isDarkMode={darkMode}
    >
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
          >
            <Link
              href="/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Alejandra Bertón
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                sx={{ color: "#fff" }}
                component={Link}
                href={item.path}
              >
                {item.name}
              </Button>
            ))}
          </Box>
          {mounted && <DynamicThemeToggle />}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ ml: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={getContainer()}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          anchor="left"
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      <Box
        component="main"
        sx={{
          p: 3,
          minHeight: "100vh",
          pt: { xs: 8, sm: 9 },
          display: "flex",
          flexDirection: "column",
          overflow: "hidden"
        }}
      >
        {children}
        <Footer />
      </Box>
      
      {/* Usar el ChatButton dinámico para evitar errores de SSR */}
      <DynamicChatButton />
    </SimpleThemeRegistry>
  );
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}>
        <ThemeProvider>
          <AppContent>
            {children}
          </AppContent>
        </ThemeProvider>
      </body>
    </html>
  );
}