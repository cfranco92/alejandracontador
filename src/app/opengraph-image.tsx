import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Alejandra Bertón - Contadora pública';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(to bottom right, #ffffff, #f0f0f0)',
          position: 'relative',
        }}
      >
        {/* Fondo superior con color de la marca */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            width: '100%',
            height: '150px',
            background: '#D9B09C',
          }}
        />

        {/* Contenido principal */}
        <div
          style={{
            display: 'flex',
            maxWidth: 980,
            padding: '2rem',
            marginTop: '80px',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'white',
            borderRadius: '16px',
            boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
            zIndex: 10,
          }}
        >
          <div
            style={{
              fontSize: 80,
              fontWeight: 'bold',
              color: '#333',
              textAlign: 'center',
              marginBottom: '1rem',
            }}
          >
            Alejandra Bertón
          </div>
          <div
            style={{
              fontSize: 54,
              fontWeight: 'semibold',
              color: '#666',
              textAlign: 'center',
              marginBottom: '2rem',
            }}
          >
            Contadora Pública
          </div>
          <div
            style={{
              fontSize: 36,
              color: '#D9B09C',
              textAlign: 'center',
              maxWidth: '800px',
              marginBottom: '3rem',
            }}
          >
            Consulta sobre contabilidad y finanzas con asistente virtual de IA
          </div>

          {/* Icono de chat */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#D9B09C',
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              marginBottom: '1rem',
            }}
          >
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z"
                fill="white"
              />
              <path
                d="M7 9H17M7 13H14"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Footer con URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            fontSize: 24,
            color: '#666',
          }}
        >
          alejandracontador.vercel.app
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse width and height.
      ...size,
    }
  );
} 