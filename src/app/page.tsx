"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-black">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start max-w-4xl w-full">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start w-full">
          <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg mb-4 md:mb-0">
            <Image
              src="/alejandrafoto.jpeg"
              alt="Alejandra Bertón"
              width={96}
              height={96}
              className="w-full h-full object-cover"
              style={{ objectPosition: '50% 30%' }}
              priority
            />
          </div>

          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white">
              Alejandra Bertón
            </h1>
            <h2 className="text-2xl text-gray-600 dark:text-gray-300 mb-6">
              Contadora Pública
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-lg mb-8">
              Servicios contables y tributarios
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                className="px-6 py-3 bg-[#25D366] text-white rounded-lg 
                          font-medium transition-all hover:bg-opacity-90
                          hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500
                          flex items-center justify-center gap-2 w-full sm:w-auto"
                onClick={() => window.open("https://wa.me/573053004399?text=Hola%20Alejandra%20me%20gustar%C3%ADa%20una%20asesor%C3%ADa%20contigo%20sobre...", "_blank")}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M11.894 21.408c-1.582 0-3.133-.382-4.535-1.107l-.53-.328-3.263 1.045 1.035-3.223-.385-.588c-.833-1.459-1.272-3.118-1.272-4.821 0-5.438 4.579-9.862 10.204-9.862 2.722 0 5.292 1.027 7.226 2.896 1.932 1.868 3 4.372 2.998 7.023-.002 5.437-4.584 9.865-10.202 9.865zm.01-18.297c-4.784 0-8.679 3.764-8.68 8.392 0 1.563.415 3.092 1.204 4.425l.186.335-.756 2.324 2.437-.773.329.19c1.248.725 2.677 1.107 4.137 1.108h.004c4.778 0 8.672-3.766 8.675-8.394 0-2.239-.901-4.35-2.538-5.938-1.638-1.589-3.81-2.464-6.118-2.467l-.01-.002z"/>
                </svg>
                WhatsApp
              </button>

              <button
                className="px-6 py-3 bg-[#0A66C2] text-white rounded-lg 
                          font-medium transition-all hover:bg-opacity-90
                          hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500
                          flex items-center justify-center gap-2 w-full sm:w-auto"
                onClick={() => window.open("https://www.linkedin.com/in/alejandra-berton/", "_blank")}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </button>

              <button
                className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg 
                          font-medium transition-all hover:bg-gray-800 dark:hover:bg-gray-200 
                          hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500
                          flex items-center justify-center gap-2 w-full sm:w-auto"
                onClick={() =>
                  (window.location.href =
                    "mailto:alejandraberton@gmail.com?subject=Consulta profesional&body=Hola Alejandra,%0A%0AMe gustaría una asesoría contable sobre...")
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Email
              </button>
            </div>
          </div>
        </div>

        <div
          className="mt-12 p-8 border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm 
                      bg-white dark:bg-gray-900 w-full backdrop-blur-sm bg-opacity-70 dark:bg-opacity-70
                      transition-all duration-300 hover:shadow-md"
        >
          <p className="text-center text-lg mb-6 text-gray-700 dark:text-gray-300">
            Página en desarrollo
          </p>
          <div className="flex justify-center items-center flex-col">
            <p className="text-center text-md text-gray-500 dark:text-gray-400 mb-6">
              Desarrollado con
            </p>
            <Image
              className="opacity-90 dark:invert transition-all hover:opacity-100"
              src="/next.svg"
              alt="Next.js logo"
              width={120}
              height={30}
              priority
            />
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        {/* <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a> */}
      </footer>
    </div>
  );
}
