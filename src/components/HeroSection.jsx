import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
      <div className="hidden lg:block absolute top-0 right-0 -mr-40 -mt-32">
        <div className="w-96 h-96 rounded-full bg-blue-100 dark:bg-blue-900/20 opacity-70 blur-3xl"></div>
      </div>
      <div className="absolute left-0 bottom-0 -ml-64 -mb-64">
        <div className="w-96 h-96 rounded-full bg-teal-100 dark:bg-teal-900/20 opacity-70 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Innovate, Create, <span className="text-blue-600 dark:text-blue-400">Connect</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
              Building tomorrow's solutions with cutting-edge technology and thoughtful design to transform how we live and work.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#features" 
                className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center justify-center"
              >
                Get Started
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-600 to-teal-500 opacity-30 blur-xl"></div>
              <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-2 shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Team collaborating" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;