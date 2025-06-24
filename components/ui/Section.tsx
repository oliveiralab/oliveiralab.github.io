
import React from 'react';

interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  containerClassName?: string;
}

const Section: React.FC<SectionProps> = ({ title, subtitle, children, className = '', titleClassName = '', containerClassName = 'max-w-7xl mx-auto' }) => {
  return (
    <section className={`py-10 md:py-12 ${className}`}>
      <div className={containerClassName}>
        <h2 className={`text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-dark-text-primary mb-4 text-center ${titleClassName}`}>
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-gray-600 dark:text-dark-text-secondary mb-8 md:mb-12 text-center max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
