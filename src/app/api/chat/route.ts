import { NextRequest, NextResponse } from 'next/server';
import { openai, OPENAI_CONFIG, OPENAI_API_KEY } from '@/lib/openai';

export async function POST(req: NextRequest) {
  try {
    // Verificar que la API key esté configurada
    if (!OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'La API key de OpenAI no está configurada. Por favor configura NEXT_PUBLIC_OPENAI_API_KEY en tu archivo .env.local' },
        { status: 500 }
      );
    }

    // Obtener el mensaje del cuerpo de la solicitud
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'El formato de los mensajes es inválido' },
        { status: 400 }
      );
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

    // Devolver la respuesta
    return NextResponse.json({
      response: response.choices[0]?.message?.content || 'No se pudo generar una respuesta'
    });
  } catch (error: unknown) {
    console.error('Error en la API de chat:', error);
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido al procesar la solicitud';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
} 