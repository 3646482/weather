import React from 'react';
import { AlertOctagon } from 'lucide-react';

const ErrorDisplay = ({ message }) => {
  return (
    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 flex items-center justify-center mx-auto max-w-md">
      <div className="flex flex-col items-center text-center">
        <AlertOctagon size={40} className="text-red-500 dark:text-red-400 mb-4" />
        <h3 className="text-lg font-medium text-red-800 dark:text-red-300 mb-2">
          Something went wrong
        </h3>
        <p className="text-red-600 dark:text-red-400">{message}</p>
      </div>
    </div>
  );
};

export default ErrorDisplay;