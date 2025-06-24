import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
  id?: string; // Added optional id prop
}

const Card: React.FC<CardProps> = ({ children, className = '', onClick, hoverEffect = false, id }) => {
  const hoverStyles = hoverEffect ? 'hover:shadow-xl hover:scale-[1.02] transform transition-all duration-300 dark:hover:shadow-2xl' : '';
  return (
    <div
      id={id} // Apply id to the div
      className={`bg-white dark:bg-dark-surface rounded-lg shadow-lg dark:shadow-lg ${hoverStyles} ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); } : undefined}
    >
      {children}
    </div>
  );
};

export default Card;