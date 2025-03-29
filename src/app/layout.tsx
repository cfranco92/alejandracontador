import { Metadata, Viewport } from 'next';
import ClientLayout from './ClientLayout';

export const metadata: Metadata = {
  title: 'Alejandra Bertón - Contadora Pública',
  description: 'Servicios profesionales de contabilidad, asesoría tributaria y consultorías financieras en Colombia.',
  openGraph: {
    title: 'Alejandra Bertón | Contadora Pública',
    description: 'Servicios contables y tributarios profesionales',
    images: [
      {
        url: '/alejandrafoto.jpeg', // URL relativa a tu dominio
        width: 800,
        height: 800,
        alt: 'Alejandra Bertón',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alejandra Bertón | Contadora Pública',
    description: 'Servicios contables y tributarios profesionales',
    images: ['/alejandrafoto.jpeg'], // URL relativa a tu dominio
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
