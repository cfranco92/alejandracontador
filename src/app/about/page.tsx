"use client";

import Image from "next/image";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden">
        <div className="relative h-64 sm:h-80">
          <Image
            src="/images/contador-header.jpg"
            alt="Servicios contables profesionales"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-6">
              <h1 className="text-3xl font-bold text-white mb-2">Acerca de Mí</h1>
              <p className="text-white/90 text-lg">Servicios profesionales de contaduría pública</p>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="md:w-1/3">
              <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/alejandrafoto.jpeg"
                  alt="Alejandra Bertón"
                  fill
                  className="object-cover object-center object-top"
                  style={{ objectPosition: '50% 30%' }}
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Alejandra Bertón</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-3">Formación Académica</h3>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Contadora Pública - Universidad Nacional de Colombia</li>
                  <li>Especialización en Derecho Tributario - Universidad de los Andes</li>
                  <li>Diplomado en NIIF - Pontificia Universidad Javeriana</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Experiencia Profesional</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Asesora Contable Independiente</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">2018 - Presente</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Contadora Senior - Empresa ABC</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">2015 - 2018</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Asistente Contable - Firma XYZ</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">2012 - 2015</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Habilidades Profesionales</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Contabilidad General</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Preparación y análisis de estados financieros, cierres contables, conciliaciones bancarias.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Asesoría Tributaria</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Declaraciones de renta de personas naturales y jurídicas, IVA, retención en la fuente, ICA.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Nómina y Seguridad Social</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Liquidación de nómina, prestaciones sociales, aportes a seguridad social y parafiscales.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Software Contable</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Manejo avanzado de World Office, Siigo, Helisa, SAP y Excel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
