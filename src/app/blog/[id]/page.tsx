"use client";

import React from "react";
import { 
  Container, 
  Typography, 
  Box, 
  Paper, 
  Chip,
  Button, 
  Divider,
  useTheme,
  Avatar,
  Grid
} from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Datos de ejemplo para los artículos del blog (los mismos que en la página principal)
const blogPosts = [
  {
    id: 1,
    title: "Reforma Tributaria en Colombia 2024: Lo que debes saber",
    excerpt: "Analizamos los puntos clave de la última reforma tributaria en Colombia y cómo afecta a empresas y personas naturales.",
    content: `
      <p>La última reforma tributaria en Colombia introduce cambios significativos que afectan tanto a empresas como a personas naturales. Esta reforma busca aumentar la recaudación fiscal para financiar programas sociales y reducir el déficit fiscal.</p>
      
      <h2>Principales cambios para personas naturales</h2>
      <p>Uno de los cambios más relevantes es la modificación en las tarifas del impuesto de renta para personas naturales. Se establece una nueva tabla progresiva con tarifas que van desde el 0% hasta el 39% para los ingresos más altos. Además, se reducen algunos beneficios tributarios y deducciones que antes estaban disponibles.</p>
      
      <p>Las personas con ingresos mensuales superiores a 10 millones de pesos verán un aumento en su carga tributaria. También se modifican las reglas para las rentas exentas y se limitan algunas deducciones especiales.</p>
      
      <h2>Impacto en las empresas</h2>
      <p>Para las empresas, la tasa general del impuesto de renta se mantiene en el 35%, pero se eliminan varios beneficios y exenciones que antes permitían reducir la base gravable. Las empresas del sector financiero tendrán una sobretasa temporal del 3% durante los próximos tres años.</p>
      
      <p>Se introducen también nuevos requisitos para la deducibilidad de gastos y se fortalecen las normas anti-evasión, lo que obligará a muchas empresas a revisar sus estructuras fiscales y de cumplimiento.</p>
      
      <h2>Cambios en el IVA y otros impuestos</h2>
      <p>Si bien la tarifa general del IVA se mantiene en el 19%, se amplía la base de productos y servicios gravados. Algunos bienes que antes estaban excluidos o exentos ahora estarán gravados, lo que impactará el costo de vida de los colombianos.</p>
      
      <p>Se crea también un impuesto al patrimonio permanente para las personas naturales con patrimonios superiores a 3.000 millones de pesos, con tarifas progresivas.</p>
      
      <h2>Recomendaciones para contribuyentes</h2>
      <p>Ante estos cambios, es fundamental que tanto empresas como personas naturales realicen una planeación tributaria adecuada. Algunas recomendaciones incluyen:</p>
      
      <ul>
        <li>Revisar y actualizar la estructura de ingresos y gastos</li>
        <li>Identificar nuevas oportunidades de deducciones legítimas</li>
        <li>Planificar el flujo de caja considerando las nuevas cargas tributarias</li>
        <li>Consultar con un asesor tributario para optimizar la situación fiscal</li>
      </ul>
      
      <p>La implementación de esta reforma requerirá adaptación y una cuidadosa planeación financiera. Como siempre, es recomendable contar con asesoría profesional para navegar estos cambios y cumplir adecuadamente con las obligaciones tributarias.</p>
    `,
    author: "Alejandra Bertón",
    authorRole: "Contadora Pública",
    authorBio: "Especialista en derecho tributario con más de 10 años de experiencia asesorando empresas en Colombia.",
    date: "15 de mayo de 2024",
    imageUrl: "/images/blog/reforma-tributaria.jpg",
    categories: ["Impuestos", "Legislación"],
    featured: true,
    relatedPosts: [2, 4, 6]
  },
  {
    id: 2,
    title: "Consejos para la declaración de renta de personas naturales",
    excerpt: "Guía práctica con los mejores consejos para preparar correctamente tu declaración de renta y evitar sanciones.",
    content: `
      <p>Preparar la declaración de renta puede ser un proceso estresante para muchas personas. Sin embargo, con la planificación adecuada y siguiendo algunos consejos prácticos, puedes completar este proceso de manera eficiente y evitar errores costosos.</p>
      
      <h2>Organiza tu información financiera</h2>
      <p>El primer paso para una declaración de renta exitosa es tener toda tu información financiera organizada. Esto incluye:</p>
      
      <ul>
        <li>Certificados de ingresos laborales (certificado de retención en la fuente)</li>
        <li>Extractos bancarios del año fiscal</li>
        <li>Certificados de inversiones y dividendos</li>
        <li>Facturas de gastos deducibles</li>
        <li>Certificados de aportes a pensión y salud</li>
        <li>Información sobre propiedades y otros activos</li>
      </ul>
      
      <p>Mantener estos documentos organizados durante todo el año te ahorrará tiempo y estrés cuando llegue el momento de presentar tu declaración.</p>
      
      <h2>Conoce las deducciones a las que tienes derecho</h2>
      <p>Muchas personas pagan más impuestos de lo necesario porque desconocen las deducciones a las que tienen derecho. Algunas deducciones comunes incluyen:</p>
      
      <ul>
        <li>Intereses de créditos hipotecarios</li>
        <li>Aportes voluntarios a fondos de pensiones</li>
        <li>Gastos educativos</li>
        <li>Pagos por salud prepagada</li>
        <li>Donaciones a entidades sin ánimo de lucro</li>
      </ul>
      
      <p>Consultar con un contador puede ayudarte a identificar todas las deducciones aplicables a tu caso particular.</p>
      
      <h2>No dejes todo para el último momento</h2>
      <p>Uno de los errores más comunes es esperar hasta la fecha límite para comenzar a preparar la declaración. Esto aumenta la probabilidad de cometer errores y puede resultar en sanciones por presentación tardía.</p>
      
      <p>Comienza a preparar tu declaración con al menos un mes de anticipación. Esto te dará tiempo para resolver cualquier discrepancia en la información y consultar con profesionales si es necesario.</p>
      
      <h2>Utiliza las herramientas tecnológicas disponibles</h2>
      <p>La DIAN proporciona herramientas en línea para facilitar el proceso de declaración. Familiarízate con estas plataformas y aprovecha sus funcionalidades para simplificar el proceso.</p>
      
      <p>También existen software y aplicaciones que pueden ayudarte a organizar tus finanzas personales durante todo el año, lo que facilitará la preparación de tu declaración cuando llegue el momento.</p>
      
      <h2>Consulta con un profesional</h2>
      <p>Si tu situación financiera es compleja o tienes dudas sobre aspectos específicos de tu declaración, no dudes en consultar con un contador público o asesor tributario. El costo de este servicio suele ser menor que las posibles sanciones por errores en la declaración.</p>
      
      <p>Siguiendo estos consejos, podrás enfrentar la temporada de declaración de renta con mayor tranquilidad y eficiencia, cumpliendo con tus obligaciones tributarias de manera óptima.</p>
    `,
    author: "Alejandra Bertón",
    authorRole: "Contadora Pública",
    authorBio: "Especialista en tributación personal y empresarial con enfoque en optimización fiscal legal.",
    date: "10 de abril de 2024",
    imageUrl: "/images/blog/declaracion-renta.jpg",
    categories: ["Impuestos", "Personas Naturales"],
    featured: false,
    relatedPosts: [1, 5, 6]
  },
  {
    id: 3,
    title: "Novedades en las NIIF para pequeñas y medianas empresas",
    excerpt: "Descubre las últimas actualizaciones en las Normas Internacionales de Información Financiera y cómo implementarlas en tu PYME.",
    content: `
      <p>Las Normas Internacionales de Información Financiera (NIIF) para pequeñas y medianas empresas han experimentado importantes actualizaciones para el año 2024. Estas modificaciones buscan simplificar la aplicación de estándares contables internacionales en negocios de menor tamaño.</p>
      
      <h2>Principales actualizaciones en las NIIF para PYMES</h2>
      <p>El Consejo de Normas Internacionales de Contabilidad (IASB) ha emitido varias enmiendas a las NIIF para PYMES que entran en vigor este año. Entre los cambios más destacados encontramos:</p>
      
      <ul>
        <li>Simplificación en el reconocimiento y medición de instrumentos financieros</li>
        <li>Clarificación de los requisitos para el reconocimiento de ingresos</li>
        <li>Actualización de las guías sobre arrendamientos</li>
        <li>Mejoras en la presentación de estados financieros</li>
      </ul>
      
      <p>Estos cambios están diseñados para reducir la carga administrativa y facilitar el cumplimiento normativo para las pequeñas y medianas empresas.</p>
      
      <h2>Beneficios de la implementación adecuada</h2>
      <p>La correcta aplicación de las NIIF para PYMES puede traer numerosos beneficios para tu empresa, incluyendo:</p>
      
      <ul>
        <li>Mayor transparencia y comparabilidad en la información financiera</li>
        <li>Mejor acceso a financiamiento nacional e internacional</li>
        <li>Incremento en la confianza de inversionistas y socios comerciales</li>
        <li>Toma de decisiones basada en información financiera de calidad</li>
      </ul>
      
      <p>Las empresas que adoptan adecuadamente estos estándares suelen experimentar mejoras significativas en su gestión financiera y capacidad de crecimiento.</p>
      
      <h2>Recomendaciones para la implementación</h2>
      <p>Para implementar correctamente las actualizaciones de las NIIF para PYMES, recomendamos:</p>
      
      <ol>
        <li>Capacitar al personal contable y financiero</li>
        <li>Revisar y actualizar las políticas contables de la empresa</li>
        <li>Evaluar el impacto de los cambios en los sistemas de información</li>
        <li>Considerar la contratación de asesoría especializada si es necesario</li>
      </ol>
      
      <p>Una implementación planificada y bien ejecutada facilitará la transición y minimizará posibles inconvenientes.</p>
      
      <h2>Conclusión</h2>
      <p>Las actualizaciones de las NIIF para PYMES representan una oportunidad para mejorar la calidad de la información financiera de tu empresa. Aunque el proceso de adaptación puede parecer complejo, los beneficios a largo plazo justifican ampliamente el esfuerzo invertido.</p>
      
      <p>Recuerda que contar con asesoría profesional especializada puede hacer que este proceso sea mucho más fluido y efectivo.</p>
    `,
    author: "Carlos Gómez",
    authorRole: "Consultor Financiero",
    authorBio: "Experto en implementación de NIIF en pequeñas y medianas empresas del sector manufacturero y de servicios.",
    date: "5 de marzo de 2024",
    imageUrl: "/images/blog/niif-pymes.jpg",
    categories: ["NIIF", "PYMES"],
    featured: false,
    relatedPosts: [1, 4, 5]
  },
  {
    id: 4,
    title: "Beneficios tributarios para emprendedores en 2024",
    excerpt: "Conoce todos los beneficios fiscales disponibles para nuevos emprendimientos y cómo puedes aprovecharlos.",
    content: `
      <p>El ecosistema emprendedor en Colombia recibe un impulso importante en 2024 gracias a diversos beneficios tributarios diseñados específicamente para nuevas empresas. Estos incentivos buscan fomentar la creación y consolidación de emprendimientos en el país.</p>
      
      <h2>Beneficios para empresas de economía naranja</h2>
      <p>Las empresas de economía naranja (industrias creativas y culturales) continúan gozando de importantes ventajas fiscales. Entre ellas destacan:</p>
      
      <ul>
        <li>Exención del impuesto de renta por 7 años</li>
        <li>Tarifas reducidas en la retención en la fuente</li>
        <li>Descuentos en aportes a SENA, ICBF y cajas de compensación</li>
      </ul>
      
      <p>Para acceder a estos beneficios, es necesario cumplir requisitos específicos de inversión y generación de empleo.</p>
      
      <h2>Incentivos para startups tecnológicas</h2>
      <p>Las startups de base tecnológica cuentan con incentivos adicionales este año:</p>
      
      <ul>
        <li>Deducciones especiales por inversión en investigación y desarrollo</li>
        <li>Reducción en la tarifa de impuesto de renta</li>
        <li>Beneficios en la importación de equipos tecnológicos</li>
        <li>Acceso a créditos con tasas preferenciales</li>
      </ul>
      
      <p>Estos beneficios buscan potenciar la innovación y el desarrollo tecnológico en el país.</p>
      
      <h2>Ventajas del régimen simple de tributación</h2>
      <p>El Régimen Simple de Tributación sigue siendo una excelente opción para emprendedores, ofreciendo:</p>
      
      <ul>
        <li>Unificación de varios impuestos en un solo pago</li>
        <li>Reducción de cargas administrativas</li>
        <li>Tarifas progresivas según el nivel de ingresos</li>
        <li>Simplificación en el cumplimiento de obligaciones fiscales</li>
      </ul>
      
      <p>Este régimen resulta particularmente beneficioso para pequeños emprendimientos con facturación anual inferior a 80.000 UVT.</p>
      
      <h2>Cómo acceder a estos beneficios</h2>
      <p>Para aprovechar estos incentivos, los emprendedores deben:</p>
      
      <ol>
        <li>Formalizar adecuadamente su empresa</li>
        <li>Clasificar correctamente su actividad económica</li>
        <li>Mantener al día sus obligaciones contables y tributarias</li>
        <li>Presentar oportunamente las solicitudes correspondientes</li>
      </ol>
      
      <p>Una correcta planeación tributaria desde el inicio del emprendimiento maximizará el aprovechamiento de estos beneficios.</p>
      
      <h2>Conclusión</h2>
      <p>Los beneficios tributarios disponibles en 2024 representan una valiosa oportunidad para emprendedores que buscan consolidar sus negocios. Aprovecharlos adecuadamente puede significar un ahorro sustancial y contribuir significativamente al crecimiento de tu empresa.</p>
    `,
    author: "Alejandra Bertón",
    authorRole: "Contadora Pública",
    authorBio: "Especialista en estructuración tributaria para startups y emprendimientos de base tecnológica.",
    date: "20 de febrero de 2024",
    imageUrl: "/images/blog/beneficios-tributarios.jpg",
    categories: ["Impuestos", "Emprendimiento"],
    featured: true,
    relatedPosts: [1, 2, 6]
  },
  {
    id: 5,
    title: "Guía completa sobre el régimen simple de tributación",
    excerpt: "Todo lo que necesitas saber sobre el Régimen Simple: quiénes pueden acogerse, beneficios y obligaciones.",
    content: `
      <p>El Régimen Simple de Tributación (RST) continúa siendo una alternativa atractiva para pequeños y medianos contribuyentes en Colombia durante 2024. Esta guía te ofrece toda la información necesaria para determinar si este régimen es adecuado para tu negocio.</p>
      
      <h2>¿Qué es el Régimen Simple de Tributación?</h2>
      <p>El RST es un modelo tributario opcional y simplificado que integra el impuesto de renta, el impuesto al consumo, el IVA (para algunos contribuyentes) y el impuesto de industria y comercio en una sola declaración y pago.</p>
      
      <p>Este régimen busca reducir las cargas formales y sustanciales para pequeños contribuyentes, simplificando el cumplimiento de sus obligaciones tributarias.</p>
      
      <h2>¿Quiénes pueden acogerse?</h2>
      <p>Pueden optar por el RST las personas naturales y jurídicas que cumplan con las siguientes condiciones:</p>
      
      <ul>
        <li>Ingresos brutos anuales inferiores a 80.000 UVT (aproximadamente $3.040 millones para 2024)</li>
        <li>Personas naturales que desarrollen empresas o personas jurídicas cuyos socios sean personas naturales residentes en Colombia</li>
        <li>No estar expresamente excluidos del régimen por su actividad económica</li>
      </ul>
      
      <p>Es importante verificar las exclusiones específicas antes de optar por este régimen.</p>
      
      <h2>Beneficios principales</h2>
      <p>Entre las ventajas más destacadas del RST encontramos:</p>
      
      <ul>
        <li>Simplificación en el cumplimiento de obligaciones tributarias</li>
        <li>Reducción de la carga administrativa</li>
        <li>Anticipos bimestrales que facilitan el flujo de caja</li>
        <li>Tarifas consolidadas y progresivas según el nivel de ingresos</li>
        <li>No están sujetos a retención en la fuente ni a autorretención</li>
        <li>Reducción en aportes al sistema de seguridad social para algunos contribuyentes</li>
      </ul>
      
      <h2>Tarifas aplicables</h2>
      <p>Las tarifas del impuesto unificado bajo el RST dependen del grupo de actividad económica y del nivel de ingresos brutos anuales:</p>
      
      <ul>
        <li>Actividades comerciales: entre 1.8% y 3.8%</li>
        <li>Servicios profesionales: entre 5.9% y 7.3%</li>
        <li>Actividades industriales: entre 1.6% y 3.8%</li>
        <li>Sector de restaurantes y hoteles: entre 3.4% y 5.4%</li>
      </ul>
      
      <p>Estas tarifas incluyen el componente de ICA, que se distribuye entre los municipios donde se desarrollen las actividades.</p>
      
      <h2>Obligaciones bajo el régimen</h2>
      <p>Los contribuyentes acogidos al RST deben:</p>
      
      <ul>
        <li>Presentar anticipos bimestrales a través del formulario electrónico establecido por la DIAN</li>
        <li>Presentar declaración anual consolidada</li>
        <li>Mantener un sistema de facturación electrónica</li>
        <li>Llevar contabilidad según las normas vigentes</li>
      </ul>
      
      <h2>¿Cómo inscribirse?</h2>
      <p>Para 2024, la inscripción al RST debe realizarse a más tardar el último día hábil del mes de enero. Los nuevos contribuyentes pueden hacerlo al momento de su registro en el RUT.</p>
      
      <p>El proceso se realiza a través de la página web de la DIAN, actualizando el RUT para incluir la responsabilidad correspondiente al Régimen Simple.</p>
      
      <h2>Consideraciones finales</h2>
      <p>Antes de optar por el RST, es recomendable realizar un análisis comparativo con el régimen ordinario para determinar cuál ofrece mayores beneficios según las características específicas de tu negocio.</p>
      
      <p>Contar con asesoría contable y tributaria profesional te ayudará a tomar la mejor decisión y aprovechar al máximo los beneficios disponibles.</p>
    `,
    author: "María Rodríguez",
    authorRole: "Asesora Tributaria",
    authorBio: "Consultora especializada en regímenes tributarios especiales y planeación fiscal para pequeñas empresas.",
    date: "15 de enero de 2024",
    imageUrl: "/images/blog/regimen-simple.jpg",
    categories: ["Impuestos", "Régimen Simple"],
    featured: false,
    relatedPosts: [2, 4, 6]
  },
  {
    id: 6,
    title: "Calendario tributario 2024: Fechas clave para tu empresa",
    excerpt: "Mantente al día con todas las fechas importantes del calendario tributario colombiano para evitar multas y sanciones.",
    content: `
      <p>El cumplimiento oportuno de las obligaciones tributarias es fundamental para evitar sanciones y recargos. El calendario tributario 2024 trae algunas modificaciones importantes que todo empresario y contador debe conocer.</p>
      
      <h2>Declaración de renta personas naturales</h2>
      <p>Para la declaración de renta del año gravable 2023, las fechas de vencimiento están programadas entre agosto y octubre de 2024, según el último dígito del NIT:</p>
      
      <ul>
        <li>Últimos dígitos 00 a 05: Entre el 6 y el 13 de agosto de 2024</li>
        <li>Últimos dígitos 06 a 15: Entre el 14 y el 27 de agosto de 2024</li>
        <li>Últimos dígitos 16 a 25: Entre el 28 de agosto y el 10 de septiembre de 2024</li>
        <li>Últimos dígitos 26 a 35: Entre el 11 y el 24 de septiembre de 2024</li>
        <li>Últimos dígitos 36 a 45: Entre el 25 de septiembre y el 8 de octubre de 2024</li>
        <li>Últimos dígitos 46 a 55: Entre el 9 y el 22 de octubre de 2024</li>
        <li>Últimos dígitos 56 a 99: Entre el 23 de octubre y el 5 de noviembre de 2024</li>
      </ul>
      
      <h2>Declaración de renta personas jurídicas</h2>
      <p>Las empresas deben presentar su declaración de renta según el último dígito del NIT, con vencimientos entre abril y mayo de 2024:</p>
      
      <ul>
        <li>Últimos dígitos 00 a 09: Entre el 9 y el 22 de abril de 2024</li>
        <li>Últimos dígitos 10 a 19: Entre el 23 de abril y el 6 de mayo de 2024</li>
        <li>Últimos dígitos 20 a 29: Entre el 7 y el 20 de mayo de 2024</li>
        <li>Últimos dígitos 30 a 39: Entre el 21 de mayo y el 3 de junio de 2024</li>
        <li>Últimos dígitos 40 a 49: Entre el 4 y el 17 de junio de 2024</li>
        <li>Últimos dígitos 50 a 59: Entre el 18 de junio y el 1 de julio de 2024</li>
        <li>Últimos dígitos 60 a 99: Entre el 2 y el 15 de julio de 2024</li>
      </ul>
      
      <h2>Declaración de IVA</h2>
      <p>Para los responsables bimestrales, las fechas de vencimiento para 2024 son:</p>
      
      <ul>
        <li>Bimestre enero-febrero: Entre el 9 y el 22 de marzo de 2024</li>
        <li>Bimestre marzo-abril: Entre el 7 y el 20 de mayo de 2024</li>
        <li>Bimestre mayo-junio: Entre el 9 y el 22 de julio de 2024</li>
        <li>Bimestre julio-agosto: Entre el 10 y el 23 de septiembre de 2024</li>
        <li>Bimestre septiembre-octubre: Entre el 12 y el 25 de noviembre de 2024</li>
        <li>Bimestre noviembre-diciembre: Entre el 14 y el 27 de enero de 2025</li>
      </ul>
      
      <p>Los responsables cuatrimestrales deben presentar sus declaraciones en mayo, septiembre y enero, según el último dígito del NIT.</p>
      
      <h2>Régimen Simple de Tributación</h2>
      <p>Los contribuyentes del Régimen Simple deben cumplir con:</p>
      
      <ul>
        <li>Anticipo bimestral: Según fechas establecidas para cada bimestre</li>
        <li>Declaración anual: Entre febrero y abril de 2025 para el año gravable 2024</li>
        <li>Plazo para optar por el régimen: Hasta el 31 de enero de 2024</li>
      </ul>
      
      <h2>Información exógena</h2>
      <p>La presentación de información exógena (medios magnéticos) para el año gravable 2023 tiene los siguientes vencimientos:</p>
      
      <ul>
        <li>Grandes contribuyentes: Entre el 23 de abril y el 6 de mayo de 2024</li>
        <li>Personas jurídicas: Entre el 7 de mayo y el 10 de junio de 2024</li>
        <li>Personas naturales: Entre el 11 de junio y el 15 de julio de 2024</li>
      </ul>
      
      <h2>Recomendaciones para cumplir a tiempo</h2>
      <p>Para evitar sanciones y recargos, te sugerimos:</p>
      
      <ol>
        <li>Programar con anticipación las fechas límite en un calendario</li>
        <li>Preparar la documentación necesaria con tiempo</li>
        <li>Verificar saldos a favor y compensaciones disponibles</li>
        <li>Actualizar el RUT si es necesario</li>
        <li>Consultar periódicamente la página de la DIAN para posibles modificaciones</li>
      </ol>
      
      <p>Recuerda que las sanciones por extemporaneidad pueden ser significativas y afectar seriamente las finanzas de tu empresa.</p>
      
      <h2>Conclusión</h2>
      <p>El cumplimiento oportuno de las obligaciones tributarias no solo te evitará sanciones, sino que también contribuirá a una mejor planeación financiera de tu empresa. Mantén este calendario a mano y prepárate con tiempo para cada obligación.</p>
    `,
    author: "Alejandra Bertón",
    authorRole: "Contadora Pública",
    authorBio: "Experta en cumplimiento tributario y prevención de sanciones por extemporaneidad o inexactitud.",
    date: "5 de enero de 2024",
    imageUrl: "/images/blog/calendario-tributario.jpg",
    categories: ["Impuestos", "Calendario Tributario"],
    featured: false,
    relatedPosts: [1, 2, 5]
  }
];

// Componente para artículos relacionados
function RelatedPostCard({ post }: { post: typeof blogPosts[0] }) {
  const theme = useTheme();
  
  return (
    <Paper 
      elevation={1} 
      component={motion.div}
      whileHover={{ 
        y: -5,
        boxShadow: theme.palette.mode === 'dark' 
          ? '0 8px 20px -8px rgba(0, 0, 0, 0.4)' 
          : '0 8px 20px -10px rgba(0, 0, 0, 0.25)' 
      }}
      sx={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        borderRadius: '8px',
      }}
    >
      <Box 
        component="div"
        sx={{ 
          position: 'relative', 
          paddingTop: '56.25%', 
          width: '100%',
          backgroundImage: `url(${post.imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 100%)',
          }
        }}
      >
        <Typography 
          variant="subtitle1" 
          color="white" 
          sx={{ 
            position: 'absolute', 
            bottom: 0, 
            left: 0, 
            p: 1.5,
            textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
            fontWeight: 'medium',
            zIndex: 1
          }}
        >
          {post.categories[0]}
        </Typography>
      </Box>
      
      <Box sx={{ p: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography 
          variant="subtitle1" 
          component="h3" 
          sx={{ 
            mb: 1, 
            fontWeight: 600,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {post.title}
        </Typography>
        
        <Typography 
          variant="body2" 
          color="text.secondary" 
          sx={{ 
            mb: 'auto',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {post.excerpt}
        </Typography>
        
        <Button 
          component={Link}
          href={`/blog/${post.id}`}
          variant="text" 
          color="primary"
          sx={{ mt: 1, alignSelf: 'flex-start' }}
        >
          Leer artículo
        </Button>
      </Box>
    </Paper>
  );
}

export default function BlogPost() {
  const theme = useTheme();
  const params = useParams();
  const postId = Number(params.id);
  
  // Buscar el artículo según el ID
  const post = blogPosts.find(post => post.id === postId);
  
  // Si no se encuentra el artículo, mostrar mensaje
  if (!post) {
    return (
      <Container maxWidth="md" sx={{ 
        mt: { xs: 4, sm: 8 }, 
        mb: { xs: 8, sm: 12 },
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <Typography variant="h4" gutterBottom>
          Artículo no encontrado
        </Typography>
        <Typography variant="body1" paragraph>
          El artículo que buscas no existe o ha sido eliminado.
        </Typography>
        <Button 
          component={Link}
          href="/blog"
          variant="contained" 
          color="primary"
          startIcon={<ArrowBackIcon />}
        >
          Volver al blog
        </Button>
      </Container>
    );
  }
  
  // Obtener artículos relacionados
  const relatedPosts = post.relatedPosts
    ? post.relatedPosts.map(id => blogPosts.find(p => p.id === id)).filter(Boolean)
    : [];
  
  return (
    <Container maxWidth="lg" sx={{ 
      mt: { xs: 4, sm: 8 }, 
      mb: { xs: 8, sm: 12 }
    }}>
      {/* Botón de regreso al blog */}
      <Box sx={{ mb: 4 }}>
        <Button 
          component={Link}
          href="/blog"
          variant="text" 
          color="primary"
          startIcon={<ArrowBackIcon />}
        >
          Volver al blog
        </Button>
      </Box>
      
      <Grid container spacing={4}>
        {/* Contenido principal del artículo */}
        <Grid item xs={12} md={8}>
          <Paper
            elevation={2}
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: '12px',
              overflow: 'hidden',
            }}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Cabecera del artículo */}
            <Box sx={{ mb: 4 }}>
              {/* Categorías */}
              <Box sx={{ mb: 2 }}>
                {post.categories.map(category => (
                  <Chip 
                    key={category} 
                    label={category} 
                    size="small" 
                    color="secondary" 
                    sx={{ mr: 1, mb: 1 }} 
                  />
                ))}
              </Box>
              
              {/* Título */}
              <Typography 
                variant="h3" 
                component="h1" 
                sx={{ 
                  mb: 2,
                  fontWeight: 700,
                  fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.5rem' }
                }}
              >
                {post.title}
              </Typography>
              
              {/* Extracto */}
              <Typography 
                variant="h6" 
                component="p" 
                color="text.secondary"
                sx={{ mb: 3 }}
              >
                {post.excerpt}
              </Typography>
              
              {/* Metadata: autor y fecha */}
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center',
                flexWrap: 'wrap',
                mb: 3
              }}>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  mr: 3,
                  mb: { xs: 1, sm: 0 } 
                }}>
                  <PersonIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                  <Typography variant="body2" color="text.secondary">
                    {post.author}
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <CalendarTodayIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                  <Typography variant="body2" color="text.secondary">
                    {post.date}
                  </Typography>
                </Box>
              </Box>
              
              {/* Imagen destacada */}
              <Box 
                component="div"
                sx={{ 
                  position: 'relative',
                  width: '100%',
                  height: '350px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  backgroundImage: `url(${post.imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  mb: 4
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: 3
                  }}
                >
                  <Typography 
                    variant="h4" 
                    color="white" 
                    align="left" 
                    sx={{ 
                      textShadow: '1px 1px 3px rgba(0,0,0,0.7)',
                      fontWeight: 'bold' 
                    }}
                  >
                    {post.title}
                  </Typography>
                </Box>
              </Box>
            </Box>
            
            {/* Contenido del artículo */}
            <Box 
              className="blog-content"
              sx={{ 
                '& p': { mb: 2, lineHeight: 1.7 },
                '& h2': { mt: 4, mb: 2, fontWeight: 600 },
                '& ul, & ol': { mb: 2, pl: 4 },
                '& li': { mb: 1 },
              }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Sección del autor */}
            <Box sx={{ mt: 6, mb: 4 }}>
              <Divider sx={{ mb: 4 }} />
              
              <Box sx={{ 
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: { xs: 'flex-start', sm: 'center' },
                gap: 2
              }}>
                <Avatar 
                  sx={{ 
                    width: 80, 
                    height: 80,
                    bgcolor: theme.palette.primary.main
                  }}
                >
                  {post.author.split(' ').map(name => name[0]).join('')}
                </Avatar>
                
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {post.author}
                  </Typography>
                  
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {post.authorRole}
                  </Typography>
                  
                  <Typography variant="body2">
                    {post.authorBio}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Grid>
        
        {/* Barra lateral */}
        <Grid item xs={12} md={4}>
          {/* Sección de artículos relacionados */}
          {relatedPosts.length > 0 && (
            <Box sx={{ mb: 4 }}>
              <Typography 
                variant="h5" 
                component="h2" 
                sx={{ mb: 3, fontWeight: 600 }}
              >
                Artículos relacionados
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {relatedPosts.map((relatedPost, index) => (
                  relatedPost && (
                    <Box 
                      key={relatedPost.id}
                      component={motion.div}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <RelatedPostCard post={relatedPost} />
                    </Box>
                  )
                ))}
              </Box>
            </Box>
          )}
          
          {/* Menú de categorías */}
          <Paper 
            elevation={1} 
            sx={{ p: 3, borderRadius: '8px', mb: 4 }}
          >
            <Typography 
              variant="h5" 
              component="h2" 
              sx={{ mb: 2, fontWeight: 600 }}
            >
              Categorías
            </Typography>
            
            <Box sx={{ 
              display: 'flex',
              flexDirection: 'column',
              gap: 1
            }}>
              {Array.from(new Set(blogPosts.flatMap(p => p.categories))).map(category => (
                <Button 
                  key={category} 
                  variant="text" 
                  component={Link}
                  href={`/blog?category=${category}`}
                  sx={{ 
                    justifyContent: 'flex-start',
                    textTransform: 'none',
                    fontWeight: 'normal'
                  }}
                >
                  {category}
                </Button>
              ))}
            </Box>
          </Paper>
          
          {/* Call to Action */}
          <Paper 
            elevation={2} 
            sx={{ 
              p: 3, 
              borderRadius: '8px',
              bgcolor: theme.palette.mode === 'dark' 
                ? 'primary.dark' 
                : 'primary.light',
            }}
          >
            <Typography 
              variant="h5" 
              component="h2" 
              sx={{ 
                mb: 2, 
                fontWeight: 600,
                color: theme.palette.mode === 'dark' 
                  ? 'white' 
                  : 'primary.contrastText'
              }}
            >
              ¿Necesitas asesoría contable?
            </Typography>
            
            <Typography 
              variant="body1"
              sx={{ 
                mb: 3,
                color: theme.palette.mode === 'dark' 
                  ? 'rgba(255, 255, 255, 0.8)' 
                  : 'primary.contrastText'
              }}
            >
              Contáctanos para recibir asesoría profesional en temas contables, tributarios y financieros.
            </Typography>
            
            <Button 
              variant="contained"
              component={Link}
              href="/contact"
              sx={{ 
                bgcolor: theme.palette.mode === 'dark' 
                  ? 'white' 
                  : 'primary.main',
                color: theme.palette.mode === 'dark' 
                  ? 'primary.main' 
                  : 'white',
                '&:hover': {
                  bgcolor: theme.palette.mode === 'dark' 
                    ? 'rgba(255, 255, 255, 0.9)' 
                    : 'primary.dark',
                }
              }}
              fullWidth
            >
              Contactar ahora
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
} 