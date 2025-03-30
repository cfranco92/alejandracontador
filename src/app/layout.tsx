import { Metadata, Viewport } from 'next';
import ClientLayout from './ClientLayout';

export const metadata: Metadata = {
  metadataBase: new URL('https://alejandracontador.vercel.app'),
  title: 'Alejandra Bertón - Contadora Pública',
  description: 'Servicios profesionales de contabilidad y consulta virtual. Resuelve dudas contables y tributarias al instante con nuestro asistente de IA.',
  openGraph: {
    title: 'Alejandra Bertón | Contadora Pública',
    description: 'Servicios contables y tributarios con asistente virtual. Consulta instantánea sobre impuestos, contabilidad y finanzas.',
    images: [
      {
        url: '/alejandra-thumbnail.jpg', // Imagen más pequeña optimizada para compartir
        width: 600,
        height: 600,
        alt: 'Alejandra Bertón - Asesora Contable',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary', // Cambiado a 'summary' para una vista más compacta
    title: 'Alejandra Bertón | Asistente Contable Virtual',
    description: 'Servicios contables y tributarios con consulta virtual. Respuestas inmediatas a tus dudas.',
    images: ['/alejandra-thumbnail.jpg'], // Imagen más pequeña
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout>{children}</ClientLayout>;
}
