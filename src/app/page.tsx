"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-black">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start max-w-4xl w-full">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start w-full">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg mb-4 md:mb-0">
            AB
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

            <button
              className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg 
                        font-medium transition-all hover:bg-gray-800 dark:hover:bg-gray-200 
                        hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500
                        flex items-center gap-2"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() =>
                (window.location.href =
                  "mailto:alejandraberton@gmail.com?subject=Consulta profesional")
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
                className={`transition-transform duration-300 ${
                  isHovered ? "translate-x-1" : ""
                }`}
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Contactar
            </button>
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
