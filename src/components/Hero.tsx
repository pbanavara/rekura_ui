'use client';

import { useState } from 'react';
import DemoModal from './DemoModal';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/95"></div>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          poster="/robot-preview.jpg"
        >
          <source src="/robot-demo.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 text-sm font-semibold text-blue-400 bg-blue-900/50 rounded-full mb-6">
            The Future of Kitchen Automation
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
          Meet Rekura
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl font-light text-gray-300 mb-8 max-w-4xl mx-auto">
          {`Rekura is an AI-powered dishwashing robot built for commercial kitchens and homes. It sees, plans, and scrubs so you don’t have to.`}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={openModal}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105"
          >
           Join the waitlist 
          </button>
        </div>
        
        {/* Demo Modal */}
        <DemoModal isOpen={isModalOpen} onClose={closeModal} />

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-3 max-w-4xl mx-auto">
          <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm">
            <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
            <div className="text-sm text-gray-300">Availability</div>
          </div>
          <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm">
            <div className="text-3xl font-bold text-pink-400 mb-2">50%</div>
            <div className="text-sm text-gray-300">Targeted reduction in water Usage</div>
          </div>
          <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm">
            <div className="text-3xl font-bold text-green-400 mb-2">100+</div>
            <div className="text-sm text-gray-300">Trained dish types</div>
          </div>
        </div>
      </div>

      {/* Scrolling Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-4 border-blue-400 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-blue-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
