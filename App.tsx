import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import AiAssistant from './components/AiAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
      </main>
      
      <footer className="bg-dark py-8 text-center border-t border-gray-800 text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} André Alm. Alla rättigheter förbehållna.</p>
        <p className="mt-2">Byggd med React, Tailwind CSS & Gemini API</p>
      </footer>

      <AiAssistant />
    </div>
  );
};

export default App;