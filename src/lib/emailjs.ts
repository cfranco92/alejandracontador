// Configuración de EmailJS
export const EMAILJS_SERVICE_ID = 'service_79ea13b'; // Reemplazar con tu ID de servicio
export const EMAILJS_TEMPLATE_ID = 'template_pikzeag'; // Reemplazar con tu ID de plantilla
export const EMAILJS_PUBLIC_KEY = '2BWQC2rIVOv2-U_oI'; // Tu clave pública de EmailJS

// Este archivo almacena las constantes de configuración para EmailJS
// Para usar EmailJS debes:
// 1. Crear una cuenta en https://www.emailjs.com/ (el plan gratuito permite 200 emails/mes)
// 2. Crear un servicio de email conectando tu cuenta de Gmail, Outlook, etc.
// 3. Crear una plantilla de email con variables como {{name}}, {{email}}, {{message}}, etc.
// 4. Reemplazar los valores de las constantes arriba con los de tu cuenta

// La implementación actual usa:
// - Una plantilla que recibe name, email, phone y message
// - Se envía a alejandraberton@gmail.com 