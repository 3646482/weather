import React from 'react';
import { BarChart, Shield, Zap, Globe } from 'lucide-react';

const features = [
  {
    icon: <Zap size={24} className="text-blue-600 dark:text-blue-400" />,
    title: 'Lightning Fast',
    description: 'Our optimized platform delivers unmatched speed and performance, ensuring your applications run smoothly without delays.'
  },
  {
    icon: <Shield size={24} className="text-blue-600 dark:text-blue-400" />,
    title: 'Secure by Design',
    description: 'Enterprise-grade security built in from the ground up, protecting your data with cutting-edge encryption and protocols.'
  },
  {
    icon: <BarChart size={24} className="text-blue-600 dark:text-blue-400" />,
    title: 'Data Analytics',
    description: 'Powerful analytics tools to help you understand trends, extract insights, and make data-driven decisions.'
  },
  {
    icon: <Globe size={24} className="text-blue-600 dark:text-blue-400" />,
    title: 'Global Scale',
    description: 'Built for worldwide deployment with a resilient infrastructure that scales automatically as your needs grow.'
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white dark:bg-gray-800 transition-colors duration-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover the tools and capabilities designed to help your business thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-5 inline-flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;