import { NextRequest, NextResponse } from 'next/server';
import { openai, OPENAI_CONFIG, OPENAI_API_KEY } from '@/lib/openai';

// Función para habilitar CORS
function corsResponse(response: NextResponse): NextResponse {
  // Permitir solicitudes desde cualquier origen (o específicamente desde tu dominio)
  response.headers.set('Access-Control-Allow-Origin', '*');
  // Configurar métodos HTTP permitidos
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  // Configurar encabezados permitidos
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  // Permitir credenciales
  response.headers.set('Access-Control-Allow-Credentials', 'true');
  
  return response;
}

// Manejar preflight OPTIONS request
export async function OPTIONS() {
  const response = NextResponse.json({});
  return corsResponse(response);
}

export async function POST(req: NextRequest) {
  try {
    // Verificar que la API key esté configurada
    if (!OPENAI_API_KEY) {
      const errorResponse = NextResponse.json(
        { error: 'La API key de OpenAI no está configurada. Por favor configura NEXT_PUBLIC_OPENAI_API_KEY en tu archivo .env.local' },
        { status: 500 }
      );
      return corsResponse(errorResponse);
    }

    // Obtener el mensaje del cuerpo de la solicitud
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      const errorResponse = NextResponse.json(
        { error: 'El formato de los mensajes es inválido' },
        { status: 400 }
      );
      return corsResponse(errorResponse);
    }

    // Preparar mensajes para OpenAI incluyendo el mensaje del sistema
    const systemMessage = {
      role: 'system',
      content: OPENAI_CONFIG.systemPrompt
    };

    const openaiMessages = [systemMessage, ...messages];

    // Llamar a la API de OpenAI
    const response = await openai.chat.completions.create({
      model: OPENAI_CONFIG.model,
      messages: openaiMessages,
      temperature: OPENAI_CONFIG.temperature,
      max_tokens: OPENAI_CONFIG.max_tokens,
    });

    // Devolver la respuesta con cabeceras CORS
    const successResponse = NextResponse.json({
      response: response.choices[0]?.message?.content || 'No se pudo generar una respuesta'
    });
    return corsResponse(successResponse);
  } catch (error: unknown) {
    console.error('Error en la API de chat:', error);
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido al procesar la solicitud';
    const errorResponse = NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
    return corsResponse(errorResponse);
  }
} 