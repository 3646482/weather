import React from 'react';
import { useApiData } from '../hooks/useApiData';
import ProductCard from './ProductCard';
import LoadingIndicator from './LoadingIndicator';
import ErrorDisplay from './ErrorDisplay';

const ProductsSection = () => {
  const { data, loading, error } = useApiData('https://jsonplaceholder.typicode.com/posts?_limit=8');

  return (
    <section id="products" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our latest innovations designed to transform your digital experience.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center my-20">
            <LoadingIndicator />
          </div>
        ) : error ? (
          <ErrorDisplay message="Unable to load products. Please try again later." />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;