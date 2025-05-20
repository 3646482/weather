import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import ProductsSection from '../components/ProductsSection';
import ContactSection from '../components/ContactSection';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;