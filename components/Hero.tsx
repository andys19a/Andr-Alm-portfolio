import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-dark z-0">
         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse"></div>
         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold tracking-wide">
          Tillgänglig för anställning 2025
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
          Bygger den <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Digitala Framtiden
          </span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 mb-10">
          Hej, jag är André. En Fullstack-utvecklare som specialiserar sig på React, Node.js och att skapa exceptionella digitala upplevelser.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#projects"
            className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary hover:bg-blue-600 rounded-full transition-all duration-200 shadow-lg shadow-primary/25"
          >
            Se Projekt
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-gray-300 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-200 backdrop-blur-sm"
          >
            Ladda ner CV
            <Download className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;