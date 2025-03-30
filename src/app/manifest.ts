import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Alejandra Bertón - Contadora Pública',
    short_name: 'A. Bertón',
    description: 'Servicios contables y tributarios con asistente virtual de IA',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#D9B09C',
    icons: [
      {
        src: '/alejandra-thumbnail.jpg',
        sizes: '192x192',
        type: 'image/jpeg',
      },
      {
        src: '/alejandra-thumbnail.jpg',
        sizes: '512x512',
        type: 'image/jpeg',
      },
    ],
  };
} 