import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProductCard = ({ product }) => {
  const imageId = 1000 + product.id;
  const imageUrl = `https://images.pexels.com/photos/${imageId}/pexels-photo-${imageId}.jpeg?auto=compress&cs=tinysrgb&w=800`;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={imageUrl} 
          alt={product.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.target.src = "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800";
          }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">
          {product.title.charAt(0).toUpperCase() + product.title.slice(1)}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {product.body}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
            Product #{product.id}
          </span>
          <a 
            href="#" 
            className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 inline-flex items-center transition-colors duration-200"
          >
            Learn more
            <ExternalLink size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;