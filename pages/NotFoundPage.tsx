import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20">
      <img 
        src="https://picsum.photos/seed/404error/400/300" 
        alt="Lost satellite" 
        className="w-64 h-auto mb-8 rounded-lg shadow-lg"
      />
      <h1 className="text-6xl font-heading font-bold text-primary dark:text-primary-text-dark mb-4">404</h1>
      <h2 className="text-3xl font-heading font-semibold text-gray-700 dark:text-dark-text-primary mb-6">Page Not Found</h2>
      <p className="text-lg text-gray-600 dark:text-dark-text-secondary mb-8 max-w-md">
        Oops! It seems like the page you're looking for has wandered off into the digital wilderness. Don't worry, we can help you find your way back.
      </p>
      <Button to="/" variant="accent" size="lg">
        Go Back to Home
      </Button>
    </div>
  );
};

export default NotFoundPage;