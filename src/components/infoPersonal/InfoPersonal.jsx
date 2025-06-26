import React from "react";
import { CreativeHero } from "./CreativeHero";

export const InfoPersonal = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
      {/* INFO PERSONAL */}
      <section className="flex-1 max-w-3xl">
        <div className="mb-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
            Juan Jose Vanegas
          </h1>
          <h2 className="text-xl lg:text-2xl text-blue-600 font-medium">
            Full Stack Developer Junior
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-gray-700">
            Soy{" "}
            <span className="font-semibold text-gray-900">Juan Vanegas</span>,
            un desarrollador Full Stack Junior apasionado por crear soluciones
            web innovadoras. Me especializo en el stack{" "}
            <span className="font-medium text-blue-600">MERN</span> (MongoDB,
            Express.js, React y Node.js), construyendo aplicaciones web
            completas desde el frontend hasta el backend.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Mi stack tecnológico incluye herramientas modernas como GitHub para
            control de versiones, Postman para testing de APIs, y tengo
            experiencia integrando inteligencia artificial en proyectos web.
            Además, utilizo plataformas como V0 para prototipado rápido y
            desarrollo eficiente.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Como profesional, me caracterizo por mi{" "}
            <span className="font-medium text-blue-600">
              trabajo en equipo colaborativo
            </span>
            ,{" "}
            <span className="font-medium text-blue-600">
              alta adaptabilidad
            </span>{" "}
            a nuevas tecnologías,{" "}
            <span className="font-medium text-blue-600">
              capacidad de liderazgo
            </span>{" "}
            en proyectos, y{" "}
            <span className="font-medium text-blue-600">
              comunicación efectiva
            </span>{" "}
            tanto con equipos técnicos como stakeholders no técnicos.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300">
              Ver Proyectos
            </button>
            <button className="border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-6 py-3 rounded-lg font-medium transition-all duration-300">
              Descargar CV
            </button>
          </div>
        </div>
      </section>

      {/* CREATIVE HERO - Removido el contenedor extra */}
      <div className="flex-shrink-0 w-full lg:w-auto lg:max-w-md xl:max-w-lg">
        <CreativeHero />
      </div>
    </div>
  );
};
