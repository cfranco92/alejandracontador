import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Alejandra Bertón - Asistente Contable Virtual';
export const size = {
  width: 600,
  height: 600,
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
            height: '80px',
            background: '#D9B09C',
          }}
        />

        {/* Contenido principal */}
        <div
          style={{
            display: 'flex',
            maxWidth: '90%',
            padding: '1.5rem',
            marginTop: '40px',
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
              fontSize: 48,
              fontWeight: 'bold',
              color: '#333',
              textAlign: 'center',
              marginBottom: '0.5rem',
            }}
          >
            Alejandra Bertón
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 'semibold',
              color: '#666',
              textAlign: 'center',
              marginBottom: '1rem',
            }}
          >
            Contadora Pública
          </div>
          <div
            style={{
              fontSize: 20,
              color: '#D9B09C',
              textAlign: 'center',
              maxWidth: '90%',
              marginBottom: '1.5rem',
            }}
          >
            Consulta sobre contabilidad y finanzas con IA
          </div>

          {/* Icono de chat */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#D9B09C',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              marginBottom: '1rem',
            }}
          >
            <svg
              width="48"
              height="48"
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
            bottom: '20px',
            fontSize: 18,
            color: '#666',
          }}
        >
          alejandracontador.vercel.app
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
} 